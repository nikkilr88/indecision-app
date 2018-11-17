import React from 'react'

import Option from './Option'

const Options = props => {
  const optionsList = props.options.map((option, i) => (
    <Option
      key={i}
      count={i + 1}
      optionText={option}
      handleDeleteOption={props.handleDeleteOption}
    />
  ))

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove all
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Add an item to get started</p>
      )}
      {optionsList}
    </div>
  )
}

export default Options
