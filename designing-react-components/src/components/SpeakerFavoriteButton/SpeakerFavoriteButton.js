const SpeakerFavoriteButton = ({isFavorite, onFavoriteToggle}) => (
    <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'} onClick={onFavoriteToggle}/>
);

export default SpeakerFavoriteButton
