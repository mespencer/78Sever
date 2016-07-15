import Add from '../Add/Controller';
import MessageForm from '../MessageForm/Controller';

class AddMessage extends React.Component {
  constructor() {
    super();

    this.default = {
      value: {
        text: '',
        activeFor: '',
        priority: '0',
      },
      valid: {
        text: false,
        activeFor: false,
        priority: true,
      },
    };

    this.state = {
      data: {
        value: Object.assign({}, this.default.value),
        valid: Object.assign({}, this.default.valid),
      },
    };

    this.updateData = this.updateData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  updateData(data) {
    const newData = Object.assign({}, data);
    this.setState({
      data: {
        value: Object.assign({}, newData.value),
        valid: Object.assign({}, newData.valid),
      },
    });
  }

  clearData() {
    this.setState({
      data: {
        value: Object.assign({}, this.default.value),
        valid: Object.assign({}, this.default.valid),
      },
    });
  }

  render() {
    return (
      <Add
        title="New Message"
        url="/message"
        data={this.state.data}
        clear={this.clearData}
        update={this.props.update}
      >
        <MessageForm data={this.state.data} updateData={this.updateData} />
      </Add>
    );
  }
}

AddMessage.propTypes = {
  update: React.PropTypes.func,
};

export default AddMessage;
