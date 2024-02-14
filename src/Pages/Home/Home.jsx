import React from "react";
import styles from "./home.module.css";
import SearchBox from "../../Components/SearchBox/SearchBox";

const Home = () => {
    return (
        <div className={styles.container}>
            <SearchBox />
        </div>
    );
};

export default Home;
