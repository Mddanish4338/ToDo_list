import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        {/* Banner Section */}
        <header className="banner">
          <div className="container">
            <div className="col">
              <h1 className="banner__title">
                “Todoist makes it easy to go as simple or as complex as you
                want”
              </h1>
              <h2 className="banner__sub-title">– The Verge</h2>
              {/*<p className="banner__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus deleniti cum voluptatem illum animi dolor molestias
                necessitatibus a at laborum!
  </p>*/}
            </div>
          </div>
          {/**  image**/}
          <div class="img">
            <img src="https://media2.giphy.com/media/3ijeDw25QZOFi/giphy.gif" />
          </div>
        </header>

        {/* Timeline Section */}
        <section className="timeline">
          <div className="container">
            <div className="timeline__wrapper">
              <div className="timeline__progressbar" />
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">Add a task</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">
                    Break it into subtasks
                  </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">
                    Move tasks into projects
                  </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">Share your projects</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">
                    Give tasks a priority level
                  </p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">Set up reminders</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">Add some extensions</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">Create filter views</p>
                </div>
              </div>
              <div className="timeline__block">
                <div className="timeline__block__bullet-point">
                  <span className="timeline__block__circle" />
                </div>
                <div className="timeline__block__head">
                  <h1 className="timeline__block__title"></h1>
                </div>
                <div className="timeline__block__body">
                  <p className="timeline__block__text">Complete tasks</p>
                </div>
              </div>

              <div className="timeline__hider" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
