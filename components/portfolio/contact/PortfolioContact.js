class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {className: 'contact-list-item'},
      e('img', {className: 'contact-list-icon', src: '/static/' + this.props.icon + '.png'}),
      e('span', {className: 'input', contenteditable: 'true', role: "textbox"}, this.props.value)
    );
  }
}

class ContactInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      children: [
        e(ContactItem, {key: 0, value: 'email address', icon: 'email-icon'}),
        e(ContactItem, {key: 1, value: 'phone number', icon: 'phone-icon'}),
        e(ContactItem, {key: 2, value: 'City, Country', icon: 'location-icon'}),
        e(ContactItem, {key: 3, value: 'linkedin.com/in/', icon: 'linkedin-icon'}),
        e(ContactItem, {key: 4, value: 'GitHub account', icon: 'github-icon'})
      ]
    };
  }

  render() {
    return e(
      'div',
      {
        id: 'contact-list',
        children: this.state.children
      },
    );
  }
}

class PortfolioContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {},
      e(ContactInformation)
    );
  }
}