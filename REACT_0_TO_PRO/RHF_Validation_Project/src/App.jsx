import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import { useState } from "react";

const App = () => {
// localStorage.setItem("Name", "Shailja Loves Rajat")

// let name = localStorage.getItem("Name")
// console.log(name);

// let obj = {
//   productName: "Product Name",
//   productDescription: "Product Description",}

  // localStorage.setItem('user', JSON.stringify(obj));
  // let lsd =  JSON.parse(localStorage.getItem('user'));
  // console.log(lsd)
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user') ) || []
  })
  console.log(user)

  return (
    <div>
      <Navbar setToggle={setToggle} />
{
  toggle?(<div>{user.map((elem,index) =>{return <UserCard user={elem} key={index} setToggle={setToggle} />})}</div>):<Form user={user} setUser={setUser} setToggle={setToggle} />
}
      
    </div>
  )
}

export default App