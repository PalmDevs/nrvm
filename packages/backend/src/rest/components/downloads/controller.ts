import fetch from 'node-fetch'
import { load } from 'cheerio'
import { App } from './constants'
import CustomErrorConstructor from '../../../util/CustomError'
import semverLessThan from 'semver/functions/lt'

export default class DownloadsController {
    static readonly baseAppPackageUrl = 'https://www.apkmirror.com/apk'
    static readonly baseDomain = 'https://www.apkmirror.com'

    async scrapeVersionsFor(app: App) {
        const isApp = (a: keyof typeof App) => DownloadsController.isApp(a, app)

        const url = `${DownloadsController.baseDomain}/uploads/?appcategory=${
            isApp('YouTube') ? 'youtube' :
            isApp('YouTubeMusic') ? 'youtube-music' :
            isApp('Twitter') ? 'twitter' :
            isApp('Reddit') ? 'reddit' :
            isApp('WarnWetter') ? 'warnwetter' :
            isApp('TikTok') ? 'tik-tok' : (() => { throw new DownloadsControllerError('INVALID_APP', app) })()
        }`

        const req = await fetch(url, {
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
            }
        })

        if (!req.ok) throw new DownloadsControllerError('SCRAPE_REQUEST_NOT_OK')

        const list = load(await req.text())(`#primary h5.appRowTitle.wrapText.marginZero.block-on-mobile`).get()
        const versions: ScraperAppVersion[] = []

        for (const item of list) {
            const rawTitle = item.attribs['title']!.toLowerCase()
            const title = rawTitle.split(' ')[1]!

            if (rawTitle.includes('wear os')) continue

            const match = title.match(/^(\d+(?:\.\d+)?(?:\.\d+)?)(?:\-\w+)?$/)
            if (!match) continue

            const version = match[0]!
                .replace(/\.0(\d+)/g, '.$1')
                .replace(/^(\d+\.\d+)$/, '$1.0')
                .replace(/^(\d+)$/, '$1.0.0')

            versions.push({
                alpha: rawTitle.includes('alpha'),
                beta: rawTitle.includes('beta'),
                version: version
            })
        }

        return versions.sort((a, b) => semverLessThan(a.version, b.version) ? 1 : -1)
    }

    async scrapeDownloadUrlFor(app: App, version: string, arch?: string) {
        const urlVersion = version.replaceAll('.', '-')
        const isApp = (a: keyof typeof App) => DownloadsController.isApp(a, app)

        // Thanks reisxd/revanced-builder

        const url = `${DownloadsController.baseAppPackageUrl}/${DownloadsController.appendVersioning(
            isApp('YouTube') ? 'google-inc/youtube/youtube' :
            isApp('YouTubeMusic') ? 'google-inc/youtube-music/youtube-music' :
            isApp('Twitter') ? 'twitter-inc/twitter/twitter' :
            isApp('Reddit') ? 'redditinc/reddit/reddit' :
            isApp('WarnWetter') ? 'deutscher-wetterdienst/warnwetter/warnwetter' :
            isApp('TikTok') ? 'tiktok-pte-ltd/tik-tok/tik-tok' : (() => { throw new DownloadsControllerError('INVALID_APP', app) })()
        , urlVersion)}`

        const req = await fetch(url)
        if (!req.ok) throw new DownloadsControllerError('SCRAPE_REQUEST_NOT_OK')
        
        const body = await req.text()
        const $ = load(body)
        const href = (arch && isApp('YouTubeMusic')) ?
            $(`div:contains("${arch}")`)
                .parent()
                .children('div[class^="table-cell rowheight"]')
                .first()
                .children('a[class="accent_color"]')
                .first()
                .attr('href')
        :
            $('span[class="apkm-badge"]')
                .first()
                .parent()
                .children('a[class="accent_color"]')
                .first()
                .attr('href')

        const firstDownloadPage = await (await fetch(`${DownloadsController.baseDomain}${href}`)).text()
        const finalPageLink = load(firstDownloadPage)('a[class^="accent_bg btn btn-flat downloadButton"]').first().attr('href')
        const downloadPage = await (await fetch(`${DownloadsController.baseDomain}${finalPageLink}`)).text()
        const downloadUrl = `${DownloadsController.baseDomain}${load(downloadPage)('a[rel="nofollow"]').first().attr('href')}`

        if (!downloadUrl) throw new DownloadsControllerError('SCRAPED_URL_NOT_AVAILABLE')

        return downloadUrl
    }

    static isApp(app: keyof typeof App, value: App) {
        return App[app] === value
    }

    static appendVersioning(url: string, version: string) {
        return `${url}-${version}-release`
    }
}

export const DownloadsControllerErrorMessages = {
    'INVALID_APP': (name: App) => `'${name}' is not a valid App enum entry`,
    'SCRAPE_REQUEST_NOT_OK': 'Cannot scrape downloads because server did not respond with 2xx status code',
    'SCRAPED_URL_NOT_AVAILABLE': 'Cannot scrape downloads because the download does not exist'
} as const

export const DownloadsControllerError = new CustomErrorConstructor(Error, DownloadsControllerErrorMessages).error

export interface ScraperAppVersion {
    beta: boolean
    alpha: boolean
    version: string
}