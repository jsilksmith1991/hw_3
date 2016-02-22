var weeklyRides; 
var weeklyCost;

function cardCalc(){
		 weeklyRides = document.getElementById("weeklyRides").value; 
		 weeklyCost = weeklyRides * 2.75;
		 alert("You spend roughly $"+weeklyCost+"per week on the subway. ");

		metroCard();
		
		}

function metroCard(){
	if (weeklyCost < 29.56) {
			alert("You should buy per-ride MetroCard");
	} 
	else { alert("It is cost efficient to by a monthly MetroCard");

	} 
	
}
