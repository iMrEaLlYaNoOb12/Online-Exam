
import LoginForm from './components/LoginForm';

function App() {
  const login = async (task) => {
    const res = await fetch('https://localhost:8443/onlineexam/control/customJSONEvent', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json();
    //setTasks([...tasks, data])
    console.log(data);


  }


  return (
    <div className="container">
      <LoginForm onLogin={login} />

    </div>
  );
}

export default App;
