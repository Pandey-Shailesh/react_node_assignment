import React from "react";
import Signin from "../user/Signin";

const Base = ({
  title = "Learn And Grow",
  description = "My description",
  className = "bg-light text-#0c0c0c p-4",
  children,
}) => (
  <div>

    <div className={className}>{children}</div>
     <Signin/>
  </div>
);
export default Base;
