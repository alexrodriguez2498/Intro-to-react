export function CreateTodoButton(props) {
  const handleClick = (msg) => {
    alert(msg);
  }

  return (
    <button
      className='createTodoButton'
      onClick={() => handleClick('hola mundo')}
    >+</button>
  )
}
