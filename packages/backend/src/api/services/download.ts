import Downloader from 'nodejs-file-downloader'
import { EventEmitter } from 'events'
import type http from 'http'
import TypedEventEmitter from '../../util/types/TypedEventEmitter'

// Thanks nodejs-file-downloader developer for the worst way of checking type of config properties
// Now I have to default everything with `??

export default class DownloaderService {
    private _downloader: Downloader
    events: TypedEventEmitter<DownloaderServiceEvents>
    finished: boolean

    constructor({ url, saveOptions: { directory, fileName, overwriteOld }, connectionOptions: { agent, headers, proxy, timeout, retries } = {} }: DownloaderServiceOptions) {
        this.finished = false
        this.events = new EventEmitter()
        this._downloader = new Downloader({
            url,
            directory,
            fileName: fileName ?? '',
            cloneFiles: !overwriteOld,
            httpsAgent: agent ?? '',
            headers: headers ?? {}, 
            proxy: proxy ?? '',
            timeout: timeout ?? 10000,
            maxAttempts: retries ?? 3,

            onResponse: (r) => {
                this.events.emit('start', r)
            },
            onError: (e) => {
                this.events.emit('error', e)
            },
            onProgress: (percentage, _, remainingSize) => {
                const currentPercentage = parseFloat(percentage)
                const actualSize = remainingSize / currentPercentage
                const currentSize = actualSize - remainingSize

                this.events.emit('progress', { percentage: currentPercentage, remainingSize, currentSize, actualSize })
            },
            onBeforeSave: (fileName) => {
                this.events.emit('done', fileName)
            }
        })
    }

    start() {
        return this._downloader.download().then((report): Awaited<DownloadServiceStartPromise> => {
            this.finished = report.downloadStatus === 'COMPLETE' ? true : false
            return { report, instance: this }
        })
    }

    stop() {
        this._downloader.cancel()

        return this
    }
}

export interface DownloaderServiceOptions {
    url: string
    saveOptions: DownloaderServiceSaveOptions
    connectionOptions?: DownloaderServiceConnectionOptions
}

export interface DownloaderServiceSaveOptions {
    directory: string
    fileName?: string
    overwriteOld?: boolean
}

export interface DownloaderServiceConnectionOptions {
    timeout?: number
    retries?: number
    proxy?: string
    agent?: string
    headers?: object
}

export type DownloaderServiceProgress = {
    [K in 'percentage' | `${'current' | 'actual' | 'remaining'}Size`]: number
}

export interface DownloaderServiceEvents {
    ready: [response: http.IncomingMessage]
    error: [error: Error]
    progress: [progress: DownloaderServiceProgress]
    done: [fileName: string]
}

export type DownloadServiceStartPromise = Promise<{
    instance: DownloaderService
    report: Awaited<ReturnType<Downloader['download']>>
}>