class Layout extends React.Component {
  render() {
    const boxes = this.props.config.map((box) =>
      box.content
    );

    return (
      <div className="container-fluid">
        <div className="row">
          {boxes}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  config: React.PropTypes.array.isRequired,
};

export default Layout;
