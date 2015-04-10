#pragma strict
var enemy :  GameObject; 
function OnTriggerStay2D(hit: Collider2D) {
 
  
     if(hit.gameObject.tag == "Player"){
         
                 Destroy(enemy.gameObject);
      
     
 }
 }