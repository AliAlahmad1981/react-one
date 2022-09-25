import React from "react";
import "./About.scss";
import img from "../shared/assets/images/one.png"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="section-wrapper">
        <div className="side-left">
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing eldignissimos!
            Non et corrupti est neque a, ducimus sapiente cum.
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing eldignissimos!
            Non et corrupti est neque a, ducimus sapiente cum.
          </p>
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing eldignissimos!
            Non et corrupti est neque a, ducimus sapiente cumq
          </h4>
          <p>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </p>
          <h4>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </h4>
          <p>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </p>
          <h4>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing eldignissimos!
            Non et corrupti est neque a, ducimus sapiente cumque.
          </p>
          <h4>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing e dignissimos!
            Non et corrupti est neque a, ducimus sapieolor ha.
          </p>
          <h4>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </h4>
          <p>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </p>
          <h4>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </h4>
          <p>
            Lorem ipsum est neque a, ducimus sapiente cumque necessitatibus
            reiciendis. Ipsum dolor harum, optio animi cumque et.
          </p>
        </div>
        <div className="side-right">
          <div className="box-1">
            <img src={img} alt="img" />
            <h2>Ali Gold</h2>
            <p>Front end developer</p>
          </div>
          <div className="box-2">
                        <div className="form">
            
            <input type="text" name="text" placeholder="user name"/>
            <label>user name</label>
            </div>
            <div className="form">
            
            <input type="text" name="text" placeholder="user address"/>
            <label>user address</label>
            </div>
            <div className="form">
            
            <input type="text" name="text" placeholder="user mail"/>
            <label>user mail</label>
            </div>

          </div>
          <div className="box-3">
            <table>
              <thead>
                <tr>
                  <th>egy code</th>
                  <th>sye code</th>
                  <th>ema code</th>
                  <th>ira code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>22</td>
                  <td>12</td>
                  <td>11</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>4</td>
                  <td>11</td>
                  <td>17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
