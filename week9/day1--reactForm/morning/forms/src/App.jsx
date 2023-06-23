import { useState, useEffect } from 'react'
import './App.css'

function App() {
		const [formData, setFormData] = useState({username: "", password: "", email: ""});
    const [ditto, setDitto] = useState({})

    useEffect(() => {
          const fetchDitto = async () => {
				const getDitto = await fetch(
					"https://pokeapi.co/api/v2/pokemon/ditto"
				);
				const jsonDitto = await getDitto.json();
				setDitto(jsonDitto);
			};
      fetchDitto();
    },[])
    // If we put a variable inside of the [], then we say 'run the useEffect once on the initial render, then again if the variable inside the [] changes values.'


		return (
      <div>
      <p>{ditto.id}</p>
				<form action="">
					<label htmlFor="">Username</label>
					<input
						type="text"
						name="username"
						onChange={(e) =>
							setFormData({
								...formData,
								[e.target.name]: e.target.value,
							})
						}
						value={formData?.username}
					/>
					<label htmlFor="">Password</label>
					<input
						type="password"
						name="password"
						onChange={(e) =>
							setFormData({
								...formData,
								[e.target.name]: e.target.value,
							})
						}
						value={formData?.password}
					/>
					<label htmlFor="">Email</label>
					<input
						type="text"
						name="email"
						onChange={(e) =>
							setFormData({
								...formData,
								[e.target.name]: e.target.value,
							})
						}
						value={formData?.email}
					/>
					<input type="submit" value="Submit" />
				</form>
        <form action="">
      
        </form>
			</div>
		);
  };


export default App
