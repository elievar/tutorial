#pragma strict

var rotateAmount : float = 0.5;

function Start () {

}

function Update () {
	transform.Rotate(Vector3(0,rotateAmount,0));
}