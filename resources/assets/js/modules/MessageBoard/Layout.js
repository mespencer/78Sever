import Message from './Message';

class Layout extends React.Component {
  render() {
    const messages = this.props.messages.map((message, index) => {
      const content = (
        <Message
          id={message.id}
          text={message.text}
          markAsRead={this.props.markAsRead}
          key={index}
        />
      );
      return message.removed ? null : content;
    });

    return (
      <ReactBootstrap.Table>
        <tbody>
          {messages}
        </tbody>
      </ReactBootstrap.Table>
    );
  }
}

Layout.propTypes = {
  markAsRead: React.PropTypes.func.isRequired,
  messages: React.PropTypes.array.isRequired,
};

export default Layout;
