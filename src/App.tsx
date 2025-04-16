import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Logo from "./assets/logo.png";
import Drone from "./assets/drone1.png";
import Forest from "./assets/forest.jpg";
function App() {
  return (
    <>
      <main className="flex flex-col">
        <nav>
          <div className="flex justify-between items-center max-w-[94rem] py-2 mx-auto bg-white">
            <ul className="flex space-x-4">
              <li className="text-sm font-light">dji.com</li>
              <li className="text-sm font-light">DJI Store APP</li>
              <li className="text-sm font-light">More</li>
            </ul>
            <div className="flex gap-2 items-center">
              <CiGlobe />
              <a href="">
                <h1 className="font-light text-sm">
                  United States (English / $ USD)
                </h1>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-end max-w-[94rem] py-4 mx-auto text-white">
            <div className="flex gap-10">
              <a href="" className="flex gap-2">
                <img src={Logo} alt="logo" />
                <h1 className="font-medium">STORE</h1>
              </a>
              <ul className="flex gap-10">
                <li>DJI Easter Sale</li>
                <li>Camera Drones</li>
                <li>Handheld</li>
                <li>Power</li>
                <li>Education & Industry</li>
                <li>Services</li>
                <li>Accessories</li>
                <li>Official Refurbished</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <CiSearch size={20} />
              <IoCartOutline size={20} />
              <GoPerson size={20} />
            </div>
          </div>
        </nav>

        <section className="h-full relative z-[-20] top-[-3.5rem]">
          <img
            className="h-[40rem] w-full"
            src="https://se-cdn.djiits.com/stormsend/uploads/597b513945cc5b56935a6ea8b9c6c69a.jpg?h=1280&thumb=p3sKGoaVdWlwiMhnnm%2B1%2BGg%3D&w=5120"
            alt=""
          />
          <div className="absolute top-40 left-51 space-y-6">
            <h1 className="text-gray-200 text-2xl">PRE-TARIFF PRICING!</h1>
            <h1 className="text-white text-6xl font-medium">Get 35% OFF!</h1>
            <p className="text-white text-2xl max-w-130 mb-12">
              Hop into amazing delightful gifts at the DJI Store - Subscribe for
              your exclusive $10 coupon
            </p>
            <button className="rounded-3xl p-2 w-30 text-black bg-white">
              Shop Now
            </button>
          </div>
        </section>
        <section className="flex mx-auto gap-20 justify-between max-w-[94rem] mb-10">
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={Drone} alt="logo" className="h-20" />
            <h2>title</h2>
          </div>
        </section>

        <section className="flex flex-col justify-between mx-auto max-w-[94rem]">
          <h1 className="z-10">What's Hot</h1>
          <div className="flex gap-4">
            <div className="rounded-2xl relative h-110 w-100">
              <img
                src={Forest}
                alt="logo"
                className="max-h-full max-w-full rounded-2xl"
              />
              <div className="bg-[linear-gradient(transparent,_#1E2410)] absolute bottom-50 w-full">
                .
              </div>
              <div className="absolute space-y-2 p-6 bg-[#1E2410] bottom-0 w-full rounded-b-2xl">
                <h1 className="text-2xl text-white font-bold">DJI Mini PRO</h1>
                <p className="text-gray-300 mb-6">
                  All-In-One Omni Obstacle Sensing Mini Camera Drone
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-white">From USD $759</h2>
                  <button className="bg-white p-2 rounded-3xl w-24">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative h-110 w-100">
              <img
                src={Forest}
                alt="logo"
                className="max-h-full max-w-full rounded-2xl"
              />
              <div className="bg-[linear-gradient(transparent,_#1E2410)] absolute bottom-50 w-full">
                .
              </div>
              <div className="absolute space-y-2 p-6 bg-[#1E2410] bottom-0 w-full rounded-b-2xl">
                <h1 className="text-2xl text-white font-bold">DJI Mini PRO</h1>
                <p className="text-gray-300 mb-6">
                  All-In-One Omni Obstacle Sensing Mini Camera Drone
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-white">From USD $759</h2>
                  <button className="bg-white p-2 rounded-3xl w-24">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative h-110 w-100">
              <img
                src={Forest}
                alt="logo"
                className="max-h-full max-w-full rounded-2xl"
              />
              <div className="bg-[linear-gradient(transparent,_#1E2410)] absolute bottom-50 w-full">
                .
              </div>
              <div className="absolute space-y-2 p-6 bg-[#1E2410] bottom-0 w-full rounded-b-2xl">
                <h1 className="text-2xl text-white font-bold">DJI Mini PRO</h1>
                <p className="text-gray-300 mb-6">
                  All-In-One Omni Obstacle Sensing Mini Camera Drone
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-white">From USD $759</h2>
                  <button className="bg-white p-2 rounded-3xl w-24">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl relative h-110 w-100">
              <img
                src={Forest}
                alt="logo"
                className="max-h-full max-w-full rounded-2xl"
              />
              <div className="bg-[linear-gradient(transparent,_#1E2410)] absolute bottom-50 w-full">
                .
              </div>
              <div className="absolute space-y-2 p-6 bg-[#1E2410] bottom-0 w-full rounded-b-2xl">
                <h1 className="text-2xl text-white font-bold">DJI Mini PRO</h1>
                <p className="text-gray-300 mb-6">
                  All-In-One Omni Obstacle Sensing Mini Camera Drone
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-white">From USD $759</h2>
                  <button className="bg-white p-2 rounded-3xl w-24">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
