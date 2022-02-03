const $video=document.querySelector("#video") /*"const" define una variable, que en este caso la llamo "$video". El simbolo "$" lo uso solamente para saber que hace referncia a un elemento de HTML (no es obligatorio, solamente es para referencia personal)*/
const $play=document.querySelector("#play")
const $pause=document.querySelector("#pause")
const $backward=document.querySelector("#backward")
const $forward=document.querySelector("#forward")
const $mute=document.querySelector("#mute")
const $volume=document.querySelector("#volume")

$play.addEventListener("click", handlePlay) /*defino la variable $play y le agrego el "Evento". En este caso, el "listener" es cuando "Escucha" el click*/
$pause.addEventListener("click", handlePause)
$backward.addEventListener("click", handleBackward)
$forward.addEventListener("click", handleForward)
$mute.addEventListener("click", handleMute)
$volume.addEventListener("click", handleVolume)


function handlePlay() { /*Creo una funcion para reproducir el video al tocar en el boton creado*/
    $video.play() /* ".play() es un metodo ya establecido para reproducir*/
    $play.hidden=true
    $pause.hidden=false
    console.log('You have clicked the play button') /*Muestra un mensaje en la consola del navegador al cometer la accion*/
 }
function handlePause() { 
    $video.pause() 
    $pause.hidden=true
    $play.hidden=false
    console.log('You have clicked the pause button') 
 } 
 function handleBackward() {
    $video.currentTime-=10
    console.log('You have clicked the backward button') /*Muestra un mensaje en la consola del navegador al cometer la accion*/
 }
function handleForward() { 
    $video.currentTime+=10 
    console.log('You have clicked the forward button') 
 } 
function handleMute() {
   $video.muted=true 
   $mute.hidden=true
   $volume.hidden=false
   $volume.style.opacity="1"
   console.log('You muted the video')
}
function handleVolume() {
   $video.muted=false 
   $mute.hidden=false
   $volume.hidden=true
   console.log('You unmuted the video')
}

const $progress = document.querySelector("#progress")
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
   $progress.max=$video.duration
   console.log("Video charged")
}
function handleTimeUpdate() {
   $progress.value=$video.currentTime
}

$progress.addEventListener("input", handleInput)
function handleInput() {
   $video.currentTime=$progress.value
}