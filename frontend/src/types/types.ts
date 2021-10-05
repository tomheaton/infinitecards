type Session = {
    id: string,
    deck: Deck
    players: Player[]
}

type Card = {
    value: "1" | "2" |"3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "j" | "q" |"k",
    suit: "hearts" | "spades" | "diamonds" | "clubs"
}

type Deck = {
    cards: Card[]
}

type Player = {
    id: string,
    name: string
}

export type { Session, Card, Deck, Player }
