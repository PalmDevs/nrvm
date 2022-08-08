import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

// export function TextLink(props: TextLinkProps & ExtraLinkProps &) {
//     const Element = styled.a`
//         color: ${props.textColor || 'currentColor'};
//         font-weight: ${props.fontWeight || 'normal'};
//         font-size: 1.125rem;
//         color: ${props.textColor};
//         text-decoration: underline;
//         transition: all 0.25s;

//         &:hover {
//             cursor: ${(props: ExtraLinkProps) => props.disabled ? 'not-allowed' : 'hover'};
//             filter: brightness(125%);
//         }
//     `

//     return (<Element href={props.to} {...{ ...props, onClick: (e) => props.disabled ? e.preventDefault() : undefined }} />)
// }

export function ExtendedLink(props: ExtraLinkProps & LinkProps) {
    const Element = styled(Link)`
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
            cursor: ${(props: ExtraLinkProps) => props.disabled ? 'not-allowed' : 'hover'};
            filter: brightness(75%);
        }
    `

    return (<Element {...{ ...props, onClick: (e) => props.disabled ? e.preventDefault() : undefined }} />)
}

export const PrimaryLink = styled(ExtendedLink)`
    color: var(--tx-pr-clr);
    background-color: #2b6be2;
`

export interface ExtraLinkProps {
    disabled?: boolean
}

export interface TextLinkProps {
    to: string
    textColor?: string
    fontWeight?: number | `${number}` | string
}