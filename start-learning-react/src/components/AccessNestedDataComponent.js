import React from 'react';

const Button = props => <button>{props.children}</button>;

const Heart = props => <span>&hearts;</span>;

class AccessNestedDataComponent extends React.Component {
    render() {
        return (
            <Button> I <Heart/> React</Button>
        );
    }
}

export default AccessNestedDataComponent
