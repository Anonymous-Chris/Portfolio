import React from "react";
import "../css/info.css";
const Info = () => {
  return (
    <div className="info">
      Some of the programming techniques, hosting method, version control etc
      are listed below.
      <ul class="info__list">
        <li>
          1. Version Control(Github)
          <p>All of the projects are version controlled using github.</p>
        </li>
        <li>
          2. Github Pages(GH Pages)
          <p>
            Most of the projects are hosted using github pages. Some of the
            projects are hosted using heroku too.
          </p>
        </li>
        <li>
          3. Continuous Integration/Continuous Deployment(CI/CD)
          <p>
            Most of the projects are automatically build from the main pipeline.
            It is built from the commited code and is ran by bots in github
            which is eventually published in github pages.
          </p>
        </li>
        <li>
          4. Nodered
          <p>
            It is a visual programming that is used to create APIs for few of
            the projects.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Info;
