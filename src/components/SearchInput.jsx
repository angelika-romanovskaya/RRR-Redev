import React from 'react';

export const SearchInput = React.memo(({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск по списку..."
        style={{ width: '300px' }}
      />
    </div>
  );
});
