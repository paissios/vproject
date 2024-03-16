import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutWrapperProps } from "../../models/layoutModels";
import classes from "./LayoutWrapper.module.scss";
import Notification from "../Notification/Notification";

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  loggedIn,
}) => {
  return (
    <div className={classes.body}>
      {loggedIn ? <Header /> : <Notification />}
      <div className={classes.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
