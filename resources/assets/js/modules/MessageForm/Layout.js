import Text from './Text';
import ActiveFor from './ActiveFor';
import Priority from './Priority';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Text
          value={this.props.data.value.text}
          handleChange={this.props.handler}
        />
        <ActiveFor
          value={this.props.data.value.activeFor}
          handleChange={this.props.handler}
        />
        <Priority
          value={this.props.data.value.priority}
          handleChange={this.props.handler}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  data: React.PropTypes.object.isRequired,
  handler: React.PropTypes.func.isRequired,
};

export default Layout;
