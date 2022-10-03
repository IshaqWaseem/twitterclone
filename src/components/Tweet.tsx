import Avatar from "boring-avatars";
import React from "react";
import ReplyIcon from "./icons/ReplyIcon";
import RetweetIcon from "./icons/RetweetIcon";
import LikeIcon from "./icons/LikeIcon";
import ShareIcon from "./icons/ShareIcon";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Tweet() {
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
              <Row>
                <Col>snvsongrosingroignorisgnoi</Col>
              </Row>
              <Row>
                <Col>
                  <ReplyIcon />
                </Col>
                <Col>
                  <RetweetIcon />
                </Col>
                <Col>
                  <LikeIcon />
                </Col>
                <Col>
                  <ShareIcon />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
