import styled from 'styled-components'
import Divider from './Divider'
import ContributorsList from '../../data/Contributors.json'
import { TextLink } from './routing/Link'

export const ContributorContainer = styled.div`
    margin: 0.75rem;
    background-color: var(--bg-td-clr);
    width: 50vmin;
    border-radius: 0.75rem;
    padding: 1rem;
`

const ContributorContainerTitle = styled.p`
    margin: 0;
    font-size: 1.125rem;
    font-weight: bold;
`

export function Contributors() {
    return (
        <div style={{ margin: '1rem' }}>
            {ContributorsList.map(({ title, contributors }) => {
                return (
                    <ContributorContainer>
                        <ContributorContainerTitle>{title}</ContributorContainerTitle>
                        <Divider strokeWidth='0.125rem' strokeColor='#FFF2' />
                        {contributors.map((ctb, i) => [i > 0 && ', ', 'link' in ctb && ctb.link ? <TextLink external key={i} to={ctb.link}>{ctb.name}</TextLink> : <p key={i} style={{ margin: 0 }}>{ctb.name}</p>])}
                    </ContributorContainer>
                )
            })}
        </div>
    )
}

export interface ContributorProps {
    name: string
    profileSrc?: string
}