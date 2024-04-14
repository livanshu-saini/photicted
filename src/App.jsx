import "./App.css";
import Navbar from "./assets/components/Navbar";
import Slider from "./components/slider";
import InstagramPage from "./pages/instagram";
import Footer from "./components/footer";
import Collection from "./pages/collection";

function App() {
  return (
    <div className="bg-bgGrey">
      <Navbar />
      <div className="h-0 lg:block lg:h-auto hidden">
        <div className="z-10 relative">
          <Slider />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.3)] flex flex-col gap-4 justify-center items-center z-20">
            <h1 className="lg:text-8xl text-white">photicted</h1>
            <h1 className="lg:text-2xl text-white">photo addicted</h1>
          </div>
        </div>
        <div className="flex flex-1">
          <Collection />
        </div>
        <div className="h-screen flex items-center bg-bgGrey">
          <InstagramPage />
        </div>
      </div>
      <div className="lg:invisible lg:h-0 h-[94vh] flex justify-center items-center p-6">
        <h1>this screen is too small to showcase my talent. please use desktop 😃👍 </h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
