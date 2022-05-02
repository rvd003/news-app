let searchNews=async(value)=>{
    try {
        let res=await fetch(
            `https://masai-mock-api.herokuapp.com/news?q=${value} `
        );
        let data=await res.json();
       
        return data; 
      } catch (error) {
          console.log(error)
      }
  };

 let append=(data,container)=>{
     data.forEach(({title,urlToImage,content})=>{
         let div=document.createElement("div");
         let img=document.createElement("img");
         let h3=document.createElement("h3");
         let p=document.createElement("p");

          img.src=urlToImage;
         h3.innerText=title;
          p.innerText=content;

         div.append(img,h3,p)
         container.append(div);

     });
 };



  export {searchNews,append};

