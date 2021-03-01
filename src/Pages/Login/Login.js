import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
    const loginData = require('../../data/authenticate.json');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [count, setCount] = useState(0)
    const [error, setError] = useState(false)
    function handleEmpty() {
        return (username.length === 0 || password.length === 0)
    }
    function handleInvalid() {
        const logins = loginData.logins
        if (logins.filter(user => user.username === username).length === 0) {
            return (true)
        } else {
            if (loginData.logins[loginData.logins.map(e => e.username).indexOf(username)].password !== password) {
                return (true)
            }
            else {
                return (false)
            }
        }
    }
    return (
        <div className={styles.Login}>
            <div>
                <h1>Login Page</h1>
            </div>
            <h3 className={styles.Fail} >{error && `Invalid Login ${count}`}</h3>
            <Form onSubmit={(event) => event.preventDefault()}>
                <Form.Group size="lg" controlId="user">
                    <Form.Label>Login:</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group size="lg" controlId="pass">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Link to={handleInvalid() ? "" : "/home"} >
                    <Button variant="primary" type="submit" disabled={handleEmpty()} onClick={function () { setError(handleInvalid()); setCount(prev => prev + 1) }}>
                        Sign In
                    </Button>
                </Link>
            </Form>
        </div>
    )
}