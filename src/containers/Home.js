import React from 'react';
import PropTypes from 'prop-types';
import QuoteScene from '../components/QuoteScene'

class Home extends React.Component {
  
  static propTypes = {
      data: PropTypes.object,
  }
  
  componentWillMount = () => {
      const {data} = this.props
      console.log('Home')
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

export default Home