import { useState } from "react";
import { useNavigate } from "react-router-dom";
import intro from "../assets/intro.mp4";
import { Button } from "@/components/ui/button";
import bg_img from "../assets/bg_img.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [isThemeRevealed, setIsThemeRevealed] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const handleStartClick = () => {
    if (!isThemeRevealed) {
      setPlayVideo(true);
    } else {
      navigate("/team");
    }
  };

  const handleVideoEnded = () => {
    setPlayVideo(false);
    setIsThemeRevealed(true);
  };

  return (
    <div
      className="flex w-full h-full gap-10 flex-col items-center justify-center font-body"
      style={
        isThemeRevealed
          ? {
              background: `url(${bg_img})`,
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
            }
          : {}
      }
    >
      <h1 className="text-5xl font-bold font-heading">
        DEUEX PREMIERE LEAGUE <span className="text-yellow-500">2024-25</span>
      </h1>
      <p className="text-yellow-500 text-3xl">Welcome to DPL V3!</p>
      <Button onClick={handleStartClick}>
        {!isThemeRevealed ? "Reveal Theme" : "Start"}
      </Button>
      {isThemeRevealed && (
        <p className="text-2xl font-bold">Theme: Game Of Thrones</p>
      )}
      {playVideo && (
        <video
          autoPlay
          onEnded={handleVideoEnded}
          volume={1.0}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={intro} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Home;
