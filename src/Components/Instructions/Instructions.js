import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/codaisseur-logo-long.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

class Instructions extends Component {
  state = {
    startInstructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nisi, pulvinar quis erat at, blandit iaculis nisl. In feugiat tincidunt ligula eget condimentum. Praesent nulla odio, iaculis eu tortor quis, rutrum posuere lorem. Proin eget arcu id mi pulvinar imperdiet. Fusce at ante vitae justo maximus accumsan. Suspendisse tempus at purus in molestie. Nunc eu magna condimentum, pulvinar lorem eu, tincidunt dui. Etiam laoreet faucibus nisi, quis viverra lacus sodales ac. Morbi ac dui a odio placerat iaculis. Quisque imperdiet massa quis hendrerit laoreet. Suspendisse molestie viverra dapibus.",
    endInstructions: "Thanks for taking the test! Do this next"
  };

  render() {
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    } else
      return (
        <div>
          <Box m={10}>
            <header>
              <img
                className="logo"
                height="80px"
                align="middle"
                alt="app logo"
                src={logo}
              ></img>
            </header>
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <p>
                <i>
                  {
                    "Read the instructions below. When you feel ready, click on the button below to start the test."
                  }
                </i>
              </p>
            </Typography>
          </Box>
          <Box m={10}>
            <Typography
              component="h6"
              variant="h6"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              <p>{this.state.startInstructions}</p>
            </Typography>
          </Box>
          <div>
            <Box m={10} align="center">
              <Link to={"/admission-test"}>
                <Button variant="contained" color="primary">
                  Start test
                </Button>
              </Link>
            </Box>
            <Box mt={5}></Box>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login })(Instructions);
