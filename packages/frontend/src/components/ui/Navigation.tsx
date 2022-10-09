import { motion } from 'framer-motion'
import { MouseEventHandler, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { Link, NavLink, LinkProps as RRLinkProps } from 'react-router-dom'
import styled from 'styled-components'
import Animations from '../../animations'

// #region Button navigation components

export type LinkProps = {
    disabled?: boolean
} & (
        (
            { to: string, external?: boolean, nav?: boolean }
        ) |
        { action: MouseEventHandler<HTMLAnchorElement> } 
    )
  & Omit<RRLinkProps, 'to'>

const BaseLink = (props: LinkProps) => {
    if ('action' in props) return <a {...props} onClick={(e) => { e.preventDefault(); props.disabled || props.action(e) } } />
    if (props.external) return <a {...props} href={props.to} target='_blank' />

    const Wrapper = props.nav ? NavLink : Link
    return <Wrapper {...props} onClick={(e) => !props.disabled || e.preventDefault()} />
}

const StyledLink = styled(BaseLink)`
    color: var(--tx-primary);
    opacity: ${(props: LinkProps) => props.disabled ? 0.5 : 1};

    margin: 2rem;

    font-weight: 600;
    font-size: 1.125rem;

    text-decoration: none;

    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.125rem;
    padding-right: 1.125rem;

    border-radius: 1rem 1rem;

    transition: all 0.25s;

    &:hover {
        cursor: ${(props: LinkProps) => props.disabled ? 'not-allowed' : 'pointer'};
        filter: ${(props: LinkProps) => `brightness(${props.disabled ? 1 : .75})`};
    }
`

export const ButtonPrimary = styled(StyledLink)`
    background-color: var(--ac-primary);
`
export const ButtonSecondary = styled(StyledLink)`
    background-color: var(--ac-secondary);
`
export const ButtonSuccess = styled(StyledLink)`
    background-color: var(--ac-success);
`
export const ButtonDanger = styled(StyledLink)`
    background-color: var(--ac-danger);
`

// #endregion

// #region Navigation bar components

const StyledBarButton = styled(BaseLink)`
    width: 4rem;
    height: 4rem;

    border-radius: 100%;

    background-color: var(--bg-secondary);
    color: var(--tx-primary);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.25s;

    text-decoration: none;

    &:hover {
        filter: brightness(85%);
    }

    &.active {
        filter: brightness(150%);
    }
`

function BarButton(props: BarButtonProps) {
    const { icon: Icon } = props
    return <StyledBarButton {...props} nav>
        <Icon size={'2em'} />
    </StyledBarButton>
}

function BarWrapper({ children, location }: BarProps) {
    return <motion.div {...Animations.create(Animations.SlideFade(location, 5))} transition={{ duration: 0.3, ease: [0.33, 0.51, 0.13, 0.9] }} style={{ display: 'grid', columnGap: '1rem', rowGap: '1rem', gridAutoFlow: 'column', margin: '1rem', position: 'fixed', bottom: 0, [location]: 0 }}>
        {children}
    </motion.div>
}

export interface BarProps {
    children?: ReactNode
    location: 'left' | 'right'
}

export type BarButtonProps = {
    icon: IconType
} & ({ external?: boolean, to: string, disabled?: boolean } | { action: MouseEventHandler<HTMLAnchorElement> })

const Bar = Object.assign(BarWrapper, {
    Button: BarButton
})

// #endregion

const Navigation = {
    ButtonPrimary,
    ButtonSecondary,
    ButtonSuccess,
    ButtonDanger,
    Bar
}

export default Navigation