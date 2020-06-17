import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './footer';
import welcome from '../imgs/welcome.png'
class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>


        <Grid className="landing-grid">
          <Cell col={12}>
           <br/>
           <br/>
           <br/>

           <img src={welcome}></img>
           <br/>
           <br/>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | My SQL | </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kshitij-lingthep/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Anonymous-Chris" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.facebook.com/skniyara" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

           {/* Twitter */}
           <a href="https://twitter.com/limbe_me" rel="noopener noreferrer" target="_blank">
           
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
     
      </div>
    )
  }
}

export default Landing;
