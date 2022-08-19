import { addSticker } from "../services/api";
import { BiMessageSquareAdd } from "react-icons/bi";

const AddButton = ({ data, setData }) => {
  const emptySticker = {
    description: "Add Your Note Here",
  };

  const addNewSticker = () => {
    addSticker(emptySticker).then((resp) => {
      setData([...data, resp.data]);
    });
  };

  return (
    <div className="add__button">
      <span onClick={addNewSticker}>
        Add New Note
        <BiMessageSquareAdd />
      </span>
    </div>
  );
};

export default AddButton;
