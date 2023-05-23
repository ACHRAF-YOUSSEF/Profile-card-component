import Footer from "./components/Footer";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <>
      <div
        className="
          w-screen 
          h-screen 
          flex 
          justify-center 
          items-center
        "
      >
        <div
          className="
            absolute 
            bg-no-repeat
            bg-cover
            top-0
            left-0
            w-1/2
            -z-1
            bg-right-bottom
            -translate-y-1/2
            h-1000
            bg_top_style
          "
        />
        <div
          className="
            absolute 
            bg-no-repeat
            bg-cover
            bottom-0
            right-0
            w-1/2
            -z-1
            bg-left-top
            translate-y-1/2
            h-1000
            bg_bottom_style
          "
        />
        <div className="flex flex-col">
          <Card
            name={"Victor Crest"}
            age={26}
            city={"London"}
            followers={"80K"}
            likes={"803K"}
            photos={"1.4K"}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
