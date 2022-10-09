import { motion } from 'framer-motion'
import styled from 'styled-components'
import Animations from '../../animations'

const StyledWrapper = styled(motion.div)`
    background-color: var(--bg-pr-clr);
    color: var(--tx-pr-clr);

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    /* For navigation bar */
    @media screen and (max-aspect-ratio: 14/16) {
        padding-bottom: 4rem;
    }
`


function Wrapper(props: Parameters<typeof motion.div>[0]) {
    return <StyledWrapper {...props} {...Animations.create(Animations.SlideFade('left', 7.5))} transition={{ duration: 0.4, ease: [0.33, 0.51, 0.13, 0.9] }} />
}

const Title = styled.p`
    font-weight: bold;
    font-size: 2rem;

    text-align: center;

    color: var(--tx-primary);

    margin: 1rem;
`

const BaseDescription = styled.p`
    font-weight: normal;
    font-size: 1.125rem;

    text-align: center;

    margin: 0;
`

const Description = styled(BaseDescription)`
    color: var(--tx-secondary);
`

const SecondaryDescription = Description

const TertiaryDescription = styled(BaseDescription)`
    color: var(--tx-tertiary);
`

const Footer = styled(TertiaryDescription)`
    font-size: 0.75rem;
`

const HeroIcon = styled.img`
    width: 16rem;
    height: 16rem;
    src: ${(props: HeroIconProps) => props.src};
`

const Page = Object.assign(Wrapper, {
    Title, Description, SecondaryDescription, TertiaryDescription, Footer, HeroIcon
})

export default Page

export interface HeroIconProps {
    src: string
}