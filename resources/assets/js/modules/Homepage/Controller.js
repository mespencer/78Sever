import Layout from './Layout';
import MessageBoard from '../MessageBoard/Controller';

class Controller extends React.Component {
  constructor() {
    super();
    this.state = {
      config: [
        { id: 0, width: 6, content: <MessageBoard width={6} key={0} /> },
        // { id: 1, width: 6, content: <p>Groceries!</p> },
        // { id: 2, width: 12, content: <p>Dishes!</p> },
      ],
    };
  }

  render() {
    return (
      <Layout config={this.state.config} />
    );
  }
}

export default Controller;
