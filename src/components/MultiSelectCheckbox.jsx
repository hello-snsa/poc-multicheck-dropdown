import React from "react";

export default function MultiSelectCheckbox({isChecked,dataValue,setDataValue,name}) {
  
    const handleChange = (event) => {
        const {target: { value }} = event;
        setDataValue(
        dataValue.includes(value)
            ? dataValue.filter((item) => item !== value)
            : [...dataValue, value]
        );
     };

  return (
    <input
      value={name}
      type={"checkbox"}
      checked={isChecked}
      onChange={handleChange}
    />
  );
}
