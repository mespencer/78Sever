import Layout from './Layout';

class Controller extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Layout actions={this.props.actions} />
    );
  }
}

Controller.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

export default Controller;
