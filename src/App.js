import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className=" flex justify-center items-center col-span-4 ">
          <ul className=" font-ubuntu text-xl text-white">
            <li> Profile </li>
            <li> Experience </li>
            <li> Skills </li>
            <li> Project </li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div className=" relative flex flex-col  justify-center items-center h-screen col-span-8 bg-red-50">
          <h1 className=" font-semibold text-6xl"> Ruhul Sinbad </h1>
          <p className=" uppercase tracking-[.38em] text-xl">
            {" "}
            Full Stack Developer{" "}
          </p>
          <p className=" mt-10 text-2xl text-center font-ubuntu ">
            I build digital experience for the web
            <br />
            for personal & SME.
          </p>

          <ul className=" flex  gap-2 mt-8">
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <GitHubIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
      </div>

      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
