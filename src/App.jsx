import { useEffect, useState, ReactNode } from "react";
import { Tooltip } from "./toolTip";
import "./App.css";
import "./App_2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Option } from "@material-tailwind/react";
import {
  faChevronLeft,
  faPause,
  faChevronRight,
  faChevronDown,
  faMagnifyingGlass,
  faComment,
  faHeart,
  faBookBookmark,
  faShareNodes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const clog = () => console.log("button clicked");

function App() {
  const lightTheme = "./src/App.css";
  const darkTheme = "./src/App_2.css";
  const [stylePath, setStylePath] = useState(lightTheme);

  const handleTheme = () => {
    setStylePath(stylePath === lightTheme ? darkTheme : lightTheme);
  };

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = stylePath;

    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [stylePath]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="app-container py-24 px-20">
          <div className="flex flex-row justify-between">
            <div className="title text-6xl font-bold w-28 h-28 buttonclicked effect rounded-3xl flex justify-center items-center">
              UI
            </div>

            <form className="flex flex-col h-28 py-4 px-4 justify-between">
              <label htmlFor="option-1" className="effect rounded-full">
                <input
                  type="radio"
                  id="option-1"
                  name="selector"
                  checked
                  readOnly
                />
                <span></span>
              </label>

              <label htmlFor="option-2" className="effect rounded-full">
                <input type="radio" id="option-2" name="selector" />
                <span></span>
              </label>
            </form>
            <Tooltip message="Switch Themes">
              <div className="flex flex-col h-28 justify-between py-4 px-4">
                <label>
                  <div className="switch">
                    <input type="checkbox" onChange={() => handleTheme()} />
                    <div className="switch-bg"></div>
                    <div className="switch-indicator"></div>
                  </div>
                  <span></span>
                </label>
              </div>
            </Tooltip>

            <div className="flex flex-col w-52 h-32 justify-between">
              <div className="flex flex-row justify-between">
                <div className="buttonclicked w-14 h-12 effect flex justify-center items-center rounded-xl app-color-gray">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="buttonclicked w-14 h-12 effect flex justify-center items-center rounded-xl app-color-gray">
                  <FontAwesomeIcon icon={faPause} />
                </div>
                <div className="buttonclicked w-14 h-12 effect flex justify-center items-center rounded-xl app-color-gray">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
              <div className="flex flex-row py-3 px-5 buttonclicked effect justify-between items-center rounded-xl">
                <span className="app-color-gray">Select</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="app-color-gray"
                />
              </div>
              {/* <div>
                <select className="app-color-gray flex flex-row py-3 px-3 buttonclicked effect justify-between items-center rounded-xl">
                  <option>Select</option>
                  <option>Laravel 9 with React</option>
                  <option>React with Tailwind CSS</option>
                  <option>React With Headless UI</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="flex flex-row mt-6">
            <div className="flex flex-row w-72 app-color-gray rounded-3xl effect-inner py-3 px-6 items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                type="text"
                placeholder="Search for ..."
                className="ml-2 app-color-gray"
              />
            </div>
          </div>

          <div className="flex flex-row mt-6">
            <div className="flex flex-col w-1/3">
              <button
                className="buttonclicked effect py-2 rounded-3xl app-color-gray"
                onClick={() => clog()}
              >
                Button
              </button>
              <div className="flex flex-row justify-between mt-6">
                <div className="w-14 h-12 flex buttonclicked effect rounded-xl justify-center items-center">
                  <FontAwesomeIcon icon={faHeart} className="app-color-pink" />
                </div>
                <div className="w-14 h-12 flex buttonclicked effect rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="app-color-blue-1"
                  />
                </div>
                <div className="w-14 h-12 flex buttonclicked effect rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    className="app-color-blue-2"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between mt-6">
                <button className="buttonclicked effect py-2 rounded-3xl w-32 app-color-gray">
                  <FontAwesomeIcon icon={faShareNodes} className="mr-1" />
                  Share
                </button>
                <button className="buttonclicked effect rounded-full w-12 h-12">
                  <FontAwesomeIcon icon={faPlus} className="app-color-gray" />
                </button>
              </div>
            </div>

            <div className="flex w-2/3 h-72 pl-10 pb-2 justify-between -mt-24">
              <div className="flex flex-col justify-end">
                <div className="h-32 flex flex-col justify-end items-center effect-inner rounded-3xl">
                  <div className="fluid_1 h-24 app-bg-blue-1 w-full rounded-3xl"></div>
                </div>

                <div className="mt-2 buttonclicked effect w-8 h-8 rounded-full flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full app-bg-blue-1"></div>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="h-28 flex flex-col justify-end items-center effect-inner rounded-3xl">
                  <div className="fluid_1 h-16 app-bg-blue-2 w-full rounded-3xl"></div>
                </div>

                <div className="mt-2 buttonclicked effect w-8 h-8 rounded-full flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full app-bg-blue-2"></div>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="h-52 flex flex-col justify-end items-center effect-inner rounded-3xl">
                  <div className="fluid_1 h-44 app-bg-lavender w-full rounded-3xl"></div>
                </div>
                <div className="mt-2 buttonclicked effect w-8 h-8 rounded-full flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full app-bg-lavender"></div>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="h-36 flex flex-col justify-end items-center effect-inner rounded-3xl">
                  <div className="fluid_1 h-24 app-bg-pink w-full rounded-3xl"></div>
                </div>
                <div className="mt-2 buttonclicked effect w-8 h-8 rounded-full flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full app-bg-pink"></div>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="h-44 flex flex-col justify-end items-center effect-inner rounded-3xl">
                  <div className="fluid_1 h-32 app-bg-teal w-full rounded-3xl"></div>
                </div>

                <div className="mt-2 buttonclicked effect w-8 h-8 rounded-full flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full app-bg-teal"></div>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="h-32 flex flex-col justify-end items-center effect-inner rounded-3xl">
                  <div className="fluid_1 h-24 app-bg-green w-full rounded-3xl"></div>
                </div>

                <div className="mt-2 buttonclicked effect w-8 h-8 rounded-full flex justify-center items-center">
                  <div className="w-5 h-5 rounded-full app-bg-green"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
