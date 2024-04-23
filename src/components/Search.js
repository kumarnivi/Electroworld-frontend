import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Search () {
   const [keyword, setKeyword] =  useState("");
  const navigate =  useNavigate()
const searchHandler = ( ) => {
navigate('/search?keyword='+keyword)
}

 return  <div className="input-group">
 <input
   type="text"
   id="search_field"
   onChange={(e) => setKeyword(e.target.value)}
   className="form-control"
   placeholder="Enter Product Name ..."
   onBlur={searchHandler}
 />
 <div className="input-group-append">
   <button id="search_btn" className="btn"
   onClick={searchHandler}
   >
     <i className="fa fa-search" aria-hidden="true"></i>
   </button>
 </div>
</div>
}