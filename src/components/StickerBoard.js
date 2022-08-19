import { getStickers } from "../services/api";
import StickerList from "./StickerList";
import AddButton from "./AddButton";
import { useEffect } from "react";
import useAsync from "../hooks/useAsync";

const StickerBoard = () => {
  const { execute, data, setData, status } = useAsync(getStickers);

  useEffect(() => {
    execute();
  }, []);

  return (
    <>
      {status === "success" && <AddButton data={data} setData={setData} />}
      {status === "success" && (
        <div className="sticker__board">
          <StickerList data={data} setData={setData} />
        </div>
      )}
    </>
  );
};

export default StickerBoard;
