import React, { Component } from "react";
import Mobile from "../assest/mobile.jpeg";
import Social from "../assest/social.jpeg";
import Manage from "../assest/manage.jpeg";
import payment from "../assest/payment.jpeg";
import trust from "../assest/trust.jpeg";
import shalina from "../assest/shalina.jpeg";
import shalinap from "../assest/shalinap.jpeg";
import guardian from "../assest/guardian.jpeg";
import guardianp from "../assest/guardianp.jpeg";
import gary from "../assest/gary.jpeg";
import garyp from "../assest/garyp.jpeg";
import digital from "../assest/digital.jpeg";
import enterpreneur from "../assest/enterpreneur.jpeg";
import forbes from "../assest/forbes.jpeg";
import engadget from "../assest/engadget.jpeg";




import Footer from "./Footer";
class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center section-1">
          <div className="col-sm-7">
            <div className="">
              <p className="heading-1 text-center">
                The Only Link You’ll Ever Need
              </p>
            </div>
            <div className="heading-5 text-center">
              Connect audiences to all of your content with just one link
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary p-3 started-btn">
            GET STARTED FOR FREE
          </button>
          <p className="pt-3">
            Already on Linktree?{" "}
            <a href="" className="">
              Log in
            </a>{" "}
          </p>
        </div>
        <div className="text-center">
          <img src={Mobile} className="mobile" />
        </div>
        <div className="row my-5">
          <div className="col-sm-6 text-center">
            <img src={Social} className="w-75" />
          </div>
          <div className="col-sm-6 p-5">
            <div className="section-title mt-5">Use it anywhere</div>
            <div className="section-body w-75 ">
              Take your Linktree wherever your audience is, to help them to
              discover all your important content.
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 p-5">
            <div className="section-title mt-5">Link to everywhere</div>
            <div className="section-body w-75 ">
              Linktree is the launchpad to your latest video, article, recipe,
              tour, store, website, social post - everywhere you are online.
            </div>
          </div>
          <div className="col-sm-6">
            <img src={Manage} className="w-100" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 text-center">
            <img src={payment} className="w-75" />
          </div>
          <div className="col-sm-6">
            <div className="section-title mt-5">Collect payments</div>
            <div className="section-body w-75 ">
              From tips for your content, to donations for your projects, let
              your fans & followers support you in monetizing your passions.
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 p-5">
            <div className="section-title mt-5">Link to everywhere</div>
            <div className="section-body w-75 ">
              Linktree is the launchpad to your latest video, article, recipe,
              tour, store, website, social post - everywhere you are online.
            </div>
          </div>
          <div className="col-sm-6">
            <img src={Manage} className="w-100" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 text-center">
            <img src={trust} className="w-75" />
          </div>
          <div className="col-sm-6">
            <div className="section-title mt-5">Safe, trusted, private</div>
            <div className="section-body w-75 ">
              Privacy is non-negotiable. Linktree doesn’t track any personal
              data on your visitors, so your Linktree remains your place on the
              internet.
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 p-5">
            <div className="section-title w-25 bold">
              Join the Linktree community
            </div>
            <div className="section-body w-50">
              The world's biggest influencers, creators, publishers and brands
              use Linktree in their marketing strategy.
            </div>
          </div>
          <div className="col-sm-3">
            <img src={shalina} className="w-100" />
            <div className="justify-content-center mt-3">
              <img src={shalinap} />{" "}
              <span className="celeb-name">Selena Gomez</span>
            </div>
          </div>
          <div className="col-sm-3">
            <img src={guardian} className="w-100" />
            <div className="justify-content-center mt-3">
              <img src={guardianp} />{" "}
              <span className="celeb-name">The Guardian</span>
            </div>
          </div>
          <div className="col-sm-3">
            <img src={gary} className="w-100" />
            <div className="justify-content-center mt-3">
              <img src={garyp} />{" "}
              <span className="celeb-name">Gary Vee</span>
            </div>
          </div>
        </div>
        <div className="text-center" style={{marginTop:"100px", marginBottom:"100px"}}>
        <button className="btn btn-primary p-3 started-btn">
            GET STARTED FOR FREE
          </button>
        </div>
        <div className="container">
        <div className="border-top">
          <div className="row py-5">
            <div className="col-sm-12 text-center my-3" style={{fontSize:"20px"}}>As featured in</div>
          <div className="col-sm-3">
              <img src={digital}  style={{height:"50px" }} className="w-75 "/>
            </div>
            <div className="col-sm-3">
              <img src={enterpreneur} style={{height:"50px"}} />
            </div>
            <div className="col-sm-3">
              <img src={forbes} style={{height:"50px"}} />
            </div>
            <div className="col-sm-3">
              <img src={engadget}  style={{height:"50px"}}/>
            </div>
          </div>
        </div>
        </div>
        <div className="my-5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
