import React, {useEffect} from 'react';
import {Container, Row, Button} from "react-bootstrap";
import "./LandingPage.css";


const LandingPage = ({history}) => {

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history, userInfo]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if(userInfo) {
        history.push("/mynotes");
    }
}, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
            <div className="intro-text">
                <div>
                    <h1 className='title'>Welcome to Note it</h1>
                    <p className="subtitle">One safe place for all your notes</p>
                </div>

                <div className="buttonContainer">
                    <a href="/login">
                        <Button size="lg" className="loginbutton">Login</Button>
                    </a>


                    <a href="/register">
                        <Button size="lg" 
                        className="loginbutton"
                        variant="danger"
                        
                        >Sign Up</Button>
                    </a>
                </div>

            </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
