import Add from '../Add/Controller';
import MessageForm from '../MessageForm/Controller';

class AddMessage extends React.Component {
  constructor() {
    super();

    this.default = {
      value: {
        text: '',
        activeFor: '',
      },
      valid: {
        text: false,
        activeFor: false,
      },
    };

    this.state = {
      data: Object.assign({}, this.default),
    };

    this.updateData = this.updateData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  updateData(data) {
    const newData = Object.assign({}, data);
    this.setState({
      data: newData,
    });
  }

  clearData() {
    console.log(this.default);
    this.setState({
      data: this.default,
    });
  }

  render() {
    return (
      <Add title="New Message" url="/message" data={this.state.data} clear={this.clearData}>
        <MessageForm data={this.state.data} updateData={this.updateData} />
      </Add>
    );
  }
}

export default AddMessage;
