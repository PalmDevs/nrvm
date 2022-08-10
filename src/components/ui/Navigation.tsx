import { MouseEventHandler, ReactNode } from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'
import { DynamicLink } from './Links'

const NavIconButtonElement = styled(DynamicLink)`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background-color: var(--bg-sc-clr);
    color: var(--tx-pr-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;
    text-decoration: none;

    &:hover {
        filter: brightness(85%);
    }
`


export function NavIconButton(props: NavIconButtonProps) {
    const Icon = props.icon
    return <NavIconButtonElement {...props}>
        <Icon size={'2em'} />
    </NavIconButtonElement>
}

export function NavContainer({ children, location }: { children: ReactNode, location: 'left' | 'right' }) {
    return <div style={{ display: 'grid', columnGap: '1rem', rowGap: '1rem', gridAutoFlow: 'column', margin: '1rem', position: 'absolute', bottom: 0, [location]: 0 }}>
        {children}
    </div>
}


export type NavIconButtonProps = {
    icon: IconType
} & ({ external?: boolean, to: string } | { action: MouseEventHandler<HTMLDivElement> })