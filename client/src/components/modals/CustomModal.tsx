import SearchBar from "../form/SearchBar";
import search from "../../assets/search.svg";
import SearchTile from "./components/SearchTile";
import { useDispatch } from "react-redux";
import { setSelected } from "../../features/slices/messageSlice/messageSlice";

type CustomSearchModalProps = {
  onClick: () => void;
  results: { _id: string; username: string; email: string; image: string }[];
  searchHandler: (text: string) => void;
  isLoading: boolean;
};

const CustomModal = ({
  onClick,
  results,
  searchHandler,
}: CustomSearchModalProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="z-10 fixed w-full h-screen top-0 left-0 bg-opacity-60 bg-black"
        onClick={onClick}
      ></div>
      <div
        className="absolute flex flex-col gap-3 justify-center bg-white px-5 py-5 z-10 w-4/12 shadow-md rounded-md transition-all duration-500 min-w-[304px]"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        role="dialog"
        aria-modal="true"
      >
        <div className="w-full">
          <SearchBar searchHandler={searchHandler} />{" "}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full p-2 border border-gray-300 h-80 rounded-md">
            {results.length === 0 && (
              <div className="flex w-full justify-center items-center flex-grow">
                <div
                  className="flex flex-col h-60 w-full"
                  style={{
                    backgroundImage: `url('${search}')`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            )}
            {results.map(
              (data: {
                username: string;
                email: string;
                _id: string;
                image: string;
              }) => {
                return (
                  <SearchTile
                    key={data._id}
                    name={data.username}
                    image={data.image}
                    onClick={() => {
                      dispatch(setSelected(data));
                      onClick();
                    }}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomModal;
