import React from 'react';
import { Link } from 'react-router-dom';

const otherpage = () => {
    return (
        <div>
            I'm some other page!
            <Link to="/">Go Back Home</Link>
        </div>
    );
};
export default otherpage;
