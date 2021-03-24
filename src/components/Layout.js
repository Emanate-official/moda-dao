import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { history } from "./Router";

const Layout = ({
  header,
  footer,
  children,
  noFooter,
  noHeader,
  links,
  activeTab
}) => {

  // Set default links
  if (!links)
    links = [
      { label: "About", onClick: () => history.push("/about") },
      { label: "Partners", onClick: () => history.push("/partners") },
      { label: "People", onClick: () => history.push("/people") },
      { label: "Launch DAO", onClick: () => history.push("/") }
    ];

  // For a dropdown menu item, add an object like this to the links array
  // {
  //   label: "Dropdown",
  //   children: [
  //     { type: "Item", label: "Action 1", onClick: () => console.log("action") },
  //     { type: "Item", label: "Action 2", onClick: () => console.log("action") },
  //     { type: "Divider" },
  //     { type: "Item", label: "Action 3", onClick: () => console.log("action") }
  //   ]
  // }
  
  return (<>
    <header>{noHeader || header || <Nav links={links} activeTab={activeTab} />}</header>
    <main>
      <div>{children}</div>
    </main>
    <footer>{noFooter || footer || <Footer />}</footer>
  </>)
};

export default Layout;
