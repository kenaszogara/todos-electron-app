import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component{
    render() {
        let indonesia = require('moment/locale/id');
        Moment.updateLocale('en', indonesia);
        return (
            <div>
                <h3>Todos App</h3>
                <p>{ Moment().format('dddd') } {Moment().format('LLLL')}</p>
            </div>
        );
    }
}

export default Header;