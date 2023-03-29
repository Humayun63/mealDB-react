import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white ps-4'>MealDB</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;