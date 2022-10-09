import Navigation from '../components/ui/Navigation'
import Page from '../components/ui/Page'
import Document from '../components/util/Document'

export default function MainPage() {
    return (
        <Page>
            <Document.Title title='Welcome' />
            <Page.HeroIcon src='/assets/mascot.svg' />
            <Page.Title>NRVM: Not ReVanced Manager</Page.Title>
            <Page.Description>A web app for patching ReVanced-supported applications.</Page.Description>
            <Page.Description>Get started now and explore your options!</Page.Description>
            <Navigation.ButtonPrimary to='/apps'>Continue</Navigation.ButtonPrimary>
        </Page>
    )
}