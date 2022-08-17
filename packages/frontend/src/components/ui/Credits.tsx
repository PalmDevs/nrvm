import styled from 'styled-components'
import Divider from './Divider'
import ContributorsList from '../../data/Contributors'

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
                        {contributors.map((ctb) => ctb.name).join(', ')}
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