import CustomIconButton from "../../components/button/CustomIconButton";
import { VscKebabVertical } from "react-icons/vsc";
import HeadingMedium from "../../components/headings/HeadingMedium";
import SearchBar from "../../components/form/SearchBar";
import MessageTile from "./components/MessageTile";
import { useForm } from "react-hook-form";
import mantuu from "../../assets/mantuu.jpeg";
import image from "../../assets/_.jpeg";

import ChatArea from "./components/ChatArea";
import { useState } from "react";
import IllustrationArea from "./components/IllustrationArea";
import { AiOutlinePlus } from "react-icons/ai";
import CustomModal from "../../components/modals/CustomModal";
import { useQuery } from "@tanstack/react-query";
import { getSearchedUser } from "../../features/endpoints/user";

const dummy_data = [
  {
    _id: 1,
    username: "Bauls Man",
    image: mantuu,
    message: "You: Bauls is good",
    time: "21:45",
  },
  {
    _id: 2,
    username: "Raymun",
    image: image,
    message: "Brrrrr is good",
    time: "20:18",
  },
];

const HomePage = () => {
  const { register } = useForm<any>();
  const [modal, setModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<(typeof dummy_data)[0] | null>(null);
  const [search, setSearch] = useState<string>("");
  const {
    data: users,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getSearchedUser(search),
    enabled: Boolean(search),
    staleTime: 500,
    retry: false
  })
  const searchHandler = (text: string) => {
    setTimeout(() => {
      setSearch(text);
    }, 50)
  }

  return (
    <div className="flex flex-grow">
      {
        modal && <CustomModal onClick={() => setModal((prev) => { setSearch(""); return !prev })} results={users ? users : []} searchHandler={searchHandler} isLoading={isLoading} />
      }
      <div className="flex flex-col md:w-1/4 lg:w-1/4 xl:w-1/4 w-full border-r border-gray-300 min-w-[320px]">
        <div className="flex w-full h-16 px-4 py-5 justify-between items-center border-b">
          <HeadingMedium text="Chat Brrrr" />
          <div className="flex gap-2">
            <CustomIconButton Icon={AiOutlinePlus} onClick={() => setModal((prev) => !prev)} />
            <CustomIconButton Icon={VscKebabVertical} />
          </div>
        </div>
        <div className="flex w-full px-4 py-5 border-b justify-center">
          <SearchBar searchHandler={(text: string) => { console.log(text) }} />
        </div>

        {/* <div className="flex w-full px-5 pt-5 justify-between">
          <GhostSmall text="All Messages" />
        </div> */}
        <div className="flex flex-col flex-grow overflow-y-scroll no-scrollbar ">
          {dummy_data.map(
            (data: {
              _id: number;
              username: string;
              image: string;
              message: string;
              time: string;
            }) => {
              return (
                <MessageTile
                  key={data._id}
                  username={data.username}
                  image={data.image}
                  message={data.message}
                  time={data.time}
                  onClick={() => {
                    setSelected(data);
                  }}
                />
              );
            }
          )}
        </div>
      </div>
      {selected && <ChatArea register={register} data={selected} />}
      {!selected && <IllustrationArea />}
    </div>
  );
};

export default HomePage;
