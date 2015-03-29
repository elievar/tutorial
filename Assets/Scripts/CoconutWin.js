#pragma strict

static var targets : int = 0;
private var haveWon : boolean = false;
var win : AudioClip;
var battery : GameObject;

function Start () {

}

function Update () {
	if(targets >= 3 && haveWon == false){
		targets=0;
		GetComponent.<AudioSource>().PlayOneShot(win);
		Instantiate(battery, Vector3(transform.position.x, transform.position.y+2, transform.position.z), transform.rotation);
		haveWon = true;
	}
}
@script RequireComponent(AudioSource)