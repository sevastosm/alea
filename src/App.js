import React from "react";
import Media from "react-media";
import Video from "./components/Video"
import logo_desktop from "./assets/logo_desktop.png";
import logo_mobile from "./assets/logo_mobile.png";
import bgVideo from "./assets/alea.mp4";
import photo_mobile from "./assets/photo_mobile.png";

import "./styles.css";

function App() {

  // const playVid = () => {
  //   const vid = document.getElementById("siteVideo");
  //   vid.play();
  // };

  // useEffect(() => {
  //   playVid()
  // }, []);

  return (
    <div>
      <Media
        query="(min-width: 527px)"
        render={() => (
          <Video />
        )}
      />
      <div className="wrapper">
        <div className="mask"></div>
        <main>
          <header className="app-header">
            <div className="logo">
              <img alt="Alea logo" src={logo_desktop} />
            </div>
            <div className="logo_mobile">
              <img alt="Alea logo" src={logo_mobile} />
            </div>
          </header>
          <section>
            <div className="titles">
              <h1 className="main-tilte">High-Performance Organic Skincare</h1>
              <h2 className="sub-tilte">For the 9 month and Beyond!</h2>
            </div>
            <img
              alt="Alea background"
              className="bg-mobile"
              src={photo_mobile}
            />
            <aricle className="news-letter-join">
              Join our newsletter & get the chance to <br />
              <span>WIN</span> 1 of 5 product sets wen we launch!
            </aricle>
            <div className="news-letter">
              <input placeholder="email address" type="text" />
              <a>
                <i className="arrow right"></i>
              </a>
            </div>
          </section>
        </main>
        <footer>
          <h6>@Alea organics 2020</h6>
        </footer>
      </div>
    </div>
  );
}

export default App;
