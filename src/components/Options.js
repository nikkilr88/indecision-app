import React from 'react'

import Option from './Option'

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
      {props.options.length === 0 && <p>No items</p>}
      {optionsList}
    </div>
  )
}

export default Options
