class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: []
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    let rand = Math.floor(Math.random() * this.state.options.length)
    let pick = this.state.options[rand]

    alert(pick)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This options already exists'
    }

    this.setState(prevState => {
      console.log(prevState)
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer...'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    const optionsList = this.props.options.map((option, i) => (
      <Option key={i} text={option} />
    ))

    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        {optionsList}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.text}</p>
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: undefined
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
