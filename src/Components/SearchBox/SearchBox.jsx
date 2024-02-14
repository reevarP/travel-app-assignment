import React from "react";
import styles from "./searchBox.module.css";
import SearchInputPart from "../SearchInputPart/SearchInputPart";
import CalendarPart from "../CalendarPart/CalendarPart";
import SubmitPart from "../SubmitPart/SubmitPart";
import { useSelector } from "react-redux";

const SearchBox = () => {
    const { filterData } = useSelector((state) => state.general);
    console.log(filterData);
    return (
        <div className="d-flex justify-content-center">
            <div className={styles.searchBox}>
                <div style={{ width: "35%", height: "100%" }} className={`${styles.eachSection}`}>
                    <div className={styles.ctaContainer}>
                        <SearchInputPart />
                    </div>
                </div>
                <div style={{ width: "30%", height: "100%" }} className={`${styles.centerSection} ${styles.eachSection}`}>
                    <CalendarPart />
                </div>
                <div style={{ width: "35%", height: "100%" }} className={`${styles.eachSection}`}>
                    <SubmitPart />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
