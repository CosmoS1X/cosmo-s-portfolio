import ReactDOM from 'react-dom';
import init from './init';

const app = async () => {
  const vdom = await init();
  ReactDOM.render(vdom, document.getElementById('root'));
};

app();
