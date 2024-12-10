import "./App.css";
import React from "react";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navdiv">
          <img src="./image.png" alt="cmp_logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Property Listing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="wish">
        <h1>WishList</h1>
        <img src="./Screenshot (590).png" alt="menu" />
      </div>

      <div className="front_">
        <a href="#">Buy </a>
        &nbsp;
        <a
          id="bd-line"
          href="#"
          style={{ backgroundColor: 'gold', borderRadius: '5px' }}
        >
          &nbsp; Lucknow
        </a>
        &nbsp; &nbsp;
        <a href="#">Add more..</a>
      </div> */}

      <ul className="poster">
        <img id="poster1" src="./heaven_interior.jpg" alt="interior1" />
        {/* <img className="poster2" src="./green-sofa.jpg" alt="interior2" />
           <img className="poster2" src="./black-touch.jpg" alt="interior3" />
           <img className="poster3" src="./4img.jpg" alt="interior4" />
           <img className="poster3" src="./2img.avif" alt="interior5" /> */}
      </ul>

      <div className="info_front">
        <h2>Vijayant khand / PG</h2>
        <p>Gomti Nagar, Block B, Lucknow </p>
      </div>
      <img
        style={{ marginLeft: "37px", height: "15px" }}
        src="./rating_img.png"
        alt="dropdown icon"
      />

      <div className="front_">
        <a href="#">Monthly Rent </a>
        &nbsp;
        <a id="bd-line" href="#" style={{ borderRadius: "5px" }}>
          &nbsp; BHK
        </a>
        &nbsp; &nbsp;
        <a href="#">Availability</a>
        <div>
          <h3>Rs 30000</h3>
          <h3>3 Bhk</h3>
          <h3>Immediate</h3>
        </div>
      </div>

      <div className="about_me">
        <div className="abm">
          <h3>
            {" "}
            Request A Visit <br />
          </h3>
          <img
            style={{
              backgroundColor: "black",
              width: "30px",
              height: "30px",
              margin: "10px",
            }}
            src="./user.png"
            alt="user_logo"
          />
          <p> V K Singh</p>
          <button style={{ margin: "30px 0 0 1px", width: "270px" }}>
            Add to Visit
          </button>
        </div>
      </div>

      <nav className="navbar1">
        <div className="navdiv1">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Amenities</a>
            </li>
            <li>
              <a href="#">Regulations</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="front-page">
        <div className="front-page_content">
          <h1>Features</h1>
          <ul>
            <li>
              <a href="#">3 Bedrooms</a>
            </li>
            <li>
              <a href="#">2 Bathrooms</a>
            </li>
            <li>
              <a href="#">1200 Sq Ft</a>
            </li>
            <li>
              <a href="#">Parking</a>
            </li>
            <li>
              <a href="#">Appliances - TV, Refrigerator</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="front-page">
        <div className="front-page_content">
          <h1> About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium error perspiciatis
            reiciendis velit soluta tenetur nobis nam eos <br />
            assumenda numquam? adipisicing elit. Laborum in reprehenderit odit
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            accusamus corporis voluptatem cumque. <br />
            Error voluptatibus quod nulla aperiam ipsam necessitatibus eligendi,
            dignissimos maiores dolores cupiditate, quisquam repellendus minus
            ullam, sed veritatis? Ipsa doloribus <br />
            dolorum id rem nisi, aspernatur eligendi iusto delectus, veritatis
            non, laboriosam aliquid. Omnis beatae architecto laborum aut!
          </p>
        </div>
      </div>

      <div style={{ height: "200px" }} className="front-page">
        <div className="front-page_content">
          <h1>Amenities</h1>
          <ul>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Gym</a>
            </li>
            <li>
              <a href="#">Garden</a>
            </li>
            <li>
              <a href="#">Wifi</a>
            </li>
            <li>
              <a href="#">Maintainance</a>
            </li>
            <li>
              <a href="#">Club House</a>
            </li>
            <br />
            <li>
              <a href="#"> Fully Furnished</a>
            </li>
            <li>
              <a href="#">24 Hrs Backup</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="front-page">
        <div className="front-page_content">
          <h1>Regulations</h1>
          <ul>
            <li>
              <a href="#">Student Friendly</a>
            </li>
            <li>
              <a href="#">Pets Allowed</a>
            </li>
            <li>
              <a href="#">Guests Allowed</a>
            </li>
            <li>
              <a href="#">Families Allowed</a>
            </li>
            <li>
              <a href="#">Smokers Allowed</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ height: "500px" }} className="front-page">
        <div className="front-page_content">
          <h1>Location</h1>
          <address id="address" style={{ color: "black" }}>
            {" "}
            <p>Gomti Nagar, B Block, Lucknow</p>{" "}
          </address>
          <div className="resp-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8466378894886!2d80.98062567450238!3d26.844829763006285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3215c70c70bacf5%3A0xaa05a51007a5a463!2sTo-Let%20Globe%20-%20Headquarter%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1726147429646!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div style={{ height: "450px" }} className="front-page">
        <div className="front-page_content">
          <h1>Reviews</h1>
          <div className="rating_bottom">
            <div id="rb_1">
              <img
                style={{ height: "60px", width: "250px" }}
                src="./rating_img.png"
                alt="dropdown icon"
              />
              <h2>4.5 Out of 5</h2>
            </div>
            <div id="rb_2">
              <div>
                <p>
                  {" "}
                  Rate This Property Based On <br /> Your Experience{" "}
                </p>
                <img
                  style={{
                    height: "60px",
                    width: "250px",
                    marginLeft: "-10px",
                  }}
                  src="./rating_img.png"
                  alt="dropdown icon"
                />
              </div>
              <div style={{ marginLeft: "-570px" }}>
                <p>
                  {" "}
                  Share Details of Your Experience With <br /> This Property
                </p>
                <button style={{ margin: "30px 0 0 1px", width: "270px" }}>
                  Write A Review
                </button>
              </div>
            </div>
          </div>
          <div id="rb_3">
            <span>
              <img
            style={{
              backgroundColor: "black",
              width: "50px",
              height: "50px",
              margin: "10px",
            }}
            src="./user.png"
            alt="user_logo"
          />
          <h2 style={{marginTop: '10px'}}>Peter Parker</h2>
            <img
              style={{ height: "20px", width: "110px", margin: '40px 0 0 -130px' }}
              src="./rating_img.png"
              alt="dropdown icon"
            />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis
              eveniet laudantium repellat quas tenetur aliquid hic maiores, vero
              esse quasi quis saepe aspernatur nulla. Aperiam, illo consequatur.
              Laborum ratione id pariatur ut doloremque illum veritatis eaque
              molestias minus cupiditate delectus debitis, minima dolorem harum
              reprehenderit asperiores excepturi commodi blanditiis.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Reach Us</h3>
            <ul>
              <li>
                <a href="#">8707727347</a>
              </li>
              <li>
                <a href="#">hello@toletglobe.in</a>
              </li>
              <li>
                <a href="#">
                  D1/122 Vipulkhand, Gomtinagar Lucknow, Uttar Pradesh
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Paying guest</a>
              </li>
              <li>
                <a href="#">Flat and House</a>
              </li>
              <li>
                <a href="#">Offices</a>
              </li>
              <li>
                <a href="#">Shops and Godowns</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <img src="./image.png" alt="cmp_logo" />
            <p>One-Stop Solution for all your brokerage free rental needs</p>
          </div>
        </div>
      </footer>

      <div className="bottom-part3">
        Customer care | Privacy policy | Conditions of use | About To-Let Globe
        | India | © 2022-2024, To-Let Globe -- Lucknow. All rights reserved
      </div>
    </>
  );
};

