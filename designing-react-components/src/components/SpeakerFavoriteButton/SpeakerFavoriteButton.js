const SpeakerFavoriteButton = ({isFavorite}) => (
    <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}/>
);

export default SpeakerFavoriteButton
