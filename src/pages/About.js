import React from "react";

const About = () => {
  return (
    <header>
      <h2>About us</h2>
      <p>
        Coders Studio is a business Startup formed by determined and dedicated
        young people to improve the livelihoods of local farmers through
        marketing and mentoring in order to impact society and create employment
        for the people in the Upper West Region and beyond{" "}
      </p>

      <h3 className="available">TEAM</h3>

      <div className="main-card">
        <div className="card">
          <div className="image">
            <img src="./images/aminu.jpg" alt="image" />
          </div>
          <div className="discription">
            <p>Iddrisu Aminu</p>
            <p>CEO/Product manager</p>
            <p>0553826410</p>
            <input type="number" placeholder="iddrisuaminuict@gmail.com" />
            <br />
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="./images/w.PNG" alt="image" />
          </div>
          <div className="discription">
            <p>Yahaya Wahab</p>
            <p>Aric Officer</p>
            <p>0246069604</p>
            <input type="number" placeholder="yahayawahabu@gmail.com" />
            <br />
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="./images/naeem.PNG" alt="image" />
          </div>
          <div className="discription">
            <p>Abu Naeem</p>
            <p>Finace</p>
            <p>0559821084</p>
            <input type="number" placeholder="abunaeem@gmail.com" />
            <br />
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="./images/sajida.PNG" alt="image" />
          </div>
          <div className="discription">
            <p>Ibrahim Sajida</p>
            <p>PRO</p>
            <p>0553826410</p>
            <input type="number" placeholder="ibrahimsajida@gmail.com" />
            <br />
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="./images/nafiu.PNG" alt="image" />
          </div>
          <div className="discription">
            <p>Abu Nafiu</p>
            <p>Media</p>
            <p>0553826410</p>
            <input type="number" placeholder="abunafiu@gmail.com" />
            <br />
          </div>
        </div>
      </div>
      <footer>
      <h2>codersstudio@gmail.com</h2>
  
      </footer>
    </header>
  
  );
};

export default About;
