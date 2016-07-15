import Message from './Message';

class Layout extends React.Component {
  render() {
    const messages = this.props.messages.map((message, index) => {
      const content = (
        <Message
          id={message.id}
          text={message.text}
          markAsRead={this.props.markAsRead}
          priority={message.priority}
          key={index}
        />
      );
      return message.removed ? null : content;
    });
    const nothing = (
      <tr>
        <td className="text-center">
          There are no new messages :(
        </td>
      </tr>
    );

    return (
      <ReactBootstrap.Table>
        <tbody>
          {this.props.messages.length === 0 ? nothing : messages}
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
