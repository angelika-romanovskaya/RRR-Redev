import React from 'react';
import withRenderTracker from './withRenderTracker';

const SearchInput = ({ value, onChange }) => {
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
};

SearchInput.displayName = "SearchInput"

export const SearchInputWithLogger = React.memo(withRenderTracker(SearchInput));
