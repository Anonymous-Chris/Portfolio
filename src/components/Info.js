import React from "react";
import "../css/info.css";
const Info = () => {
  return (
    <div className="info">
      Some of the programming techniques, hosting method, version control etc
      are listed below.
      <ul class="info__list">
        <li>1. Version Control(Github)</li>
        <li>2. Github Pages(GH Pages)</li>
        <li>3. Continuous Integration/Continuous Deployment(CI/CD)</li>
        <li>4. Nodered</li>
      </ul>
    </div>
  );
};

export default Info;
