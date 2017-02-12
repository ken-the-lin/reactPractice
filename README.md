Do the following before meeting Before meeting:

   1.run the following commands:
   ```
	npm install -g create-react-app
	cd ~
	create-react-app reactPractice
	cd reactPractice
	npm start       (/*make sure you have the page show up*/)
	npm install --save react-bootstrap react-router firebase redux react-redux
  ```
  <br
   2. Understand reduce method of javascript. 
	method signature: 
	```
	myArray.reduce( function (previous, next) { return … }, initialValue); 
	```
	quick example:
	```
	var myArray = [1, 2, 3,  4];
	var sum = myArray.reduce(function(prev, next){ 
                              return prev + next 
                           }, 0);
	console.log(sum); //output: 9
  	//above method, reduce the array to its sum
	```
Array’s reduce method take two arguments, first is a function that performs logics on previous and next element in the array, the second argument is the initial value. The method takes the initial value and the element in the array, and then return a new value. Then, it uses that new value with the second element in the array and return another new value. And keeps going on.. At the end, after it does the same thing with the last element, it returns the new value to us.
