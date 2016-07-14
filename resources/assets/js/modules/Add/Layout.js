class Layout extends React.Component {
  render() {
    return (
      <div>
        <ReactBootstrap.Glyphicon glyph="plus" onClick={this.props.open} />
        <ReactBootstrap.Modal show={this.props.visible} onHide={this.props.close}>
          <ReactBootstrap.Modal.Header closeButton>
            <ReactBootstrap.Modal.Title>{this.props.title}</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
            <form>
              {this.props.content}
            </form>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.ButtonGroup justified>
              <ReactBootstrap.ButtonGroup>
                <ReactBootstrap.Button onClick={this.props.submit}>Publish</ReactBootstrap.Button>
              </ReactBootstrap.ButtonGroup>
              <ReactBootstrap.ButtonGroup>
                <ReactBootstrap.Button onClick={this.props.close}>Cancel</ReactBootstrap.Button>
              </ReactBootstrap.ButtonGroup>
            </ReactBootstrap.ButtonGroup>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </div>
    );
  }
}

Layout.propTypes = {
  close: React.PropTypes.func.isRequired,
  content: React.PropTypes.node.isRequired,
  open: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired,
};

export default Layout;
