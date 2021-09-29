import styles from "../styles/PlayingCard.module.css";

type PlayingCardProps = {
    value: "ace" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "jack" | "queen" | "king"
    suit: "hearts" | "diamonds" | "spades" | "clubs",
}

const PlayingCard = ({value, suit}: PlayingCardProps) => {

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <div className={styles.suit}>
                </div>
                <div className={styles.value}>
                </div>
                <div className={styles.body}>
                </div>
            </div>
        </div>
    );
}

export default PlayingCard;