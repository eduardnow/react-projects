import React from 'react';

class ManageStateComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            message: 'this is the state text.',
            cat: 0,
        }
    }

    update(e) {
        this.setState({
            message: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/>
                <h1>{this.state.message} - {this.state.cat}</h1>
            </div>
        );
    }
}

export default ManageStateComponent
