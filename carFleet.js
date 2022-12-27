/*

There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

*/

var carFleet = function(target, position, speed) {
    let timeToTarget = []
    for (let i = 0; i < position.length; i++) {
        let time = (target-position[i])/speed[i] 
        timeToTarget.push([time, position[i]])
    }
    timeToTarget.sort((a,b) => a[1]-b[1])

    let fleets = 0
    while (timeToTarget.length > 0) {
        let top = timeToTarget.pop()
        while (timeToTarget.length > 0 && top[0] >= timeToTarget[timeToTarget.length-1][0]) timeToTarget.pop()
        fleets++
    }
    return fleets
};

// stack

var carFleet = function(target, position, speed) {
    let stack = [];
    let remainingTimes = [];
  
    for (let i = 0; i < position.length; i++) {
      const remainingDistance = target - position[i];
      const remainingTime = remainingDistance / speed[i];
      remainingTimes.push([remainingTime, position[i]]);
    }
  
    remainingTimes.sort((a, b) => a[1] - b[1]);
  
    for (let i = remainingTimes.length - 1; i >=0; i--) {
      if (stack.length && stack[stack.length - 1][0] >= remainingTimes[i][0]) {
        continue;
      }
      stack.push(remainingTimes[i])
    }
  
    return stack.length;
  };

  // monotonic stack
 
  var carFleet = function(target, position, speed) {

	//This question uses a concept of monotonic stack.a monotonic stack is a stack 
	//whose elements are monotonically increasing or descreasing.

	var n = position.length;
	var cars = [];
	for(var i = 0; i<n;i++)
	{
		cars.push([position[i], speed[i]]);
	}
	cars.sort((a,b)=>b[0]-a[0]);

	let stack=[]

	for(let i=0;i<cars.length;i++){
		let item=cars[i]
		let timeReq= (target-item[0])/item[1]  //time required by current car to reach target
		if(stack.length){
			let stackTop=stack[stack.length-1]
			let timeReqTop= (target-stackTop[0])/stackTop[1]  //time required by car on the top of the stack to reach the target

			//we will only add the current car to the stack if the time required by it 
			//to reach the target is greater that the last car(car on the top of the stack)

			//As the array is sorted in decending order of the positions,if a car
			//behind a successive car is slower than the successive car,then we already have 2 fleets as the car behind will never reach the target before the successive car.

			//So for the rest of the cars,we can just compare their time to reach the target with
			//the slower car which was behind the succesive car 

			if(timeReq>timeReqTop){
				stack.push(item)//adding this car to the stack as this takes longer than the
			}                   //car in the front to reach the target and will for sure form another fleet    
		}
		else{
			stack.push(item)
		}
	}
	return stack.length
};

