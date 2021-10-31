import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router";
const Header = () => {
  const { user, setUser, logOut } = useAuth();
  const history = useHistory();
  const handleLogOut = () => {
    console.log("loggin out...");
    logOut();
    history.push("/login");
    setUser({});
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="data:image/webp;base64,UklGRiIEAABXRUJQVlA4TBUEAAAvdcAIEGeioG0jx/wx3/j9FOZfIJDkLzvCahtJau49LrMR/XcHJaA2bQMGr065A+h/vA+pG0IKIaSQwsODgMAwEHh7UCh452DIqHAQAgKCgcAQOAgK2wew0dAhEBgOMhao27adttW0DUkUsmQMWOfix8zMDO//Qtnn2G7a/xH9h+C2jSSpMrV1d9u5uvYL7rHL0Xv3BGUHINu5pyZbkOzvAtnf0Th76mUPUXeTZ3MCXN7rRAYA+fEBAFaYlnvaxpWq3rGs3T3Ez6oevpqpF1sKr2R7t7lssl8AmMWhWuMG0vtMGfSOQgR280y4JCiqh3PeF8ueuJmRNpay8cvbN9758odffnznxTNG8ek37xOA57aLFDPYLFZhuRDXszc//vvf///57ZPPf/r156+++PXP/35/07n3vv7jrw/t9uDm/CncEjmwM8wVYXFiQBBRCCa0tZnj2cgrt0Q2AHIDxX6lXE9z64B+lAmp0V2mtJXdiO0KFKaDbJdljSozXbxakccPFrMWAHoRGSO6E0EZlNNWORoRt1a4GfL+Qb8WFVvvEAH+DYlrDwA1KxbAWUQSJwVxDdA6lwK1qUZZecNafnEpAXRM7RpoJg5nDeUCAGHUio03oITg5KRjY5zoSWO85dJWNcccWNi5AsCFqI3BWA0AQYnETJykwAgUlkakU4AbAGOKpJ5MlQKLwlGEQUduaxBzxchQbCMTCM4MrlEgE4BWasLETkKJZ2Y4GaGRguG0g1HpT1KgQE+JGhM9rx7rcI6E+DY+t6grI0txXGA1s8cTg8GHqZ1ZB0DQoDqZQDASgtAkOdP5FggDsqPOvV69IJv7VMuajdW2opyX4sVorzCUMgDaKmfE8YatVMktVwljRW+ZuaZpGeNIhFScqqhQik3RaCWaeSSNkizX2WiSFNHVgp4KgKQsxu9VlJJKTFcR5bFXQz29hq1yP+WGnUZwoDMLesqHGgJzMdsTEUoAP7qHSlEKQ0xOpX9lh71xYTs4dfo4ozqjnAwzUalF54uYVGjSoztLsUFlCy1eXbWq3HCijX7KAZlXaxNfsNJS7NUa1whX7a9XuaAfVVQxumj1nPOsz6qwgrTQXwGPqbuT0LyMymKsPVVSg3ARVYJcQ8s2vujxYH9eq+LWHo0kyDtzgzawn/opJfSqDEz8HFCPhtnDOdSJNjLJes69oTy4PZ1YO1XUmyrMTFL680VClPohAsNEYMUb9bTiFOLyOReTyq1h/GeldLhbcg2UK/RTVTcArflJl3OLRoXT1eMW+cfVrLTuSxR2Mtple3UxybdTM0ShNVccu9gcmaRWHdwdhS8P0qoVC41MkH9kYr300g82HiL4SOWd775/lwB8+OlX33/72UevNaBX7jHL2x+8ZV2xX75wT0AcAA=="
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {user.email
              
              ?
              <NavDropdown title="Admin"  id="nav-dropdown">
                <NavDropdown.Item as={Link} to='/Admin/addService' eventKey="4.1">Add Service</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" as={Link} to='/Admin/manageAllOrders'>
                  Manage All Orders
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3" as={Link} to= '/Admin/MyOrder'>
                  My Order
                </NavDropdown.Item>
              </NavDropdown>
        :""}
              <Nav.Link as={Link} to="/plans">
                Plans
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/gallary">
                Gallary
              </Nav.Link>
              {user.email ? (
                <>
                  <button
                    className="btn btn-sm me-2 btn-danger text-white"
                    onClick={handleLogOut}
                  >
                    LogOut
                  </button>{" "}
                  <p className="text-white mt-2">hey, {user.displayName}</p>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
