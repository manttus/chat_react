import SearchBar from "../form/SearchBar";
import search from "../../assets/search.svg";

type CustomSearchModalProps = {
  onClick: () => void;
  results: { _id: string, username: string, email: string, image: string }[];
  searchHandler: (text: string) => void;
  isLoading: boolean
}

const CustomModal = ({ onClick, results, searchHandler, isLoading }: CustomSearchModalProps) => {
  return (
    <>
      <div className="z-10 fixed w-full h-screen top-0 left-0 bg-opacity-60 bg-black" onClick={onClick}> </div>
      <div className="absolute flex flex-col gap-3 justify-center bg-white px-5 py-5 z-10 w-4/12 shadow-md rounded-md transition-all duration-500 min-w-[304px]" style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }} role="dialog" aria-modal="true">
        <div className="w-full"> <SearchBar searchHandler={searchHandler} /> </div>
        <div className="flex flex-col w-full px-5 border border-gray-300 h-80 rounded-md justify-center items-center"> {results.length === 0 &&
          <div className="flex flex-col h-60 w-full" style={{
            backgroundImage: `url('${search}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}>
            {
              isLoading && <div> Loading... </div>
            }
          </div>
        }
          {
            results.map((data: {
              username: string, email: string, _id: string
            }) => {
              return <div key={data._id}> {data.username} </div>
            })
          }
        </div>
      </div>

    </>
  )
}
export default CustomModal;   
