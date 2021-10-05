import {Player, Session} from "../types/types";
import {v4, validate} from "uuid";
import {starWars, uniqueNamesGenerator} from 'unique-names-generator';

class SessionHandler {

    currentSessions: Session[];
    currentPlayers: Player[];

    constructor() {
        this.currentSessions = [];
        this.currentPlayers = [];
    }

    createSession = async (): Promise<Session> => {
        let newSession: Session = {
            id: v4(),
            deck: {
                cards: []
            },
            players: []
        }
        this.currentSessions.push(newSession)

        return newSession;
    }

    joinSession = async ({id}: {id: string}): Promise<Player[]> => {

        /*return new Promise<Session>(((resolve, reject) => {
            if (validate(id)) {
                let newPlayer: Player  = {
                    id: v4(),
                    name: uniqueNamesGenerator({dictionaries: [starWars]})
                }
                this.currentPlayers.push(newPlayer);

/!*                this.currentSessions.find((session) => {
                    if (session.id === id) {
                        session.players.push(newPlayer)
                        this.currentSessions.push(...this.currentSessions, session)
                        return newPlayer;
                    }
                })
                const newSessions = this.currentSessions.map((s) => s.id === id ? {...s, players: s.players.push(newPlayer)}: s);
                this.currentSessions = newSessions;*!/
            }
        }));*/
        let newPlayer: Player = {
            id: v4(),
            name: uniqueNamesGenerator({dictionaries: [starWars]})
        }

        this.currentPlayers.push(newPlayer)

        return this.currentPlayers;
    }

    getSessions = async (): Promise<Session[]> => {
        return this.currentSessions;
    }

}

export default SessionHandler;