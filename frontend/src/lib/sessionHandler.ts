import SessionHandler from "./SessionClient";

let sessionHandler: SessionHandler;

if (process.env.NODE_ENV === 'production') {
    sessionHandler = new SessionHandler();
} else {
    // @ts-ignore
    if (!global.sessionHandler) {
        // @ts-ignore
        global.sessionHandler = new SessionHandler();
    }
    // @ts-ignore
    sessionHandler = global.sessionHandler;
}

export default sessionHandler;