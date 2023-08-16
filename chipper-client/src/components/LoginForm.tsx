import React, { useState, ChangeEvent, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
