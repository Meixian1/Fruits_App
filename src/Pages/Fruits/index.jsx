
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';



const Fruits = () => {
  const[fruits, setFruits] = useState([]);

  // useEffect(() =>{
  //     axios({
  //         method:"GET",
  //         url:"http://localhost:3000/fruits",
  //     }).then((res)=> {
  //         console.log(res.data); 
  //         setFruits(res.data)
  //     })
  // }, [])

  useEffect(() =>{
    axios({
        method:"GET",
        url:"/server/fruits",
    }).then((res)=> {
        console.log(res.data); 
        setFruits(res.data)
    })
}, [])

  // return (
  //   <div>Show all fruits here:
  //     {/* <ul> 
  //     {/* {fruits.map((fruit)=>{
  //      return <li key={fruit.name}>
  //         <p>{fruit.name}</p>
  //         <p>{fruit.color}</p>
  //         <p>{fruit.readyToEat}</p>
  //       </li>
  //     })}
  //      </ul> */}
  //      {fruits.map((fruit) => <div key={JSON.stringify(fruit)}>{fruit.name}</div>
       
  //      )}
  //   </div>
  // )
  return (
    <div>
      <p>Show all fruits here:</p>
      {fruits.map((fruit) => (
        <div key={JSON.stringify(fruit)}>
          <p>Name: {fruit.name}</p>
          <p>Color: {fruit.color}</p>
          <p>Ready to Eat: {fruit.readyToEat ? 'True' : 'False'}</p>
        </div>
      ))}
    </div>
  );
}

export default Fruits
