import { SecondaryLink } from '../components/ui/routing/Link'
import { Page, PageDescription, PageIcon, PageTitle } from '../components/ui/Page'
import DocumentTitle from '../util/DocumentTitle'

export default function UnknownPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ 404' />
            <PageIcon src='/assets/icons/error.svg' />
            <PageTitle>Watch where you're going!</PageTitle>
            <PageDescription>
                This link leads to nowhere...
                <br />
                Click the button to go back to the home page.</PageDescription>
            <SecondaryLink to='/'>Take me there!</SecondaryLink>
        </Page>
    )
}