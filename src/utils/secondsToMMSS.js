// import moment from "moment";

const secondsToMMSS = (seconds) => {
    return new Date(seconds * 60  * 1000).toISOString().substring(11, 16);
    // moment.utc(seconds * 1000).format("mm:ss")

}

export default secondsToMMSS;