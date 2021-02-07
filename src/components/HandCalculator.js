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

export {thirteen, handEvaluator};

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
function straightFinder(ray) {

	let array = [...ray].map(val=>thirteen(val)).sort((a,b)=>a-b);
	let containsZero = false;
	for(let i in array){
		if(array[i] === 13) {
			containsZero = true;
			break;
		}
	} 
	if(containsZero) array.unshift(0);
	console.log(array);
	let straight = [array[0]];

	for(let i in array){

		//if it is not a duplicate
		if(array[i]!==straight[straight.length-1]) {
			//if it comes after the last
			if(array[i]===straight[straight.length-1]+1){
				straight[straight.length] = array[i];
			}
			else if(array.length-i+1<5) break; //not enough remain
			else if(straight.length<5) straight = [array[i]];//reset the straight
		}

	}

	console.log(straight);

	return (straight.length>=5) ? 3500 + highCard(straight) : false;






}
//returns the highest possible straight from given array
function oldStraightFinder(ray) {
	
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

function newPairFinder (ray) {

	let array = ray.map(val => thirteen(val)).sort().reverse();
	let count = 0;
	let max = 0;
	for(let i = 0; i<array.length; i++){

		if(i<array.length) {

			if(array[i]===array[i+1]){
				count++;
				max = array[i];
			} else if (count>0) {
				i = array.length;
			}

		}

	}


	console.log(count);


	switch(count) {

		case 1: 
			return max + 2000;
		case 2: 
			return max + 3000;
		case 3: 
			return max + 6000;
		default:
			return false;

	}

	console.log(array + "is false??");

	return false;


	
/*
	for(let i = array.length-1; i>0; i--){
		if(array[i]===array[i-1]){
			count++;

		} else if(count>0){

			switch(count) {

				case 1:
					return array[i]+2000;
				case 2:
					return array[i]+3000;
				case 3:
					return array[i]+6000;
				default: return false;
			}

		} else console.log(array[i] + " != " + array[i-1])
		
	}*/

	
	//pairevaluator is expecting an unordered list of pairs
	//we can just greedily return the first found pair


}
/*
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
								return thirteen(array[i]) + 6000 //kickerCalculator(Math.max(array.filter((num)=>{thirteen(num)!=thirteen(array[i])})));//quads
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
}*/

//second step is to filter the remaining cards, then run pairFinder on them again, until no cards remain or it returns less than a pair.

function pairEvaluator (ray) {
	
	let scores = [];
	let array = [...ray];
	
	
	scores[0] = newPairFinder(array) || 0;
	
	if(scores[0]>0){ //pairfinder returned a pair
			//console.log(array);
		array = array.filter(num=>thirteen(num)!=scores[0]%1000);
			//console.log(array);
			scores[1] = newPairFinder(array) || 0;

			if(scores[1]>0){
					array = array.filter(num=>thirteen(num)!=scores[1]%1000);
					scores[2] = newPairFinder(array) || 0;
			}//there's only 3 possible pairs in any set of 7 cards, 2 = 3
	}
	else return false;
	
	let max = Math.max(...scores);
	
	if(max>6000) {
		console.log("over 6k");
		return max - max%1000 + kickerCalculator((max%1000)+13) + kickerCalculator(Math.max(...ray.filter(val=>thirteen(val!=thirteen(max%1000))).map(val=>thirteen(val))));//probably quads
		//return max - max%1000 + kickerCalculator((max%1000)+13) + kickerCalculator(Math.max(array.filter((num)=>{return thirteen(num)!=thirteen(max%6000)})));
	}
	else if(max>3000){
		
		console.log(scores);
		scores = scores.filter(num=>num!=max);
		return ((Math.max(...scores)>0) ? 
			
			max - max%1000 + kickerCalculator((max%1000)+13) * 3 
			+ Math.max(...scores) - Math.max(...scores)%1000 + kickerCalculator((Math.max(...scores)%1000)+13) * 2
			+ ((Math.max(...scores)>=3000) ? -1000 : 0)
			: max - max%1000 + kickerCalculator((max%1000)+13)+ (()=>{
				array = [...ray].filter((num)=>{return thirteen(num)!=max%1000}).map(val=>thirteen(val));
				let bigTwo = 0;
				for(let i = 0; i<2; i++){
					bigTwo += kickerCalculator(Math.max(...array));
					array = array.filter(val=>val!=Math.max(...array));
				}
				return bigTwo;
			})())//creates a + 5000 hand with highest pair or adds the top 2 kickers
		
	}
	else if(max>2000){
		scores = scores.filter((num)=>{return num!=max});	
		let secondPair = Math.max(...scores) | 0;
		return ((secondPair>0) ? 


			max - max%1000 + secondPair - secondPair%1000 - 1500 +
			(kickerCalculator(max%1000)) * 49*28 +
			(kickerCalculator(secondPair%1000)) *49*21 +
			
			kickerCalculator(
				Math.max(
					...[...ray].map(val=>thirteen(val)).filter(val=>val!=max%1000&&val!=secondPair%1000)
					)
				)
			

		/*
		max - max%1000 + kickerCalculator((max%1000)+13) * 2 + kickerCalculator((Math.max(...scores)%1000)+13) * 2  + Math.max(...scores) - 1500 - Math.max(...scores)%1000
		+ kickerCalculator(Math.max(
			...ray.map(val=>thirteen(val)).filter(val=>val!=max%1000 && val!=Math.max(...scores)%1000)
			
			//.filter(val=>val!=max%1000 && val!=Math.max(...scores)%1000)
		))*/
		: max - max%1000 + max%1000*7 +  highCard([max%1000, max%1000, ...resizer([...ray].map(val=>thirteen(val)).filter(val=>val!=max%1000), 3)])//fix this now
			
		
		)//2p evaluates to 2500 + remainder or + 3 kickers
	
	}
	
	else {
		console.log("error no pair but still got here");
		return false}
	
	
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

	//posible future change: 
	// * add new default param, len = 5
	
	

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
	let array = [...input].map(val=>thirteen(val)).sort((a,b)=>a-b);
	while(array.length>5){
		array.shift();
	}

	return array.reduce((acc, val)=>acc+kickerCalculator(val));
}


//scope for j
	/*{let j = 0;
		let summer = (array) => {

			for(let i = 0; i<array.length;i++){
			
				j += kickerCalculator(array[i]); 
			}
			return j;
		}
			return summer(array);

		}
	}*/

//all the work we did above lets us easily compare by hand value
//every function always returns the highest possible hand by that method
function handEvaluator (array){
	
	let hand = [];
	hand[hand.length] = flushFinder(array)||0;
	hand[hand.length] = straightFinder(array)||0;
	hand[hand.length] = pairEvaluator(array)||0;
	hand[hand.length] = highCard(array)||0;
	//console.log(array);
	//console.log(Math.max(...hand));
	return Math.max(...hand);
	
	
}

function resizer (array, newLength) {
	let output = [...array].sort((a,b)=>a-b);

	while(output.length>newLength){
		output.shift();
	}

	return output;
}

/*
function fiveLowest (array) {
	let temp = [...array];
	while(temp.length>5){
		temp.shift();
	}
	return temp;
}*/

//console.log("Kicker finds: " + kickerCalculator(6));
const thisarray = [17,22,43,35,23,30,34];//console.log("Highcard = " + highCard(thisarray));
//second hand
console.log("handevaluator: " + handEvaluator(thisarray));
//console.log(straightFinder(thisarray));
//console.log(newStraightFinder(thisarray));
//console.log("highCard " + highCard(thisarray));
console.log("handevaluator: " + handEvaluator([1,24,43,35,23,30,34])); //no longer throwing errors
//console.log(straightFinder([9,42,35,11,3,33,21]));
console.log("pairevaluator: " + pairEvaluator(thisarray));
//console.log("pairevaluator: " + pairEvaluator([45,37,42,7,12,51,3]));
//console.log("highCard " + highCard([21,45,36,38,29,18,26]));	

console.log("winner is " + (handEvaluator(thisarray)>handEvaluator([1,24,43,35,23,30,34])));

//console.log(kickerCalculator(7));
//console.log(kickerCalculator(37));
//console.log((kickerCalculator(13)+kickerCalculator(5))-(kickerCalculator(13)+kickerCalculator(3)));
//console.log("raw kickers yield: ")
//console.log(thisarray.map(val=>thirteen(val)).sort());
//console.log(fiveLowest(thisarray.map(val=>thirteen(val)).sort()).reduce((acc,val)=>acc+kickerCalculator(val)));
//console.log(fiveLowest(thisarray.map(val=>thirteen(val)).sort()).map(val=>`${val} : ${kickerCalculator(val)}`));
//console.log([37,3,23,48,46,52,13].map(val=>thirteen(val)).sort());
//console.log(fiveLowest([37,3,23,48,46,52,13].map(val=>thirteen(val)).sort()).reduce((acc,val)=>acc+kickerCalculator(val)));
//console.log(fiveLowest([37,3,23,48,46,52,13].map(val=>thirteen(val)).sort()).map(val=>`${val} : ${kickerCalculator(val)}`));
//console.log(kickerCalculator(thisarray)); //this needs a single int input...

//console.log(pairFinder(thisarray));
//console.log(pairEvaluator(thisarray));
//console.log("newpairfainder" + newPairFinder(thisarray));
//console.log("newpairfainder" + newPairFinder([40,27,35,1]));
//console.log([40,27,35,1].map(a=>thirteen(a)));
//console.log("newpairfainder" + newPairFinder([40,27,35,1].map(a=>thirteen(a))));
//console.log(flushFinder(thisarray));//basically works
//console.log(straightFinder(thisarray)); //fixed

