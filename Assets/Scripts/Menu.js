#pragma strict

var LevelToLoad : String;
var videoMode : boolean = true; // True => Stereo / False => Mono
var lookMode : boolean = true; // True => Mouse / False => Gyro
var menuBool : boolean = true;
var pauseBool : boolean = true;

var levelToLoad : String;
var normalTexture : Texture2D;
var rollOverTexture : Texture2D;
var beep : AudioClip;


function Start () {
	#if ANDROID
	//Screen.orientation = ScreenOrientation.LandscapeLeft; // Set in Project Setting > Player
	Screen.fullScreen = true; // Full screen (not equal to hide android but, that is managed by plugin
	}
	#endif
	//openMenu();
}
function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){	
		if(!menuBool){
			OpenMenu();
		}else{
			CloseMenu();
		}
	}
}
function OpenMenu (){
		PauseGame();
		menuBool = true;
}
function CloseMenu(){
		ResumeGame();
		menuBool = false;
}
function PauseGame(){
	Time.timeScale = 0;
	pauseBool = true;
}
function ResumeGame(){
	Time.timeScale = 1;
	pauseBool = false;
}
function SwithLookMode(){
	if(lookMode){ // If Mouse => Gyro
			lookMode = false;
		}else{ // If Gyro => Mouse
			lookMode = true;
		}
}
function SwtichVideoMode(){
		if(videoMode){ // If Stereo => Mono
			videoMode = false;
		}else{ // If Mono => Stereo
			videoMode = true;
		}
}
function PlayGame(){
	Application.LoadLevel(LevelToLoad);
}
function QuitGame(){
	Application.Quit();
}

function OnMouseEnter(){
	GetComponent.<GUITexture>().texture = rollOverTexture;
}
function OnMouseExit(){
	GetComponent.<GUITexture>().texture = normalTexture;
}
function OpenLevel(level:String){
	GetComponent.<AudioSource>().PlayOneShot(beep);
	yield new WaitForSeconds(0.35);
	Application.LoadLevel(LevelToLoad);
}
@script RequireComponent(AudioSource)