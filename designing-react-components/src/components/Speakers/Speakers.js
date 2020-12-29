import Speaker from "../Speaker/Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar/SpeakerSearchBar";
import {useState, useEffect} from "react";
import axios from "axios";

const Speakers = () => {

    const toggleSpeakerFavorite = speaker => {
        return {
            ...speaker,
            isFavorite: !speaker.isFavorite,
        }
    };

    const onFavoriteToggleHandler = async speaker => {
        const toggledSpeaker = toggleSpeakerFavorite(speaker);
        const speakerIndex = speakers.map(speakerRec => speakerRec.id).indexOf(speaker.id);

        try {
            await axios.put(`http://localhost:4000/speakers/${speaker.id}`, toggledSpeaker);
            setSpeakers([...speakers.slice(0, speakerIndex), toggledSpeaker, ...speakers.slice(speakerIndex + 1)]);
        } catch (e) {
            setStatus(REQUEST_STATUS.ERROR)
            setError(e)
        }
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [speakers, setSpeakers] = useState([]);

    const REQUEST_STATUS = {
        LOADING: 'loading',
        SUCCESS: 'success',
        ERROR: 'error',
    };

    const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState({})

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("http://localhost:4000/speakers");
                setSpeakers(response.data)
                setStatus(REQUEST_STATUS.SUCCESS)
            } catch (e) {
                setStatus(REQUEST_STATUS.ERROR)
                setError(e)
            }
        }
        fetch();
    }, []);

    const isSuccess = status === REQUEST_STATUS.SUCCESS
    const isLoading = status === REQUEST_STATUS.LOADING
    const hasErrored = status === REQUEST_STATUS.ERROR

    return (
        <div>
            <SpeakerSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            {isLoading && <div>Loading...</div>}

            {hasErrored && (
                <div>
                    Loading error... Is the json-server running? (try "npm run json-server" at terminal prompt)
                    <br/>
                    <b>ERROR: {error.message}</b>
                </div>
            )}

            {isSuccess && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                    {speakers.filter((speaker) => {
                        const targetString = `${speaker.firstName} ${speaker.lastName}`.toLowerCase();

                        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
                    }).map((speaker) => (
                        <Speaker key={speaker.id} {...speaker}
                                 onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}/>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Speakers;
