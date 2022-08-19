import { Contributors } from '../components/ui/Credits'
import { TextLink } from '../components/ui/routing/Link'
import { Page, PageFooter, PageSecondaryDescription, PageIcon, PageTitle, PageTertiaryDescription } from '../components/ui/Page'
import DocumentTitle from '../util/DocumentTitle'
import styled from 'styled-components'

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
            <Contributors />
            <PageFooter>{`${process.env.REACT_APP_LONG_NAME} (${process.env.REACT_APP_NAME}-v${process.env.REACT_APP_VERSION})`}</PageFooter>
            <PageFooter>{`MIT Licensed. Not responsible for unrelated damages to your device.`}</PageFooter>
        </Page>
    )
}
