import React, { memo } from "react";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { history } from "../Router";
import "./Nav.scss";
// import Web3 from "web3";

const _Nav = ({ links, noBrand = false, noMetaMask = false, activeTab }) => {

  const renderBrand = () => (
    <Navbar.Brand
      style={{ cursor: "pointer" }}
      onClick={() => history.push("/")}
    >
    </Navbar.Brand>
  );

  const renderMetaMask = () => (
    <Nav.Item>
      Connect
    </Nav.Item>
  );

  const renderLinks = () => (
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        {links.map(({ label, route, children }, i) => {
          const classes = label === activeTab ? "active" : "";
          return !children ? (
            <Nav.Link
              onClick={() => history.push(route)}
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
      {renderMetaMask()}
    </Navbar>
  );
};

export default memo(_Nav);
