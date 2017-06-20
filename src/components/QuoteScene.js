import React, {Component} from 'react';
import PropTypes from 'prop-types';


class QuoteScene extends Component {
    
    static propTypes = {
        iconName: PropTypes.string,
        title: PropTypes.string,
    }

    componentWillMount = () => {
        console.log('mounted')
    }

    render () {

        const { title, iconName } = this.props;
        
        return (<div style={styles.container}>
            <div className='pt-card' style={styles.quoteForm}>
                <label className="pt-label .modifier .pt-fill">
                    Quote
                    <textarea className="pt-input .modifier pt-fill" dir="auto"></textarea>
                </label>
                 <label className="pt-label .modifier">
                    Tag(s)
                    <input className="pt-input pt-fill" style={styles.tags} type="text" placeholder="Text input" dir="auto" />
                </label>
                <label className="pt-label .modifier">
                    Author
                    <input className="pt-input pt-fill" style={styles.author} type="text" placeholder="Text input" dir="auto" />
                </label>
                <label className="pt-label .modifier">
                    Source
                    <input className="pt-input pt-fill" style={styles.source} type="text" placeholder="Text input" dir="auto" />
                </label>
                <label className="pt-label .modifier">
                    Link
                    <input className="pt-input pt-fill" style={styles.link} type="text" placeholder="Text input" dir="auto" />
                </label>
                <button type="button" class="pt-button pt-large pt-right">Quote</button>
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