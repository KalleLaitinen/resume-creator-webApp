class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({count: this.state.count + 1})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({count: this.state.count + 1})
    this.props.onSubmit(event)
  }

  render() {
    return e(
      'form',
      {
        className: 'list-item',
        onSubmit: this.handleSubmit
      },
      e(
        'div',
        {className: 'list-item-bullet'}
      ),
      e(
        'input',
        {
          className: 'list-item-text',
          type: 'text',
          value: this.state.value,
          onChange: this.handleChange
        }
      ),
      e(
        'button',
        {
          type: 'submit',
          className: 'list-item-submit'
        },
        ''
      )
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        e(ListItem, {value: 'List Item', key: 0, onSubmit: () => this.handleSubmit()})
      ],
      count: 1
    };
  }

  handleSubmit() {
    event.preventDefault();
    if (this.state.children.length < 3) {
      this.state.children.push(
        e(ListItem, {value: 'List Item', key: this.state.count, onSubmit: () => this.handleSubmit()})
      );
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    return e(
      'div',
      {
        className: 'section-list',
        children: this.state.children
      }
    );
  }
}