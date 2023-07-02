import Avatar from "../../avatar/Avatar";

type SearchTileProps = {
  image: string;
  name: string;
  onClick: () => void;
};

const SearchTile = ({ image, name, onClick }: SearchTileProps) => {
  return (
    <div
      className="flex w-full gap-2 py-10 px-4 border border-gray-300 rounded-md items-center h-10 shadow-sm cursor-pointer"
      onClick={onClick}
    >
      <Avatar image={image} />
      {name}
    </div>
  );
};

export default SearchTile;
