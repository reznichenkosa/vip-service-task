import React, { FC } from "react";
import { MainLayoutProps } from "./MainLayout.props";
import styles from "./MainLayout.module.css";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainLayout;
