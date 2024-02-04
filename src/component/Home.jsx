// Home.jsx
import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
return (
    <div>
        <h1>Welcome</h1>
        <Link to="/home"></Link>
    </div>
);
};

export default Home;
