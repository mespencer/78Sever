class ActiveFor extends React.Component {
  constructor() {
    super();

    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    if (this.props.value) {
      return 'success';
    }

    return 'error';
  }

  handleChange(e) {
    this.props.handleChange('activeFor', e.target.value, this.getValidationState() === 'success');
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
          placeholder="Choose one..."
          onChange={this.handleChange}
        >
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
