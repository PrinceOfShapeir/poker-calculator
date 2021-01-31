/*
 * ()=>{
						fakeArray = array.filter((num)=>{return num != array[i]%13});
							let secondPair = pairFinder(fakeArray);
							if(secondPair <2000) return false;
							else if(secondPair >= 2000 && secondPair <3000){
								
								return 5000 + array[i]%13 + secondPair - 2000;
							
							}
							else if(secondPair >array[i]%13+3000) return secondPair + array[i]%13 + 5000;
							else if(secondPair > 4000) return secondPair;
							}
 * 
 * 
 * 
 * 
 * 
 * */






//takes seven card input and returns hand strength
//a stronger hand should always return a greater hand strength than a weaker hand

//input format:

function flushFinder (input) {
	let ray = input.slice();
	console.log(ray);
	let clubsHeartsSpadesDiamonds = [[],[],[],[]];
	let count = [0,0,0,0,];
	for(let i = 0; i<ray.length;i++){
		
		if(ray[i]<=13){
			
			clubsHeartsSpadesDiamonds[0].push(ray[i]);
			count[0]++;
		}
		else if (ray[i]>13&&ray[i]<=26){
			
			
			clubsHeartsSpadesDiamonds[1].push(ray[i]);
			count[1]++;
		}
		else if (ray[i]>26&&ray[i]<=39){
				
			clubsHeartsSpadesDiamonds[2].push(ray[i]);
			count[2]++;
	
		}
		else if (ray[i]>39&&ray[i]<=52){
			
			clubsHeartsSpadesDiamonds[3].push(ray[i]);
			count[3]++;
			
		}
		else console.log("couldn't catch  " + ray[i]);
	}
	
	let payout = count.indexOf(Math.max(...count));
	//console.log(count[0]);
	//console.log(Math.max(...count));
	//console.log("payout array:" + clubsHeartsSpadesDiamonds[payout]);
	if(count[payout]>=5) { //there's a flush
	
			let straightFlush = straightFinder(clubsHeartsSpadesDiamonds[payout]);//remember these are raw inputs
			if(straightFlush){
				
				return straightFlush * 2; //should be +7000 since straight = 3500
				//aces are still low in a straight flush, so regular straightFinder should work
				
			}
			else {
				
				while(clubsHeartsSpadesDiamonds[payout].length>5){
					
					clubsHeartsSpadesDiamonds[payout].splice(clubsHeartsSpadesDiamonds[payout].indexOf(Math.min(clubsHeartsSpadesDiamonds[payout])), 1);
				}
				return 4000 + (()=>{
					
					let payload = 0;
					for(let i in clubsHeartsSpadesDiamonds[payout]){
						payload += kickerCalculator(clubsHeartsSpadesDiamonds[payout][i]);
					}
					
					return payload;
					
					})()
				
			}
		
	}
	else return false;
}

//returns the highest possible straight from given array
function straightFinder(ray) {
	
	let array = [...ray];
	//populate array with normalized input
	for(let i = 0; i<array.length; i++){

		
		array[i] = thirteen(array[i]);

		if(array[i]==13){array[array.length] = 0;}//ace is both low and high
		
		
	}
//console.log("debug: array =" + array);
	
	let highestToLowest = [];
//console.log("debug: mathmax array = " + array.splice(array.indexOf(Math.max(...array)),1));
	
	highestToLowest.push(array.splice(array.indexOf(Math.max(...array)),1));
//console.log(highestToLowest[0]);
	while(array.length>0&&highestToLowest.length<5){
		
		highestToLowest.push(array.splice(array.indexOf(Math.max(...array)),1));

		//console.log(highestToLowest[1]);
		
		
		if(highestToLowest[highestToLowest.length-1] != (highestToLowest[highestToLowest.length - 2] -1)){
//console.log("debug true" + Number(highestToLowest[highestToLowest.length-1] + 1 ) + "" + highestToLowest[highestToLowest.length - 2]);
			
			if(highestToLowest[highestToLowest.length-1] == highestToLowest[highestToLowest.length - 2]){ //it's because of a repeat
				
				highestToLowest.pop();//deletes repeats instead of resetting array
			}
			
			else { 
				


					highestToLowest = [highestToLowest[highestToLowest.length-1]];//reset array
		
			}
		}
			
		
	}
//console.log("debug: highestToLowest = " + highestToLowest);
	if(highestToLowest.length==5){
//console.log("true");
		
		//return highestToLowest.reduce(((total,value)=>{total += kickerCalculator(value)}),0) + 3500; //gives nan for some reason
		let weightedPayload = 0;
	for (let i = 0; i<highestToLowest.length; i++){
		weightedPayload += kickerCalculator(highestToLowest[i]);
}
	return weightedPayload + 3500;

	}
	else return false;
		
		
	
	
	

	
	
	
}
//1. check for royal flush
//2. check for flush
//3. check for straight
// returns Ms + top card % 13

//4. check for pair/trip/quads

//returns Mp,Mt,Mq + top 3, 2, 1

//pairfinder

