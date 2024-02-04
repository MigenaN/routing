// HelloPage.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from "react-router-dom";

const HelloPage = (props) => { 
    const { word } = useParams();

return (
    <div>
        <h1>The word is{word}</h1>
        <Link to={`/${word}`}></Link>
    </div>
);
};

export default HelloPage;
