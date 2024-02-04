// StyledPage.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from "react-router-dom";

const StyledPage = (props) => { 
    const { word, textColor, bgColor  } = useParams();

const style = {
    color: textColor,
    backgroundColor: bgColor,
};

return (
    <div style={style}>
    <h1>The word is{word}</h1>
    <Link to={`/${word}/green/yellow`}></Link>
    </div>
);
};

export default StyledPage;
