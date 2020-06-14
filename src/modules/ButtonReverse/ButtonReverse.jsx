import React from 'react';
import './buttonreverse.scss';

const ButtonReverse = (props) => {
    const { content, handleClick } = props;
    return (
        <button onClick = { handleClick }>{ content }</button>
    )
}

export default ButtonReverse;