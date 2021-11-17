import image from '../Data/Netflix_Logo_RGB.png'
import avatar from '../Data/avatar.png'
import lens from '../Data/lens.svg'
import bell from '../Data/bell-solid.svg'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
const MyNavbar = () => (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'black'}}>
        <img src={image} width='100px' height='40px' alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto"  >
                <Nav.Link href="#features" style={{color:'white'}} >Home</Nav.Link>
                <Nav.Link href="#pricing" style={{color:'white'}}>TV Shows</Nav.Link>
                <Nav.Link href="#features" style={{color:'white'}}>Movies</Nav.Link>
                <Nav.Link href="#pricing" style={{color:'white'}}>Recently Added</Nav.Link>
                <Nav.Link href="#pricing" style={{color:'white'}}>MyList</Nav.Link>
            </Nav>
            <Nav>
                <div className='container mr-1'>
                <img src={lens} width='30px' height='20px' alt="" />
                <Nav.Link href="#features" style={{color:'white', marginRight:'5px'}} >KIDS</Nav.Link>
                <img src={bell} width='30px' height='20px' alt="" />
                <img src={avatar} width='40px' height='40px' style={{borderRadius:'30%',marginLeft:'20px'}} alt="" />
                <NavDropdown id="dropdown-item-button">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                </NavDropdown>
                </div>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default MyNavbar