#pragma strict
function OnTriggerExit2D(hit: Collider2D) {
//function OnCollisionEnter2D(hit : Collision2D) {
 
  
     if(hit.gameObject.tag == "Player"){
         
                 Destroy(gameObject);
                 	//collider2D.enabled = false;
				//	renderer.enabled = false;
      
     
 }
 }