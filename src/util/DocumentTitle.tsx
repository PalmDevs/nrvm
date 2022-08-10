import { useEffect } from 'react'

export default function DocumentTitle({ title }: { title: string }) {
    useEffect(() => void (document.title = title))
    return null
}