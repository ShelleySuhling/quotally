import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {

    static propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }

    render() {

        const { label, placeholder, onChange, value, name } = this.props;
        return (<label className="pt-label .modifier">{label}
                    <input className="pt-input pt-fill" type="text" value={value} name={name} onChange={onChange} placeholder={placeholder} dir="auto" />
                </label>)
    }
}

export default TextInput