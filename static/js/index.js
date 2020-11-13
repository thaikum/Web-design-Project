$(document).ready(function(){
    music.forEach(song => {
        console.log("hello");
        $("#music-list").append(`
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
    });
    $('#music-list .song-title').click(function(){
        url = $(this).data("id")
        $(location).attr('href',url);
    });
    $('#music-list .song-additives a').click(function(e){
        e.preventDefault()
    });
    $('#login').on('click','a', (e)=>{
        e.preventDefault();
    });
    $('#sign-up').on('click','a', (e)=>{
        e.preventDefault();
    });
    const loginModal = () => {
        $('.modal#login-form').show(500);
        $('.exit-modal').show(500);
    }
    const signUpModal = () =>{
        $('#signup-form').show(500);
        $('.exit-modal').show(500);
    }
    const closeModal = () => {
        $('.modal').hide(500);
        $('.exit-modal').hide();
    }

    $('#login').click(()=>{
        loginModal();
    });
    
    $('.exit-modal').click(function() {
        closeModal();
    });
    $('.close').click(()=>{
        closeModal();
    });
    
    $('#sign-up').click(() => {
        signUpModal();
    });
    $('#login-link').click(e => {
        e.preventDefault();
        closeModal();
        loginModal();
    });
    $('#sign-up-link').click(e => {
        e.preventDefault();
        closeModal();
        signUpModal();
    });

    $(function () { 
        count = 0; 
        sloganArray = ["Life is one grand, sweet song, so start the music", "Love is my weapon, music is my religion, peace is in my soul.", "Music is what I am. Everything else is what I do."]; 
        setInterval(function () { 
          count++; 
          $("#music-slogan").fadeOut(1000, function () { 
            $(this).text(sloganArray[count % sloganArray.length]).fadeIn(1000); 
          }); 
        }, 4000); 
      }); 
}); 