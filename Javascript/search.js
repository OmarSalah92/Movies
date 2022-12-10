 fetch(`https://api.themoviedb.org/3/search/movie?api_key=bd551351d613eae72b5219e295facfeb&query=`)
.then((e)=>{
return e.json();
})
.then ((data)=>{
data.forEach(i => {
    
});
})