import React, { useEffect } from "react";
import style from "./About.module.css";
import our_mission from "../../assets/about-images/our-mission.jpg";
import what_we_offer from "../../assets/about-images/what-we-offer.jpg";
import excellent_service from "../../assets/about-images/excellent-service.jpg";
import and_much_more from "../../assets/about-images/and-much-more.jpg";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getAllUsers } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

function About() {
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const dispatch = useDispatch();
  return (
    <div className={style.about}>
      <NavBar />
      <div className={style.container}>
        <div className={style.cards + " z-10"}>
          <div className={style.padding_global}>
            <div className={style.container_large}>
              <div className={style.stack_component}>
                <div className={`${style.stack_card}`}>
                  <div className={style.w_node}>
                    <h2>Our mission</h2>
                    <p>
                      Carmania is more than just a webapp. What's so special about it? To reduce both our own and your footprint to a
                      minimum, we will offset all unavoidable CO₂ emissions produced throughout the whole process.
                    </p>
                  </div>
                  <div className={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img src={our_mission} loading="lazy" sizes="46vw" srcSet={our_mission} alt="" className={style.stack_card_image} />
                  </div>
                </div>
                <div className={`${style.stack_card} ${style.is_2}`}>
                  <div className={style.w_node}>
                    <h2>What we offer</h2>
                    <p>
                      We are a pioneering new business conceived to provide different experiences. Extreme levels of technology and
                      functional design lie beneath the stunning styling of the exterior, with an aim to deliver staggering performance for
                      a road car.
                    </p>
                  </div>
                  <div className={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img src={what_we_offer} loading="lazy" sizes="46vw" srcSet={what_we_offer} alt="" className={style.stack_card_image} />
                  </div>
                </div>
                <div className={`${style.stack_card} ${style.is_6}`}>
                  <div className={style.w_node}>
                    <h2>Excellent service</h2>
                    <p>
                      We get to serve you better through our customer call center available 24/7 and also track your delivery. Get good
                      experience with our products with less shipping charges.
                    </p>
                  </div>
                  <div className={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img
                      src={excellent_service}
                      loading="lazy"
                      sizes="46vw"
                      srcSet={excellent_service}
                      alt=""
                      className={style.stack_card_image}
                    />
                  </div>
                </div>
                <div className={`${style.stack_card} ${style.is_last}`}>
                  <div className={style.w_node}>
                    <h2>And much more</h2>
                    <p>
                      The biggest benefit of joining Carmania is leveraging a patent-pending group buying technology that gets you access to
                      bulk prices, without the bulk purchases. We provide an easy process, including the elimination of endless hours
                      negotiating.
                    </p>
                  </div>
                  <div className={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img src={and_much_more} loading="lazy" sizes="46vw" srcSet={and_much_more} alt="" className={style.stack_card_image} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
