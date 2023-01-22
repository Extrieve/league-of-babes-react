import React, { FC, ReactElement } from 'react';

type HeaderProps = {
    title: string,
    color: string,
}

const Header : FC<HeaderProps> = ({title, color}) => {
    return (
        <h1 className='display-1' style={{'color': color}}>{title}</h1>
    )
}

export default Header