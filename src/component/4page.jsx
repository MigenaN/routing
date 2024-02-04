// Page.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from "react-router-dom";

const Page = (props) => { 
    const { number } = useParams();
return (
    <div>
        <h1>The number is{number}</h1>
        <Link to={`/${parseInt(number) + 1}`}></Link>
    </div>
);
};

export default Page;
