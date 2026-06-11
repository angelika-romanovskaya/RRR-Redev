export const List = ({items, onRename }) => {
    return <ul>
      {items.map((item) => (
        <li key={item.id} style={{ marginBottom: '8px' }}>
          {item.text}
          <button onClick={() => onRename(item.id)} style={{ marginLeft: '10px' }}>
            Добавить !!!
          </button>
        </li>
      ))}
    </ul>
}