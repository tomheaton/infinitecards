import {Session, Player} from "../types/types";
import {v4, validate} from "uuid";
import { uniqueNamesGenerator, Config, starWars } from 'unique-names-generator';

class SessionHandler {

    currentSessions: Session[];

    constructor() {
        this.currentSessions = [];
    }

    createSession() {
        let newSession: Session = {
            id: v4(),
            deck: {
                cards: null
            },
            players: []
        }
        this.currentSessions.push(newSession)
    }

    joinSession({id, name}: {id: string, name: string}) {
        // find if id is valid
        if (validate(id)) {
            let newPlayer: Player  = {
                id: v4(),
                name: uniqueNamesGenerator({dictionaries: [starWars]})
            }

            this.currentSessions.filter((session) => {
                if (session.id === id && session.players !== null) {
                    session.players.push(newPlayer)
                    return newPlayer;
                }
            })
        }

        return null;
    }

    getSessions() {
        return this.currentSessions;
    }

}

const sessionHandler = new SessionHandler()

export default sessionHandler;