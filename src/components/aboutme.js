import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import himalayas from '../imgs/himalayas.jpg'
import me_2016 from '../imgs/me_2016.jpg'

class About extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={6}>
          <div>
            <img src ={himalayas} style={{width:'100%', height:'100%'}}></img>
            </div>
            <div>
              <h3>Interests</h3>
              <p>I love travelling with my family. In the last four years here in the States, I have travelled major plaes from the East Coast(Ocean City, MD) to the west coast(San Francisco, California). 
              In the coming days, I would like to visit Colorado, Grand Canyon and Vegas. </p>
              <p>Sometimes, I love to write as well.</p>
            </div>
          </Cell>

          <Cell col={6}>
          <div>
          <h3>Introduction</h3>
          <p >My name is <b>Kshitij Linghtep</b>. I also go by the nick name "<b>Chris</b>". I am from The Land of the Himalayas, Nepal. 
          I completed my education till High School in Kathmandu, the capital city of Nepal.After that, I went to
           Moscow, Russia to study Russian Language and pre-Med. After completing that, I came to United States of America to pursue my
           education in Computer and Information Science at The University of Mississippi. I recently graduated and am <b><i>actively looking for a job.</i></b> </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
       
          </div>

          <div>
          <img src ={me_2016} style={{width:'100%', height:'100%'}}></img>
          </div>

         
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
