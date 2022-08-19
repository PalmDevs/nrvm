import { Contributors } from '../components/ui/Credits'
import { TextLink } from '../components/ui/routing/Link'
import { Page, PageFooter, PageSecondaryDescription, PageIcon, PageTitle } from '../components/ui/Page'
import DocumentTitle from '../util/DocumentTitle'
import Constants from '../data/Constants.json'

export default function AboutPage() {
    return (
        <Page>
            <DocumentTitle title='NRVM ➜ About' />
            <PageIcon src='/assets/icons/about.svg' />
            <PageTitle>About</PageTitle>
            <PageSecondaryDescription>
                <strong>{Constants.app.name}</strong> is a fun little project created by <TextLink target='_blank' to='https://github.com/PalmDevs'>@PalmDevs</TextLink>.<br />
                Inspired by <TextLink target='_blank' to='https://github.com/reisxd/revanced-builder'>@reisxd/revanced-builder</TextLink>.
            </PageSecondaryDescription>
            <Contributors />
            <PageFooter>{`${Constants.app.name}. ${Constants.app.description}`}</PageFooter>
            <PageFooter>{`${Constants.app.license} licensed. ${Constants.app.warranties}.`}</PageFooter>
        </Page>
    )
}
