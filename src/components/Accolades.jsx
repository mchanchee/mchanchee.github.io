import React from "react";
import "./Accolades.css";

function Accolades() {
  return (
    <div
      id="accolades"
      className="above-particles jumbotron jumbotron-fluid m-0"
    >
      <div className="container">
        <h1 className="title display-3 pb-3">Accolades</h1>

        <ul className="accolade-list">
          {/* Pearson */}
          <li>
            {" "}
            Among the <strong>37 worldwide</strong> recipients of the{" "}
            <a
              href="https://future.utoronto.ca/pearson/2017-scholars/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lester B. Pearson International Scholarship
            </a>
            , a <strong>4-year full-ride</strong> scholarship from the
            University of Toronto
          </li>

          {/* NMO */}
          <li>
            <strong>Ranked 1st</strong> at National Mathematics Olympiad 2016
          </li>

          {/* Laureate */}
          <li>
            In Mauritius, the <strong>top 9</strong> science students{" "}
            <strong>across the country</strong> at the{" "}
            <strong>Cambridge A-Level</strong> are awarded the title of{" "}
            <strong>'Laureate'</strong> and university scholarships from the
            Government. In 2017, I became the{" "}
            <strong>first Computer Science Laureate in history</strong>.
          </li>

          {/* MakeUofT */}
          <li>
            <strong>Won </strong>
            <a
              href="https://devpost.com/software/intelligent-agriculture-analytics-with-iot-edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Best Use of TELUS Devkit and Network for IoT (Sponsored by
              TELUS)"
            </a>{" "}
            at MakeUofT 2019,{" "}
            <strong>Canada's largest hardware hackathon</strong>
          </li>

          {/* MUN */}
          <li>
            <strong>Best Delegate & Best Delegation</strong> at the Regional and
            National Model UN Conferences 2015
          </li>
          <li>
            <strong>Secretary-General</strong> at the{" "}
            <strong>head of 18 Chairpersons</strong> for the Model UN Conference
            2016
          </li>

          {/* Wushu */}
          <li>
            {" "}
            <strong>Gold medallist</strong> and triple{" "}
            <strong>silver medallist</strong> at National Wushu Championships
          </li>

          {/* Dragon Boat */}
          <li>
            Triple <strong>bronze medallist</strong> at National Dragon Boat
            Competition
          </li>

          {/* TLI */}
          <li>
            Selected to be part of the{" "}
            <a
              href="https://www.utoronto.ca/news/u-t-computer-science-introduces-technology-leadership-initiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technology Leadership Initiative
            </a>
            , a cohort of the <strong>top 25</strong> Computer Science students
            at the <strong>University of Toronto</strong>
          </li>

          {/* Dean's List */}
          <li>
            CGPA 4.0/4.0,{" "}
            <a
              href="https://fas.calendar.utoronto.ca/academic-record#recog-acad-achievement"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dean's List Scholar
            </a>{" "}
            all years
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Accolades;
