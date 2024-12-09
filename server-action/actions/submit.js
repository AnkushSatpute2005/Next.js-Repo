"use server"
import fs from "fs/promises"

export const submitAction = async(e) => {
    //all the actins definer in this function is run on server side only because they use "use server"
    console.log(e.get("name"),e.get("add"))
    let a= await fs.writeFile("ankush.txt",`I am ${e.get("name")} and Address is ${e.get("add")}`)
    
  }