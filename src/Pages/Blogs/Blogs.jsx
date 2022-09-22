
import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = (props) => {
  const navigate = useNavigate();

  return (
    <div>
          <button onClick={() => navigate(-1)}>Should be my Blog :/ </button>
    </div>
  );
};

export default Blogs;