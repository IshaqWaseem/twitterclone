import React from "react";
import { Card, Button, Col, Row, Form } from "react-bootstrap";
import Avatar from "boring-avatars";
const PostCard = () => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Row>
          <Col xs={1} style={{ width: "50px" }}>
            <Avatar
              size={40}
              name="Maria Mitchell"
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </Col>
          <Col xs={10}>
            <Row>
              <Form>
                <Form.Control
                  style={{ height: "5rem" }}
                  type="text"
                  placeholder="What's happening?"
                  as="textarea"
                />
              </Form>
            </Row>
            <Row xs={2}>
              <Button
                variant="primary"
                style={{ width: "5rem" }}
                className="ms-auto mt-1"
              >
                Post
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default PostCard;
