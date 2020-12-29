import Speaker from "../Speaker/Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar/SpeakerSearchBar";
import {useState, useEffect, useReducer} from "react";
import axios from "axios";
import {GET_ALL_FAILURE, GET_ALL_SUCCESS, PUT_FAILURE, PUT_SUCCESS} from "../../actions/request";

import requestReducer from '../../reducers/request';

const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

const Speakers = () => {

    const onFavoriteToggleHandler = async speaker => {
        try {
            const toggledSpeaker = {
                ...speaker,
                isFavorite: !speaker.isFavorite,
            };
            const speakerIndex = speakers.map(speakerRec => speakerRec.id).indexOf(speaker.id);

            await axios.put(`http://localhost:4000/speakers/${speaker.id}`, toggledSpeaker);

            dispatch({
                type: PUT_SUCCESS,
                record: toggledSpeaker,
            });

        } catch (e) {
            dispatch({
                type: PUT_FAILURE,
                error: e,
            });
        }
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [{records: speakers, status, error}, dispatch] = useReducer(
        requestReducer,
        {
            records: [],
            status: REQUEST_STATUS.LOADING,
            error: null,
        },
    );

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("http://localhost:4000/speakers");
                dispatch({
                    type: GET_ALL_SUCCESS,
                    records: response.data,
                });
            } catch (e) {
                console.log('Loading data error', e);
                dispatch({
                    type: GET_ALL_FAILURE,
                    error: e,
                });
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
