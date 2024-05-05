import { Card } from "./Card";
import faceImage from "../assets/photo.avif";
import './CardSection.css'

function CardSection(){
    return(
    <>
    <div className="cardsection">
    <Card id="card1"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
        imgUrl={faceImage}
         
        author="Gladis Lennon" 
        role="Head of SEO"
        
      />
      <Card id="card2"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
        imgUrl={faceImage}
         
        author="Gladis Lennon" 
        role="Head of SEO"
      />
      <Card id="card3"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."
        imgUrl={faceImage}
         
        author="Gladis Lennon" 
        role="Head of SEO"
      />
      <Card id="card4"
    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
        imgUrl={faceImage}
         
        author="Gladis Lennon" 
        role="Head of SEO"
      />
      <Card id="card5"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"
        imgUrl={faceImage}
         
        author="Gladis Lennon" 
        role="Head of SEO"
      />
      <Card id="card6"
    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
        imgUrl={faceImage}
         
        author="Gladis Lennon" 
        role="Head of SEO"
      />
      </div>
    </>
    );
}

export default CardSection;