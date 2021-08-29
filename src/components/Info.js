import React from "react";
import "../css/info.css";
const Info = () => {
  return (
    <div className="info">
      Some of the programming techniques, hosting method, version control etc
      are listed below.
      <ul class="info__list">
        <li>
          1.
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Version Control(Github)
          </a>
          <p>All of the projects are version controlled using github.</p>
        </li>
        <li>
          2.
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github Pages(GH Pages)
          </a>
          <p>
            Most of the projects are hosted using github pages. Some of the
            projects are hosted using heroku too.
          </p>
        </li>
        <li>
          3.
          <a
            href="https://en.wikipedia.org/wiki/CI/CD"
            target="_blank"
            rel="noreferrer noopener"
          >
            Continuous Integration/Continuous Deployment(CI/CD)
          </a>
          <p>
            Most of the projects are automatically build from the main pipeline.
            It is built from the commited code and is ran by bots in github
            which is eventually published in github pages.
          </p>
        </li>
        <li>
          4.
          <a
            href="https://nodered.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Nodered
          </a>
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
