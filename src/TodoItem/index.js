export function TodoItem(props) {

  return(
    <li>
      <span onClick={() => props.onComplete()}>{`${props.completed ? 'C' : 'T'}`}</span>
      <p>{props.text}</p>
      <span onClick={() => props.onDelete()}>X</span>
    </li>
  )
}
