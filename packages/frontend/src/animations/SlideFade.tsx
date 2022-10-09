import { Animation, Direction } from '.'

export default function SlideFadeAnimation(from: Direction, disposition: number): Animation {
    const dispositioning = `${disposition}rem`
    const nieb = (d: Direction) => nie(from, d, dispositioning)
    const _y = ['up', 'down'].includes(from)
    const side = _y ? 'y' : 'x'

    return {
        enter: {
            [side]: nieb(_y ? 'up' : 'left'),
            opacity: 0
        },
        stay: {
            [side]: 0,
            opacity: 1
        },
        exit: {
            [side]: nieb(_y ? 'down' : 'right'),
            opacity: 0
        }
    }
}

function nie(a: any, b: any, s: string) {
    return a === b ? `-${s}` : s
}