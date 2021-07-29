import React from "react";
import styles from "./MessengerLayout.module.scss";

interface LayoutComponent extends React.FC {
  Main: typeof Main;
  Header: typeof Header;
}

const Layout: LayoutComponent = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

const Header: React.FC<{
  leftSlot?: React.ReactElement;
  rightSlot?: React.ReactElement;
}> = (props) => {
  return (
    <header className={styles.header}>
      <div>{props.leftSlot}</div>
      <h3>{props.children}</h3>
      <div>{props.rightSlot}</div>
    </header>
  );
};

const Main: React.FC = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

Layout.Main = Main;
Layout.Header = Header;

export default Layout;
