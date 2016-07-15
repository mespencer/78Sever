import Layout from './Layout';
import Homepage from '../modules/Homepage/Controller';
import MessageBoard from '../modules/MessageBoard/Controller';

class Controller extends React.Component {
  constructor() {
    super();

    this.state = {
      view: <Homepage />,
    };

    this.home = this.home.bind(this);
    this.messages = this.messages.bind(this);
  }

  home() {
    this.setState({
      view: <Homepage />,
    });
  }

  messages() {
    this.setState({
      view: <MessageBoard width={12} fullHeight />,
    });
  }

  render() {
    const actions = {
      home: this.home,
      messages: this.messages,
    };
    return (
      <Layout view={this.state.view} actions={actions} />
    );
  }
}

export default Controller;
