import { Card, Col, Row, ListGroup, Button } from "react-bootstrap";
import "./Card.css";
export const CardComponent = () => {
  return (
    <div className="CardComponent">
      <h1 className="home-title">💰Bounties</h1>
      <Row xs={1} md={2} lg={3} className="g-3 cont-card">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/3d-render-modern-network-communications-background-with-plexus-design_1048-15596.jpg?w=1060&t=st=1681393926~exp=1681394526~hmac=dae26b9dc09a286c5068968e0567118fd4b4a740b8a960fb6264412b3d19d62a" />
              <Card.ImgOverlay>
                <Card.Title className="card-title">Card title</Card.Title>
              </Card.ImgOverlay>
              <Card.Text className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};