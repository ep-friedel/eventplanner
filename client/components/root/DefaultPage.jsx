import React from 'react';

import Topbar from '../ui/Topbar.js';
import {resizeFocus, removeResizeFocus} from '../scripts/resizeFocus.js';

export default class DefaultPage extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        resizeFocus();
    }

    componentWillUnmount() {
        removeResizeFocus();
    }

    render() {
        return (<div>
            <Topbar/>
            {this.props.children}
        </div>)
    }
}