class ActiveFor extends React.Component {
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
    this.props.handleChange('activeFor',
                            e.target.value,
                            this.getValidationState(e.target.value) === 'success');
  }

  render() {
    return (
      <ReactBootstrap.FormGroup
        controlId="formControlsSelect"
        validationState={this.getValidationState()}
      >
        <ReactBootstrap.ControlLabel>Broadcast Group</ReactBootstrap.ControlLabel>
        <ReactBootstrap.FormControl
          componentClass="select"
          value={this.props.value}
          onChange={this.handleChange}
        >
          <option disabled value="">Choose One...</option>
          <option value="all">Everyone</option>
          <option value="first-floor">First Floor</option>
        </ReactBootstrap.FormControl>
      </ReactBootstrap.FormGroup>
    );
  }
}

ActiveFor.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default ActiveFor;
