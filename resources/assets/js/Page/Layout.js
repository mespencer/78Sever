import Sidebar from '../modules/Sidebar/Controller';

class Layout extends React.Component {
  render() {
    return (
      <span className="body">
        <Sidebar actions={this.props.actions} />
        <div className="content" id="content">
          {this.props.view}
        </div>
      </span>
    );
  }
}

Layout.propTypes = {
  actions: React.PropTypes.object.isRequired,
  view: React.PropTypes.node.isRequired,
};

export default Layout;
