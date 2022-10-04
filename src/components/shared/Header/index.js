import React from "react";
// import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

const Header = () => {
    return (
      <div>
        <MDBNavbar expand='lg' light bgColor='white' sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/cadastro">Cadastro</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>TAREFAS DO DIA</h1>
              <h4 className='mb-3'>Cadastre a tarefa do seu dia</h4>
              <a className='btn btn-outline-light btn-lg' href='/cadastro' role='button'>
                CADASTRO DO DIA
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
     );
}
export default Header;