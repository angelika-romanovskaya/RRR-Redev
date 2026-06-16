import React, { useMemo } from 'react';
import withRenderTracker from './withRenderTracker';

const ItemList = ({ items, searchTerm, name }) => {
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
};

ItemList.displayName = "ItemList"

export const ItemListWithLogger = React.memo(withRenderTracker(ItemList));