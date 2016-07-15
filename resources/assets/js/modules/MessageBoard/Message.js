class Message extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.markAsRead(this.props.id);
  }

  priorityToClass(priority) {
    switch (priority) {
      case 1:
        return 'info';
      case 2:
        return 'warning';
      case 3:
        return 'danger';
      case 0:
      default:
        return null;
    }
  }

  render() {
    return (
      <tr className={this.priorityToClass(this.props.priority)}>
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
  priority: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Message;
