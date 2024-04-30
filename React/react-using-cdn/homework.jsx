const Title = () => {
    return <h1>Topics Covered</h1>;
  };
  
  const MyPara = () => {
    return (
      <div>
        <cite>The following is a list of all the topics we cover in the MDN learning area.</cite>
        <br /><br />
        <p>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">Getting started with the web</a>
            <br />
            Provides a practical introduction to web development for complete beginners.
        </p>
         <p>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML — Structuring the web</a>
            <br />
            HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
         </p>
         <p>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS — Styling the web</a>
            <br />
            CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
        </p>
        </div>
    );
  };
  
  const MainContainer = () => {
  
    const paras = ["para1", ]
  
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
  