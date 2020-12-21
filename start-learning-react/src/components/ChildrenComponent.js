import React from 'react';

class ChildrenComponent extends React.Component {
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
                <h1>{this.state.message} - {this.state.cat}</h1>
                <div>
                    <Widget update={this.update.bind(this)}/>
                </div>
                <div>
                    <Widget update={this.update.bind(this)}/>
                </div>
            </div>
        );
    }
}

const Widget = (props) => <input type="text" onChange={props.update}/>

export default ChildrenComponent
