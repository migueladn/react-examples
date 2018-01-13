import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
var ReactRouter = require('react-router');

//importing what we need for routing
var browserHistory = ReactRouter.browserHistory;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

class InboxItem extends React.Component{
  constructor(props){
    super(props);
    this.souldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  sortByDate(a,b) {
    return a.time > b.time ? -1 : a.time < b.time ? 1: 0;
  };

  messageSummary(conversations) {
    var lastMessage = conversations.sort(this.sortByDate)[0];
    return lastMessage.who + ' said: "' + lastMessage.text + '" @' + lastMessage.time;
  };

  render() {
    return(
      <tr>
        <td><Link to={'/conversation/'+encodeURIComponent(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
        <td>{this.props.index}</td>
        <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
      </tr>
    )
  };
};

export default InboxItem;
