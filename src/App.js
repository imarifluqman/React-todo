import { useState } from "react";
import ListAdd from "./component/list";
import "./App.css";

function App() {
  const [inpValue, setValue] = useState("");
  const [storeValue, setStoreVal] = useState([]);


  const addItem = (e) => {
    setValue(e.target.value)
    // console.log(inpValue);
  };

  const addnote = () => {
    setStoreVal((alldata) => {
      return[...alldata,inpValue]
    })
    // console.log(storeValue[2]);
    setValue("")
  }

  const editvalue = (id)=>{
    console.log(id.value);
    setStoreVal((alldata) =>{
      return alldata.filter((Array,index)=>{
        return id.value == setValue
      })
    })
  }

const deletenote = (id)=>{
  // console.log("Deleted")
  setStoreVal((alldata) =>{
    return alldata.filter((Array,index) =>{
      return index !== id
    })
  })
}
  return (
    <div className="App">
      <header className="App-header">
        <p className="heading">note:</p>
        <div className="addsection">
          <input
            className="userinput"
            onChange={addItem}
            value={inpValue}
            type="text"
            placeholder="Write your Note Here...!"
          />
          <button className="addnote" onClick={addnote}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="addnote">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <div className="todos">
          <ul>

           {storeValue.map((itemtodo , index)=>{
             return <ListAdd text={itemtodo} id={index} edit={editvalue} cancle={deletenote} key={index}/>
           }
           )}
 
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
