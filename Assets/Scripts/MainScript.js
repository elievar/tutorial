/*import UnityEngine.UI;

#pragma strict




var FPC : GameObject;
var Head : GameObject;


var leftCamera : GameObject;
var rightCamera : GameObject;
var mainCamera : GameObject;


var mouseLook : boolean = true;
var gyroLook : boolean = false;


function Start () {

	
	
	
}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)){	
		if(!menuBool){
			openMenu();
		}else{
			closeMenu();
		}
	}
}

function openMenu (){
		optionPanel.active = true;
		pauseGame();
		menuBool = true;
		//#if ANDROID
		//SleepTimeout.SystemSetting; // Marche pas non plus
		//#endif
}


function activateMouseLook(){
	FPC.GetComponent(MouseLook).enabled = true;
	//UNDONE:Poure jourer à la manette
	//J'ai forcé axis X sur le lookmouse du head
	//Dans les input, passer MouseX à Joystick Axis + 3rd and 4th axis + Sensivity 3 + Inverted for MouseY
	mouseLook = true;
}
function desactivateMouseLook(){
	FPC.GetComponent(MouseLook).enabled = false;
	mouseLook = false;
}
function activateGyroLook(){
	rightCamera.GetComponent(Gyro).enabled = true;
	leftCamera.GetComponent(Gyro).enabled = true;
	gyroLook = true;
}
function desactivateGyroLook(){
	rightCamera.GetComponent(Gyro).enabled = false;
	leftCamera.GetComponent(Gyro).enabled = false;
	gyroLook = false;
}
function swtichVideoMode(){
		if(videoMode){ // If Stereo => Mono
			rightCamera.camera.enabled = false;
			leftCamera.camera.enabled = false;
			mainCamera.camera.enabled = true;
			videoMode = false;
		}else{ // If Mono => Stereo
			rightCamera.camera.enabled = true;
			leftCamera.camera.enabled = true;
			mainCamera.camera.enabled = false;
			videoMode = true;
		}
}*/

