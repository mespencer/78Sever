import Box from '../Box/Controller';

class Layout extends React.Component {
  render() {
    const boxes = this.props.config.map((box, index) =>
      <Box title={box.title} width={box.width} key={index}>
        {box.content}
      </Box>
    );

    return (
      <div className="container-fluid">
        <div className="row">
          {boxes}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  config: React.PropTypes.array.isRequired,
};

export default Layout;
