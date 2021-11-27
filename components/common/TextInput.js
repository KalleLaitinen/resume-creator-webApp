class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return e(
      'input',
      {
        id: this.props.id,
        className: this.props.className,
        type: 'text',
        value: this.state.value,
        onChange: this.handleChange
      }
    );
  }
}