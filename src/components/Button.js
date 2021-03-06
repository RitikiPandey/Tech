import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
            <Link to='/sign-up' className='btn-mobile'>
                <button className={`btnn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
            </Link>
            
        </>
    )
};

export const Button1 = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
            <Link to='/login' className='btn-mobile'>
                <button className={`btnn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
            </Link>
            
        </>
    )
};

export const Button2 = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
            <Link to='/profile' className='btn-mobile'>
                <button className={`btnn ${checkButtonStyle} ${checkButtonSize}`} disabled="loading" onClick={onClick} type="submit">{children}</button>
            </Link>
            
        </>
    )
};