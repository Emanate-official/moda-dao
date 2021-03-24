import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({
  header,
  footer,
  children,
  noFooter,
  noHeader,
  activeTab
}) => (
  <>
    <header>{noHeader || header || <Nav activeTab={activeTab} />}</header>
    <main>
      <div>{children}</div>
    </main>
    <footer>{noFooter || footer || <Footer />}</footer>
  </>
);

export default Layout;
