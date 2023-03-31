import "./App.css";
import psycho from "./psycho.png";

function App() {
	return (
		<div className="container-flex d-flex align-items-center justify-content-center" style={{height: "100vh", backgroundColor: "black"}}>
			<div className="d-flex flex-column align-items-center">
      <h3 className="text-white">Searching for God</h3>
      <a href="https://www.youtube.com/watch?v=fUF29xWCjXM&ab_channel=TrashTaste">

				<img src={psycho} width="200" alt="psycho"/>
      </a>
      <h3 className="text-white">Psycho helmet cult</h3>
      <h5 className="text-white" >03-00xx-ttss</h5>
			</div>
		</div>
	);
}

export default App;
