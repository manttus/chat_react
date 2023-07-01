import GhostMedium from "../../../components/headings/GhostMedium";
import HeadingLarge from "../../../components/headings/HeadingLarge";
import illustration from "../../../assets/sprinting.svg";

const IllustrationArea = () => {
  return (
    <div className="hidden bg-gray-200 gap-5 md:flex lg:flex flex-col justify-center items-center w-3/4 md:w-full min-w-[150px]">
      <div
        style={{
          backgroundImage: `url(${illustration})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className=" flex flex-col h-80 w-full "
      ></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <HeadingLarge text="Messages Web" />
        <GhostMedium text="Start chatting with your friends & family" />
      </div>
    </div>
  );
};

export default IllustrationArea;
