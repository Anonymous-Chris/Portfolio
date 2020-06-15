import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
        {
          !this.props.endYear ? <p>{this.props.startYear}</p> :  <p>{this.props.startYear} - {this.props.endYear}</p>
        }
         
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h5>{this.props.jobCompany}</h5>
          <p>{this.props.jobDescription}</p>
          <p>{this.props.moreInfo}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
