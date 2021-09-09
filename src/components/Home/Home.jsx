import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";

import homeAnime from "./../../assets/home_anime.gif";
import "./Home.css";

class Home extends Component {
  state = { showModal: false };

  // componentDidMount() {
  //     setTimeout(() => {
  //         this.setState({ showModal: true });
  //     }, 1000);
  // }

  // closeModal = () => {
  //     this.setState({ showModal: false });
  // };

  render() {
    return (
      <div className="home-container">
        {this.state.showModal && <Modal closeModal={this.closeModal} />}
        <div className="header-text">
          <h1>Website / Portfolio</h1>
          <h1>Zayne Lovecraft</h1>

          <p>Hey! This is Zayne! Thank you for checking out my website!</p>
        </div>
        <div className="head-btns">
          <Link to="/about" className="btn btn-white">
            <p className="btn-text">Know more about me</p>
          </Link>
          <Link to="/contact" className="btn btn-transparent">
            <p className="btn-text">Connect with me</p>
          </Link>
        </div>
        <div className="splash-image">
          <img src={homeAnime} alt="animation" className="home-anime" />
        </div>
        
        <div className="social-icons-container">
          <a href="https://github.com/EpicDevv" className="social-icon">
            <img src={github} alt="social" />
          </a>
          <a
            href="https://www.linkedin.com/in/zayne-lovecraft-0ba3a621a/"
            className="social-icon"
          >
            <img src={linkedin} alt="social" />
          </a>
          <a
            href="https://www.instagram.com/epic_devv/"
            className="social-icon"
          >
            <img src={instagram} alt="social" />
          </a>
          {/* <a
                    href='https://medium.com/@madhavbahl'
                    className='social-icon'
                >
                    <img src={medium} alt='social' />
                </a>
                <a href='https://madhavbahl.tech' className='social-icon'>
                    <img src={web} alt='social' />
                </a> */}
        </div>
      </div>
    );
  }
}

export default Home;
