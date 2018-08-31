class App extends React.Component {
  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer...'
    const options = ['Thing one', 'Thing two', 'Thing three']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    console.log('handlePick')
  }

  render() {
    return <button onClick={this.handlePick}>What should I do?</button>
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll() {
    console.log(this.props.options)
  }

  render() {
    const optionsList = this.props.options.map((option, i) => (
      <Option key={i} text={option} />
    ))

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
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
  onFormSubmit(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    if (option) {
      console.log(option)
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