function pairFinder (ray) {
	
	let array = [...ray]; //we mutate this
	
	for (let i = 0; i<array.length;i++){
		
		for(let j = i +1; j<array.length; j++){
			
			if(thirteen(array[i]) == thirteen(array[j])){
				
				return ((()=>{
					
					for(j; j<array.length; j++){
						
						if(thirteen(array[i])==thirteen(array[j])){
							
							return ((()=>{for(j;j<array.length;j++){if(thirteen(array[i])==thirteen(array[j])){
								//only higher quads beat
								return thirteen(array[i]) + 6000 /*kickerCalculator(Math.max(array.filter((num)=>{thirteen(num)!=thirteen(array[i])})))*/;//quads
							}
								} return false;
								
					})() || thirteen(array[i]) + 3000) //trips
							
						}
					}
					return false;//no trips
					
					})() || thirteen(array[i]) + 2000)//will either return the number of the pair or false
			}
		}
	}
	return false;
}

//second step is to filter the remaining cards, then run pairFinder on them again, until no cards remain or it returns less than a pair.

function pairEvaluator (ray) {
	
	let scores = [];
	let array = [...ray];
	
	
	scores[0] = pairFinder(array) || 0;
	
	if(scores[0]>0){ //pairfinder returned a pair
		
		array = array.filter((num)=>{return thirteen(num)!=scores[0]%1000});
		
			scores[1] = pairFinder(array) || 0;
			if(scores[1]>0){
					array = array.filter(num=>thirteen(num)!=scores[1]%1000);
					scores[2] = pairFinder(array) || 0;
			}//there's only 3 possible pairs in any set of 7 cards, 2 = 3
	}
	else return false;
	
	let max = Math.max(...scores);
	
	if(max>6000) return max - max%1000 + kickerCalculator((max%1000)+13) + kickerCalculator(Math.max(array.filter((num)=>{return thirteen(num)!=thirteen(max-6000)})));//probably quads
	else if(max>3000){
		

		scores = scores.filter((num)=>{return num!=max});
		return ((Math.max(...scores)>0) ? max - max%1000 + kickerCalculator((max%1000)+13) + Math.max(...scores) - Math.max(...scores)%1000 + kickerCalculator((Math.max(...scores)%1000)+13) : max - max%1000 + kickerCalculator((max%1000)+13)+ (()=>{
			array = [...ray].filter((num)=>{return thirteen(num)!=max%1000});
			let bigTwo = 0;
			for(let i = 0; i<2; i++){
				bigTwo += kickerCalculator(Math.max(...array));
				array = array.filter(Math.max(...array));
			}
			return bigTwo;
			}))//creates a + 5000 hand with highest pair or adds the top 2 kickers
		
	}
	else if(max>2000){
		scores = scores.filter((num)=>{return num!=max});	
		return ((Math.max(...scores)>0) ? max - max%1000 + kickerCalculator((max%1000)+13) + kickerCalculator((Math.max(...scores)%1000)+13) + Math.max(...scores) - 1500 - Math.max(...scores)%1000: max -max%1000 + kickerCalculator((max%1000)+13) + (()=>{
			array = [...ray].filter((num)=>{return thirteen(num)!=max%1000});
				let bigThree = 0;
				for(let i = 0; i<3; i++){
					bigThree += kickerCalculator(Math.max(...array));
					array = array.filter(num => thirteen(num) != thirteen(Math.max(...array)));
					
				}
				return bigThree;
			}))//2p evaluates to 2500 + remainder or + 3 kickers
	
	}
	
	else return console.log("error no pair but still got here");
	
	
}
//needs a raw kicker
function kickerCalculator (kicker) {
//for math reasons, powers of 7 are enough to ensure top kicker wins over summed lower cards
	return ((thirteen(kicker))*Math.pow(7,thirteen(kicker)/3))/3000000;
	
	
	
	}
	//fixes 13%13 = 0 problem
function thirteen (number) {
	if (number == 0) return 0;

	if (number % 13 == 0 ) return 13;
	else return number%13;
	
	}





//5. return sum of top 5 cards

//this simple method loops twice to remove two lowest cards and returns the sum of the remaining card values


function highCard (input){

	let array = [...input];

{
/*
for(let i = array.length-1; i>0; i--){


if(array[i]<array[i-1]){

[array[i]][array[i-1]] = [array[i-1]][array[i]];
}

}

array.shift(); //removes the lowest*/
/*
while(array.length>5){
	let minIndex = array.indexOf(Math.min(...array));
	
	if(array[0]!=array[minIndex]){
		//swap
		[array[0]][array[minIndex]] = [array[minIndex]][array[0]];
	}
	else array.shift();
	
	
}*/ 

}
	array = array.map(val=>thirteen(val)).sort();
	array.shift(); array.shift();




//scope for j
	{let j = 0;
		let summer = (array) => {

			for(let i = 0; i<array.length;i++){
			
				j += kickerCalculator(array[i]); 
			}
			return j;
		}
			return summer(array);

		}
	}

//all the work we did above lets us easily compare by hand value
//every function always returns the highest possible hand by that method
export function handEvaluator (array){
	
	let hand = [];
	hand[hand.length] = flushFinder(array)||0;
	hand[hand.length] = straightFinder(array)||0;
	hand[hand.length] = pairEvaluator(array)||0;
	hand[hand.length] = highCard(array)||0;
	
	return Math.max(...hand);
	
	
}



//console.log("Kicker finds: " + kickerCalculator(6));
//const thisarray = [36,5,10,51,19,22,23];
//console.log("Highcard = " + highCard(thisarray));
//console.log("handevaluator: " + handEvaluator(thisarray)); //no longer throwing errors
//console.log(kickerCalculator(thisarray)); //this needs a single int input...
//console.log(pairFinder(thisarray));
//console.log(flushFinder(thisarray));//basically works
//console.log(straightFinder(thisarray)); //fixed

