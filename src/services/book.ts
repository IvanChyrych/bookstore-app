import { client } from "../api/client";
import { booksEndpoint } from "../api/endpoints";
import type { Book,SearchParams } from "../redux/books-slice";

async function requestBooks(params={}) {
    const {data}=await client.get(booksEndpoint,{params})
    return data.books.map((book:Book)=>({
        ...book,
        id:book.isbn13
    }))    
}

async function requestSearchResults({search,page}:SearchParams) {
    const {data} = await client.get(`/search/${search}/${page}`)
    return data
}

async function requestBookDetails(isbn13:string) {
    const {data}=await client.get(`/books/${isbn13}`)
    return{
        ...data,
        pdf:{
            'Chapter 2': 'https://itbook.store/files/9781617294136/chapter2.pdf',
            'Chapter 5': 'https://itbook.store/files/9781617294136/chapter5.pdf'
        }       
    }
}

export {requestBooks,requestSearchResults,requestBookDetails}