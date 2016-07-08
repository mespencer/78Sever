class Layout extends React.Component {
  render() {
    const messages = this.props.messages.map((message, index) => {
      const content = (
        <tr key={index}>
          <td>
            {message.text}
          </td>
          <td className="close-container">
            <ReactBootstrap.Glyphicon glyph="remove" />
          </td>
        </tr>
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
  messages: React.PropTypes.array.isRequired,
};

export default Layout;
