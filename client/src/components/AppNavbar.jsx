import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  NavLink
} from 'reactstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Compilador</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink
                  target="_blank"
                  href="https://www.notion.so/juancasian/Manual-Carros-Aut-nomos-0155c8aaaf4b4b14946def2fda79d011"
                >
                  Manual de Proyecto
                </NavLink>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
