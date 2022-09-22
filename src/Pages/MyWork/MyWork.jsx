
import React from 'react';
import { useNavigate } from "react-router-dom";

const MyWork = (props) => {
   const navigate = useNavigate();
 return (
    <>
    {/* <body style={"height: 100%; background-color: red; box-sizing: border-box;"}> This is a MyWork Page.</body> */}
        <button onClick={() => navigate(-1)}>Should be my work :/ </button>
  </>
  )
};
  
export default MyWork;