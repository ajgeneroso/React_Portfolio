import React from "react";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";

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
              <a href="">
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
              <a href="">
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
              <a href="/">
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
              <a href="">
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
              <a href="">
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
              <a href="https://lemming97.github.io/Project_1/">
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
              <a href="https://floating-island-17357.herokuapp.com/">
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
              <h4>HomeBrew</h4>
              <p>
                A plant blog that allows the user to view seasonal gallery of
                plants after the user logs into their account. The user can also
                add comments to the blog once they are logged in as well as
                deleting their comments.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
