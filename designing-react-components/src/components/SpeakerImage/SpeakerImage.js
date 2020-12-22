import {SimpleImg} from "react-simple-img";

const SpeakerImage = ({id}) => {
    const path = `/speakers/speaker-${id}.jpg`;

    return (<SimpleImg src={path} animationDuration="1" width={200} height={200} applyAspectRatio="true"/>);
};

export default SpeakerImage
