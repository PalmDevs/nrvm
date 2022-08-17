import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import createAnimationPropsFor, { FadeTo } from '../../animations'

export const BasePage = styled(motion.div)`
    background-color: var(--bg-pr-clr);
    color: var(--tx-pr-clr);

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export function Page({ children }: PageProps) {
    return (
        <BasePage {...createAnimationPropsFor(FadeTo)}>
            {children}
        </BasePage>
    )
}

export const PageIcon = styled.img`
    width: 16rem;
    height: 16rem;
    src: ${(props: PageIconProps) => props.src};
`

export const PageTitle = styled.p`
    font-weight: bold;
    font-size: 2rem;
    color: var(--tx-pr-clr);
    margin: 1rem;
    text-align: center;
`

const BasePageDescription = styled.p`
    font-weight: normal;
    font-size: 1.125rem;
    margin: 0;
    text-align: center;
`

export const PageDescription = styled(BasePageDescription)`
    color: var(--tx-sc-clr);
`

export const PageSecondaryDescription = styled(BasePageDescription)`
    color: var(--tx-sc-clr);
`

export const PageTertiaryDescription = styled(BasePageDescription)`
    color: var(--tx-td-clr);
`


export interface PageProps {
    children?: ReactNode
}

export interface PageIconProps {
    src: string
}