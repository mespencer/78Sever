class Layout extends React.Component {
  render() {
    return (
      <nav className={`sidebar ${this.props.open ? 'sidebar-reveal' : null}`}>
        <a className="sidebar-button sidebar-trigger" onClick={this.props.toggleOpen}>
          <ReactBootstrap.Glyphicon
            glyph="tasks"
            className="center-vertical"
          />
        </a>
        <a className="sidebar-button top-button" onClick={this.props.actions.home}>
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
  open: React.PropTypes.bool.isRequired,
  toggleOpen: React.PropTypes.func.isRequired,
};


export default Layout;
