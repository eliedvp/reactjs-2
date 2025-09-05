import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css'; 

export default function DemoBootstrapLayout() {
  return (
    <div className="p-4 fresh-bg">
      {/* Barre de navigation  */}
      <Navbar expand="lg" className="rounded-3 shadow-sm fresh-navbar">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-white fs-3 artistic-font">🌿 FreshStyle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#galerie" className="text-white fw-semibold">Galerie</Nav.Link>
              <Nav.Link href="#atelier" className="text-white fw-semibold">Atelier</Nav.Link>
              <Nav.Link href="#contact" className="text-white fw-semibold">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Titre  */}
      <Container className="my-5 text-center">
        <h1 className="fw-bold display-4 artistic-title"> Créativité </h1>
        <p className="subtitle">
          Un ... pour embellir vos vies.
        </p>
      </Container>

      {/* 3 Cartes  */}
      <Container>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-lg rounded-4 fresh-card">
              <Card.Img variant="top" src="https://picsum.photos/600/300?random=20" alt="Illustration 1" className="rounded-top-4 card-img-hover" />
              <Card.Body>
                <Card.Title className="fw-bold card-title">🌿 Nature</Card.Title>
                <Card.Text>
                  La fraîcheur de la nature inspirée de nature.
                </Card.Text>
                <Button variant="success" className="rounded-pill px-4 btn-hover">Explorer</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-lg rounded-4 fresh-card">
              <Card.Img variant="top" src="https://picsum.photos/600/300?random=21" alt="Illustration 2" className="rounded-top-4 card-img-hover" />
              <Card.Body>
                <Card.Title className="fw-bold card-title">💧 Fraîcheur</Card.Title>
                <Card.Text>
                  Un style moderne et fluide, comme une vague de créativité.
                </Card.Text>
                <Button variant="info" className="rounded-pill px-4 btn-hover">Découvrir</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="h-100 border-0 shadow-lg rounded-4 fresh-card">
              <Card.Img variant="top" src="https://picsum.photos/600/300?random=22" alt="Illustration 3" className="rounded-top-4 card-img-hover" />
              <Card.Body>
                <Card.Title className="fw-bold card-title">🌈 Couleurs</Card.Title>
                <Card.Text>
                  Des teintes fraîches et éclatantes qui donnent vie à vos idées.
                </Card.Text>
                <Button variant="warning" className="rounded-pill px-4 btn-hover">Voir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
