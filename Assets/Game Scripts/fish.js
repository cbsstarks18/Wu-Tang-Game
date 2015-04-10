var currentSpeed : float;
var lastPosition : Vector3 = Vector3.zero;
var vol : float;

var dead = false;




 

 
 
function Update (){
        currentSpeed = transform.position.y - lastPosition.y;
        lastPosition.y = transform.position.y;
       
        
        if(currentSpeed < 0.02 && dead == false){
               
                transform.localScale = Vector3(-1,1,0);
        }else if(currentSpeed > 0.02){
               
        		transform.localScale = Vector3(1,1,0);
        		}
          if( dead == true){
               
        		transform.localScale = Vector3(1,1,0);
        	//	rigidbody2D.active = true;
        //	 rigidbody2D.detectCollisions = true;
      //  rigidbody.AddForce (0, 1000, 0);
      GetComponent(moobing_platform).enabled = false;
      
        		}
        		
        
  
        
}


