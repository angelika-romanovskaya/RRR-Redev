import React from 'react';
import withRenderTracker from './withRenderTracker';

const CounterButton = ({ count, onIncrement, name }) => {
  return (
    <button
      onClick={onIncrement}
    >
      Кликнут раз: {count}
    </button>
  );
};

CounterButton.displayName = "CounterButton"

export const CounterButtonWithLogger = React.memo(withRenderTracker(CounterButton));

