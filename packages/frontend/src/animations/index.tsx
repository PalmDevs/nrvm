import { Variants } from 'framer-motion'

export default function createAnimationPropsFor(animation: Variants) {
    return {
        initial: 'enter',
        animate: 'stay',
        exit: 'exit',
        variants: animation
    }
}

export { default as FadeTo } from './FadeTo'
export { default as FadeInFrom } from './FadeInFrom'