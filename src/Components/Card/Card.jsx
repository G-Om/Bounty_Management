import { Card,Col, Row, ListGroup, Button } from "react-bootstrap";
import "./Card.css";
export const CardComponent = () => {
  return (
    <div className="CardComponent" >
      {/* <div></div>
      <div></div>
      <div class="card col">
        <image src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div> */}
      {/* <Card className="card-main" style={{backgroundColor:"rgb(138, 43, 226)"}}>
        <Card.Img className="card-img" variant="top" src="Bounty_Card_img.avif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <h1 className="car-title">💰Bounties</h1>
      <Row xs={1} md={2} lg={3} className="g-3 cont-card">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="Bounty_Card_img.avif" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
