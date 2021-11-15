import './App.css';
import TodoContainer from './components/TodoContainer';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="App">
      {/* <TodoContainer /> */}
      <CountdownTimer time={{ hours: 1, minutes: 1, seconds: 10 }} />
    </div>
  );
}

export default App;
