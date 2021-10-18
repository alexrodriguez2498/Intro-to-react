import './TodoCounter.css';

export function TodoCounter({ total, completed }) {
  return (
    <h2 className='todoCounter'>Has completado {completed} de {total} TODOs</h2>
  )
}
