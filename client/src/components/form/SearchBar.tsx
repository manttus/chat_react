import { ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
type SearchBarProps = {
  searchHandler: (text: string) => void
}
const SearchBar = ({ searchHandler }: SearchBarProps) => {
  return (
    <div className="relative flex w-full flex-grow">
      <input
        className="py-3 w-full px-3 border  border-gray-300 rounded-md focus:outline-primary placeholder:text-gray-400 text-sm"
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => searchHandler(e.target.value)}
      />
      <div className="absolute top-3 left-[78] right-4 text-2xl ">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default SearchBar;
