import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import formBackground from "../assets/images/sunset";

function LoginRegister() {
  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      </Form>
      <Button variant="btn btn-success" type="submit">
        Login
      </Button>
      <br />
      <a href="register" className="register-link">
        Don't have and account? Register here.
      </a>
    </div>
  );
}

export default LoginRegister;
