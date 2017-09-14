import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/img/logo.png';
import { Link } from './link';

const StyledNavbar = styled.div`
    min-height: 90px;
    background-color: ${({ shadowOnNavbar }) => shadowOnNavbar ? 'rgba(240,240,240,.97) !important' : 'transparent'};
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
            className="navbar navbar-expand-lg fixed-top navbar-light"
            shadowOnNavbar={shadowOnNavbar}>
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center" unstyled>
                    <img src={LogoImg} width="110" height="60" className="d-inline-block align-top" alt=""/>
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" unstyled>Projects <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" unstyled>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" unstyled>A dog?</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
    );
};
