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

        await axios.put(`http://localhost:4000/speakers/${speaker.id}`, toggledSpeaker);
        setSpeakers([...speakers.slice(0, speakerIndex), toggledSpeaker, ...speakers.slice(speakerIndex + 1)]);
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("http://localhost:4000/speakers");

            setSpeakers(response.data)
        }
        fetch();
    }, []);

    return (
        <div>
            <SpeakerSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                {speakers.filter((speaker) => {
                    const targetString = `${speaker.firstName} ${speaker.lastName}`.toLowerCase();

                    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
                }).map((speaker) => (
                    <Speaker key={speaker.id} {...speaker} onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}/>
                ))}
            </div>
        </div>
    );
};
export default Speakers;
