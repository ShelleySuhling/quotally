import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class TopNav extends Component {
    
    static propTypes = {
        iconName: PropTypes.string,
        title: PropTypes.string,
    }

    componentWillMount = () => {
        console.log('mounted')
    }

    render () {

        const { title, iconName } = this.props;
        
        return (
            <nav className="pt-navbar .modifier">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">{title}</div>
                    {/*<input className="pt-input" placeholder="Search quotes..." type="text" />*/}
                </div>
                <div className="pt-navbar-group pt-align-right">
                    <button className="pt-button pt-minimal pt-icon-user"></button>
                    <button className="pt-button pt-minimal pt-icon-cog"></button>
                    <span className="pt-navbar-divider"></span>
                    <button className="pt-button pt-icon-edit"></button>
                </div>
            </nav>
        );
    }
}

export default TopNav;