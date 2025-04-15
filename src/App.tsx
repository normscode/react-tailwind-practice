import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
function App() {
  return (
    <>
      <main className="flex flex-col">
        <nav>
          <div className="flex justify-between items-center max-w-[94rem] py-2 mx-auto bg-white">
            <ul className="flex space-x-4">
              <li>dji.com</li>
              <li>DJI Store APP</li>
              <li>More</li>
            </ul>
            <div className="flex gap-2 items-center">
              <CiGlobe />
              <a href="">
                <h1>United States (English / $ USD)</h1>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-end max-w-[94rem] py-4 mx-auto">
            <div className="flex gap-10">
              <a href="" className="flex gap-2">
                <img src={Logo} alt="" />
                <h1>STORE</h1>
              </a>
              <ul className="flex gap-4">
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
              <CiSearch />
              <IoCartOutline />
              <GoPerson />
            </div>
          </div>
        </nav>

        <section className="h-full relative z-[-20] top-[-3.5rem]">
          <img
            className="h-full"
            src="https://se-cdn.djiits.com/stormsend/uploads/597b513945cc5b56935a6ea8b9c6c69a.jpg?h=1280&thumb=p3sKGoaVdWlwiMhnnm%2B1%2BGg%3D&w=5120"
            alt=""
          />
          <div className="absolute top-40 left-51">
            <p>Egg-citing Deals await</p>
            <h1>Get 35% OFF This Easter!</h1>
            <p>Hop into amazing de</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
