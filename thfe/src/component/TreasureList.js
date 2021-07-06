import { useSelector } from "react-redux";

const TreasureList = () => {
  const items = useSelector((state) => state.items.items);
  return (
    <div>
      <list>{items}</list>
    </div>
  );
};

export default TreasureList;
