import MainNavigation from "./MainNavigation/MainNavigation";
import styles from "./Layout.module.css";

const Layout = (props: any) => {
  return (
    <>
      <MainNavigation onClick={() => {}} />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
