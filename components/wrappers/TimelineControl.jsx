import { useState, useEffect } from 'react';

const TimelineControl = ({ children, itemCount }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemChange = newItem => setSelectedItem(newItem);

  const nextSelectedItem = () => {
    selectedItem === itemCount
      ? setSelectedItem(0)
      : setSelectedItem(state => state + 1);
  };

  const prevSelectedItem = () => {
    selectedItem === 0
      ? setSelectedItem(itemCount)
      : setSelectedItem(state => state - 1);
  };

  const slideTo = year => {};

  return children({
    prevSelectedItem,
    nextSelectedItem,
    handleItemChange,
    selectedItem
  });
};

export default TimelineControl;
