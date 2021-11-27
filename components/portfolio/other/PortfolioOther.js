class PortfolioOther extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {className: 'section'},
      e(SectionTitle, {className: 'section-title', content: 'Other'}),
      e(List)
    );
  }
}