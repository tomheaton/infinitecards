type Session = {
    id: string,
    deck: Deck | null
    players: Player[] | null
}

type Card = {
    value: "1" | "2" |"3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "j" | "q" |"k",
    suit: "hearts" | "spades" | "diamonds" | "clubs"
}

type Deck = {
    cards: Card[] | null
}

type Player = {
    id: string,
    name: string
}

export type { Session, Card, Deck, Player }
