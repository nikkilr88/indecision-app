import React from 'react'

const Action = props => {
  return (
    <div>
      <button
        class="button button--big"
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        What should I do?
      </button>
    </div>
  )
}

export default Action
