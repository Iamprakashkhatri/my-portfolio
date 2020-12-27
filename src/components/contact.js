import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profile from './img/profile.jpg';
import profile1 from './img/profile1.jpg';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Prakash Khatri</h2>
            <img
              src={profile1}
              alt="avatar"

              style={{height: '250px',width:'250px', borderRadius:'50%'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am enthusiastic django python web developer working in smart tech solution since 2019</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 9860837166
                  </ListItemContent>
                </ListItem>

                

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    khatri799prakash@gmail.com
                  </ListItemContent>
                </ListItem>

                {/*<ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              */}


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
