import { useState } from 'react';
import logo from '../../assets/images/delivery-logo.png';
import NavMenu from './Menu';
import Checkout from './Checkout';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

export default function Header({ dimensions, order, setOpenForm }) {

    const [isMenuShown, setIsMenuShown] = useState(false);

    function showNavMenu() {
        setIsMenuShown(prev => !prev)
    };

    return (
        <section id="header">
            <div className='logoContainer'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                {dimensions > 748 ?
                    <NavMenu />
                    :
                    <>
                        <button onClick={showNavMenu}>
                            <MenuIcon sx={{ fontSize: 25 }} />
                        </button>
                        <Checkout setOpenForm={setOpenForm} order={order} />
                        {isMenuShown && <NavMenu />}
                    </>
                }
            </nav>
            {dimensions > 748 && <Checkout order={order} setOpenForm={setOpenForm} />}
        </section>
    )
}