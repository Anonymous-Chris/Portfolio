import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <div className='container'>
      <footer>
        <ul className="site-link" style={{textAlign:'center'}}>
         
          <hr></hr>
            <p>
            
            1802 Jackson Ave W, Oxford, MS 38655 USA
            <br/>
            (662) 638-9569
            <br/>
        
            Copyright &copy; {this.state.year}. Kshitij Lingthep. All rights reserved.
           </p>
      
        </ul>
      </footer>
      </div>
    );
  }
}

export default Footer;