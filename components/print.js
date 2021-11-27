class PrintButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePrint() {
    // as per https://stackoverflow.com/a/7532581
    const printContents = document.getElementById('page').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
  }

  render() {
    return e(
      'button',
      {onClick: () => this.handlePrint()},
      'Print CV'
    );
  }
}

ReactDOM.render(e(PrintButton), document.querySelector('#print-button'));