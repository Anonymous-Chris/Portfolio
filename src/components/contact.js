import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import portfolio from '../imgs/portfolio.jpg';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
      <div>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kshitij Lingthep</h2>
            <img
              src={portfolio}
              alt="my"
              style={{height: '250px' }}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>A Computer Science graduate, with 1 year of R&D | Frontend developer experience,  actively looking for a full time position.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (662) 638-9569
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    kshitij.lingthep@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    kshitij.lingthep
                   
                  </ListItemContent>
                </ListItem>
              </List>

              
            </div>
          </Cell>
          
        </Grid>
        </div>
   
      </div>
    )
  }
}

export default Contact;
