class skillItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e('span', {className: 'input skill-input', contenteditable: 'true', role: "textbox"}, 'Skill');
  }
}

class skillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        e(skillItem, {key: 0})
      ],
      count: 1
    };
  }

  handleSubmit() {
    event.preventDefault();
    if (this.state.children.length < 6) {
      this.state.children.push(
        e(skillItem, {key: this.state.count})
      );
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    return e(
      'div',
      {className: 'section-skill'},
      e(
        'div',
        {
          children: this.state.children
        }
      ),
      !!(this.state.children.length < 6) && e('button', {className: 'add-item-button', onClick: () => this.handleSubmit()}, '+ Add skill')
    )
  }
}

class PortfolioSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {className: 'section'},
      e(skillList)
    );
  }
}