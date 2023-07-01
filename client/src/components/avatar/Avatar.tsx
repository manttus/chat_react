type AvatarProps = {
  image?: string;
  onClick?: () => void;
  size?: number;
};

const Avatar = ({ image, onClick }: AvatarProps) => {
  return (
    <div
      className="bg-gray-200 p-3 rounded-full h-10 w-10 cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    ></div>
  );
};

export default Avatar;
