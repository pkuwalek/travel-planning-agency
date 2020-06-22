import React from 'react';
import './buttonreverse.scss';

const ButtonReverse = (props) => {
    const { content, handleClick, type } = props;
    return (
        <button className = 'buttonreverse' type = {type} onClick = { handleClick }>{ content }</button>
    )
}

export default ButtonReverse;