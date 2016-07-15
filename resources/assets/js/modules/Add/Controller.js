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
    this.onDone = this.onDone.bind(this);
    this.onFail = this.onFail.bind(this);
  }

  onDone() {
    console.log('Success');
    if (typeof this.props.update !== 'undefined') {
      this.props.update();
    }
  }

  onFail() {
    console.error('An error occured.');
  }

  close() {
    this.props.clear();
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
      const data = Object.assign({}, this.props.data);
      data._token = token; // Need for security
      $.post(this.props.url, data)
       .done(this.onDone)
       .fail(this.onFail);
      this.close();
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
  update: React.PropTypes.func,
  url: React.PropTypes.string.isRequired,
};

export default Controller;
