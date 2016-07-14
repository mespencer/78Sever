import Layout from './Layout';
import Loader from '../Loader/Controller';
import Box from '../Box/Controller';

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
    const content = <Layout fill messages={this.state.messages} markAsRead={this.markAsRead} />;
    const loading = <Loader />;
    const actions = (
      <span>
        <div>
          <ReactBootstrap.Glyphicon glyph="search" />
        </div>
        <div>
          <ReactBootstrap.Glyphicon glyph="plus" />
        </div>
      </span>
    );

    return (
      <Box title="Message Board" width={this.props.width} actions={actions}>
        {this.state.loading ? loading : content}
      </Box>
    );
  }
}

Controller.propTypes = {
  width: React.PropTypes.number.isRequired,
};

export default Controller;
