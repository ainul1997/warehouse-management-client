import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';
import cargoexpress from '../../../images/cargoexpress.jpg';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';



const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a style={{ fontSize: "30px", borderRadius: '50px' }} className="navbar-brand" href="#"> <img src={cargoexpress} alt="" />  </a>

                    <div className="collapse navbar-collapse mx-5" id="navbarNav">
                        <div className='mx-3 '>
                            <p className='d-flex align-items-center ' style={{ color: '#CCCCCC' }}>  <img style={{ height: '20px', marginRight: '5px', marginLeft: '5px' }} src='https://icons-for-free.com/download-icon-phone+line+icon+headphone+headphone+icon+icon-1320073120771382953_512.png' alt="" /> Call Us Anytim</p>
                            <p> 1-888-123-2345</p>

                        </div>
                        <div style={{ width: '1px', height: '40px', margin: '5px' }} className='bg-dark'></div>
                        <div className='mx-5'>
                            <p className='d-flex align-items-center ' style={{ color: '#CCCCCC' }} > <img style={{ height: '20px', marginRight: '5px', marginLeft: '5px', opacity: '30%' }} src='https://www.nicepng.com/png/detail/840-8403859_alarm-clock-svg-png-icon-free-download-alarm.png' alt="" /> Opening Time</p>
                            <p>  08:00 - 18:00</p>

                        </div>
                        <div style={{ width: '1px', height: '40px', margin: '5px' }} className='bg-dark'></div>
                        <div className='mx-5'>
                            <p style={{ color: '#CCCCCC' }}>  <img style={{ height: '20px', marginRight: '5px', marginLeft: '5px', opacity: '30%' }} src='https://www.designbust.com/download/1026/png/email_icon_transparent_background512.png' alt="" /> Email Us</p>
                            <p> info@cargoexpress.io</p>
                        </div>

                    </div>
                </div>
            </nav>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center ">
                            <Nav.Link className='text-light fw-bolder' as={Link} to="home">Home</Nav.Link>
                            <div className=' nav_divider rounded-circle '></div>
                            <Nav.Link className='text-light fw-bolder' as={Link} to="services">Services</Nav.Link>
                            <div className=' nav_divider rounded-circle'></div>
                            <Nav.Link className='text-light fw-bolder' as={Link} to="manage">Manage Inventories</Nav.Link>
                            <div className=' nav_divider rounded-circle'></div>
                            <Nav.Link className='text-light fw-bolder' as={Link} to="shop">Shop</Nav.Link>
                            <div className=' nav_divider rounded-circle'></div>
                            <Nav.Link className='text-light fw-bolder' as={Link} to="news">News</Nav.Link>
                            <div className=' nav_divider rounded-circle'></div>
                            <Nav.Link className='text-light fw-bolder' as={Link} to="contact">Contact Us</Nav.Link>

                        </Nav>
                        <Nav>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="addservice"> Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="manage"> Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="orders"> My items</Nav.Link>

                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;