import React, { useMemo } from 'react';

export const ItemList = React.memo(({ items, searchTerm }) => {
  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    const lowerSearch = searchTerm.toLowerCase();
    return items.filter(item => item.text.toLowerCase().includes(lowerSearch));
  }, [items, searchTerm]);

  return (
    <div>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <li key={item.id}>
              {item.text}
            </li>
          ))
        ) : (
          <li>Ничего не найдено</li>
        )}
      </ul>
    </div>
  );
});
