import React,{useEffect} from "react";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Title } from "../components/title";

import { fetchSearchResults, type Book } from "../redux/books-slice";

import { Spinner } from "../components/spinner";
import { Card } from "../components/card";
import { useAppDispatch, type RootState } from "../redux/store";
import { Pagination } from "../components/pagination";

export const SearchResults:React.FC=()=>{
    const dispatch=useAppDispatch()
    const {query}=useParams()
    const {page}=useParams()

    const books=useSelector((state:RootState)=>state.books.list)
    const loading=useSelector((state:RootState)=>state.books.isLoading)
    const error=useSelector((state:RootState)=>state.books.error)

    const pagesCount=useSelector((state:RootState)=>state.books.pagesCount)

    useEffect(()=>{
        dispatch(fetchSearchResults({search:query,page:page||"1"}))
    },[query,page,dispatch])

    function renderBooks(){
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <div className="d-flex">{error}</div>
        }
        return books.map((book:Book)=>(
            <Card
                key={book.isbn13}
                book={book}
            />
        )
    )}
    return(
        <>
        <Title>search results for {query}</Title>
        <Pagination pagesCount={pagesCount} currentPage={Number(page)} to={`search/${query}/`}></Pagination>
        <div className="d-flex flex-column">
            {renderBooks()}
        </div>
        </>
    )

}