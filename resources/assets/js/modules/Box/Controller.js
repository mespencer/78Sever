import Layout from './Layout';

class Controller extends React.Component {
  render() {
    let width;
    if (this.props.width && this.props.width > 0 && this.props.width <= 12) {
      width = this.props.width;
    } else {
      width = 6;
    }

    return (
      <Layout
        title={this.props.title}
        content={this.props.children}
        width={width}
        actions={this.props.actions}
        fullHeight={this.props.fullHeight}
      />
    );
  }
}

Controller.propTypes = {
  actions: React.PropTypes.node,
  children: React.PropTypes.node,
  fullHeight: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
};

export default Controller;
