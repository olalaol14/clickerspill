window.onload = function() {
	document.getElementById("testmode").onclick = function testmode() {
		winchance = 100;
	}
	var money = 0;
	var earnings = 0;
	var winchance = 4;
	var loosechance = 100 - winchance;
	var tires = 0;
	var wings = 0;
	var chassies = 0;
	var steering = 0;
	var engines = 0;
	document.getElementById("race").onclick = function race() {
		document.getElementById("raceresults").innerHTML = "Race in progress"
		document.getElementById("race").style.display = "unset";
		document.getElementById("race").style.display="none";
		setTimeout(() => {

					var randpos = Math.floor(Math.random() * 100) + 1;
					if (randpos < winchance) {
						earnings = 50;
						money = money + earnings;
						document.getElementById("placement").innerHTML = "Placement: 1st";
						document.getElementById("earnings").innerHTML = "Earnings: " + earnings + "$";
						document.getElementById("cash").innerHTML = money + "$";
						document.getElementById("raceresults").innerHTML = "Race results";
					} else {
						var randpos2 = Math.floor(Math.random() * 10) + 1;
						if (randpos2 == 1) {
							randpos2 = randpos2 + 2;
						}
						if (randpos2 == 2) {
							earnings = 10;
						}
						if (randpos2 == 3) {
							earnings = 5;
						}
						if (randpos2 == 4) {
							earnings = 2;
						}
						if (randpos2 == 5) {
							earnings = 1;
						}
						money = money + earnings;
						document.getElementById("placement").innerHTML = "Placement: " + randpos2 + "th";
						document.getElementById("earnings").innerHTML = "Earnings: " + earnings + "$";
						document.getElementById("cash").innerHTML = money + "$";
						document.getElementById("raceresults").innerHTML = "Race results"
					}
					earnings = 0;



				document.getElementById("race").style.display="inherit";
		}, 2000);
	}
	document.getElementById("buytire").onclick = function buytire() {
		if (money > 100) {
			tires = tires +1;
			winchance = winchance + 1;
			money = money - 100;
			document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
			document.getElementById("cash").innerHTML = money + "$";
			document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
		}
	}
	document.getElementById("buywing").onclick = function buywing() {
		if (money > 200) {
			wings = wings +1;
			winchance = winchance + 2;
			money = money - 200;
			document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
			document.getElementById("cash").innerHTML = money + "$";
			document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
		}
	}
	document.getElementById("buychassi").onclick = function buychassi() {
		if (money > 500) {
			chassies = chassies +1;
			winchance = winchance + 6;
			money = money - 500;
			document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
			document.getElementById("cash").innerHTML = money + "$";
			document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
		}
	}
	document.getElementById("buysteering").onclick = function buysteering() {
		if (money > 150) {
			steering = steering +1;
			winchance = winchance + 1.5;
			money = money - 150;
			document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
			document.getElementById("cash").innerHTML = money + "$";
			document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
		}
	}
	document.getElementById("buyengine").onclick = function buyengine() {
		if (money > 300) {
			engines = engines +1;
			winchance = winchance + 4;
			money = money - 300;
			document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
			document.getElementById("cash").innerHTML = money + "$";
			document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
		}
	}



	document.getElementById("buyall").onclick = function buyall() {
		var x = 0;
		while (x < 5) {
			if (money > 500) {
				chassies = chassies +1;
				winchance = winchance + 6;
				money = money - 500;
				document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
				document.getElementById("cash").innerHTML = money + "$";
				document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
			}
			if (money > 300) {
				engines = engines +1;
				winchance = winchance + 4;
				money = money - 300;
				document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
				document.getElementById("cash").innerHTML = money + "$";
				document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
			}
			if (money > 200) {
				wings = wings +1;
				winchance = winchance + 2;
				money = money - 200;
				document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
				document.getElementById("cash").innerHTML = money + "$";
				document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
			}
			if (money > 150) {
				steering = steering +1;
				winchance = winchance + 1.5;
				money = money - 150;
				document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
				document.getElementById("cash").innerHTML = money + "$";
				document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
			}
			if (money > 100) {
				tires = tires +1;
				winchance = winchance + 1;
				money = money - 100;
				document.getElementById("prob").innerHTML = "Win probability: " + winchance + "%";
				document.getElementById("cash").innerHTML = money + "$";
				document.getElementById("owns").innerHTML = "You own: " + tires + " Tires, " + wings + " Wings, " + chassies + " Chassies, " + steering + " Steering Wheels and " + engines + " Engines";
			}
			x = x + 1;
		}
	}
}
