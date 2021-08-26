import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <React.Fragment>
        <ul className="site-link" style={{textAlign:'center'}}>
         
          <hr></hr>
            <p>
            
            1900 E Capitol Dr, Milwaukee, WI, 53211 USA
            <br/>
            (662) 638-9569
            <br/>
        
            Copyright &copy; {this.state.year}. Kshitij Lingthep. All rights reserved.
           </p>
      
        </ul>
        </React.Fragment>
    );
  }
}

export default Footer;