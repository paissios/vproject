import React from "react";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <p>© {year} Demo login</p>
    </div>
  );
};

export default Footer;
