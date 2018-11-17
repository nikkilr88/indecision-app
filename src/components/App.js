import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
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

  handleDeleteSelected = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handlePick = () => {
    let rand = Math.floor(Math.random() * this.state.options.length)
    let selectedOption = this.state.options[rand]

    this.setState(() => ({ selectedOption }))
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

        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDeleteSelected={this.handleDeleteSelected}
        />
      </div>
    )
  }
}

App.defaultProps = {
  options: []
}

export default App
