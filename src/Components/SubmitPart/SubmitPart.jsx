import React from "react";
import styles from "./submitPart.module.css";
import { Checkbox, Dropdown } from "antd";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { saveFilterData } from "../../Redux/Slices/generalSlice";

const SubmitPart = () => {
    const dispatch = useDispatch();
    const { filterData } = useSelector((state) => state.general);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "childrenNum") {
            if (typeof value === "string") {
                dispatch(saveFilterData({ name, value: parseInt(value || "0") }));
            } else {
                dispatch(saveFilterData({ name, value }));
            }
        } else {
            dispatch(saveFilterData({ name, value }));
        }
    };

    const dropdownComponent = () => {
        return (
            <div className={styles.guestDropdown}>
                <div className={styles.actionPart}>
                    <div className={`${styles.eachSection} pt-0`} style={{ borderBottom: "1px solid #dfdfdf" }}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className={styles.title}>Adults</div>
                            <div className="d-flex align-items-center">
                                <div
                                    className={`${styles.buttonForCount} ${filterData?.adultNum > 1 ? "" : styles.disabled}`}
                                    onClick={() =>
                                        handleChange({
                                            target: {
                                                name: "adultNum",
                                                value: filterData?.adultNum - 1,
                                            },
                                        })
                                    }
                                >
                                    <FiMinus />
                                </div>
                                <input type="text" className={styles.numberInput} name="adultNum" value={filterData?.adultNum} onChange={handleChange} />
                                <div
                                    className={styles.buttonForCount}
                                    onClick={() =>
                                        handleChange({
                                            target: {
                                                name: "adultNum",
                                                value: filterData?.adultNum + 1,
                                            },
                                        })
                                    }
                                >
                                    <GoPlus />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3">
                            <div className={styles.title}>Children</div>
                            <div className="d-flex align-items-center">
                                <div
                                    className={`${styles.buttonForCount} ${filterData?.childrenNum > 0 ? "" : styles.disabled}`}
                                    onClick={() =>
                                        handleChange({
                                            target: {
                                                name: "childrenNum",
                                                value: filterData?.childrenNum - 1,
                                            },
                                        })
                                    }
                                >
                                    <FiMinus />
                                </div>
                                <input type="text" className={styles.numberInput} name="childrenNum" value={filterData?.childrenNum} onChange={handleChange} />
                                <div
                                    className={styles.buttonForCount}
                                    onClick={() =>
                                        handleChange({
                                            target: {
                                                name: "childrenNum",
                                                value: filterData?.childrenNum + 1,
                                            },
                                        })
                                    }
                                >
                                    <GoPlus />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className={styles.title}>Rooms</div>
                            <div className="d-flex align-items-center">
                                <div
                                    className={`${styles.buttonForCount} ${filterData?.roomNum > 1 ? "" : styles.disabled}`}
                                    onClick={() =>
                                        handleChange({
                                            target: {
                                                name: "roomNum",
                                                value: filterData?.roomNum - 1,
                                            },
                                        })
                                    }
                                >
                                    <FiMinus />
                                </div>
                                <input type="text" className={styles.numberInput} name="roomNum" value={filterData?.roomNum} onChange={handleChange} />
                                <div
                                    className={styles.buttonForCount}
                                    onClick={() =>
                                        handleChange({
                                            target: {
                                                name: "roomNum",
                                                value: filterData?.roomNum + 1,
                                            },
                                        })
                                    }
                                >
                                    <GoPlus />
                                </div>
                            </div>
                        </div>
                    </div>
                    {filterData?.childrenNum > 0 && (
                        <div className={`${styles.middleSection} ${styles.eachSection}`}>
                            <div className={`${styles.sectionHead} mb-2`}>Children's Ages(Required)</div>
                            {[...new Array(filterData?.childrenNum)].map((curElem, index) => {
                                return (
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className={styles.title}>Child {`${index + 1}`}</div>
                                        <div className="d-flex align-items-center">
                                            <input type="text" className={styles.numberInput} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <div className={`${styles.eachSection}`}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <div className={styles.checkSectionHead}>Pet-friendly</div>
                                <div className={styles.checkSectionSubhead}>Only show stays that allow pets</div>
                            </div>
                            <div>
                                <Checkbox
                                    checked={filterData?.petFriendly}
                                    onChange={(event) =>
                                        handleChange({
                                            target: {
                                                name: "petFriendly",
                                                value: event.target.checked,
                                            },
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dropdownSubmitPart}>
                    <div className={styles.reset}>RESET</div>
                    <button className={styles.applyButton}>Apply</button>
                </div>
            </div>
        );
    };
    return (
        <div className="d-flex align-items-center justify-content-between w-100 h-100">
            <Dropdown dropdownRender={() => dropdownComponent()} trigger={["click"]}>
                <div className={`${styles.ctaContainer} px-3`} style={{ fontSize: "14px" }}>
                    Members and Rooms
                </div>
            </Dropdown>
            <button className={styles.submitButton}>Submit</button>
        </div>
    );
};

export default SubmitPart;
