import React, { useEffect } from "react";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import { v4 as uuid } from "uuid";

const names = ["Raw Data", "Bucketed Data", "Linear Data"];

export default function Multiselect() {
  const [dataValue, setDataValue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDataValue(
      dataValue.includes(value)
        ? dataValue.filter((item) => item !== value)
        : [...dataValue, value]
    );
  };

  console.log("dataValue ", dataValue);
  useEffect(() => {
    setDataValue([]);
  }, []);

  return (
    <div>
      <div className="multiSelectBox">
        <input placeholder="Select data type" value={dataValue} disabled />

        <select
          id="multiCheckbox"
          name="multiCheckbox"
          placeholder="Select data types"
          className="myMultiSelect"
          defaultValue={dataValue[0]}
          multiple
          value={dataValue}
          onChange={handleChange}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        {names.map((name) => (
          <MultiSelectCheckbox
            key={uuid()}
            name={name}
            isChecked={dataValue.indexOf(name) > -1}
            dataValue={dataValue}
            setDataValue={setDataValue}
          />
        ))}
      </div>
    </div>
  );
}
