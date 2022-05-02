// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import {searchNews,append} from "./fetch.js"

let search=(e)=>{
    if(e.key ==="Enter"){
        let value=document.getElementById("search_input").value;
        searchNews(value).then((data) => {
            console.log(data.articles)
            let container=document.getElementById("container")
            append(data.articles,container)
        });
        
    }
};
document.getElementById("search_input").addEventListener("keydown",search);
// let searchNews=async()=>{
//     let value=document.getElementById("search_input").value;
// //     try {
// //       let res=await fetch(
// //           `https://masai-mock-api.herokuapp.com/news?q=${value} `
// //       );
// //       let data=await res.json();
// //       console.log(data)  
// //     } catch (error) {
// //         console.log(error)
// //     }
//  }