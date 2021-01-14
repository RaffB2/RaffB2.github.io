import './styles.css'
import todo from './components/todo'

function App() {
  console.log(`Edit notes by typing, do not leave blank`)
  return (
    <div className="wrapper">
      <todo.Todo />
    </div>
  );
}

export default App;
