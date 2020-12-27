import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import profile from './img/profile.jpg';
import profile1 from './img/profile1.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profile}
                alt="avatar"
                style={{height: '200px',width:'200px',marginTop:'5px',marginLeft:'-100px',borderRadius:'50%'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Prakash Khatri</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am Prakash Khatri. I am working as programmer in Smart Tech Solution since 2019. I have completed my bachelor in Bsc.csit from Samriddhi College in the year 2019.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Jagati, Bhaktapur</p>
            <h5>Phone</h5>
            <p>9860837166</p>
            <h5>Email</h5>
            <p>khatri799prakash@gmail.com</p>
            {/* <h5>Web</h5>
            <p>mywebsite.com</p>
          */}
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Samriddhi College"
              schoolDescription="Samriddhi College is situated in Lokenthali,Bhaktapur."
               />

               {/*<Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                */}
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              
              jobName="Django Web Developer"
              jobDescription="I am working as django software developer in smart tech solution since 2019."
              />

              {/* <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              */}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={80}
                />
                <Skills
                  skill="Django"
                  progress={80}
                  />
                  <Skills
                    skill="Git"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />
                      <Skills
                      skill="Javascript"
                      progress={30}
                      />
                      <Skills
                      skill="HTML/CSS"
                      progress={30}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
