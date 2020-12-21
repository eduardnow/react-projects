import React from "react";
import PropTypes from "prop-types";

class PropertiesComponent extends React.Component {
    render() {
        let text = this.props.txt

        return (
            <h1>{text} - {this.props.cat}</h1>
        );
    }
}

PropertiesComponent.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired,
}

PropertiesComponent.defaultProps = {
    txt: "this is the default txt",
}

export default PropertiesComponent
