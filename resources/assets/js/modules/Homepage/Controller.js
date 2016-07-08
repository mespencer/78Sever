import Layout from './Layout';
import MessageBoard from '../MessageBoard/Controller';

class Controller extends React.Component {
  constructor() {
    super();
    this.state = {
      config: [
        { id: 0, title: 'Messages', width: 6, content: <MessageBoard fill /> },
        { id: 1, title: 'Shopping List', width: 6, content: <p>Groceries!</p> },
        { id: 2, title: 'Chores', width: 12, content: <p>Dishes!</p> },
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
