import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  Container,
  Row,
  Col,
  CardSubtitle,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import img from "../../assets/Iss.JPG";

const Contact = () => {
  return (
    <Container className="mb-5">
      <h1 className="text-success mt-3">Contact Me</h1>
      <Card>
        <Row>
          <Col md="4 ml-5 mt-5">
            <CardImg src={img}></CardImg>
          </Col>
          <Col md="6">
            <form>
              <CardTitle className="text-success mt-3 ml-5">
                <h3>Issouf Kiema</h3>
              </CardTitle>
              <CardSubtitle className="text-monospace ml-5">
                Electrical Engineer/ Full stack web developper
              </CardSubtitle>
              <CardText className="ml-5">
                Contact me with any question...
              </CardText>
              <FormGroup className="mx-5">
                <Label htmlFor="email">Name:</Label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="John Smith"
                  required
                />
              </FormGroup>
              <FormGroup className="mx-5">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
              </FormGroup>
              <FormGroup className="mx-5">
                <Label htmlFor="message">Message:</Label>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                ></Input>
              </FormGroup>
              <FormGroup className="ml-5">
                <Button className="btn btn-lg m-2 btn-success" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Contact;
