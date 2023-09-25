import React,{useState,useEffect} from 'react'

const Books = () => {
    const[books,setBooks]=useState([]);
    useEffect(()=>{
const fetchbooks=async()=>{
try{
    const response = await fetch('http://localhost:8000/books');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    setBooks(data);
}catch(e){
  console.log(e);
}
}
fetchbooks();
    },[])
  return (
    <div>
{
    books.map((e)=>{
        return <h1>{e.bookname}</h1>
    })
}
    </div>
  )
}

export default Books
