export default class CustomErrorConstructor<T extends typeof Error, M extends { [K in string]: ErrorMessageResolvable }> {
    messages: { [K in keyof M]: M[K] }
    error: Omit<T, 'constructor'> & {
        new <C extends Extract<keyof M, string>>(code: C, ...args: M[C] extends (...args: any[]) => string ? Parameters<M[C]> : never): Error
    }

    constructor(error: T, messages: { [K in keyof M]: M[K] }) {
        this.messages = messages

        // Mixins aren't very well supported yet
        // @ts-expect-error
        this.error = class CustomError<C extends Extract<keyof M, string>> extends error {
            code: C

            constructor(code: C, ...args: M[C] extends (...args: any[]) => string ? Parameters<M[C]> : never) {
                const resolvable = messages[code]
                super(typeof resolvable === 'function' ? resolvable(...args) : resolvable)

                this.code = code

                Error.captureStackTrace(this, Error)
            }

            override get name() {
                return `${super.name} [${this.code}]`
            }
        }
    }
}

export type ErrorMessageResolvable = string | ((...args: any[]) => string)