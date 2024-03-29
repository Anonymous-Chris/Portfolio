import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Pdf from "../imgs/Resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{ paddingTop: "2em" }}>Kshitij Lingthep</h2>
            <h4>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              A dedicated, diligent and hardworking student who excels at
              programming as well as mathematics. Well garnered with the
              technical expertise in the field of computation, data science,
              being up-to-date with latest technological advancements in the
              industry. Additionally, enriched with soft skills such as
              leadership and communication skills, proven by the past
              experiences. Having learnt a lot from past, always seeing present
              as full of opportunities, ready to take in any task.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1900 E Capitol Dr, Milwaukee, Wisconsin</p>
            <p style={{ color: "red", alignText: "center" }}>
              *** willing to relocate ***
            </p>
            <h5>Phone</h5>
            <p>(662) 638-9569</p>
            <h5>Email</h5>
            <p>kshitij.lingthep@gmail.com</p>
            <h5>Web</h5>
            <p style={{ display: "flex", flexDirection: "column" }}>
              <a href="https://anonymous-chris.github.io/Portfolio/">
                https://anonymous-chris.github.io/Portfolio/
              </a>
              <span> (Uses google analytics to monitor portfolio).</span>
            </p>
            <h5>
              {" "}
              <a href={Pdf} target="_blank" rel="noreferrer noopener">
                Download
              </a>
            </h5>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2020}
              schoolName="The University of Mississippi, USA"
              schoolDescription="Bachelor of Computer and Information Science"
              moreInfo="Minor: Mathematics"
            />

            <Education
              startYear={2014}
              endYear={2015}
              schoolName="First Moscow State Medical University named after I.M. Sechenov, Russia"
              schoolDescription="Pre Med/ Russian Language, Bilogy"
            />

            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Prasadi Academy, Nepal"
              schoolDescription="High School"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2021}
              jobName="Front End Engineer"
              jobCompany="Menon Labs"
              jobDescription="● Collaborate with cross functional teams to build an improved version of Amira Running Record application."
            />

            <Experience
              startYear={2020 | "Present"}
              jobName="Software Engineer"
              jobCompany="Foxconn Industrial Internet, Foxconn"
              jobDescription="● Hands on experience with designing and developing IOT device solutions for surveillance systems, facility monitoring systems, and smart manufacturing industry solutions."
              moreInfo="● Designed and developed RESTful APIs for Equipment Management Systems using Spring Framework."
              moreInfo1="● Assisted in development and execution of Content Management System(CMS) as per UI specifications and for IOT products and solutions."
              moreInfo2="● Worked in close cooperation with project managers and other functional team members to form a team effort in development.
              "
            />

            <Experience
              startYear={2020}
              jobName="Full Stack Developer"
              jobCompany="Department of Mathematics, The University of Mississippi"
              jobDescription="● Designed and developed an Attendance Tracking web application for the Department of Mathematics using latest technologies and frameworks(React, firebase, NodeJs)."
              moreInfo="Planned, tracked and managed deliverables on the product as per request of the client."
            />

            <Experience
              startYear={2019}
              jobName="Vol Hacks | Hackathon"
              jobCompany="The University of Tennessee "
              jobDescription="● Designed a cross-platform desktop application using electron framework."
            />

            <Experience
              startYear={2019}
              jobName="Database Developer | School of Engineering"
              jobCompany="The University of Mississippi "
              jobDescription="● Designed a database using MySQL to implement CRUD interfaces in a website for subscription of news, addition and deletion of users."
              moreInfo="● Hands-on Database Performance and Scalability experience with design knowledge of physical and logical database schemas and tables."
              moreInfo1="Programming – utilize programming languages to create complex functions, stored procedures  for use in databases."
            />
            {/* 
            <Experience
              startYear={2018}
              jobName="Full Stack Developer | Department of Computer and Information Science"
              jobCompany="The University of Mississippi "
              jobDescription="● Designed a web-based platform for the department to handle the student request and application using the
              fundamentals of software development techniques: Agile Development, Project Management through SCRUM.
             "
              moreInfo="● Developed admin/user/guest functions in accessing the information entered, while working with both the
             backend and frontend of the project involving HTML, PHP, MYSQL, JavaScript, CSS. "
            /> */}

            <Experience
              startYear={2018}
              jobName="Mobile App Developer | School of Engineering"
              jobCompany="The University of Mississippi"
              jobDescription="● Developed a progressive hybrid mobile app, which lets user access all the happenings through the single portal,
              while collecting the information and news from major medias: BBC, CNN, FOX."
              moreInfo="● Implemented ionic framework in developing the app, while using Angular JS and node.js"
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Teaching Assistant | Center for Excellence in Teaching and Learning"
              jobCompany="The University of Mississippi "
              jobDescription="● Set weekly review sessions for difficult courses and help students participate in group works. | Calculus|"
              moreInfo="● Abet the students participate so they can learn."
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Tutor | Department of Mathematics"
              jobCompany="The University of Mississippi "
              jobDescription="● Assist students in understanding the problems of Mathematics"
              moreInfo="● Aid the students in solving complex problems (Stats, Calculus Series, Trig)"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={95} />
            <Skills skill="javascript" progress={90} />
            <Skills skill="Bootstrap" progress={90} />
            <Skills skill="React" progress={90} />
            <Skills skill="Java" progress={90} />
            <Skills skill="Nodered" progress={75} />
            <Skills skill="CI/CD" progress={70} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="MySQL" progress={70} />
            <Skills skill="No SQL" progress={65} />
            <Skills skill="Ionic" progress={60} />
            <Skills skill="ExpressJS" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
