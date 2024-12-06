// "use client"
// import { useState } from "react";// wthout making this page as client you cannot use this
import fs from "fs/promises"//it runs only on server side page
import Navbar from "./components/Navbar";


export default function Home() {
  // const [count, setCount] = useState(0)// wthout making this page as client you cannot use this
  console.log("I am server component") // if your page is client page this console is shown on the console section of the browser otherwise on the terminal  
  // let a = fs.readFile(".gitignore")
  // a.then((e) => {console.log(e.toString()) })   
  // let b = fs.readFile("data.json");  
  // b.then((e) => { console.log(e.toString()) })   
  return (
    <div>
      <div>I am Page.js</div>
      <Navbar/>
      {/* <button onClick={() => { setCount(count+1) }}>Click Me!</button>
      <div>Counter is {count}</div> */}
    </div>
    
  );
}
     