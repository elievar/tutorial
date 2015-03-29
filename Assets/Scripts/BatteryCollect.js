import UnityEngine.UI; // Force unity to laungh the UI components

#pragma strict

static var charge : int = 0;

var charge1tex : Sprite;
var charge2tex : Sprite;
var charge3tex : Sprite;
var charge4tex : Sprite;
var charge0tex : Sprite;

var batteryGui : Image; // Prepare a var that will contain the Image object created with GameObject>UI>Image

function Start () {
   	
   	batteryGui = GameObject.Find("BatteryGui").GetComponent(Image); //Ca marche aussi
   	//batteryGui = gameObject.GetComponentInChildren(Image); // Find the Image Component
   	batteryGui.enabled = false; // Hide the Image on start
   	charge = 0;
}
function Update () {
	if(charge == 1){
		batteryGui.enabled = true; // Display the Image
		batteryGui.sprite = charge1tex; // Change the texture to charge1tex
	}else
		if(charge == 2){
			batteryGui.sprite = charge2tex; // Change the texture to charge2tex
		}else
			if(charge == 3){
				batteryGui.sprite = charge3tex; // Change the texture to charge3tex
			}else
				if(charge >= 4){
					batteryGui.sprite = charge4tex; // Change the texture to charge4tex
				}else{
						batteryGui.sprite = charge0tex; // Change the texture to charge0tex (empty)
				}
}