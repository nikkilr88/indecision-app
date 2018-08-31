class Toggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowing: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState(prevState => {
      return {
        isShowing: !prevState.isShowing
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleToggle}>
          {!this.state.isShowing ? 'Show details' : 'Hide details'}
        </button>

        {this.state.isShowing && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            nulla?
          </p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root'))
