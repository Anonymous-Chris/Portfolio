import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import himalayas from "../imgs/himalayas.jpg";
import me_2016 from "../imgs/me_2016.jpg";
import robots from "../imgs/robots.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div>
              <img
                src={himalayas}
                alt="himalayas"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <br />
            <div>
              <br />
              <br />
              <h3>Interests</h3>
              <p>
                I love travelling and exploring new places with my family. In
                the last four years here in the States, I have travelled major
                plaes from the East Coast(Ocean City, MD) to the west coast(San
                Francisco, California). In the coming days, I would like to
                visit Colorado, Grand Canyon and Vegas.{" "}
              </p>
              <p>Sometimes, I love to write as well.</p>
              <p>
                Apart from this, I love to solve new number problems and create
                websites as well. I am still learning how to create better apps
                using latest technologies such as MEAN, MERN stack.{" "}
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div>
              <img
                src={robots}
                alt="robots"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </Cell>

          <Cell col={6}>
            <div>
              <br />

              <h3>Introduction</h3>
              <p>
                My name is <b>Kshitij Linghtep</b>. I also go by the nick name "
                <b>Chris</b>". I am from The Land of the Himalayas, Nepal. I
                completed my education till High School in Kathmandu, the
                capital city of Nepal.After that, I went to Moscow, Russia to
                study Russian Language and pre-Med. After completing that, I
                came to United States of America to pursue my education in
                Computer and Information Science at The University of
                Mississippi. I graduated on May 2020. After that, I started
                working as a <b>R & D | Frontend Engineer</b> from July 2020 at
                Foxconn located at Mt. Pleasant, Wisconsin. I am
                <b>
                  <i>actively looking for a job.</i>
                </b>{" "}
              </p>
              <br />
              <br />
              <br />
            </div>
            <br />
            <div>
              <img
                src={me_2016}
                alt="me"
                style={{ width: "100%", height: "100%" }}
              ></img>
            </div>
            <br />
            <br />
            <br />
            <div>
              <br />
              <br />
              <br />
              <h3>Coding</h3>
              <p>
                I worked as an IT officer back in my dad's company. From that
                moment on, I always imagined how machines/computers worked.
                After I started my education here in the States, I felt really
                attracted to the field of coding and making new applications.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
