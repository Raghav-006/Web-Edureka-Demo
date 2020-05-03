var select = document.getElementById('location');

var option = document.createElement("option");
option.text = "kolkata";
select.appendChild(option);

fetch('https://demo0614424.mockable.io/locationList').then((response)=>{
return response.json();
})
.then((data) => {
  for(var i=0;i<data.length;i++){
     var option= document.createElement("option");
     option.text = data[i].name;
     option.value = data[i].name;
     this.select.appendChild(option);
   }
})
function onSearchClick()
{
var restaurant = document.getElementById('restaurant-txtbox').value;
alert("You have Selected: " + restaurant);
}
