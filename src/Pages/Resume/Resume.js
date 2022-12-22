
import React from 'react';
import { useNavigate } from "react-router-dom";

const Resume = (props) => {
  const navigate = useNavigate();
 return (
    <>
    <button onClick={() => navigate(-1)}>Should be my Resume :/ </button>
  </>
  )
};
  
export default Resume;