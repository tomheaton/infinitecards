import PlayingCard from "./PlayingCard";
import styles from "../styles/CardHolder.module.css";

const CardHolder = () => {

    return (
        <div className={styles.wrapper}>
            <PlayingCard value={"ace"} suit={"hearts"} />
        </div>
    );
}

export default CardHolder;