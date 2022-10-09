const Title = (props: TitleProps) => {
    document.title = `NRVM ➜ ${props.title}`
    return null
}

export default { Title }

export interface TitleProps {
    title: string
}