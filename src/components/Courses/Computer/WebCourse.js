import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Test.css";

function WebCourse(props) {
  return (
    <div>
      <Card.Body>
        <Card className="text-center">
          <Card.Header>{props.platform}</Card.Header>
          <Card.Body>
            <Card.Title>{props.label}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <br></br>
            <Button variant="primary" href={props.link}>
              Go to Course
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Card.Body>
    </div>
  );
}

export default WebCourse;
