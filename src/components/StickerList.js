import StickerItem from "./StickerItem";

const StickerList = ({ data, setData }) => {
  return data.map(({ id, description }) => {
    return (
      <StickerItem
        key={id}
        id={id}
        description={description}
        setData={setData}
        data={data}
      />
    );
  });
};

export default StickerList;
