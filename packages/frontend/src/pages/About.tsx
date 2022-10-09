import Page from '../components/ui/Page'
import Document from '../components/util/Document'

export default function AboutPage() {
    return (
        <Page>
            <Document.Title title='About' />
            <Page.HeroIcon src='/assets/contributors.svg' />
            <Page.Title>About</Page.Title>
            <Page.Description>
                <strong>Not ReVanced Manager</strong> is a web-app for patching ReVanced-supported applications.<br />
                Inspired by reisxd's ReVanced Builder. Made better with React and fluent UI.
            </Page.Description>
        </Page>
    )
}