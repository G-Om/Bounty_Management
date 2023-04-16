import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ethers } from "ethers";
import { Card } from "react-bootstrap";

const CardComponent = ({ _reward, _deadLine, _desc, _title }) => {
  return (
    <Card>
      <Card.Img variant="top" src="Bounty_Card_img.avif" />
      <Card.Body>
        <Card.Title>{_title.split(' / ')[0]}</Card.Title>
        <Card.Text>{_desc.split(' / ')[1]}</Card.Text>
        <Card.Text>
          <b>Reward:</b>
          {_reward}
        </Card.Text>
        <Card.Text>
          <b>Deadline:</b>
          {_deadLine}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Bounties = ({ contract, account }) => {
  const [desc, setDesc] = useState("asda");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [homepage, setHomepage] = useState(true);
  const [SubmissionPage, setSubmissionPage] = useState(false);

  const [noOfBOunties, SetnoOfBOunties] = useState("");
  const [reward, setReward] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [BountyIndex, setBountyIndex] = useState("");
  const [Submission, setSubmission] = useState("");
  const [SubmissionIndex, setSubmissionIndex] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // const [desc1,setDesc1 ] = useState('');
  // const [bountyin,SetBountyin ] = useState('');
  // const [balance, setBalance] = useState('');
  // const [numBounties, setNumBounties] = useState('');

  const handleRewardChange = (e) => {
    setReward(e.target.value);
  };
  const handleDeadChange = (e) => {
    const deadlineInput = e.target.value;
    // Convert date and time to epoch time
    const epochTime = new Date(deadlineInput).getTime() / 1000;
    setDeadLine(epochTime);
  };
  const handleBountyIndex = (e) => {
    setBountyIndex(e.target.value);
  };
  const handleSubmission = (e) => {
    setSubmission(e.target.value);
  };
  const handleSubmissionIndex = (e) => {
    setSubmissionIndex(e.target.value);
  };
  const handlesetTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlesetDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlesetDetail = (e) => {
    setDetail(e.target.value);
  };

  //getnumBOunties
  useEffect(() => {
    const str = title + " / " + description + " / " + detail;
    setDesc(str);
  }, [title, detail, description]);

  useEffect(() => {
    async function getNumBounties() {
      const numBounty = await contract.getNumBounties();
      SetnoOfBOunties(parseInt(numBounty));
    }
    getNumBounties();
  });
  //getBountyList
  useEffect(() => {
    async function getNumBounties() {
      const numBounty = await contract.getNumBounties();
      SetnoOfBOunties(parseInt(numBounty));
      console.log("Available bounties : ", parseInt(numBounty));
      const newCards = [];
      for (let i = 0; i < parseInt(numBounty); i++) {
        // Get the bounty detailss
        const bounty = await contract.bountyList(i);
        const val = 1000000000000000000;
        console.log(
          parseInt(bounty.reward) / val,
          bounty.deadline * 1000,
          bounty.description
        );
        console.log(cards);
        const newCard = {
          _reward: parseInt(bounty.reward) / val,
          _deadLine: bounty.deadline * 1000,
          _desc: bounty.description,
          _owner: bounty.owner,
        };
        newCards.push(newCard);
      }
      setCards([...cards, ...newCards]);
    }
    getNumBounties();
  }, [noOfBOunties]);

  useEffect(() => {
    const filtered = cards.filter((card) => card._owner === account);
    setFilteredCards(filtered);
  }, [cards]);

  //button function to create BOunty
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const rewardWei = ethers.utils.parseUnits(reward, "ether");
    console.log(desc);
    const createSubmit = await contract.createBounty(
      desc,
      rewardWei,
      deadLine,
      { value: rewardWei }
    );
    await createSubmit.wait();
    console.log(desc, reward, deadLine);
  };
  const handleCreateSubmission = async (e) => {
    e.preventDefault();
    const createSubmit = await contract.bountySubmission(
      BountyIndex,
      Submission
    );
    await createSubmit.wait();
    console.log("created submission : ", {
      "bounty index ": BountyIndex,
      "submission ": Submission,
    });
  };
  const handleSelectWinner = async (e) => {
    e.preventDefault();
    const createSubmit = await contract.selectBountyWinner(BountyIndex, [
      SubmissionIndex,
    ]);
    await createSubmit.wait();
    console.log(
      "winner selected for bounty ",
      BountyIndex,
      " is ",
      SubmissionIndex
    );
  };
  return (
    <div>
      <div className="navbar">
        <a className="navbar-item" href="#">
          Welcome to Bounties
        </a>
        <span>
          <button type="button" class="btn btn-dark" style={{"margin-right":"5rem"}}>
            {`${account.substring(0, 4)}...${account.substring(38)}`}
          </button>
        </span>
      </div>

      {homepage && (
        <>
          <Col>
            <h1 className="car-title">💰Your Bounties</h1>
            <Row xs={1} md={2} lg={3} className="g-3 cont-card">
              {filteredCards.map((card) => {
                return (
                  <Col className="card-column">
                    <CardComponent
                      key={card._desc}
                      _reward={card._reward}
                      _deadLine={card._deadLine}
                      _desc={card._desc}
                      _owner={card._owner}
                      _title={card._desc}
                    ></CardComponent>
                  </Col>
                );
              })}
            </Row>
            <h1 className="car-title">💰Available Bounties</h1>
            <Row xs={1} md={2} lg={3} className="g-3 cont-card">
              {cards.map((card) => {
                return (
                  <Col className="card-column">
                    <CardComponent
                      key={card._desc}
                      _reward={card._reward}
                      _deadLine={card._deadLine}
                      _desc={card._desc}
                      _owner={card._owner}
                      _title={card._desc}
                    ></CardComponent>
                  </Col>
                );
              })}
            </Row>
            {/* 
            <Row>
                  <h2>Available Bounties :</h2>
                  <div className="card-container">
                    {cards.map((card) => (
                      <Card
                        key={card._desc}
                        _reward={card._reward}
                        _deadLine={card._deadLine}
                        _desc={card._desc}
                        _owner={card._owner}
                      />
                    ))}
                  </div>
                </Row> */}

            <Row>
              <Form onSubmit={handleCreateSubmit}>
                <h2>create bounty : </h2>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    onChange={handlesetTitle}
                    placeholder="Enter Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    onChange={handlesetDescription}
                    placeholder="Enter Description"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="input"
                    onChange={handlesetDetail}
                    placeholder="Enter Details"
                  />
                </Form.Group>
                <Form.Group className="mb-3" value="reward">
                  <Form.Control
                    type="text"
                    onChange={handleRewardChange}
                    placeholder="Enter Reward"
                  />
                </Form.Group>
                <Form.Group className="mb-3" value="deadline">
                  <Form.Control
                    type="datetime-local"
                    onChange={handleDeadChange}
                    placeholder="Enter Deadline"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
            <br />
            <h2>create Submission : </h2>
            <Row>
              <Form onSubmit={handleCreateSubmission}>
                <Form.Group className="mb-3" value="bountyindx">
                  <Form.Control
                    type="input"
                    onChange={handleBountyIndex}
                    placeholder="Enter bounty index"
                  />
                </Form.Group>
                <Form.Group className="mb-3" value="submission">
                  <Form.Control
                    type="input"
                    onChange={handleSubmission}
                    placeholder="Enter github link"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
            <br />
            <p>Select bounty winner : </p>
            <Row></Row>
          </Col>
        </>
      )}
    </div>
  );
};

export default Bounties;
