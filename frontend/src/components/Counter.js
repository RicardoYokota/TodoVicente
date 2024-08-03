import React from 'react';

const Counter = ({ name, value }) => {
    return (
        <div className="counter">
            <span className={name === 'Criadas' ? 'color1' : 'color2'}>{name}</span>
            <span className="number">{value}</span>
        </div>
    );
};

export default Counter;
