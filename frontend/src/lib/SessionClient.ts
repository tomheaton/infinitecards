import {Player, Session} from "../types/types";
import {v4, validate} from "uuid";
import {starWars, uniqueNamesGenerator} from 'unique-names-generator';

class SessionHandler {

    currentSessions: Session[];

    constructor() {
        this.currentSessions = [];
    }

    async createSession() {
        let newSession: Session = {
            id: v4(),
            deck: {
                cards: []
            },
            players: []
        }
        this.currentSessions.push(newSession)

        return this.currentSessions;
    }

    async joinSession({id}: {id: string}) {
        // find if id is valid
        if (validate(id)) {
            let newPlayer: Player  = {
                id: v4(),
                name: uniqueNamesGenerator({dictionaries: [starWars]})
            }
            //return newPlayer;

            this.currentSessions.find((session) => {
                if (session.id === id) {
                    session.players.push(newPlayer)
                    this.currentSessions.push(...this.currentSessions, session)
                    return newPlayer;
                }
            })
        }

        return null;
    }

    async getSessions() {
        return this.currentSessions;
    }

}

export default SessionHandler;