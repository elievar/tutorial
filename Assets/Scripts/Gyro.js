#pragma strict

static var gyrobool : boolean = true;
private var gyro : Gyroscope;
private var rotFix : Quaternion;
var currentParent : Transform;
var camParent : GameObject;
var camGrandparent : GameObject;

function Start () {
	
	gyrobool = SystemInfo.supportsGyroscope;
	//gyrobool=true;
	if (gyrobool) {
		currentParent = transform.parent;
		
		camParent = new GameObject ("GyroCamParent");
		camParent.transform.position = transform.position;
		transform.parent = camParent.transform;
		
		camGrandparent = new GameObject ("GyroCamGrandParent");
		camGrandparent.transform.position = transform.position;
		camParent.transform.parent = camGrandparent.transform;
		
		camGrandparent.transform.parent = currentParent;
		
		
		gyrobool = SystemInfo.supportsGyroscope;
		
		gyro = Input.gyro;
		gyro.enabled = true;
		camParent.transform.eulerAngles = new Vector3 (90, 180, 0);
		rotFix = new Quaternion (0, 0, 1, 0);

	} else {
		
		print("NO GYRO");
	}
}

function Update () {
	if (gyrobool) {
		var quatMap : Quaternion ;
		quatMap = new Quaternion(gyro.attitude.x,gyro.attitude.y,gyro.attitude.z,gyro.attitude.w);
		transform.localRotation = quatMap * rotFix;
	}
}
