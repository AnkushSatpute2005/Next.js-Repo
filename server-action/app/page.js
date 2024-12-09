"use client"
import {submitAction} from "@/actions/submit"
import { useRef } from "react";


export default function Home() {
 const ref = useRef()
  
  return (
   <div className="w-2/3 mx-auto my-20">
    <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
      <div>
        <label htmlFor="name">Name :-</label>
        <input name="name" id="name" type="text" />
      </div>
      <div>
        <label htmlFor="add">Address :-</label>
        <input name="add" id="add" type="text" />
      </div>
      <div>
        <button className="border border-black">Submit</button>
      </div>
    </form>
   </div>
  );
}
