function Ride_Function(){
    var Height, Can_Ride
    Height = document.getElementById("Height").value
    Can_Ride = (Height < 52) ? "Too short":"Can Ride"
    document.getElementById("Ride").innerHTML = Can_Ride
}