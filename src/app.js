import React from 'react'
import ReactDOM from 'react-dom'

// Components
import AddOption from './components/AddOption'
import Options from './components/Options'
import Action from './components/Action'
import Header from './components/Header'

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

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      //Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length === this.state.options.length) return

    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options', json)
  }

  componentWillUnmount() {
    console.log('Component unmounted')
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

ReactDOM.render(<App />, document.getElementById('root'))
