import './App.css'
import Sidebar from './components/Sidebar';
import Students from './components/Students';

function App() {
  const student = "Dustin";
	const students = ["Jaye", "Joe", "Alyson"];

  return (
		<div>
      <Students student={student} students={students} />
      <Sidebar />
		</div>
  );
}

export default App
