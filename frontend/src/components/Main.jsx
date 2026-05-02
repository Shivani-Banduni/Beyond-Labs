import React, { useEffect, useState } from 'react'

export default function Main() {
    const [searchData,setSearchData]=useState();
    const [filterData,setFilterData] = useState()
    const [users,setuser] = useState ([ 
{ id: 1, name: "Rahul", status: "active" }, 
{ id: 2, name: "Anita", status: "inactive" }, 
{ id: 3, name: "Vikram", status: "active" }, 
{ id: 4, name: "Sneha", status: "inactive" }, 
{ id: 5, name: "Aman", status: "active" }, 
]);


const handleSearch=(e)=>{
    let seachItem=e.target.value.toLowerCase();
    let data=users.filter(ele => ele.name.toLowerCase().includes(seachItem))
    console.log(data,data)
    setSearchData(data);

}


function handleChange(e){
let data=users.filter(ele => ele.status==e.target.value);
setSearchData(data);
console.log(filterData,'filter')
}
  return (
   <>
   <div className='filter-div'>
    <select onChange={handleChange}>
<option value="all">All</option>
<option value="active">Active</option>
<option value="inactive">Inactive</option>

    </select>
   </div>
    <div className='main-div'>
      <input onChange={handleSearch} className='input' placeholder='Search...'></input>
    </div>

    <div className='showdata'>

         {(searchData ? searchData : users)?.map((e)=>{ return <> <div className='show-row-data'>
            <p>{e.id}</p>
        <p>{e.name}</p>
        <p>{e.status}</p>
        </div> <br/><br/></>})
       
        }

    </div>
   </>
  )
}