export default App;

// import "./App.css";
// import React from 'react';

// function App() {
//   return (
//     <>

//         <nav className="navbar">
//           <div className="navdiv">
//             <img src="./image.png" alt="cmp_logo" />

//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Property Listing</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Blog</a></li>
//           </ul>
//           </div>
//         </nav>

//         <ul className="poster">
//           <img id="poster1" src="./heaven_interior.jpg" alt="interior1" />
//           <img className="poster2" src="./green-sofa.jpg" alt="interior2" />
//           <img className="poster2" src="./black-touch.jpg" alt="interior3" />
//           <img className="poster3" src="./4img.jpg" alt="interior4" />
//           <img className="poster3" src="./2img.avif" alt="interior5" />
//         </ul>

//           <h4 style={{color: "white"}}>Vijayant khand / PG</h4>
//           <p>Gomti NAGATT </p>
//       <address id="address" style={{color: "white"}}>TO-Let Globe Address </address>
//       <div className="resp-map">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8466378894886!2d80.98062567450238!3d26.844829763006285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3215c70c70bacf5%3A0xaa05a51007a5a463!2sTo-Let%20Globe%20-%20Headquarter%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1726147429646!5m2!1sen!2sin"
//           width="600"
//           height="450"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </>
//   );
// }

// export default App;