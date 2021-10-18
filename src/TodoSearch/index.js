
export function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        onChange={onSearchValueChange}
        value={searchValue}
        placeholder='Cebolla'
      />
      <p>{searchValue}</p>
    </>
  )
}
