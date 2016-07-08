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
    }
  }

  updateMessages() {
    if (!this.updating) {
      this.updating = true;
      $.getJSON('/messages', this.onResponse);
    }
  }

  render() {
    const content = <Layout messages={this.state.messages} />;
    const loading = <Loader />;

    return this.state.loading ? loading : content;
  }
}

export default Controller;
