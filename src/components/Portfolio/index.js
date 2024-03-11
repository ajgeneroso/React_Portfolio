import React from "react";
import noteTakerImage from "../../assets/small/NoteTaker.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ajgeneroso/React_Portfolio">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Test</h4>
              <p>
               
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ajgeneroso/React_Portfolio">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Test</h4>
              <p>
                {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ajgeneroso/React_Portfolio">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Twilight_Ristorante"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Test</h4>
              <p>
                {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ajgeneroso/React_Portfolio">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Test</h4>
              <p>
               {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ajgeneroso/React_Portfolio">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SummerPunch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Test</h4>
              <p>
               {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ajgeneroso/React_Portfolio">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Test</h4>
              <p>
                {" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
