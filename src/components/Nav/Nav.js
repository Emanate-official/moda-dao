import React, { memo } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { history } from "../Router";
import "./Nav.scss";

const _Nav = ({ links, noBrand = false, activeTab }) => {

  // Set default links
  if (!links)
    links = [
      { label: "About", onClick: () => history.push("/about") },
      { label: "Partners", onClick: () => history.push("/partners") },
      { label: "People", onClick: () => history.push("/people") },
      { label: "People", onClick: () => history.push("/people") },
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

  const renderBrand = () => (
    <Navbar.Brand
      style={{ cursor: "pointer" }}
      onClick={() => history.push("/")}
    >
    </Navbar.Brand>
  );

  const renderLinks = () => (
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        {links.map(({ label, onClick, children }, i) => {
          const classes = label === activeTab ? "active" : "";
          return !children ? (
            <Nav.Link
              onClick={onClick}
              key={i}
              className={classes}
              children={label}
            />
          ) : (
            <NavDropdown title={label} key={i} className={classes}>
              {children.map((c, ind) => {
                const Item = NavDropdown[c.type];
                return (
                  <Item onClick={c.onClick} key={ind} children={c.label} />
                );
              })}
            </NavDropdown>
          );
        })}
      </Nav>
    </Navbar.Collapse>
  );
  return (
    <Navbar bg="light" expand="lg">
      {!noBrand && renderBrand()}
      {!links.length || <Navbar.Toggle aria-controls="basic-navbar-nav" />}
      {!links.length || renderLinks()}
    </Navbar>
  );
};

export default memo(_Nav);
