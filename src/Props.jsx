import React from 'react'

function Props(props) {
  return (
    <>
       <h1>{props.heading}</h1> 
        <h2>{props.subheading}</h2>
        <h3>{props.innerheading}</h3>
        <p>{props.desc}</p>
        <button>{props.btn}</button>
        <img src={props.url} alt="" />
        <li><a href="">{props.list}</a></li>
        <a href="">{props.link}</a>

    </>
  )
}

export default Props