import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageUrl} alt={props.imageAlt} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Visit Their Website</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
