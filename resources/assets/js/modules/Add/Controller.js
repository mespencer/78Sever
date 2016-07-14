import Layout from './Layout';

class Controller extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
  }

  onDone() {
    console.log('Success');
  }

  onFail() {
    console.error('An error occured.');
  }

  close() {
    this.setState({
      visible: false,
    });
  }

  open() {
    this.setState({
      visible: true,
    });
  }

  submit() {
    let valid = true;
    const keys = Object.keys(this.props.data.valid);
    for (let i = 0; i < keys.length; i++) {
      if (!this.props.data.valid[keys[i]]) {
        valid = false;
      }
    }

    if (valid) { // Change later
      this.close();
      $.post(this.props.url, this.props.data)
       .done(this.onDone)
       .fail(this.onFail);
      this.props.clear();
    }
  }

  render() {
    return (
      <Layout
        visible={this.state.visible}
        open={this.open}
        title={this.props.title}
        close={this.close}
        submit={this.submit}
        content={this.props.children}
      />
    );
  }
}

Controller.propTypes = {
  children: React.PropTypes.node.isRequired,
  clear: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
};

export default Controller;
