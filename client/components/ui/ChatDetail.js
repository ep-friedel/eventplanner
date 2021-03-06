import React from 'react';
import { connect } from 'react-redux';
import ChatDetail from './chatDetail/ChatDetail.jsx';
import {} from '../actions.js';

const mapStateToProps = (state, ownProps) => {
    return {
        chat: state.chats[ownProps.id],
        chatId: ownProps.id,
        users: state.users,
        user: state.user
    };
}

export default connect(mapStateToProps, {})(ChatDetail);