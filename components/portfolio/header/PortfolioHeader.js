class PortfolioHeaderImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasImage: false,
            src: null,
            placeholder: '/static/add_photo.png'
        };
    }

    uploadImage = event => {
        if (event.target.files && event.target.files[0]) {
            this.setState({ hasImage: true });
            this.setState({ src: URL.createObjectURL(event.target.files[0]) });
        }
    }

    render() {
        if (this.state.hasImage) {
            return e(
                'img', {
                    src: this.state.src,
                    id: 'portfolio-header-img'
                }
            )
        }

        return e(
            'div', { id: 'portfolio-header-placeholder' },
            e('input', {
                id: 'file-input-button',
                className: this.props.className,
                type: 'file',
                onChange: event => this.uploadImage(event),

            }),
            e(
                'img', {
                    id: 'placeholder-img',
                    src: this.state.placeholder
                }
            )
        );
    }
}

class PortfolioHeaderImgContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return e(
            'div', { id: 'portfolio-header-img-container' },
            e(PortfolioHeaderImg)
        );
    }
}

class PortfolioTextContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return e(
            'div', { id: 'portfolio-header-text-container' },
            e(TextInput, { id: 'name-input', className: 'input', value: 'Name' }),
            e(TextInput, { id: 'title-input', className: 'input', value: 'Job Title' }),
            e(TextArea, { id: 'description-input', className: 'input', value: 'Description' }),
        );
    }
}

class PortfolioHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return e('div', {}, e(PortfolioHeaderImgContainer), e(PortfolioTextContainer));
    }
}