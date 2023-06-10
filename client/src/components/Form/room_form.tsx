import { ChangeEvent } from "react";

type RoomFormProps = {
  joinRoom: () => void;
  setRoomId: (roomId: string) => void;
};

const RoomForm = ({ joinRoom, setRoomId }: RoomFormProps) => {
  return (
    <form
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        joinRoom();
      }}
    >
      <input
        type="text"
        placeholder="room id"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setRoomId(e.target.value)
        }
      />
      <button type="submit"> Join Room </button>
    </form>
  );
};

export default RoomForm;
