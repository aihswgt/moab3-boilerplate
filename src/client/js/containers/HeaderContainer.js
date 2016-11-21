import React from 'react'
import { Input, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
  }
  render() {
    const style = {
      //background: '#33ffad',
      //marginBottom: '10pt'
    }
    return (
      <div>
        <Navbar style={style} color="faded" light>
          <NavbarToggler className="float-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">Contacts</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://reactstrap.github.io/components/navbar/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Settings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}