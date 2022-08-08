// import { TextLink } from '../components/Link'
// * Soon (TM)
import { Page, PageUnimportantDescription, PageIcon, PageTitle } from '../components/Pages'
import DocumentTitle from '../util/DocumentTitle'

export default function AboutPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ About' />
            <PageIcon src='/assets/icons/about.svg' />
            <PageTitle>About</PageTitle>
            <PageUnimportantDescription>
                <strong>NRVM</strong> is a fun little project created by @PalmDevs.<br />
                Inspired by @reisxd/revanced-builder.
            </PageUnimportantDescription>
        </Page>
    )
}