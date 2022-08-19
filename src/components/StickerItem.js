import { removeSticker, updateSticker } from "../services/api";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

const StickerItem = ({ id, description, setData, data }) => {
  const [currentDescription, setCurrentDescription] = useState(description);
  const [isEdit, setIsEdit] = useState(false);

  const deleteSticker = () => {
    removeSticker(id).then((resp) => {
      const filteredStickers = data.filter((item) => item.id !== id);
      setData(filteredStickers);
    });
  };

  const saveSticker = () => {
    updateSticker(id).then((resp) => {
      const sticker = data.find((item) => item.id === id);
      sticker.description = currentDescription;

      setData([...data]);
    });
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const descInput = () => {
    return (
      <textarea
        className="sticker__area"
        type="test"
        value={currentDescription}
        onBlur={() => {
          toggleEdit();
          saveSticker(currentDescription);
        }}
        onChange={(e) => setCurrentDescription(e.target.value)}
        autoFocus
      />
    );
  };
  const descParagraph = () => {
    return <p onClick={toggleEdit}>{currentDescription}</p>;
  };

  return (
    <div className="sticker__item">
      <div className="sticker__button">
        <div className="sticker__button-delet" onClick={deleteSticker}>
          <i>
            <TiDelete />
          </i>
        </div>
      </div>
      {isEdit ? descInput() : descParagraph()}
    </div>
  );
};

export default StickerItem;
