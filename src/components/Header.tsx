import React, { FC, ReactElement } from 'react';

type HeaderProps = {
    title: string,
}

const Header : FC<HeaderProps> = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

export default Header