import { TextLink } from '../components/ui/routing/Link'

// Soon (TM)

export default {
    pages: {
        about: {
            documentTitle: 'NRVM ➜ About',
            title: 'About',
            description: (
                <>
                    <strong>NRVM</strong> is a fun little project created by <TextLink target='_blank' to='https://github.com/PalmDevs'>@PalmDevs</TextLink>.<br />
                    Inspired by <TextLink target='_blank' to='https://github.com/reisxd/revanced-builder'>@reisxd/revanced-builder</TextLink>.
                </>
            )
        }
    }
} as const