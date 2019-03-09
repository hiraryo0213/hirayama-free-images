import React, { FunctionComponent, ReactNode } from 'react';
import './style.scss';

interface ButtonProps {
    type?: ButtonTypes;
    children: ReactNode;
    theme: ButtonThemes;
}

export enum ButtonTypes {
    BUTTON = 'button',
    RESET = 'reset',
    SUBMIT = 'submit'
}

export enum ButtonThemes {
    GREEN = 'GREEN'
}

enum ModifireClassNames {
    GREEN = "btn-green"
}

const clickHandler = () => {
    alert('閉じないよー');
}


const Button: FunctionComponent<ButtonProps> = ({type='button', children, theme}) => {
    return (
        <button type={type} className = {ModifireClassNames[theme]} onClick={clickHandler}>{children}</button>
    )
}

export default Button;