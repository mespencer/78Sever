import Layout from './Layout';

class Controller extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.action = this.action.bind(this);
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  action(action) {
    this.setState({
      open: false,
    });

    this.props.actions[action]();
  }

  render() {
    return (
      <Layout actions={this.props.actions} open={this.state.open} toggleOpen={this.toggleOpen} />
    );
  }
}

Controller.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

export default Controller;
