import React, { useState } from "react";
import { AutoComplete } from "antd";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { saveFilterData } from "../../Redux/Slices/generalSlice";

const SearchInputPart = () => {
    const dispatch = useDispatch();
    const options = [{ value: "Hello" }, { value: "yoyoyo" }, { value: "wowowo" }];
    const [filteredOptions, setFilteredOptions] = useState([...options]);
    const handleSelect = (data) => {
        dispatch(saveFilterData({ name: "cityName", value: data }));
    };
    const handleSearch = (text) => {
        let data = options.filter((curElem) => {
            if (text) {
                return curElem.value.includes(text);
            } else {
                return true;
            }
        });
        setFilteredOptions(data);
    };
    return (
        <AutoComplete
            options={filteredOptions}
            style={{
                width: "100%",
            }}
            placeholder="Search City"
            onSearch={handleSearch}
            onSelect={handleSelect}
            variant="borderless"
            allowClear={{
                clearIcon: <IoCloseCircle />,
            }}
        />
    );
};

export default SearchInputPart;
