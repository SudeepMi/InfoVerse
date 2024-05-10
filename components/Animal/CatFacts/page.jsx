import React from 'react'

function page({data, sub}) {
  return (
    <div>
        <h2 className="text-3xl">{String(sub).split("-").map(w=>w[0].toUpperCase()+w.slice(1)).join(" ")}</h2>
        { data.map((obj,key)=>{
            return <p key={key}>{obj.text}</p>
        })}
        </div>
  )
}

export default page