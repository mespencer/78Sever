class Message extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.markAsRead(this.props.id);
  }


  render() {
    return (
      <tr>
        <td>
          {this.props.text}
        </td>
        <td className="close-container">
          <ReactBootstrap.Glyphicon glyph="remove" onClick={this.handleClick} />
        </td>
      </tr>
    );
  }
}

Message.propTypes = {
  id: React.PropTypes.number.isRequired,
  markAsRead: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Message;
