let isShowing = false

const toggle = () => {
  isShowing = !isShowing
  render()
}

const render = () => {
  const App = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>
        {!isShowing ? 'Show Details' : 'Hide Details'}
      </button>
      {isShowing && (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque.
          </p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(App, document.getElementById('root'))
}

render()
