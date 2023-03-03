import React from "react";
import style from "./About.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-10 p-20">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum lectus elit, et gravida diam maximus tristique. Integer
          vitae odio nisl. Duis vel leo vel turpis commodo eleifend. Donec et
          varius felis. Etiam in felis et lacus dignissim rutrum. Sed gravida,
          urna nec lacinia volutpat, eros dui consectetur dolor, semper tempor
          magna tellus sit amet tortor. Mauris elementum pretium urna, pretium
          gravida magna molestie nec. Suspendisse sed congue sem, in fermentum
          neque. Aliquam malesuada, purus nec ullamcorper faucibus, libero sem
          dictum turpis, in posuere nunc metus vel nunc. Duis aliquet blandit
          rhoncus. Morbi ex magna, consequat eu enim sed, varius euismod orci.
          Nunc placerat ipsum in sem ullamcorper, dignissim tincidunt lacus
          pretium. Curabitur posuere dolor in luctus pharetra. Proin et accumsan
          felis, ac mattis neque. Nulla eu tempor ex. Nullam vitae consectetur
          nibh. Cras sed volutpat mi, aliquet feugiat quam. Mauris at nulla
          rhoncus libero eleifend varius ut volutpat ipsum. Sed molestie tortor
          tellus, tempus tempor justo aliquam a. Proin non fringilla tortor.
          Donec neque diam, lobortis vel vulputate et, molestie non massa.
          Quisque dictum sapien eu lorem iaculis sollicitudin. Integer non est
          eget odio volutpat fringilla eget id ante. Sed fringilla magna non
          condimentum sollicitudin. Duis nunc urna, molestie at tortor eu,
          scelerisque iaculis neque.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
