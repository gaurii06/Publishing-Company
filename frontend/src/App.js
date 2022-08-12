import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import DeveloperScreen from './screens/DeveloperScreen';
import BlogScreen from './screens/BlogScreen';
import EventScreen from './screens/EventScreen';

function App() {
  const {state}= useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>The Publishers</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                 Cart
                 {cart.cartItems.length>0 && (
                   <Badge pill bg="danger">
                     {cart.cartItems.length}
                   </Badge>
                 )}
              </Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav className="mr-auto">
              <Link to="/screens/DeveloperScreen" className="nav-link">
              <div>Team</div>
              </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/screens/BlogScreen" className="nav-link">
              <div>Blogs</div>
              </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/screens/EventScreen" className="nav-link">
              <div>Events</div>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      
      <main>
        <Container className="mt-2">
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/screens/DeveloperScreen" element={<DeveloperScreen />} />
          <Route path="/screens/BlogScreen" element={<BlogScreen />} />
          <Route path="/screens/EventScreen" element={<EventScreen />} />
        </Routes>
        </Container>
        </main>
        <footer>
          <div className="foot" >All rights reserved</div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
