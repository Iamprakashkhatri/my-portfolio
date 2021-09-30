import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  gitBtnClickDjango1() {
    window.open("")
  }
  liveBtnClickDjango1() {
    window.open("http://smarttectclientportal.pythonanywhere.com/")
  }

  liveBtnClickDjango2(){
    window.open("http://13.233.121.131/login/")
  }


  gitBtnClickDjango3(){
    window.open("https://gitlab.com/padkhu/sms")
  }

  liveBtnClickDRF1(){
    window.open("https://ultraestore.com/")
  }

  liveBtnClickDRF2(){
    window.open("https://test.ebidhya.com/")
  }

  liveBtnClickDRF3(){
    window.open("https://api.dizhunk.com/dizhunk-admin/")
  }

  gitBtnClickReact1() {
    window.open("https://github.com/Iamprakashkhatri/crwn-clothing")
  }
  liveBtnClickReact1() {
    window.open("https://app-for-clothing.herokuapp.com/")
  }
  gitBtnClickReact2(){
    window.open("https://github.com/Iamprakashkhatri/DjangoReact")
  }
  gitBtnClickReact3(){
    window.open("https://github.com/Iamprakashkhatri/ultrafrontend")
  }

  gitBtnClickJs() {
    window.open("https://github.com/Iamprakashkhatri/js-budget-app")
  }
  liveBtnClickJs() {
    window.open("https://iamprakashkhatri.github.io/js-budget-app/");
}
gitBtnClickJs2() {
  window.open("https://github.com/Iamprakashkhatri/js-dice-game");
}
liveBtnClickJs2(){
  window.open("https://iamprakashkhatri.github.io/js-dice-game/")
}
gitBtnClickJs3(){
  window.open("https://github.com/Iamprakashkhatri/omnifood")
}
liveBtnClickJs3(){
  window.open("https://iamprakashkhatri.github.io/omnifood/")
}

  toggleCategories() {

    if(this.state.activeTab === 0) {
      return (
           <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/1*1OBwwxzJksMv0YDD-XmyBw.png) center / cover'}} >Django Project #1</CardTitle>
            <CardText>
              The name of the project is client portal. The system provides the  tool for the communication between admin,client and the members.
            </CardText>
            <CardActions border>
              {/* <Button colored onClick = {this.gitBtnClickDjango1.bind(this)}>GitHub</Button> */}
              <Button colored onClick = {this.liveBtnClickDjango1.bind(this)}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/1*1OBwwxzJksMv0YDD-XmyBw.png) center / cover'}} >Django Project #2</CardTitle>
            <CardText>
              The name of this project is staff record system which record the staff of an organization according to departments.
            </CardText>
            <CardActions border>
              {/* <Button colored>GitHub</Button> */}
              <Button colored onClick = { this.liveBtnClickDjango2.bind(this)}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/1*1OBwwxzJksMv0YDD-XmyBw.png) center / cover'}} >Django Project #3</CardTitle>
            <CardText>
              The name of this project is College digitalization system. In this system teachers can post assignments,take attendence and can post marksheet whereas students can download assignments,notes and view the marksheet and result.
            </CardText>
            <CardActions border>
              <Button colored onClick = {this.gitBtnClickDjango3.bind(this)}>GitHub</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        // <div><h1>This is Angular</h1></div>
      )

      } else if(this.state.activeTab === 1) {
      return (
              <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/1000/1*hRrsnPfpb5qbnCqc5uYrOA.png) center / cover'}} >Django Project #1</CardTitle>
            <CardText>
              The name of this project is  UltraGroup Ecommerce.It is e-commerce project for single vendor. This project is created basically for the sell of electronic equipment like bulb, chimney, washing machine,fridge etc.
            </CardText>
            <CardActions border>
              {/* <Button colored onClick = {this.gitBtnClickDjango1.bind(this)}>GitHub</Button> */}
              <Button colored onClick = {this.liveBtnClickDRF1.bind(this)}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/1000/1*hRrsnPfpb5qbnCqc5uYrOA.png) center / cover'}} >Django Project #2</CardTitle>
            <CardText>
              The name of this project is Evidhya which is e-learning platform where students can buy any of the courses for certain duration. The instructors after verification from admin can add their courses.
            </CardText>
            <CardActions border>
              {/* <Button colored>GitHub</Button> */}
              <Button colored onClick = { this.liveBtnClickDRF2.bind(this)}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/1000/1*hRrsnPfpb5qbnCqc5uYrOA.png) center / cover'}} >Django Project #3</CardTitle>
            <CardText>
              The name of this project is dizhunk which is also e-learning platform where students after buying any courses can have lifetime subscription.
            </CardText>
            <CardActions border>
              <Button colored onClick = {this.liveBtnClickDRF3.bind(this)}>Live Demo</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
        // <div><h1>This is Angular</h1></div>
      )

    } else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.svgrepo.com/show/303500/react-1-logo.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This is ecommerce project that store clothes ,shoes for men and women.
            </CardText>
            <CardActions border>
              <Button colored onClick = {this.gitBtnClickReact1.bind(this)}>GitHub</Button>
              <Button colored onClick = {this.liveBtnClickReact1.bind(this)}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.svgrepo.com/show/303500/react-1-logo.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              This is simple project which contains signup and login of user. Similarly after the user logs into the system he/she can perform curd of articles in the project.
              The data are abstracted through django rest api.
            </CardText>
            <CardActions border onClick = {this.gitBtnClickReact2.bind(this)}>
              <Button colored>GitHub</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.svgrepo.com/show/303500/react-1-logo.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              This is e-commerce project which is known is Ultragroup. Users can buy products through COD.
              The data are abstracted through django rest api.
            </CardText>
            <CardActions border onClick = {this.gitBtnClickReact3.bind(this)}>
              <Button colored>GitHub</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        // <div><h1>This is Angular</h1></div>
      )

    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
    {/* Project 1 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#000', height: '176px', background: 'url(https://media1.thehungryjpeg.com/thumbs2/ori_3659116_nmvm7uq461x9ku1qumrclpimt38eqybzf71hx5gi_monogram-js-logo-design.jpg) center / cover'}} >JS Project #1</CardTitle>
      <CardText>
        This is simple project for calculating total budget from given income and expenses. It also determine the percentage of expenses for the the income.
      </CardText>
      <CardActions border>
        <Button colored onClick = {this.gitBtnClickJs.bind(this)} >GitHub</Button>
        <Button colored onClick={this.liveBtnClickJs.bind(this)}>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>

    {/* Project 2 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#000', height: '176px', background: 'url(https://media1.thehungryjpeg.com/thumbs2/ori_3659116_nmvm7uq461x9ku1qumrclpimt38eqybzf71hx5gi_monogram-js-logo-design.jpg) center / cover'}} >React Project #2</CardTitle>
      <CardText>
        This is simple game starting to roll dice from player 1. He/she can roll the dice number of times but the whole point becomes zero if she/he gets face of dice one. So to hold the point she/he can press hold button.
        If she/he press the button hold , another player got the chance to roll the dice. This player also has the same condition as of player 1. The player getting the score of threshold 100 first wins the game.
      </CardText>
      <CardActions border>
        <Button colored onClick = {this.gitBtnClickJs2.bind(this)}>GitHub</Button>
        <Button colored onClick = {this.liveBtnClickJs2.bind(this)}>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  </div>
  // <div><h1>This is Angular</h1></div>
  )
    } else if(this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
    {/* Project 1 */}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      <CardTitle style={{color: '#000', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/css3.svg) center / cover'}} >Html/CSS Project #1</CardTitle>
      <CardText>
        This is simple project for omnifood which is made up of only by using html and css.
      </CardText>
      <CardActions border>
        <Button colored onClick = {this.gitBtnClickJs3.bind(this)}>GitHub</Button>
        <Button colored onClick = {this.liveBtnClickJs3.bind(this)}>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  </div>
  // <div><h1>This is Angular</h1></div>
)
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Django</Tab>
          <Tab>DRF</Tab>
          <Tab>React</Tab>
          <Tab>JS</Tab>
          <Tab>HTML/CSS</Tab>
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
