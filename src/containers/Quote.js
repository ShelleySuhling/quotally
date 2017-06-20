import React from 'react';
import PropTypes from 'prop-types';
import QuoteScene from '../components/QuoteScene'

export default class Quote extends React.Component {
  
  static propTypes = {
      data: PropTypes.object,
  }
  
  componentWillMount = () => {
      const {data} = this.props
  }

  render() {
    const {data} = this.props;
    return (<div style={styles.container}>
        <QuoteScene />
    </div>);
  }
}

const styles = {
  container: {
    width: '100%',
    padding: '0px',
    margin: '0px'
  }
};