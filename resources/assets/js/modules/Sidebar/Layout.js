class Layout extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <a className="sidebar-button" onClick={this.props.actions.home}>
          <ReactBootstrap.Glyphicon glyph="home" />
        </a>
        <a className="sidebar-button" onClick={this.props.actions.messages}>
          <ReactBootstrap.Glyphicon glyph="bullhorn" />
        </a>
        <a className="sidebar-button" onClick={this.props.actions.home}>
          <ReactBootstrap.Glyphicon glyph="th-list" />
        </a>
        <a className="sidebar-button" onClick={this.props.actions.home}>
          <ReactBootstrap.Glyphicon glyph="calendar" />
        </a>
        <a className="sidebar-button sidebar-bottom" onClick={this.props.actions.home}>
          <ReactBootstrap.Glyphicon glyph="cog" />
        </a>
      </nav>
    );
  }
}

Layout.propTypes = {
  actions: React.PropTypes.object.isRequired,
};


export default Layout;
