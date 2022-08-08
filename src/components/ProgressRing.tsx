export default function ProgressRing(props: ProgressRingProps & { className?: string }) {
    const { radius, strokeSize, progress } = props
    const normalizedRadius = radius - strokeSize * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const sdoOffset = circumference - ((progress / 100) * circumference)

    return (
        <svg width={radius * 2} height={radius * 2} style={{ transform: 'rotate(-90deg)'}} className={props.className}>
            <circle 
                stroke='var(--tx-pr-clr)' fill='transparent' strokeWidth={strokeSize} strokeLinecap={'round'} 
                strokeDasharray={`${circumference} ${circumference}`} style={{ strokeDashoffset: sdoOffset, transition: '1s all ease-out' }} 
                r={normalizedRadius} cx={radius} cy={radius}
            />
        </svg>
    )
}

export interface ProgressRingProps {
    radius: number
    strokeSize: number
    progress: number
}