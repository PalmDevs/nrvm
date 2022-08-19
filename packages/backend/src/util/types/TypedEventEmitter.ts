import Awaitable from './Awaitable'

export default interface TypedEventEmitter<Events extends Record<keyof Events, any[]>> {
    on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => Awaitable<void>): this
    on<S extends string | symbol>(
        event: Exclude<S, keyof Events>,
        listener: (...args: any[]) => Awaitable<void>,
    ): this

    once<K extends keyof Events>(event: K, listener: (...args: Events[K]) => Awaitable<void>): this
    once<S extends string | symbol>(
        event: Exclude<S, keyof Events>,
        listener: (...args: any[]) => Awaitable<void>,
    ): this

    emit<K extends keyof Events>(event: K, ...args: Events[K]): boolean
    emit<S extends string | symbol>(event: Exclude<S, keyof Events>, ...args: unknown[]): boolean

    off<K extends keyof Events>(event: K, listener: (...args: Events[K]) => Awaitable<void>): this
    off<S extends string | symbol>(
        event: Exclude<S, keyof Events>,
        listener: (...args: any[]) => Awaitable<void>,
    ): this

    removeAllListeners<K extends keyof Events>(event?: K): this
    removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof Events>): this
}