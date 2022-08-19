import { PrimaryLink } from '../components/ui/routing/Link'
import { Page, PageDescription, PageIcon, PageTitle } from '../components/ui/Page'
import DocumentTitle from '../util/DocumentTitle'
import Constants from '../data/Constants.json'

export default function MainPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ Welcome' />
            <PageIcon src='/assets/mascot/cropped-circle.svg' />
            <PageTitle>{Constants.app.longName}</PageTitle>
            <PageDescription>
                {Constants.app.description}
                <br/>
                Get started now and explore your options!
            </PageDescription>
            <PrimaryLink to='/dependencies'>Continue</PrimaryLink>
        </Page>
    )
}