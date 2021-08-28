import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import attendance from '../imgs/attendance.jpg'
import weather from '../imgs/weather.jpg'
import hangman from '../imgs/hangman.jpg'
import jdbc from '../imgs/jdbc.png'
import wip from '../imgs/wip.png'
import portfolio from '../imgs/portfolio.jpg'
import news from '../imgs/news.jpg'
import logo from '../imgs/logo.png'
import task from '../imgs/task.jpg'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div>
        <div className="projects-grid" style={{marginBottom:'10px'}}>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: `url("${attendance}") center / cover`}} ></CardTitle>
            <CardText>
                Designed an attendance tracking application for the Department of Mathematics, at The University of Mississippi.
                <br/>
               <a href=' https://olemiss-tutoring.herokuapp.com/'> https://olemiss-tutoring.herokuapp.com/</a>
            </CardText>
            <CardActions border>

    
            <a href="https://github.com/Anonymous-Chris/Full-final" target="_blank" rel="noreferrer noopener">
            <Button colored>GitHub</Button>
            </a>
            
            <a href="https://olemiss-tutoring.herokuapp.com/" target="_blank" rel="noreferrer noopener">
            <Button colored>Live Demo</Button>
            </a>
          
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: `url("${weather}") center / cover`}} ></CardTitle>
            <CardText>
              Used RESTFUL APIs to extract weather from the input of the location of the user by converting the input into latitude, longitude and got weather from darksky.net API.
            </CardText>
            <CardActions border>


            <a href="https://github.com/Anonymous-Chris/Weather-app" target="_blank" rel="noreferrer noopener">
            <Button colored>GitHub</Button>
            </a>
            
            <a href="https://blueberry-pie-24582.herokuapp.com/" target="_blank" rel="noreferrer noopener">
            <Button colored>Live Demo</Button>
            </a>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: `url("${hangman}") center / cover`}} ></CardTitle>
            <CardText>
              Used RESTFUL APIs to get random country from <a href="https://restcountries.eu/" target="_blank" rel="noreferrer noopener">https://restcountries.eu/</a>.
              <br/>
              <br/>
              Takes input using keypress!
            </CardText>
            <CardActions border>
            <a href="https://github.com/Anonymous-Chris/Hangman" target="_blank" rel="noreferrer noopener">
            <Button colored>GitHub</Button>
            </a>
            
            <a href="https://anonymous-chris.github.io/hangman/" target="_blank" rel="noreferrer noopener">
            <Button colored>Live Demo</Button>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
        </div>
         <div className="projects-grid">
         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: 'black', height: '176px', background: `url("https://www.minttm.com/blog/wp-content/uploads/2019/03/Amazon-Clone.jpg") center / cover`}} ></CardTitle>
           <CardText>
               Create Amazon Clone(Frontend using Context API and functional components) <br/>
              ----------------- Work in Progress! ------------------
          </CardText>
           <CardActions border>
   
   
           <a href="https://github.com/Anonymous-Chris/amazonpractice" target="_blank" rel="noreferrer noopener">
           <Button colored>GitHub</Button>
           </a>
           
           <a href="https://anonymous-chris.github.io/amazonpractice/" target="_blank" rel="noreferrer noopener">
            <Button colored>Live Demo</Button>
            </a>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
   
         {/* Project 5 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '176px', background: `url("https://s3.amazonaws.com/media.eremedia.com/uploads/2015/12/21130345/shutterstock_223963798-700x467.jpg") center / cover`}} ></CardTitle>
           <CardText>
              Learning new website features(Responsive using bootstrap).<br/>
              ----------------- Work in Progress! ------------------

             </CardText>
           <CardActions border>
           <a href="https://github.com/Anonymous-Chris/overall" target="_blank" rel="noreferrer noopener">
           <Button colored>GitHub</Button>
           </a>
           
           <a href="https://anonymous-chris.github.io/overall/" target="_blank" rel="noreferrer noopener">
            <Button colored>Live Demo</Button>
            </a>
   
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
   
         {/* Project 6 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: 'black', height: '176px', background: `url("${wip}") center / cover`}} ></CardTitle>
           <CardText>
           --------------------Work in Progress-----------------------------------------------------------------------------------
           </CardText>
           <CardActions border>
       
           <Button colored>GitHub</Button>
   
    
           <Button colored>Live Demo</Button>
       
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>
   
         
       </div>
       </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: `url("${jdbc}") center / cover`}} ></CardTitle>
          <CardText>
              Created an account based program in Java using JDBC and MySQL.
          </CardText>
          <CardActions border>

  
          <a href="https://github.com/Anonymous-Chris/JDBC" target="_blank" rel="noreferrer noopener">
          <Button colored>GitHub</Button>
          </a>
         
          
        
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: `url("${wip}") center / cover`}} ></CardTitle>
          <CardText>
          --------------------Work in Progress-----------------------------------------------------------------------------------
          </CardText>
          <CardActions border>


          <Button colored>GitHub</Button>
         
          
         
          <Button colored>Live Demo</Button>
        

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: `url("${wip}") center / cover`}} ></CardTitle>
          <CardText>
          --------------------Work in Progress-----------------------------------------------------------------------------------
          </CardText>
          <CardActions border>
      
          <Button colored>GitHub</Button>
  
   
          <Button colored>Live Demo</Button>
      
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: `url("${portfolio}") center / cover`}} ></CardTitle>
          <CardText>
              Created a portfolio website.
              <br/>
              <a href='kshitijlingthep.com'>kshitijlingthep.com</a>
          </CardText>
          <CardActions border>

  
          <a href="https://github.com/Anonymous-Chris/JDBC" target="_blank" rel="noreferrer noopener">
          <Button colored>GitHub</Button>
          </a>
          <a href="https://kshitijlingthep.com" target="_blank" rel="noreferrer noopener">
          <Button colored>Live Demo</Button>
          </a>
        
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: `url("${news}") center / cover`}} ></CardTitle>
          <CardText>
          --------------------Work in Progress-----------------------------------------------------------------------------------
          </CardText>
          <CardActions border>


          <a href="https://github.com/Anonymous-Chris/CS458" target="_blank" rel="noreferrer noopener">
          <Button colored>GitHub</Button>
          </a>
          <a href="https://github.com/Anonymous-Chris/CS458" target="_blank" rel="noreferrer noopener">
          <Button colored>Live Demo</Button>
          </a>
        

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: `url("${logo}") center / cover`}} ></CardTitle>
          <CardText>
          --------------------Work in Progress-----------------------------------------------------------------------------------
          </CardText>
          <CardActions border>
      
          <a href="https://github.com/Anonymous-Chris/LingsKitchen" target="_blank" rel="noreferrer noopener">
          <Button colored>GitHub</Button>
          </a>
          <a href="h" target="_blank" rel="noreferrer noopener">
          <Button colored>Live Demo</Button>
          </a>
      
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        
      </div>
        <br/>
      <div className="projects-grid">
      {/* Project 4 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: `url("${task}") center / cover`}} ></CardTitle>
        <CardText>
        --------------------Work in Progress-----------------------------------------------------------------------------------
        </CardText>
        <CardActions border>


        <a href="https://github.com/Anonymous-Chris/Task-App" target="_blank" rel="noreferrer noopener">
        <Button colored>GitHub</Button>
        </a>
        
      
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 5 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: 'black', height: '176px', background: `url("${wip}") center / cover`}} ></CardTitle>
        <CardText>
        --------------------Work in Progress-----------------------------------------------------------------------------------
        </CardText>
        <CardActions border>


        <Button colored>GitHub</Button>
       
        
       
        <Button colored>Live Demo</Button>
      

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 6 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: 'black', height: '176px', background: `url("${wip}") center / cover`}} ></CardTitle>
        <CardText>
        --------------------Work in Progress-----------------------------------------------------------------------------------
        </CardText>
        <CardActions border>
    
        <Button colored>GitHub</Button>

 
        <Button colored>Live Demo</Button>
    
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      
    </div>
      </div>
      )
    } 

      
    

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>Others</Tab>

        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
