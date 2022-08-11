import styled from 'styled-components'

export const Page = styled.div`
    background-color: var(--bg-pr-clr);
    color: var(--tx-pr-clr);

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

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

export interface PageIconProps {
    src: string
}