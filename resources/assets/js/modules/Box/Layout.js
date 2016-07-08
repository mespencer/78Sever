class Layout extends React.Component {
  render() {
    const header = <h1>{this.props.title}</h1>;

    return (
      <div className={`col-xs-12 col-sm-${this.props.width} box-container`}>
        <ReactBootstrap.Panel header={header} className="full-height full-width">
          {this.props.content}
        </ReactBootstrap.Panel>
      </div>
    );
  }
}

Layout.propTypes = {
  content: React.PropTypes.node,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
};

export default Layout;
