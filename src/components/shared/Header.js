import React, { useState } from 'react';
import Link from 'next/link';
import { isAuthorized } from '@/utils/auth0';
import { useResizeDetector } from 'react-resize-detector';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink
} from 'reactstrap';
import ActiveLink from '@/components/shared/ActiveLink';


const BsNavLink = props => {
  const { href, title, className = '' } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <div className={`nav-link port-navbar-link ${className}`}>{title}</div>
    </ActiveLink>
  )
}

const BsNavBrand = () =>
  <Link className="navbar-brand port-navbar-brand" href="/">
    Filip Jerga
  </Link>

const LoginLink = () =>
  <NavLink className="nav-link port-navbar-link" href="/api/v1/login">Login</NavLink>

const LogoutLink = () =>
  <NavLink className="nav-link port-navbar-link" href="/api/v1/logout">Logout</NavLink>


const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/editor"
            title="Blog Editor"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { width, ref } = useResizeDetector({
    handleHeight: true,
  });


  return (
    <div ref={ref}>
      <Navbar
        className={`port-navbar port-default absolute ${className} ${width < 768 && isOpen ? 'is-open' : 'is-close'}`}
        dark
        expand="md">
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR"/>
            </NavItem> */}
          </Nav>
          <Nav navbar>
          {  console.log("user",user)}
            {!loading &&
              <>
                {user &&
                  <>
                    {isAuthorized(user, 'admin') && <AdminMenu />}
                    <NavItem className="port-navbar-item">
                      <LogoutLink />
                    </NavItem>
                  </>
                }
                {!user &&
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
