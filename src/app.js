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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    const optionsList = this.props.options.map((option, i) => (
      <Option key={i} text={option} />
    ))

    return <div>{optionsList}</div>
  }
}

class Option extends React.Component {
  render() {
    return <p key={this.props.key}>{this.props.text}</p>
  }
}

class AddOption extends React.Component {
  render() {
    return <p>Render add option form here</p>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
