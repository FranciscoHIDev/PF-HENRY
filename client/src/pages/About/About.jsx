import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.about}>
      <NavBar />
      <div className={style.container}>
        <h1>GET TO KNOW US</h1>
        <div class={style.cards}>
          <div class={style.padding_global}>
            <div class={style.container_large}>
              <div class={style.stack_component}>
                <div class={`${style.stack_card}`}>
                  <div class={style.w_node}>
                    <h2>Our mission</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dignissimos in. Aliquam, adipisci! Expedita adipisci
                      maxime recusandae amet mollitia quidem quo nisi, nihil quas? Inventore sed rem possimus optio asperiores sequi aut
                      eveniet obcaecati, ad officia libero dicta. Iste autem labore quisquam excepturi similique dicta corporis cumque unde
                      vitae exercitationem.
                    </p>
                  </div>
                  <div class={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img
                      src="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0efdf7044543dc5c1d94c__retro_van_by_the_lake_basketball_court_watercolor_ma.jpg"
                      loading="lazy"
                      sizes="46vw"
                      srcset="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0efdf7044543dc5c1d94c__retro_van_by_the_lake_basketball_court_watercolor_ma-p-500.jpg 500w, https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0efdf7044543dc5c1d94c__retro_van_by_the_lake_basketball_court_watercolor_ma-p-800.jpg 800w, https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0efdf7044543dc5c1d94c__retro_van_by_the_lake_basketball_court_watercolor_ma.jpg 915w"
                      alt=""
                      class={style.stack_card_image}
                    />
                  </div>
                </div>
                <div class={`${style.stack_card} ${style.is_2}`}>
                  <div class={style.w_node}>
                    <h2>What we offer</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam ducimus libero rerum dolorum tempora
                      consequuntur a vel cumque beatae necessitatibus accusantium, facere expedita neque pariatur sed, veritatis ea illum
                      numquam. Repudiandae aut odit optio voluptas voluptatum aspernatur maxime ducimus nihil natus possimus deleniti quia
                      sed dolore, impedit, vel ad vitae reprehenderit ea fugit.
                    </p>
                  </div>
                  <div class={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img
                      src="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f10fab783103f736a3a8_retro_bike_by_the_lake_watercolor_masterpiece_orange-p-800%20(1).png"
                      loading="lazy"
                      sizes="46vw"
                      srcset="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f10fab783103f736a3a8_retro_bike_by_the_lake_watercolor_masterpiece_orange-p-800%20(1)-p-500.png 500w, https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f10fab783103f736a3a8_retro_bike_by_the_lake_watercolor_masterpiece_orange-p-800%20(1).png 800w"
                      alt=""
                      class={style.stack_card_image}
                    />
                  </div>
                </div>
                <div class={`${style.stack_card} ${style.is_6}`}>
                  <div class={style.w_node}>
                    <h2>Excellent service</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur aliquam dicta dignissimos corrupti
                      laboriosam iure natus laudantium, voluptatibus sit ad ducimus nulla modi. Ipsum explicabo doloribus dignissimos facere
                      atque.
                    </p>
                  </div>
                  <div class={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img
                      src="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f0e5e86e367e96ac2758_63e009620c95fca92528c3aa_Mike_Pecha_retro_car_by_the_lake_watercolor_masterpiece_orange_%20(1).png"
                      loading="lazy"
                      sizes="46vw"
                      srcset="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f0e5e86e367e96ac2758_63e009620c95fca92528c3aa_Mike_Pecha_retro_car_by_the_lake_watercolor_masterpiece_orange_%20(1)-p-500.png 500w, https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f0e5e86e367e96ac2758_63e009620c95fca92528c3aa_Mike_Pecha_retro_car_by_the_lake_watercolor_masterpiece_orange_%20(1).png 836w"
                      alt=""
                      class={style.stack_card_image}
                    />
                  </div>
                </div>
                <div class={`${style.stack_card} ${style.is_last}`}>
                  <div class={style.w_node}>
                    <h2>And much more ...</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque vero adipisci assumenda dolorem deserunt maxime
                      numquam sit repudiandae aperiam nemo, quae expedita magnam, nesciunt modi dolorum fugiat facere amet, quos molestias
                      optio totam. Quisquam saepe qui sequi culpa ullam, provident ratione incidunt cum ex illum exercitationem suscipit
                      assumenda odio officia!
                    </p>
                  </div>
                  <div class={`${style.w_node} ${style.stack_card_image_wrapper}`}>
                    <img
                      src="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f0e558610e5b1c9e0245_63e00d55e4e25f149e0e9f52_grid_0%20(4)-p-800%20(1).png"
                      loading="lazy"
                      sizes="46vw"
                      srcset="https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f0e558610e5b1c9e0245_63e00d55e4e25f149e0e9f52_grid_0%20(4)-p-800%20(1)-p-500.png 500w, https://assets.website-files.com/63dff00111b8736d73b2b08d/63e0f0e558610e5b1c9e0245_63e00d55e4e25f149e0e9f52_grid_0%20(4)-p-800%20(1).png 800w"
                      alt=""
                      class={style.stack_card_image}
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
