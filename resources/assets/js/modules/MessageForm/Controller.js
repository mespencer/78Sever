import Layout from './Layout';

class Controller extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, value, state) {
    const values = Object.assign({}, this.props.data.value);
    values[id] = value;
    const valid = Object.assign({}, this.props.data.valid);
    valid[id] = state;
    this.props.data.value = values;
    this.props.data.valid = valid;
    this.props.updateData(this.props.data);
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
