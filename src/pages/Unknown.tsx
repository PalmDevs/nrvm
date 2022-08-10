import { PrimaryLink } from '../components/ui/Links'
import { Page, PageDescription, PageIcon, PageTitle } from '../components/ui/Page'
import DocumentTitle from '../util/DocumentTitle'

export default function UnknownPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ 404' />
            <PageIcon src='/assets/icons/error.svg' />
            <PageTitle>Where are you going?</PageTitle>
            <PageDescription>
                You're lost! This link leads to nowhere...
                <br />
                Click the button to go back to the country roads.</PageDescription>
            <PrimaryLink to='/'>Take me home!</PrimaryLink>
            <p style={{ fontSize: '0.1rem', color: '#303030' }}>To the place, I belong!</p>
        </Page>
    )
}