class Layout extends React.Component {
  render() {
    const header = (
      <span>
        {this.props.title}
        <div className="inline-block pull-right box-header-actions">
          {this.props.actions}
        </div>
      </span>
    );

    return (
      <div
        className={`
          col-xs-12
          col-sm-${this.props.width}
          box-container ${this.props.fullHeight ? 'full-page' : null}`
        }
      >
        <ReactBootstrap.Panel header={header} className="full-height full-width">
          {this.props.content}
        </ReactBootstrap.Panel>
      </div>
    );
  }
}

Layout.propTypes = {
  actions: React.PropTypes.node,
  content: React.PropTypes.node,
  fullHeight: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default Layout;
