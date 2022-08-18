import Footer from "./sections/footer";
import Header from "./sections/header";
import Info from "./sections/info";
import Navbar from "./sections/navbar";
import Sponsor from "./sections/sponsor";
import Main from "./sections/main";
import Dinamic from "./sections/dinamic";
import TextAnimation from "./sections/textAnimation";
import ScrollToTop from "react-scroll-up";

function App() {
  return (
    <div >
      <ScrollToTop showUnder={1500} easing={'linear'} duration={800} style={{zIndex: 9999,right: 50, bottom: 50}}>
        <div className="absolute z-[9999] rounded-full hidden sm:flex items-center justify-center p-1 min-w-[20px] sm:min-w-[40px] -rotate-90  text-primary text-xl sm:text-3xl"><img src="/next.png" className="w-full h-full" alt="" /></div>
      </ScrollToTop>
      <div className="bg-[url('../public/header_background.png')] bg-local bg-cover sm:bg-auto 2xl:bg-cover bg-right-top bg-no-repeat ">
        <Navbar />
        <Header />
        <Main />
      </div>
      <TextAnimation />
      <Dinamic />
      <Sponsor />
      {/* <Info /> */}
      <Footer />
    </div>
  );
}

export default App;
