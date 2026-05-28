import React, { Component } from 'react';

export class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
  }

  componentDidMount() {
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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  componentDidUpdate() {
    console.log('hello, componentDidUpdate', this.state.count)
  }

  componentWillUnmount() {
    console.log('hello, componentWillUnmount')
  }

  render() {
    return (
       <div>
        <h3>Классовый компонент</h3>
        <p>Значение (видимое только при четных): {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Увеличить count
        </button>
      </div>
    );
  }
}
