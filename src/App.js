import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Picture from "./image/picture.jfif";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class App extends Component {
 
  state = {
    count: 0,
    fullName: "zaafrani houda",
    bio: "hello world !! this is my profil",
    imgSrc:  Picture ,
    profession: "developpeur web",
    shows: false,
  };

 componentDidMount=()=>{
    setInterval(() => {
      this.setState({count : this.state.count+1})
    }, 1000);
  }

  handleClick = () => {
    this.setState({ shows: !this.state.shows })
    this.setState({count : this.state.count = 0})
  }

  render() {
    return (
      // we style (inline style) this div that contain our card and button
      <div
        style={{
          display: "flex",
          flexDirection: "colomn",
          margin: 10,
          justifyContent: "center",
        }}
      >
        <div>
          {this.state.shows && (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.state.imgSrc} />
              <Card.Body>
                <Card.Title>full name : {this.state.fullName}</Card.Title>
                <Card.Text>
                  {this.state.bio}
                  <br />
                  <b> Profession : </b> {this.state.profession}
                  <div>
                    <b>time of swhowen profile : </b>
                    {this.state.count}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
        <div>
          <Button
            onClick={this.handleClick}
            variant="warning"
            style={{ width: 290 }}
          >
            Schow us the profil
          </Button>
        </div>
      </div>
    );}
          }

