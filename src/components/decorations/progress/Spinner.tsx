// * This was a pain to perfect

import styled, { keyframes } from 'styled-components'

const SpinnerAnimation = keyframes`
    0% {
        transform: translate(50%, 50%) rotate(0deg);
        stroke-dashoffset: 250;
    }

    50% {
        transform: translate(50%, 50%) rotate(160deg);
        stroke-dashoffset: 235;
    }

    60% {
        transform: translate(50%, 50%) rotate(190deg);
        stroke-dashoffset: 240;
    }
    
    70% {
        transform: translate(50%, 50%) rotate(245deg);
        stroke-dashoffset: 250;
    }

    85% {
        transform: translate(50%, 50%) rotate(330deg);
        stroke-dashoffset: 300;
    }

    100% {
        transform: translate(50%, 50%) rotate(360deg);
        stroke-dashoffset: 250;
    }
`

function UnanimatedSpinner(props: SpinnerProps & { className?: string }) {
    const { radius, strokeSize } = props
    const normalizedRadius = radius - strokeSize * 2
    const circumference = normalizedRadius * 2 * Math.PI

    return (
            <svg width={radius * 2} height={radius * 2} style={{ transform: 'rotate(-90deg)'}} className={props.className}>
                <circle
                    stroke='var(--tx-pr-clr)' fill='transparent' strokeWidth={strokeSize} strokeLinecap={'round'} 
                    strokeDasharray={`${circumference} ${circumference}`}
                    r={normalizedRadius}
                />
            </svg>
        )
}

export default styled(UnanimatedSpinner)`
    display: flex;
    align-items: center;
    justify-content: center;

    & circle {
        transform: translate(50%, 50%);
        stroke-dashoffset: 250;
        transition: all 1s linear;
        animation: ${SpinnerAnimation} ${(props: SpinnerProps) => props.duration}ms linear infinite;
    }
`

export interface SpinnerProps {
    // Styling

    radius: number
    strokeSize: number

    // Timing

    duration: number
}

export interface SpinnerAnimationProps {
    circumference: number
}