import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import attendance from "../imgs/attendance.jpg";
import weather from "../imgs/weather.jpg";
import hangman from "../imgs/hangman.jpg";
import jdbc from "../imgs/jdbc.png";
import wip from "../imgs/wip.png";
import portfolio from "../imgs/portfolio.jpg";
import news from "../imgs/news.jpg";
import logo from "../imgs/logo.png";
// import task from "../imgs/task.jpg";
import Info from "./Info";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <div className="projects-grid" style={{ marginBottom: "10px" }}>
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("https://s3.amazonaws.com/media.eremedia.com/uploads/2015/12/21130345/shutterstock_223963798-700x467.jpg") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                Learning new website features(Responsive using bootstrap, React
                Grid Layout).
                <br />
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/overall"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>

                <a
                  href="https://anonymous-chris.github.io/overall/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${attendance}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                Designed an attendance tracking application for the Department
                of Mathematics, at The University of Mississippi.
                <br />
                <a href=" https://olemiss-tutoring.herokuapp.com/">
                  https://olemiss-tutoring.herokuapp.com/
                </a>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/Full-final"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>

                <a
                  href="https://olemiss-tutoring.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${weather}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                Used RESTFUL APIs to extract weather from the input of the
                location of the user by converting the input into latitude,
                longitude and got weather from darksky.net API.
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/Weather-app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>

                <a
                  href="https://blueberry-pie-24582.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <div className="projects-grid">
            {/* Project 4 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${hangman}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                Used RESTFUL APIs to get random country from{" "}
                <a
                  href="https://restcountries.eu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://restcountries.eu/
                </a>
                .
                <br />
                <br />
                Takes input using keypress!
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/Hangman"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>

                <a
                  href="https://anonymous-chris.github.io/hangman/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 5 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("data:image/jpeg;base64,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") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                Create Amazon Clone(Frontend using Context API and functional
                components) <br />
                ----------------- Work in Progress! ------------------
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/amazonpractice"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>

                <a
                  href="https://anonymous-chris.github.io/amazonpractice/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 6 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${wip}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                --------------------Work in
                Progress-----------------------------------------------------------------------------------
              </CardText>
              {/* <CardActions border>
                <Button colored>GitHub</Button>

                <Button colored>Live Demo</Button>
              </CardActions> */}
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: `url("${jdbc}") center / cover`,
              }}
            ></CardTitle>
            <CardText>
              Created an account based program in Java using JDBC and MySQL.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/Anonymous-Chris/JDBC"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          {/* <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: `url("${wip}") center / cover`,
              }}
            ></CardTitle>
            <CardText>
              --------------------Work in
              Progress-----------------------------------------------------------------------------------
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}

          {/* Project 3 */}
          {/* <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: `url("${wip}") center / cover`,
              }}
            ></CardTitle>
            <CardText>
              --------------------Work in
              Progress-----------------------------------------------------------------------------------
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>

              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${portfolio}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                Created a portfolio website.
                <br />
                <a href="https://anonymous-chris.github.io/Portfolio/#/">
                  kshitijlingthep.com
                </a>
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/Portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>
                <a
                  href="https://anonymous-chris.github.io/Portfolio/#/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${news}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                --------------------Work in
                Progress-----------------------------------------------------------------------------------
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/CS458"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>
                {/* <a href="" target="_blank" rel="noreferrer noopener">
          <Button colored>Live Demo</Button>
          </a> */}
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${logo}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                --------------------Work in
                Progress-----------------------------------------------------------------------------------
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/LingsKitchen"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <br />
          <div className="projects-grid">
            {/* Project 4 */}
            {/* <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${task}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                --------------------Work in
                Progress-----------------------------------------------------------------------------------
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/Task-App"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card> */}

            {/* Project 5 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("https://mosswebworks.com/wp-content/uploads/2020/11/What-Is-A-WordPress-Child-Theme-Why-We-Use-It.png") center / cover`,
                }}
              ></CardTitle>
              <CardText>Create React Child Theme in Wordpress</CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/React-Child-Theme"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>GitHub</Button>
                </a>

                {/* <Button colored>Live Demo</Button> */}
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 6 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${wip}") center / cover`,
                }}
              ></CardTitle>
              <CardText>Vue Learning</CardText>
              <CardActions border>
                <a
                  href="https://github.com/Anonymous-Chris/Vuelearning"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Overall</Button>
                </a>

                <a
                  href="https://github.com/Anonymous-Chris/vuegraphs"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button colored>Graphs</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 6 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "176px",
                  background: `url("${wip}") center / cover`,
                }}
              ></CardTitle>
              <CardText>
                --------------------Work in
                Progress-----------------------------------------------------------------------------------
              </CardText>
              {/* <CardActions border>
                <Button colored>GitHub</Button>

                <Button colored>Live Demo</Button>
              </CardActions> */}
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return <Info />;
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>Others</Tab>
          <Tab>Info</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
