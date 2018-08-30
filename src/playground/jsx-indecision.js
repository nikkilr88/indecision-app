const app = {
  title: 'Indecision App',
  subTitle: 'No idea? No worries!',
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length)

  const option = app.options[rand]
  alert(option)
}

const removeAll = () => {
  app.options = []
  render()
}

const numbers = [42, 77, 9]

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}

      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {app.options.map(option => (
          <li>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, document.getElementById('root'))
}

render()
