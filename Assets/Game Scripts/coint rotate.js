#pragma strict
var Sound : AudioClip;
var RotateSpeed : float = 1;
 var prefabToSpawn : GameObject;
 var spawnLocation : Transform; 
 private var hasPlayed = false; // audio play line
function Start () {

}

function Update () {

transform.Rotate(0.0f, Time.deltaTime * RotateSpeed, 0.0f);
}
function OnTriggerStay2D(hitPlayer: Collider2D) {
if (hitPlayer.gameObject.tag == "Player"){
	collider2D.enabled = false;
	renderer.enabled = false;
//Destroy (gameObject);
   Instantiate(prefabToSpawn, spawnLocation.transform.position, Quaternion.identity);
    if(!hasPlayed){
        audio.PlayOneShot(Sound);
        hasPlayed = true;
    }
}
}