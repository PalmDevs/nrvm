// import { Page, PageTitle } from '../components/ui/Page'
// import { useEffect, useState } from 'react'
// import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
// import Downloader from 'nodejs-file-downloader'

// export const octokit = new Octokit({
//     userAgent: `NRVM v${process.env.REACT_APP_VERSION}`
// })

// export const getDependenciesLink = async (setState: (v: string[]) => void) => {
//     setState(
//         (await Promise.all(
//             [ 'revanced-patches',
//             'revanced-integrations',
//             'revanced-cli' ].map((repoNames) => octokit.rest.repos.getLatestRelease({ owner: 'revanced', repo: repoNames }))
//         )).map((rel) => rel.data.assets.map((asset) => asset.browser_download_url)).flat()
//     )
// }

// export default function Dependencies() {
//     const [dependenciesLink, setDependenciesLink] = useState<string[]>([])

//     useEffect(() => {
//         getDependenciesLink(setDependenciesLink)
//     }, [])

//     const fileDownloads = dependenciesLink.map((link) => new Downloader({ url: link }))

//     console.log(dependenciesLink, fileDownloads)

//     return (
//         <Page>
//             <PageTitle>Dependencies</PageTitle>
//         </Page>
//     )
// }

// export type OctokitDependenciesResponse = RestEndpointMethodTypes["repos"]["getLatestRelease"]["response"]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => null