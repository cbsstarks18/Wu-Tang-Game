#pragma strict
var LIVES : int = 3;
var liveTaken : float;
var life1 : GameObject;
var life2 : GameObject;
var life3 : GameObject;
var GameOver : GameObject;

public var TotalLifes : int = 3;
private var TotalLifes2 : int = 1;
var medkitSound : AudioClip;
var AuchSound: AudioClip; // audio

var anim : Animator;
var die = false;

var onetime = false;







function Start () {
 anim = GetComponent("Animator");

TotalLifes =(PlayerPrefs.GetInt("TotalLifes"));
}
function OnTriggerExit2D(hit3: Collider2D) {


}


function OnTriggerEnter2D(hit2: Collider2D) {


if(hit2.gameObject.tag == "InstantDie"){
     LIVES = LIVES - 4 ;
     //audio.PlayOneShot(AuchSound);
   
}
if(hit2.gameObject.tag == "spike"){
     LIVES = LIVES - 1 ;
     audio.PlayOneShot(AuchSound);
   
}
if(hit2.gameObject.tag == "enemy1"){
     LIVES = LIVES - 1 ;
     audio.PlayOneShot(AuchSound);
}

 if(hit2.gameObject.tag == "medkit"){
	 LIVES = 3 ;
	// audio.PlayOneShot(medkitSound);
}

if(hit2.gameObject.tag == "LifeCure" && LIVES == 1){
     LIVES = 2 ;
    // audio.PlayOneShot(AuchSound);
}
else if(hit2.gameObject.tag == "LifeCure" && LIVES == 2){
     LIVES = 3 ;
    
    // audio.PlayOneShot(AuchSound);
}
else if(hit2.gameObject.tag == "LifeCure" &&  LIVES >= 3){
 TotalLifes = TotalLifes + 1 ;
  PlayerPrefs.SetInt("TotalLifes", TotalLifes);
 }


} // trigerenter




function OnTriggerStay2D(hit: Collider2D) {


if(Time.time - liveTaken < 1) {
    return;
}



if(hit.gameObject.tag == "spikes2"){
     LIVES = LIVES - 1 ;
     audio.PlayOneShot(AuchSound);
}




 liveTaken = Time.time;



} //trigerstay

function Update (){





if ( TotalLifes < 1 ){

PlayerPrefs.DeleteAll();
sec();
GameOver.SetActive(true);
PlayerPrefs.SetInt("TotalLifes", 3);
Tgm ();
Application.LoadLevel ("GameOwerWin");
}

if (LIVES >= 4){

LIVES = 3;
}

if (LIVES == 3) {
life1.SetActive(true);
life2.SetActive(true);
life3.SetActive(true);

}

if (LIVES == 2) {
  
life1.SetActive(false);
life2.SetActive(true);
life3.SetActive(true);
}
else if (LIVES == 1) {

life1.SetActive(false);
life2.SetActive(false);
life3.SetActive(true);

}

else if (LIVES <= 0 && die == false) {
onetime = true;
if (onetime == true){
 TotalLifes -=1; 
 onetime = false;
 die = true;
 PlayerPrefs.SetInt("TotalLifes", TotalLifes);
 }
 }
 
else if (LIVES <= 0) {


//onetime = true;

//LateUpdate();
  


  
 
 
  
life1.SetActive(false);
life2.SetActive(false);
life3.SetActive(false);

anim.SetInteger("death", 1);
//rigidbody2D.isKinematic = true;
rigidbody2D.mass = 999;
GameOver.SetActive(true);
respawn ();

}
} //update



function respawn (){

yield WaitForSeconds(2);
Application.LoadLevel(Application.loadedLevel);
}

function sec (){

yield WaitForSeconds(1);

}
function Tgm (){
yield WaitForSeconds(2);


}