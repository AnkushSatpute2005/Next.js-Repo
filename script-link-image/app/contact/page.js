import React from 'react'
import Script from 'next/script'//use to write javaScript code

const contact = () => {
  return (
    <div className='text-9xl'>
      <Script>
        {`
          //javaScript code
          alert("Wlcom to contact page")
        `}
      </Script>
      I am contact us
    </div>
  )
}

export default contact
export const metadata = {
  title: " Contact Facebook - Conecte with the world",
  description: "This is the Contact facebook and we can conect with the world using facebook",
};
