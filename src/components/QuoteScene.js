import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from './Form/TextInput'
import TextArea from './Form/TextArea'

class QuoteScene extends Component {
    
    constructor () {
        super()
        this.state = {
            quote: "",
            tags: "",
            author: "",
            source: "",
            link: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    static propTypes = {
        iconName: PropTypes.string,
        title: PropTypes.string,
    }

    componentWillMount = () => {
        console.log('mounted')
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        console.log('value', value)

        this.setState({...this.state, [name]:value })
    }
    
    handleSubmit = () => {
        console.log(this.state)
    }

    render () {

        const { title, iconName } = this.props;
        
        return (<div style={styles.container}>
            <div className='pt-card' style={styles.quoteForm}>
                <TextArea 
                    label="Quote"
                    name="quote"
                    value={this.state.quote}
                    onChange={this.handleInputChange}
                />

                <TextInput
                    label="Tag(s)"
                    name="tags"
                    value={this.state.tags}
                    onChange={this.handleInputChange}
                />

                <TextInput
                    label="Author"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleInputChange}
                />

                <TextInput
                    label="Source"
                    name="source"
                    value={this.state.source}
                    onChange={this.handleInputChange}
                />

                <TextInput
                    label="Link"
                    name="link"
                    value={this.state.link}
                    onChange={this.handleInputChange}
                />

                <button type="button" className="pt-button pt-large pt-right pt-intent-primary" onClick={this.handleSubmit}>Quote</button>
            </div>
        </div>)
    }
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        paddingTop: '20px'
    },
    quoteForm: {
        width: '350px'
    }
}

export default QuoteScene;