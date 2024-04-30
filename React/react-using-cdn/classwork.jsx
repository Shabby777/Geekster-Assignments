const Title = () => {
  return <h1>Learn Web Development</h1>;
};

const MyPara = (props) => {
  return (
    <div>
    <p>
      Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.
</p>
<p>
       The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning <a href="https://developer.mozilla.org/en-US/">from the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.
       </p>
       <p>
      If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
      </p>
      </div>
  );
};

const MainContainer = () => {

  const paras = ["pa1", ]

  return (
    <div
      id="main-container"
      style={{ backgroundColor: "white", fontSize: "15px", color: "white", color: "black", padding: "20px"}}
    >
      <Title />

      {
        paras.map(para => <MyPara le={para} />)
      }

    </div>
  );
};

ReactDOM.render(<MainContainer />, document.querySelector("#root"));
