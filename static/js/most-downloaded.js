$(document).ready(function(){
    music.forEach(song => {
        if(song.downloaders >= 13){
            $("#most-downloaded-list").append(`
                <li>
                    <img src = '`+song.thumbnail+`'/>
                    <div>
                        <h1>`+song.title+`</h1>
                        <p> `+song.downloaders+` downloaders</p>
                        <p><a href = "">Downloade here <i class = "fas fa-download"> </i></a></p>
                    </div>
                </li>
            `)
        }
    })
    
});