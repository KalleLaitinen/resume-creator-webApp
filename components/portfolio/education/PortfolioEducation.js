class EducationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {className: 'job-item'},
      e(TextInput, {id: 'job-title-input', className: 'input', value: 'Degree'}),
      e(TextInput, {id: 'job-location-input', className: 'input', value: 'City, Country'}),
      e(
        'div',
        {id: 'job-company-wrapper'},
        e( 'span', {id: 'job-company-input', className: 'input', contenteditable: 'true', role: "textbox"}, 'University'),
        e( 'span', {id: 'job-url-input', className: 'input', contenteditable: 'true', role: "textbox"}, 'university.com')
      ),
      e(
        'div',
        {id: 'job-dates-wrapper'},
          e( 'span', {id: 'job-start-date-input', className: 'input', contenteditable: 'true', role: "textbox"}, 'XX/20XX'),
        e('span', {id: 'job-date-dash'}, ' - '),
        e( 'span', {id: 'job-end-date-input', className: 'input', contenteditable: 'true', role: "textbox"}, 'XX/20XX')
      )
    );
  }
}

class EducationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        e(EducationItem, {key: 0})
      ],
      count: 1
    };
  }

  handleSubmit() {
    event.preventDefault();
    if (this.state.children.length < 2) {
      this.state.children.push(
        e(EducationItem, {key: this.state.count})
      );
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    return e(
      'div',
      {},
      e(
        'div',
        {
          className: 'section-list',
          children: this.state.children
        }
      ),
      !!(this.state.children.length < 2) && e('button', {className: 'add-item-button', onClick: () => this.handleSubmit()}, '+ Add degree')
    )
  }
}

class PortfolioEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {className: 'section'},
      e(SectionTitle, {className: 'section-title', content: 'Education'}),
      e(EducationList),
      e(List)
    );
  }
}