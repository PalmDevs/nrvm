export default function FadeInFrom(location: FadeInFromLocation) {
    const position = ['up', 'down'].includes(location) ? 'y' : 'x'
    const compareValue = location === 'up' ? 'up' : 'left'

    return {
        enter: {
            [position]: negativeIfEqual(compareValue, location, 50),
            opacity: 0
        },
        stay: {
            [position]: 0,
            opacity: 1
        },
        exit: {
            [position]: negativeIfEqual(compareValue, location, -50),
            opacity: 0
        }
    }
}

function negativeIfEqual(a: any, b: any, n: number) {
    if (a === b) return -n
    return n
}

export type FadeInFromLocation = 'left' | 'right' | 'up' | 'down'