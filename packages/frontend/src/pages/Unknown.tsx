import Document from '../components/util/Document'
import Page from '../components/ui/Page'
import Navigation from '../components/ui/Navigation'

export default function UnknownPage() {
    return (
        <Page>
            <Document.Title title='404' />
            <Page.HeroIcon src='/assets/error.svg' />
            <Page.Title>Uh oh! 404</Page.Title>
            <Page.Description>This page doesn't exist.</Page.Description>
            <Page.Description>Do you want to go back to the home page?</Page.Description>
            <Navigation.ButtonSecondary to='/'>Take me there</Navigation.ButtonSecondary>
        </Page>
    )
}