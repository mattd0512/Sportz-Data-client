import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'

const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
	padding: '1',
	marginLeft: '24px'
}
const navStyle = {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	width: '500px',
	color: 'white',
}
const authenticatedOptions = (
	<>
		<NavDropdown title="Leagues" id="basic-nav-dropdown" >
			<Link to="nfl">NFL</Link>
			<Link to="nba">NBA</Link>
			<Link to="mlb">MLB</Link>
			<Link to="nhl">NHL</Link>
			<Link to="ncaaf">NCAAF</Link>
			<Link to="ncaab">NCAAB</Link>
		</NavDropdown>
		{/* <Nav.Item className='ms-4'>
			<Link to='my-profile' style={linkStyle}>
				Saved games
			</Link>
		</Nav.Item> */}
		<div style={navStyle}>
		<Nav.Item className='ms-4'>
			<Link to='my-profile' style={linkStyle}>
				Watch List
			</Link>
		</Nav.Item>
		<Nav.Item className='ms-4'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='ms-4'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		</div>
		
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='ms-4'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='ms-4'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link className='ms-4'>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                Sportz Data
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Signed in as: {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header