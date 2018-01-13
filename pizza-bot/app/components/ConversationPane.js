import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Message from './Message';

var samples = require('../sample-data');

class ConversationPane extends React.Component {

  loadSampleData(human) {
    this.setState({conversation: samples.humans[human].conversations});
  };
  //Handle when User navigates / to /conversation/:human
  componentWillMount() {
    this.loadSampleData(this.props.params.human);
  };
  //Handle when User navigates /conversation/Rami to /conversation/Jeremy
  componentWillReceiveProps(nextProps) {
    this.loadSampleData(nextProps.params.human);
  };
  renderMessages(val) {
    return <Message who={val.who} text={val.text} key={val.time.getTime()} />
  };
  render() {
    return (
      <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>{this.props.params.human}</h3>
        <div id="messages">
          {this.state.conversation.map(this.renderMessages)}
        </div>
      </div>
    )
  }
};

export default ConversationPane;
