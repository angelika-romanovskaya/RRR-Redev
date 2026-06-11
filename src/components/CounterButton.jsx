import React from 'react';

export const CounterButton = React.memo(({ count, onIncrement }) => {
  return (
    <button 
      onClick={onIncrement}
    >
      Кликнут раз: {count}
    </button>
  );
});

