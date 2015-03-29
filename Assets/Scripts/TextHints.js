import UnityEngine.UI;

#pragma strict

static var textOn : boolean = false;
static var message : String;
private var timer : float = 0.0;

var textHintGui : Text;

function Start () {
	textHintGui = GameObject.Find("TextHintGui").GetComponent(Text);
	textHintGui.text = "";	
	textOn = false;
	timer = 0.0;
}

function Update () {
	if(textOn){
		timer += Time.deltaTime;
		textHintGui.text = message;
		textHintGui.enabled = true;
	}
	if(timer >= 5){
		textOn = false;
		textHintGui.enabled = false;
		timer = 0.0;
	}
}