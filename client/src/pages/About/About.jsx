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
        <div className={style.cards}>
          <div className={style.padding_global}>
            <div className={style.container_large}>
              <div className={style.stack_component}>
                <div className={`${style.stack_card}`}>
                  <div className={style.w_node}>
                    <h2>Our mission</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis, dignissimos in. Aliquam, adipisci! Expedita
                      adipisci maxime recusandae amet mollitia quidem quo nisi,
                      nihil quas? Inventore sed rem possimus optio asperiores
                      sequi aut eveniet obcaecati, ad officia libero dicta. Iste
                      autem labore quisquam excepturi similique dicta corporis
                      cumque unde vitae exercitationem.
                    </p>
                  </div>
                  <div
                    className={`${style.w_node} ${style.stack_card_image_wrapper}`}
                  >
                    <img
                      src={our_mission}
                      loading="lazy"
                      sizes="46vw"
                      srcSet={our_mission}
                      alt=""
                      className={style.stack_card_image}
                    />
                  </div>
                </div>
                <div className={`${style.stack_card} ${style.is_2}`}>
                  <div className={style.w_node}>
                    <h2>What we offer</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus aperiam ducimus libero rerum dolorum tempora
                      consequuntur a vel cumque beatae necessitatibus
                      accusantium, facere expedita neque pariatur sed, veritatis
                      ea illum numquam. Repudiandae aut odit optio voluptas
                      voluptatum aspernatur maxime ducimus nihil natus possimus
                      deleniti quia sed dolore, impedit, vel ad vitae
                      reprehenderit ea fugit.
                    </p>
                  </div>
                  <div
                    className={`${style.w_node} ${style.stack_card_image_wrapper}`}
                  >
                    <img
                      src={what_we_offer}
                      loading="lazy"
                      sizes="46vw"
                      srcSet={what_we_offer}
                      alt=""
                      className={style.stack_card_image}
                    />
                  </div>
                </div>
                <div className={`${style.stack_card} ${style.is_6}`}>
                  <div className={style.w_node}>
                    <h2>Excellent service</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi consequatur aliquam dicta dignissimos corrupti
                      laboriosam iure natus laudantium, voluptatibus sit ad
                      ducimus nulla modi. Ipsum explicabo doloribus dignissimos
                      facere atque.
                    </p>
                  </div>
                  <div
                    className={`${style.w_node} ${style.stack_card_image_wrapper}`}
                  >
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
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eaque vero adipisci assumenda dolorem deserunt maxime
                      numquam sit repudiandae aperiam nemo, quae expedita
                      magnam, nesciunt modi dolorum fugiat facere amet, quos
                      molestias optio totam. Quisquam saepe qui sequi culpa
                      ullam, provident ratione incidunt cum ex illum
                      exercitationem suscipit assumenda odio officia!
                    </p>
                  </div>
                  <div
                    className={`${style.w_node} ${style.stack_card_image_wrapper}`}
                  >
                    <img
                      src={and_much_more}
                      loading="lazy"
                      sizes="46vw"
                      srcSet={and_much_more}
                      alt=""
                      className={style.stack_card_image}
                    />
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
