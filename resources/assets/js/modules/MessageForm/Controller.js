import Layout from './Layout';

class Controller extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, value, state) {
    const data = Object.assign({}, this.props.data);
    data.value[id] = value;
    data.valid[id] = state;
    this.props.updateData(data);
  }

  render() {
    return (
      <Layout handler={this.handleChange} data={this.props.data} />
    );
  }
}

Controller.propTypes = {
  data: React.PropTypes.object.isRequired,
  updateData: React.PropTypes.func.isRequired,
};

export default Controller;
