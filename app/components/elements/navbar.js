import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/img/logo.png';
import { Link } from './link';

const StyledNavbar = styled.div`
    min-height: 90px;
    background-color: ${({ shadowOnNavbar }) => shadowOnNavbar ? 'rgba(240,240,240,.9) !important' : 'transparent'};
    box-shadow: ${({ shadowOnNavbar }) => shadowOnNavbar ? '0 4px 10px rgba(0,0,0,.2)' : ''};
    transition: all .5s;
    a {
        transition: all .5s;
        color: ${({ shadowOnNavbar }) => shadowOnNavbar ? 'inherit' : '#fff !important'}
    }
`;

export const Navbar = ({ navbarOpen, onMenuClick, shadowOnNavbar }) => {
    const activeClass = navbarOpen ? 'is-active' : '';
    return (
        <StyledNavbar
            role="navigation"
            className="navbar navbar-expand-md fixed-top"
            shadowOnNavbar={shadowOnNavbar}>
            <Link to="/" className="navbar-brand" unstyled>
                <img src={LogoImg} className={`d-inline-block align-top logo ${shadowOnNavbar}`} alt=""/>
            </Link>
            <button
                className={`navbar-toggler hamburger hamburger--collapse ${activeClass}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={onMenuClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"/>
                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item mr-5 ml-5">
                        <Link className="nav-link" to="/" unstyled>Projects <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-5 ml-5">
                        <Link className="nav-link" to="/" unstyled>About</Link>
                    </li>
                    <li className="nav-item mr-5 ml-5">
                        <Link className="nav-link" to="/" unstyled>A dog?</Link>
                    </li>
                </ul>
            </div>
        </StyledNavbar>
    );
};
