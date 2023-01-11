import React, { FC, ReactElement } from 'react';

type HeaderProps = {
    championName: string,
    championPicture: string,
}

const Card : FC<HeaderProps> = ({championName, championPicture}) => {
    return(
        <article className='card'>
            <div className='card_media'>
                <img src={championPicture} alt="" />
            </div>
            <div className='card_content'>
                <header className='card_header'>{championName}</header>
            </div>
        </article>
    )
}

export default Card