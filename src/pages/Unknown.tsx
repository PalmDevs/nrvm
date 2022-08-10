import { PrimaryLink } from '../components/Link'
import { Page, PageDescription, PageIcon, PageTitle } from '../components/Pages'
import DocumentTitle from '../util/DocumentTitle'

export default function UnknownPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ 404' />
            <PageIcon src='/assets/icons/error.svg' />
            <PageTitle>Seems like you're lost...</PageTitle>
            <PageDescription>
                This link leads to nowhere. As known as, the <strong>void</strong>...
                <br />
                Click the button to go back to the country roads.</PageDescription>
            <PrimaryLink to='/'>Take me home!</PrimaryLink>
            <p style={{ fontSize: '0.1rem', color: '#303030' }}>To the place, I belong!</p>
        </Page>
    )
}