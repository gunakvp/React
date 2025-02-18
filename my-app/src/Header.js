import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <div className="Header">
      
      <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
