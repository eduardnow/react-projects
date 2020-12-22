const Speakers = () => {

    const speakers = [
        {
            name: 'Douglas Crockford',
            src: 'speaker-component-1124',
        },
        {
            name: 'Tamara Baker',
            src: 'speaker-component-1530',
        },
        {
            name: 'Eugene chuvyron',
            src: 'speaker-component-10803',
        }
    ];

    return (
        <div>
            {speakers.map(({name, src}) => {
                return <img src={`/images/${src}.png`} alt={name} key={src}/>;
            })}
        </div>
    );

};

export default Speakers
