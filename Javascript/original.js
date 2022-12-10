fetch(`data.json`)
.then((e)=>{
return e.json()
})
.then((data)=>{

    let x = data.results

    x.forEach(i => {
        // console.log(i);

        let myDiv = document.querySelector('.main')
        

        let myResult = `
        <div class="card container " style="width: 17rem;">

        <span class='image1 '>
      

        <img  src="${i.poster_path}" class="card-img-top image " alt="photo is not Supported">
        
        </span>
        <div class="card-body  ">
        <h5 class="card-title fs-6 text-info">${i.title}</h5>
        <div class="overlay">
        <p class="card-text fs-6  text">Overview: ${i.overview}</p> 
        </div>
        <p class="card-text fs-6 text-success">Rate: ${i.vote_average}</p>
        <p class="card-text fs-6 text-warning">Language: ${i.original_language}</p>
        

        </div>
</div>
         
  `
  myDiv.innerHTML += myResult 

      
        
//         let mySubDiv = document.querySelector('.sub-main')

//         let myView = document.createElement('p')
//         let myText = document.createTextNode(`${i.overview}`)
//         let myItem= myView.appendChild(myText)
        


//         
//         let myOv = document.querySelectorAll('.view')
//         let myPoster = document.querySelectorAll('.image')
// console.log(myImg);
//         myImg.forEach((e)=>{
//             e.addEventListener('click',()=>{
//                 myImg.parentNode.replaceChild(myOv, myImg);
//             })
//         })
        
        // let myOv = document.querySelectorAll('.view')

// let myArr= Array.from(myImg)
// let mySubArr= Array.from(myOv)








   

})
})


        
    

       

        

    



   


 