import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {

    static propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }

    render() {
        const { label, placeholder, name, onChange, value } = this.props;
        return (
            <label className="pt-label .modifier .pt-fill">Quote
                <textarea className="pt-input .modifier pt-fill" dir="auto" value={value} name={name} onChange={onChange} placeholder={placeholder}>{value}</textarea>
            </label>
        )
    }
}

export default TextArea