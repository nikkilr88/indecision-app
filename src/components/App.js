import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'

class App extends React.Component {
  state = {
    options: []
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handleDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(prevOption => prevOption != option)
    }))
  }

  handlePick = () => {
    let rand = Math.floor(Math.random() * this.state.options.length)
    let pick = this.state.options[rand]

    alert(pick)
  }

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This options already exists'
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
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

export default App
