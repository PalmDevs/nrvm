import { ReactNode } from "react"

export function ContributorContainer(props: ContributorContainerProps) {}
export function Contributor(props: ContributorProps) {}

export interface ContributorProps {
    name: string
    profileSrc: string
}

export interface ContributorContainerProps {
    title: string
    children?: ReactNode
}