$(document).ready(function() {

	var questions = {

	"q1":{

	phrase: "In 1975 an engineer created the first electronic camera while working for what company?",
	choices:["Canon", "Kodak", "Nikon"],
	correct:"Kodak",
	image:"assets/images/kodak.png",

	},

	"q2":{

	phrase: "Nintendo was founded in which country?",
	choices:["Japan", "Korea", "France"],
	correct:"Japan",
	image:"assets/images/nintendo.jpg",
	},

	"q3":{

	phrase: "When was the game DOOM released?",
	choices:["1994", "1996", "1998"],
	correct:"1996",
	image:"assets/images/doom.jpg",

	},

	}
	
var intervalId;
var time;
var correctA = 0;
var incorrect = 0;
var flag = 0;
var timeout;
var q;
var restart = $("<button>").addClass("btn btn-primary").text("RESTART");
function startOver(){

	restart.on("click", function(){

	reset();
	game();


	});
}
function pick(){
	
	$("li").on("click", function(){

			if($(this).attr("value") === questions[q].correct){

			stop();
			correctA++;
			//replace with function
			var img = $("<img>").attr("src", questions[q].image);
			$("#choices").html(img);
			$("#choices").append("<h1>CORRECT</h1>");
			setTimeout(clear, 2000);
			setTimeout(generate, 2000);
			console.log("right");
			
			}
			else{

			stop();
			var img = $("<img>").attr("src", questions[q].image);
			$("#choices").html(img);
			$("#choices").append("<h1>The Correct Answer Was: </h1>" + questions[q].correct);
			
			setTimeout(clear, 2000);
			setTimeout(generate, 2000);
			incorrect++;
			

			}
		});

}

function listChoices(i){

	var ans = $("<li>").addClass("list-group-item").text(questions[q].choices[i]).attr("value", questions[q].choices[i]);
	$("#choices").append(ans);
}
function end(){

		stop();
		$("#choices").empty();
		$("#choices").append("correct: " + correctA + " ");
		$("#choices").append("incorrect: " + incorrect + "  ");
		$("#choices").append(restart);

}
function generate(){

	
	q=Object.keys(questions)[flag];
	if(q in questions){

		$("#question").html(questions[q].phrase);
		for(var i = 0; i<questions[q].choices.length; i++){
			//replace with function
			listChoices(i);
		}
		timeR();
		//replace with function
		pick();
		flag++;
	}
	else{

		end();
	}

}
function stop(){

	clearInterval(intervalId);
	$("#time").empty();
}
function clear(){

	$("#choices").empty();
}
//resets game
function reset(){

	flag = 0;
	correctA = 0;
	incorrect = 0;
	$("#choices").empty();
	$("#question").empty();
	$("#time").empty();

}
//message for win or lose
function dispL(){

	$("#choices").html("Oops")

}
//


function count(){

	time--;
	
	if(time <= 0){
		stop();
		$("#choices").empty();
		$("#time").html("times up!!");
		time = 20;
		timeout = setTimeout(generate, 4000);
		
		
		
	}
	else{

		$("#time").html("Time Remaining: " + time + " sec");

	}

}

function timeR(){

	time = 20;
	intervalId = setInterval(count, 1000);

}
function game(){

	generate();
	startOver();


}
game();


});



