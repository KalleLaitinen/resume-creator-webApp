class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'div',
      {id: "portfolio-wrapper"},
      e('div', {id: "portfolio-header"}),
      e('div', {id: "portfolio-contact"}),
      e('div', {id: "portfolio-skills"}),
      e('div', {id: "portfolio-work"}),
      e('div', {id: "portfolio-education"}),
      e('div', {id: "portfolio-other"})
    );
  }
}

ReactDOM.render(e(Page), document.querySelector('#page'));

// these are defined in /portfolio/*
ReactDOM.render(e(PortfolioHeader), document.querySelector('#portfolio-header'));
ReactDOM.render(e(PortfolioContact), document.querySelector('#portfolio-contact'));
ReactDOM.render(e(PortfolioSkills), document.querySelector('#portfolio-skills'));
ReactDOM.render(e(PortfolioWork), document.querySelector('#portfolio-work'));
ReactDOM.render(e(PortfolioEducation), document.querySelector('#portfolio-education'));
ReactDOM.render(e(PortfolioOther), document.querySelector('#portfolio-other'));