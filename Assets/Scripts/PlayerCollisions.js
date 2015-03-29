import UnityEngine.UI;

#pragma strict

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;
private var hasMatches : boolean = false;
private var campFireIsOn : boolean = false;
private var currentCampFire : GameObject;
var MatchGui : GameObject;

var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

var batteryCollect : AudioClip;

var crossHairGui : Image;

function Start () {
	crossHairGui = GameObject.Find("Crosshair").GetComponent(Image);
	MatchGui = GameObject.Find("MatchGui");
}

function Update () {
	var hit : RaycastHit;
	// Envoyer un rayon de detection de 5m en face depuis la position du joueur
	if(Physics.Raycast(transform.position, transform.forward, hit, 2)){
		if((hit.collider.gameObject.tag == ("door")) && (doorIsOpen == false) && (BatteryCollect.charge >=4)){
			currentDoor = hit.collider.gameObject; // Find the object hitted by the raycast
			Door(doorOpenSound, true, "dooropen", currentDoor); // Execute the door
			GameObject.Find("BatteryGui").GetComponent(Image).enabled = false; // Hide the batteryGui
		}else
			if((hit.collider.gameObject.tag == ("door")) && (doorIsOpen == false) && (BatteryCollect.charge <4)){
				GameObject.Find("BatteryGui").GetComponent(Image).enabled = true; // Display the batteryGui
				TextHints.message = "The door mecanism seem require more energy...";
				TextHints.textOn = true;
			}
		if((hit.collider.gameObject.tag == ("campfire")) && (campFireIsOn == false) && (hasMatches == true)){
			currentCampFire = hit.collider.gameObject; // Find the object hitted by the raycast
			CampFire(true, currentCampFire);
			GameObject.Find("MatchGui").GetComponent(Image).enabled = false; // Hide the MatchGui
		}else
			if((hit.collider.gameObject.tag == ("campfire")) && (campFireIsOn == false) && (hasMatches == false)){
				MatchGui.active = true; // Display the MatchGui
				TextHints.message = "You must have Matches before nightfall !";
				TextHints.textOn = true;
			}
	}

	if(doorIsOpen){
		// timer qui s'incemente par le temps en s entre chaque frames
		doorTimer += Time.deltaTime;
		if(doorTimer > doorOpenTime){
			Door(doorShutSound, false, "doorshut", currentDoor);
			doorTimer = 0.0;
		}
	}
}
function CampFire(LightCheck : boolean, thisCampFire : GameObject){
	campFireIsOn = LightCheck;
	
	//TODO: Faire la liste des ParticleSystem du campfire pour les Play();
	//var allChildren = transform.Cast.<Transform>().Select(function(t) { return t.gameObject; }).ToArray();
	//var campParticle : ParticleSystem;
	//foreach(thisCampFire.GetComponentsInChildren(ParticleSystem) in campParticle){
	//	campParticle.Play();	
	//}
	
	var campSound : AudioSource = thisCampFire.GetComponent(AudioSource);
	campSound.Play();
	
	var fireLight : GameObject = GameObject.Find("FireLight");
//	fireLight.GetComponent.<Light>().active = true;
	
	var smoke : GameObject = GameObject.Find("Smoke");
	var smokeSystem : ParticleSystem = smoke.GetComponent(ParticleSystem);
	smokeSystem.Play();
	
	var smokeFire : GameObject = GameObject.Find("SmokeFire");
	var smokeFireSystem : ParticleSystem = smokeFire.GetComponent(ParticleSystem);
	smokeFireSystem.Play();
	
	var upFire : GameObject = GameObject.Find("UpFire");
	var upFireSystem : ParticleSystem = upFire.GetComponent(ParticleSystem);
	upFireSystem.Play();
	
	var baseFire : GameObject = GameObject.Find("BaseFire");
	var baseFireSystem : ParticleSystem = baseFire.GetComponent(ParticleSystem);
	baseFireSystem.Play();
	
	if(MatchGui){
		Destroy(MatchGui);
	}
}	

function Door(aClip : AudioClip, openCheck : boolean, animName : String, thisDoor : GameObject){
	doorIsOpen = openCheck;
	// Ici j'ai meme déplacé la source audio directement sur la porte elle meme !
	thisDoor.transform.GetComponent.<AudioSource>().PlayOneShot(aClip);
	thisDoor.transform.parent.GetComponent.<Animation>().Play(animName);
}
function OnTriggerEnter(collisionInfo : Collider){
	if(collisionInfo.gameObject.tag == "battery"){
		BatteryCollect.charge++;
		GetComponent.<AudioSource>().PlayOneShot(batteryCollect);
		Destroy(collisionInfo.gameObject);
	}
	if(collisionInfo.gameObject.tag == "Matchbox"){
		hasMatches = true;
		MatchGui.active=false;
//		var MatchGuiObj : GameObject = Instantiate(MatchGui, Vector3(0.15,0.1,0),transform.rotation);
//		MatchGuiObj.name = "MatchGui";
//      TODO:Find a way to attach to the MatchGui to MainCanvas : Setting the parent of a transform which resides in a prefab is disabled to prevent data corruption.
//		UnityEngine.Transform:set_parent(Transform)
//		PlayerCollisions:OnTriggerEnter(Collider) (at Assets/Scripts/PlayerCollisions.js:114)
//		var MainCanvas = GameObject.Find("MainCanvas");
//		MatchGui.transform.parent = MainCanvas.transform;
		GetComponent.<AudioSource>().PlayOneShot(batteryCollect);
		Destroy(collisionInfo.gameObject);
	}
}
	
function OnControllerColliderHit(hit : ControllerColliderHit){
	if(hit.collider == GameObject.Find("mat").GetComponent.<Collider>()){
		//Parce que la variable est static
		CoconutThrow.canThrow = true;
		crossHairGui.enabled = true;
		TextHints.message = "Need a battery ? Could you shoot all the targets ?";
		TextHints.textOn = true;
	}else{
		CoconutThrow.canThrow = false;
		crossHairGui.enabled = false;
	}
}
