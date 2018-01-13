
import React from 'react';
import autoBind from 'react-autobind';
var samples = require('../sample-data');

import Message from './Message';
import ConversationPane from './ConversationPane';
import InboxItem from './InboxItem';
import InboxPane from './InboxPane';
import Store from './Store';
import StorePane from './StorePane';

class App extends React.Component{
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      "humans": {},
      "stores": {}
    };

  }

  loadSampleData() {
    this.setState(samples);
  };

  //user navigates to a /conversation/
  componentWillMount() {
    if ('human' in this.props.params) {
      this.loadSampleData();
    }
  };

  render() {
    return(
      <div>
        <div id="header"></div>
        <button onClick={this.loadSampleData}>Load Sample Data</button>
        <div className="container">
          <div className="column">
            <InboxPane humans={this.state.humans} />
          </div>
          <div className="column">
            {this.props.children || "Select a Conversation from the Inbox"}
          </div>
          <div className="column">
            <StorePane stores={this.state.stores} />
          </div>
        </div>
      </div>
    );
  };

};

export default App;
