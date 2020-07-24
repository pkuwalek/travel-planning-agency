import React from 'react';
import './button.scss';

const Button = (props) => {
    const { content, handleClick } = props;
    return (
        <button className = 'btn' onClick = { handleClick }>{ content }</button>
    )
}

export default Button;