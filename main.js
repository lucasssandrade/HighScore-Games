const nav = document.getElementById('nav');




/*  slider horizontal  */
const slider = document.querySelector('.row_posters');
let isDown = false;
let startX;
let ScrollLeft;
/*  slider horizontal  */





window.addEventListener('scroll', () =>{
    if(window.scrollY >=100){
        nav.classList.add('nav_black');
    }else{
        nav.classList.remove('nav_black');
    }
})

/*  Slider horizontal  */

slider.addEventListener('mousedown', () => {
    isDown = true;
    slider.classList.add('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
    if(!isDown) return;
    console.count(isDown);
    
    
});




function trocaBannerBlackJack(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/black_jack2.png)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "black_jack/index.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerDelta(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/delta4.jpeg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "delta_master/index.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerRaceMaster(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/outrun3.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "race_master/v4.final.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerRoadFighter(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/black_jack2.png)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "road_fighter/game.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerDoodleJump(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/doodle_jump2.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "doodle_jump/play/doodle_jump_play.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerFlappyBird(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/flappy_bird4.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br><br>O famoso Flappy Bird, tão estressante quanto divertido!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "flappy_bird/play/flappy_bird_play.html";
    b.href  = "flappy_bird/story/story.html";
}

function trocaBannerPong(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/pong4.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Conhecido por ser o primeiro jogo eletrônico criado, jogue agora!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "pong/play/pong_play.html";
    b.href  = "pong/story/story.html";
}

function trocaBannerSnake(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/snake4.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Lembra do Nokia e seu jogo da cobrinha? Mate essa saudade!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "snake/play/snake.html";
    b.href  = "snake/story/story.html";
}

function trocaBannerSpaceInvaders(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/space_invaders3.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Quando se pensa em arcade, esse é o jogo que vem em mente!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "space_invaders/play/index.html";
    b.href  = "space_invaders/story/story.html";
}

function trocaBannerTetris(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/tetris6.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Divertidamente viciante, clássico dos clássicos!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "tetris/play/index.html";
    b.href  = "tetris/story/story.html";
}

function trocaBannerFruitNinja(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/fruit_ninja2.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>O vicio de todos que um dia tiveram um Galaxy Pocket!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "fruit_ninja/play/index.html";
    b.href  = "fruit_ninja/story/story.html";
}

function trocaBannerPacMan(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/pac_man3.jpg)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Come-come";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "pac-man/pacman/index.html";
    b.href  = "fruit_ninja/story/story.html";
}