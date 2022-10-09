import { Variant } from 'framer-motion'
import SlideFade from './SlideFade'

const Animations = {
    SlideFade,
    create(animation: Animation) {
        return { variants: animation, initial: 'enter', animate: 'stay', exit: 'exit' }
    }
}

export default Animations

export type Animation = { [V in 'enter' | 'stay' | 'exit']: Variant }
export type Direction = 'up' | 'down' | 'left' | 'right'