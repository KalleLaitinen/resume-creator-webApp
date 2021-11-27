'use strict';

const e = React.createElement;
const useState = React.useState;


class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return e(
      'h4',
      {
        className: 'section-title'
      },
      this.props.content
    );
  }
}