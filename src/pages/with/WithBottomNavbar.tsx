import { BiArrowBack } from 'react-icons/bi'
import { BsPeopleFill, BsGithub } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
import { NavContainer, NavIconButton } from '../../components/ui/Navigation'

export default function WithBottomNavbar({ showBackButton = false }: { showBackButton?: boolean }) {
    console.log(showBackButton)
    return (
        <>
            <Outlet />
            {!showBackButton || <NavContainer location='left'>
                { /* eslint-disable-next-line no-restricted-globals */ }
                <NavIconButton action={() => history.back()} icon={BiArrowBack} />
            </NavContainer>}
            <NavContainer location='right'>
                <NavIconButton icon={BsGithub} to='https://github.com/PalmDevs/nrvm' external />
                <NavIconButton icon={BsPeopleFill} to='/about' />
            </NavContainer>
        </>
    )
}