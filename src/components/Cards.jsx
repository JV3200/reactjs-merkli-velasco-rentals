import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <Card style={{ width: "18rem" }} class="card">
      <Card.Img variant="top" src={props.img} alt={props.imageAlt} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button class="btn" href={props.websiteUrl}>
          Visit Their Website
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
