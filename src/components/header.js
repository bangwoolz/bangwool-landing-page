import React, { useState } from 'react';
import './header.scss';
import Modal from 'react-modal';
import menu_image from '../assets/header_menubar.png';

function Header() {

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    return (
        <>
            <div className='header'>
                <div className='content'>
                    <a className='title'>방울이</a>
                    <a className='menu' onClick={() => { setIsMenuClicked(true) }}><img src={menu_image} /></a>
                </div>
            </div>
            <Modal className='modal_menu' onRequestClose={() => { setIsMenuClicked(false) }} isOpen={isMenuClicked}>this is modal content</Modal>
        </>
    )
}

export default Header;