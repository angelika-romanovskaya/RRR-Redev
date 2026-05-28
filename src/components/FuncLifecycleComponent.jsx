import React, { useState, useEffect, useRef } from 'react';

// Основной контейнер (содержит логику запроса, обновления стейта и кнопку)
export const FuncLifecycleComponent = () => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    fetch('https://todo-redev.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'angel1610@example.com',
            password: 'Angel_1610'
        })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log('hello, componentDidUpdate', count);

    return () => {
      console.log('hello, componentWillUnmount');
    };
  }, [count]);

  return (
    <div>
      <h3>Функциональный компонент</h3>
      <RenderIfEven count={count} />
      <button onClick={() => setCount(prev => prev + 1)}>
        Увеличить count
      </button>
    </div>
  );
};

const RenderIfEven = React.memo(({ count }) => {
  return <p>Значение (видимое только при четных): {count}</p>;
}, (prevProps, nextProps) => {
  return nextProps.count % 2 !== 0;
});
