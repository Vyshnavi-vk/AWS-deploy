import React, {useEffect, useState} from 'react'
import { Form } from 'react-bootstrap'
import MainPage from '../../components/MainPage'
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/userActions";



const LoginPage = ({history}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo} = userLogin;

    useEffect(() => {
        if(userInfo) {
            history.push("/mynotes");
        }
    },[history, userInfo]);

    const submithandler = (e) => {
        e.preventDefault();
        
        dispatch(login(email, password));
        
    }

  return (
    <MainPage title="LOGIN">
        <div className="loginContainer">
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form onSubmit={submithandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    />

                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    />

                </Form.Group>
                <Button
                variant="primary" type="submit"
                >Submit</Button>
            </Form>

            <Row className="py-3">
                <Col>
                New User ? <Link to="/register">Register here</Link> </Col>

            </Row>

        </div>
    </MainPage>
  );
};

export default LoginPage

