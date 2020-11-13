$(document).ready(function(){
    music.forEach(song => {
        if(song.trending){
            $("#trending-music-list").append(`
            <li>
                <img src = '`+song.thumbnail+`' class = 'thumbnail' />
                <div class = 'song-details'>
                    <h1 class = 'song-title' data-id = '`+song.title+`'>`+song.title+`</h1>
                    <p>By `+song.artist+` in the album `+song.album+`</p>
                    <div class = 'song-additives'>
                        <div class = "views">
                            <a href = '' >
                                <i class = 'fas fa-thumbs-up'></i>
                            </a>
                            <div>
                                <span>`+song.likes+`</span>
                            </div>
                        </div> 
                        <div class = "views">
                            <a href = '' >
                                <i class = 'fas fa-thumbs-down'></i>
                            </a>
                            <div>
                                <span>`+song.dislikes+`</span>
                            </div>
                        </div>
                        <div class = "views">
                            <a href = '' >
                                <i class = 'fas fa-star'></i>
                            </a>
                            <div>
                                <span>`+song.stars+`</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <audio controls>
                            <source src="`+song.file+`" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </li>`);
        }
    });
})