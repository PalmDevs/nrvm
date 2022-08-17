import { useState } from 'react'

export default function LoadingScreen(props: { loading: boolean }) {
    const [animationDoneState, setAnimationDoneState] = useState(false)
    if (!props.loading) setTimeout(() => setAnimationDoneState(true), 1000)

    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh',
            position: 'absolute', 
            transition: '1s all ease-out', 
            opacity: props.loading ? '1' : '0',
            backgroundColor: 'var(--bg-pr-clr)', 
            display: animationDoneState ? 'none' : 'unset' }}
        />
    ) 
}