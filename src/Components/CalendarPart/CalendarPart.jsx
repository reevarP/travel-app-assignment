import React from "react";
import styles from "./calendarPart.module.css";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { saveFilterData } from "../../Redux/Slices/generalSlice";

const { RangePicker } = DatePicker;

const CalendarPart = () => {
    const dispatch = useDispatch();
    const handleChange = (date, datestring) => {
        dispatch(saveFilterData({ name: "startDate", value: datestring[0] ? datestring[0] : "" }));
        dispatch(saveFilterData({ name: "endDate", value: datestring[1] ? datestring[1] : "" }));
    };
    return (
        <div className={styles.ctaContainer}>
            <RangePicker variant="borderless" onChange={handleChange} />
        </div>
    );
};

export default CalendarPart;
