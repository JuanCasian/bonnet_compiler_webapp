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
                  href="https://www.notion.so/juancasian/Carro-seguidor-de-comandos-b0386feca23d47d6b02fcea42e36c27e"
                >
                  Manual de Proyecto
                </NavLink>
                <NavLink
                  target="_blank"
                  href="https://www.notion.so/juancasian/Pre-requisitos-para-Reto-Ingen-1-0-d6a052536b0e40919fc40bac32d026da"
                >
                  Manual Pre-requisitos
                </NavLink>
                <NavLink
                  target="_blank"
                  href="https://drive.google.com/open?id=1p9b-FQiUrxTxWAJudBipPHh49aGIBRaN"
                >
                  APK Google AIY Projects
                </NavLink>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
