// import { TextLink } from '../components/Link'
// * Soon (TM)
import { PrimaryLink, TextLink } from '../components/ui/Links'
import { Page, PageSecondaryDescription, PageIcon, PageTitle } from '../components/ui/Page'
import DocumentTitle from '../util/DocumentTitle'

export default function AboutPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ About' />
            <PageIcon src='/assets/icons/about.svg' />
            <PageTitle>About</PageTitle>
            <PageSecondaryDescription>
                <strong>NRVM</strong> is a fun little project created by <TextLink target='_blank' to='https://github.com/PalmDevs'>@PalmDevs</TextLink>.<br />
                Inspired by <TextLink target='_blank' to='https://github.com/reisxd/revanced-builder'>@reisxd/revanced-builder</TextLink>.
            </PageSecondaryDescription>
            <PrimaryLink to='/'>Back</PrimaryLink>
        </Page>
    )
}