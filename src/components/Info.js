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
            which is eventually published in github pages. Also, I have used
            gitlab to build docker images and push it to its registry. After
            that the image is pulled into a server and then run automatically
            using shell runners.
          </p>
        </li>
        <li>
          4.
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Docker
          </a>
          <p>
            Docker is a set of platform as a service products that use OS-level
            virtualization to deliver software in packages called containers.
          </p>
        </li>
        <li>
          5.
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
        <li>
          6.
          <a
            href="https://github.com/react-grid-layout/react-grid-layout"
            target="_blank"
            rel="noreferrer noopener"
          >
            React Grid Layout
          </a>
          <p>It is a grid layout package with responsiveness feature.</p>
        </li>
        <li>
          7.
          <a
            href="https://anonymous-chris.github.io/overall/#/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Example
          </a>
          <p>An example using the above processess.</p>
        </li>
      </ul>
    </div>
  );
};

export default Info;
