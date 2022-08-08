import { PrimaryLink } from '../components/Link'
import { Page, PageDescription, PageIcon, PageTitle } from '../components/Pages'
import DocumentTitle from '../util/DocumentTitle'

export default function MainPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ Welcome' />
            <PageIcon src='/assets/mascot/cropped-circle.svg' />
            <PageTitle>Not ReVanced Manager</PageTitle>
            <PageDescription>
                A web-app for patching ReVanced-supported applications.
                <br/>
                Get started now and explore your options!
            </PageDescription>
            <PrimaryLink to='/dependencies'>Continue</PrimaryLink>
        </Page>
    )
}