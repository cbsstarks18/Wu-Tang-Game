#pragma strict
var scoreText:GUIText;
var scoore:int;
var key : int;
var keys : int = 0;


  function Start (){

scoore =(PlayerPrefs.GetInt("playerScoore"));
  }

  
function Update () {
if (key <= keys){
 
 PlayerPrefs.SetInt("playerScoore", scoore);
 
}
 
    scoreText.text = "Scoore: " + scoore;
}

function OnTriggerEnter2D(hitcoint: Collider2D) {
//if (hitcoint.gameObject.tag == "coint"){
if (hitcoint.tag == "coint"){
 scoore += 1;
 

}
else if (hitcoint.tag == "50points"){
 scoore += 50;
}
else if (hitcoint.tag == "10points"){
 scoore += 10;
}
else if (hitcoint.tag == "key"){

keys += 1;
}
}


