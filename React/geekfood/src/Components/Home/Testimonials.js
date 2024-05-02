import "./Testimonials.css";
import TestimonialImg from "../Images/testimonial.jpg";
function Testimonials() {
  return (
    <div className="TestimonialContainer">
      <div className="subTest">
        <div className="TestCol1">
          <div className="cmSec">
            <div className="cm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima dicta amet, molestiae aliquam incidunt suscipit
                recusandae labore ratione doloremque, architecto et illo minus
                quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel
                ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem
                nam, eveniet enim ad inventore laudantium est illum voluptatem
                quis.
              </p>
            </div>
            <div className="userInfo">
              <img
                src={TestimonialImg}
                alt="Gladis Lennon"
                className="TestimonialImg"
              />
              <div className="userName">
                <h5>Gladis Lennon</h5>
                <p>Head of SEO</p>
              </div>
            </div>
          </div>
          <div className="cmSec">
            <div className="cm">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vel quo deserunt quos expedita minima incidunt sed tempora, a
                architecto consectetur reprehenderit, in repellat voluptatum.
              </p>
            </div>
            <div className="userInfo">
              <img
                src={TestimonialImg}
                alt="Gladis Lennon"
                className="TestimonialImg"
              />
              <div className="userName">
                <h5>Gladis Lennon</h5>
                <p>Head of SEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="TestCol1">
          <div className="cmSec">
            <div className="cm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                beatae incidunt perferendis soluta facilis voluptas dicta
                repudiandae quasi asperiores libero, exercitationem molestiae
                autem sapiente dolore nulla non consequatur. Eaque, dolores.
              </p>
            </div>
            <div className="userInfo">
              <img
                src={TestimonialImg}
                alt="Gladis Lennon"
                className="TestimonialImg"
              />
              <div className="userName">
                <h5>Gladis Lennon</h5>
                <p>Head of SEO</p>
              </div>
            </div>
          </div>
          <div className="cmSec">
            <div className="cm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                doloribus eius aut unde, dolores accusantium!
              </p>
            </div>
            <div className="userInfo">
              <img
                src={TestimonialImg}
                alt="Gladis Lennon"
                className="TestimonialImg"
              />
              <div className="userName">
                <h5>Gladis Lennon</h5>
                <p>Head of SEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="TestCol1 lastCol">
          <div className="cmSec">
            <div className="cm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                a voluptatum quidem nulla quisquam natus velit provident earum
                esse, odio numquam labore recusandae similique sunt.
              </p>
            </div>
            <div className="userInfo">
              <img
                src={TestimonialImg}
                alt="Gladis Lennon"
                className="TestimonialImg"
              />
              <div className="userName">
                <h5>Gladis Lennon</h5>
                <p>Head of SEO</p>
              </div>
            </div>
          </div>
          <div className="cmSec">
            <div className="cm cmUnique">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                ut necessitatibus, repudiandae qui dolor minima.
              </p>
            </div>
            <div className="userInfo">
              <img
                src={TestimonialImg}
                alt="Gladis Lennon"
                className="TestimonialImg"
              />
              <div className="userName">
                <h5>Gladis Lennon</h5>
                <p>Head of SEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
