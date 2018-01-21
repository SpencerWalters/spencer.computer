var audio_on = 0;
function play_song() {
  if (audio_on){
    document.getElementById("song").muted = false;
    document.getElementById("song-melody").muted = true;
  }
}
function play_song_melody() {
  if (audio_on) {
    document.getElementById("song").muted = true;
    document.getElementById("song-melody").muted = false;
  }
}
function audio_toggle() {
  if (!audio_on){
    document.getElementById("song").muted = false;
    document.getElementById("song-melody").muted = true;
    document.getElementById("audio-button").style.color = "black";
    audio_on = 1;
  }
  else {
    document.getElementById("song").muted = true;
    document.getElementById("song-melody").muted = true; 
    document.getElementById("audio-button").style.color = "#bbb";
    audio_on = 0;
  }
}
