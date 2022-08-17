export default function Divider(props: DividerProps) {
    return <hr style={{ width: props.length, borderTop: `${props.strokeWidth} solid ${props.strokeColor || 'currentColor'}`, borderRadius: props.strokeWidth, borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }}></hr>
}

export interface DividerProps {
    length?: string
    strokeWidth: string
    strokeColor?: string
}