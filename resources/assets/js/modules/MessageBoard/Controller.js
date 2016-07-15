import Layout from './Layout';
import Loader from '../Loader/Controller';
import Box from '../Box/Controller';
import AddMessage from './AddMessage';

class Controller extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      messages: [],
    };

    this.updating = false;
    this.updateInt = null;

    this.updateMessages = this.updateMessages.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    this.updateMessages();
    this.updateInt = setInterval(this.updateMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInt);
  }

  onLoad(data) {
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
      $.getJSON('/message', this.onLoad);
    }
  }

  markAsRead(index) {
    const messages = this.state.messages.slice(0);
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === index) {
        messages[i].removed = true;
        $.post(`/message/${messages[i].id}`, {
          _token: token,
          _method: 'DELETE',
        });
        $.post(`/message/${messages[i].id}/seen`, {
          _token: token,
          _method: 'PATCH',
        });
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
        <AddMessage update={this.updateMessages} />
      </span>
    );

    return (
      <Box
        title="Message Board"
        width={this.props.width}
        actions={actions}
        fullHeight={this.props.fullHeight}
      >
        {this.state.loading ? loading : content}
      </Box>
    );
  }
}

Controller.propTypes = {
  fullHeight: React.PropTypes.bool,
  width: React.PropTypes.number.isRequired,
};

export default Controller;
