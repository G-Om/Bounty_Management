import { Card, Col, Row, ListGroup, Button } from "react-bootstrap";
import "./Card.css";
export const CardComponent = () => {
  return (
    <div className="CardComponent">
<<<<<<< HEAD
     
      <Col>
        <Row>
        <h1 className="car-title">💰Your Bounties</h1>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
        <Row>
          <h1 className="car-title">💰Ypur Submissions</h1>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
        <Row>
          <h1 className="car-title">💰Available Bounties</h1>
          <Row xs={1} md={2} lg={3} className="g-3 cont-card">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col className="card-column">
                <Card>
                  <Card.Img variant="top" src="Bounty_Card_img.avif" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Col>
=======
      <h1 className="home-title">💰Bounties</h1>
      <Row xs={1} md={2} lg={3} className="g-3 cont-card">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="card">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1392424035/photo/web3-next-generation-world-wide-web-blockchain-technology-with-decentralized-information.jpg?b=1&s=170667a&w=0&k=20&c=tX9HrPDwtcZ2YYEwjp0_0mBUmmwP2XdvDGPmeVe1FC8="
                className="card-image"
              />
              <Card.ImgOverlay>
                <Card.Title className="card-title">Card title</Card.Title>
              </Card.ImgOverlay>
              <Card.Text className="card-text">
                <div className="card-title2">Card-Title</div>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
>>>>>>> f32b21993e88ec5efef2a1ecf7f47a86995e26b9
    </div>
  );
};
