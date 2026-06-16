import React, { useRef } from 'react';

const withRenderTracker = (WrappedComponent) => {
  const ComponentWithTracker = (props) => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    const componentName = WrappedComponent.displayName;
    console.log(`${componentName} рендерился ${renderCount.current} раз(а)`);
    return <WrappedComponent {...props} />;
  };

   ComponentWithTracker.displayName = `withRenderTracker(${WrappedComponent.displayName})`;

  return ComponentWithTracker;
};

export default withRenderTracker;