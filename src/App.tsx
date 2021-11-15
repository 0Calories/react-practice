import './App.css';
import TodoContainer from './components/TodoContainer';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="App">
      {/* <TodoContainer /> */}
      <CountdownTimer time={60} />
    </div>
  );
}

export default App;
