import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div>
                <input ref="input" type="text" onChange={this.props.update}/>
            </div>
        );
    }
}

class GetReferenceComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            a: '',
        }
    }

    update() {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        });
    }

    render() {
        return (
            <div>
                <Input ref={component => this.a = component} update={this.update.bind(this)}/>
                <p>{this.state.a}</p>
                <hr/>
                <input type="text" ref="b" onChange={this.update.bind(this)}/>
                <p>{this.state.b}</p>
            </div>
        );
    }
}

export default GetReferenceComponent
