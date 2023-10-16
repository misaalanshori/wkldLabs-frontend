import React from 'react';
import ASE-button from './ASE-Buttons';

const ButtonComponent = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <h1>Button Component</h1>
            <MyButton onClick={handleClick} text="Click Me" color="orange" />
        </div>
    );
};

export default Buttons;
