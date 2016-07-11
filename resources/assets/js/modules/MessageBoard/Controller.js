import Layout from './Layout';
import Loader from '../Loader/Controller';

class Controller extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      messages: [
        { id: 0, text: 'This is a message', removed: false },
        { id: 1, text: 'This is a different message', removed: false },
      ],
    };

    this.updating = false;

    this.updateMessages = this.updateMessages.bind(this);
    this.onResponse = this.onResponse.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    this.updateMessages();
    setInterval(this.updateMessages, 5000);
  }

  onResponse(data) {
    if (data) {
      this.setState({
        loading: false,
        messages: data,
      });
      this.updating = false;
    }
  }

  updateMessages() {
    if (!this.updating) {
      this.updating = true;
      $.getJSON('/message/list', this.onResponse);
    }
  }

  markAsRead(index) {
    const messages = this.state.messages.slice(0);
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === index) {
        messages[i].removed = true;
      }
    }

    this.setState({
      messages,
    });
  }

  render() {
    const content = <Layout messages={this.state.messages} markAsRead={this.markAsRead} />;
    const loading = <Loader />;

    return this.state.loading ? loading : content;
  }
}

export default Controller;
