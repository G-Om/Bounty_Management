import { Input } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import "./Submission.css";

export const SubmissionComponent = () => {
  return (
    <div>
      <h1 className="pg-title">Typeface without relying</h1>
      <Col className="submission-container">
       
        <Row>
          <h3>Description</h3>
          <p className="w-50 justify-items-start">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface .
          </p>
        </Row>
        <Row >
          <h3>Details</h3>
          <p className="w-75 justify-items-start" >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            
          </p>
        </Row>
        <Row>
        <Col>
            <h5>Reward : </h5>
            </Col>
            <Col lg={10} md={5} xs={4}>
            <p>Your Reward</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <h5>Deadline : </h5>
            </Col>
            <Col  lg={10} md={5} xs={4}>
            <p>Time Remaining</p>
            </Col>
        </Row>
        <Row>
            <Col>Github Link:  </Col>
            <Col  lg={10} md={5} xs={4}>
            <Input className="w-100">Enter Your Github Link</Input></Col>
            
        </Row>
      </Col>
    </div>
  );
};
