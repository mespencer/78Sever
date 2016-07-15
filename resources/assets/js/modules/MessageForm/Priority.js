class Priority extends React.Component {
  constructor() {
    super();

    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState(value = this.props.value) {
    if (value) {
      return 'success';
    }

    return 'error';
  }

  handleChange(e) {
    this.props.handleChange('priority',
                            e.target.value,
                            this.getValidationState(e.target.value) === 'success');
  }

  render() {
    return (
      <ReactBootstrap.FormGroup
        controlId="formControlsSelect"
        validationState={this.getValidationState()}
      >
        <ReactBootstrap.ControlLabel>Priority</ReactBootstrap.ControlLabel>
        <ReactBootstrap.FormControl
          componentClass="select"
          value={this.props.value}
          onChange={this.handleChange}
        >
          <option disabled value="">Choose One...</option>
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
          <option value="3">Fucking Call 911</option>
        </ReactBootstrap.FormControl>
      </ReactBootstrap.FormGroup>
    );
  }
}

Priority.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default Priority;
