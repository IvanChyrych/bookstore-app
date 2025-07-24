import React,{useState,} from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"



export const SearchForm:React.FC=()=>{
    const [search,setSearch]=useState('')
    const navigate=useNavigate()

    const handleChangeSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if (!search) {
            alert('search fiels must not be empty')
        }
        else{
            navigate(`/search/${search}/1`)
            setSearch('')
        }
    }

    return(
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={handleChangeSearch}
                    value={search}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}