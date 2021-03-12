import React, { useState } from 'react';

import './user.scss';

function User(props) {
    const [spinning, setSpinning] = useState(false);
    const { user } = props;
    const {
        title,
        first,
        last
    } = user.name;

    // console.log(user)

    const handleClick = () => {
        setSpinning(!spinning);
    };

    return (
        <div
            className={`user ${spinning ? 'spining' : ''}`}
            onClick={handleClick}
        >
            <img
                src={user.picture.large} 
                alt={last}
            />
            <p>{ `${title} ${first} ${last}` }</p>
        </div>
    );
}

export default User;