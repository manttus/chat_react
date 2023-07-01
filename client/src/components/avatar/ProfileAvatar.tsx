type AvatarProps = {
  image?: string;
  onClick?: () => void;
  size?: number;
};

const ProfileAvatar = ({ image, onClick, ...rest }: AvatarProps) => {
  const style = `bg-gray-200 p-3 rounded-full h-28 w-28 cursor-pointer`;
  return (
    <div
      className={style}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    ></div>
  );
};

export default ProfileAvatar;
