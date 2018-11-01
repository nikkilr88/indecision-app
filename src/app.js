class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
  }

  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(prevOption => prevOption != option)
    }))
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

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }

  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer...'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

App.defaultProps = {
  options: []
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  )
}

const Options = props => {
  const optionsList = props.options.map((option, i) => (
    <Option
      key={i}
      optionText={option}
      handleDeleteOption={props.handleDeleteOption}
    />
  ))

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {optionsList}
    </div>
  )
}

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        &times;
      </button>
    </div>
  )
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

    this.setState(() => ({ error }))
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
