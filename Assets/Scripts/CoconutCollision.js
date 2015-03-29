#pragma strict

var targetRoot : GameObject;
private var beenHit : boolean = false;
private var timer : float = 0.0;
var hitSound : AudioClip;
var resetSound : AudioClip;



function Start () {

}

function OnCollisionEnter (theObject : Collision){
	if(beenHit == false && theObject.gameObject.name=="coconut"){
		GetComponent.<AudioSource>().PlayOneShot(hitSound);
		targetRoot.GetComponent.<Animation>().Play("down");
		beenHit = true;
		CoconutWin.targets++;
	} 
}

function Update () {
	if(beenHit == true){
		timer += Time.deltaTime;
	}
	if(timer > 3){
		GetComponent.<AudioSource>().PlayOneShot(resetSound);
		targetRoot.GetComponent.<Animation>().Play("up");
		beenHit = false;
		CoconutWin.targets--;
		timer = 0.0;
	}
}

@script RequireComponent(AudioSource)