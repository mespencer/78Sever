class Text extends React.Component {
  constructor() {
    super();

    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    if (this.props.value.length === 0) {
      return null;
    } else if (this.props.value.length >= 5) {
      return 'success';
    }

    return 'error';
  }

  handleChange(e) {
    this.props.handleChange('text', e.target.value, this.getValidationState() === 'success');
  }

  render() {
    return (
      <ReactBootstrap.FormGroup controlId="messageText" validationState={this.getValidationState()}>
        <ReactBootstrap.ControlLabel>Message Body</ReactBootstrap.ControlLabel>
        <ReactBootstrap.FormControl
          componentClass="textarea"
          value={this.props.value}
          onChange={this.handleChange}
          placeholder="Write something important"
        />
        <ReactBootstrap.FormControl.Feedback />
      </ReactBootstrap.FormGroup>
    );
  }
}

Text.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default Text;
