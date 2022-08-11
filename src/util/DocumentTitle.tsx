import { useEffect } from 'react'

export default function DocumentTitle({ title }: DocumentTitleProps) {
    useEffect(() => void (document.title = title))
    return null
}

export interface DocumentTitleProps {
    title: string
}