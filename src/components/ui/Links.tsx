import { ReactNode, MouseEventHandler } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'


const TextLinkElement = styled(DynamicLink)`
    color: ${(props: TextLinkProps & ExtraLinkProps) => props.textColor || 'currentColor'};
    font-weight: ${(props: TextLinkProps & ExtraLinkProps) => props.fontWeight || 'normal'};
    font-size: 1.125rem;
    color: ${(props: TextLinkProps & ExtraLinkProps) => props.textColor};
    text-decoration: underline;
    transition: all 0.25s;

    &:hover {
        cursor: ${(props: TextLinkProps & ExtraLinkProps) => props.disabled ? 'not-allowed' : 'pointer'};
        filter: brightness(125%);
    }
`

const BaseLinkElement = styled(Link)`
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
        cursor: ${(props: ExtraLinkProps) => props.disabled ? 'not-allowed' : 'pointer'};
        filter: brightness(75%);
    }
`


export function DynamicLink<P extends (({ className?: string, children?: ReactNode } & ({ to: string, external?: boolean } | { action: MouseEventHandler<HTMLDivElement> }) & Omit<LinkProps, 'to'>))>(props: P) {
    if ('action' in props) {
        return (
            <div className={props.className} onClick={props.action}>
                {props.children}
            </div>
        )
    } else {
        return props.external ? (
            <a href={props.to} target='_blank' rel="noreferrer" className={props.className}>
                {props.children}
            </a>
        ) : (
            <Link to={props.to} className={props.className}>
                {props.children}
            </Link>
        )
    }
}

export function TextLink(props: TextLinkProps & ExtraLinkProps & LinkProps) {
    return (<TextLinkElement {...{ ...props, onClick: (e) => props.disabled ? e.preventDefault() : undefined }} />)
}

export function BaseLink(props: ExtraLinkProps & LinkProps) {
    return (<BaseLinkElement {...{ ...props, onClick: (e) => props.disabled ? e.preventDefault() : undefined }} />)
}


export const PrimaryLink = styled(BaseLink)`
    color: var(--tx-pr-clr);
    background-color: #2b6be2;
`


export interface ExtraLinkProps {
    disabled?: boolean
}

export interface TextLinkProps {
    to: string
    external?: boolean
    textColor?: string
    fontWeight?: number | `${number}` | string
}