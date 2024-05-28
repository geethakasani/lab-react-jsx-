import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  return(
    <div className="image-grid">
      {imageData().map((image)=>(
        <div key={image.id} className="image-container">
          <img src={image.img} alt={`Elephant ${image.id}`}/>

        </div>
      ))}

    </div>
  );
}

export default App;
