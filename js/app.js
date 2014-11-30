var app = angular.module('mathApp', []);

app.controller('WindowController', function() {
	this.text = "Old Text";
	this.main = false;
	this.num1 = 0;
	this.num2 = 0;
	this.result = 0;
	this.num1arr = new Array(6);
	this.num2arr = new Array(6);
	this.operator = "";
	this.opStatus = "";
	this.length = 6;
	this.remainder = 0;

	this.change = function() {
		this.text = "New Text";
	};

	this.setMain = function() {
		this.main = false;
	};

	this.getMain = function() {
		return this.main;
	};

	this.getUMain = function() {
		return !this.main;
	};

	this.setType = function(type) {
		this.opStatus = "";
		this.main = true;
		this.userin = {};
		this.rem = {};
		this.generateNum();
		if (type == 1) {
			this.result = this.num1 + this.num2;
			while (this.result.length > 7) {
				this.generateNum();
				this.result = this.num1 + this.num2;
			}
			this.operator = '+';
		}

		else if (type == 2) {
			this.result = this.num1 - this.num2;
			this.operator = '-';
		}

		else if (type == 3) {
			this.result = this.num1 * this.num2;
			console.log("this.result : " + this.result + "result.length : "+this.result.length +"  this.num1 : " + this.num1 + "   this.num2 : "+ this.num2)
			while (this.result.length > 7) {
				console.log("this.result : " + this.result+"  this.num1 : " + this.num1 + "   this.num2 : "+ this.num2)
				this.generateNum();
				this.result = this.num1 * this.num2;
			}
			this.operator = 'X';
		} else {
			this.result = Math.floor(this.num1 / this.num2);
			this.remainder = this.num1 % this.num2;
			this.operator = '/';
			this.length = 5;
			this.userin[6] = "Q";
		}

		i = 0;
		while (this.num1 > 0) {
			this.num1arr[i] = this.num1 % 10;
			console.log("this.num1arr[" + i + "] = " + this.num1arr[i]);
			this.num1 = Math.floor(this.num1 / 10);
			console.log("this.num1 = " + this.num1);
			i++;
		}
		i = 0;
		while (this.num2 > 0) {
			this.num2arr[i] = this.num2 % 10;
			console.log("this.num2arr[" + i + "] = " + this.num2arr[i]);
			this.num2 = Math.floor(this.num2 / 10);
			console.log("this.num2 = " + this.num2);
			i++;
		}
	};

	this.generateNum = function(max, min) {
		a = Math.floor(Math.random() * ((max | 10000) - (min | 1))) + 1;
		b = Math.floor(Math.random() * ((max | 1000) - (min | 1))) + 1;
		this.num1 = a > b ? a : b;
		this.num2 = a < b ? a : b;
		console.log("A : " + this.num1);
		console.log("B : " + this.num2);
	}
	
	this.checkAnswer = function() {
		this.userAns = 0;
		this.userRem = 0;
		i = this.length;
		while (i>=0) {
			console.log("Given Digit for Quotient: " + this.userin[i] + "  for rem : " + this.rem[i]);
			this.userAns = (this.userin[i])?(this.userAns * 10 + parseInt(this.userin[i])):this.userAns;
			this.userRem = (this.rem[i])?(this.userRem * 10 + parseInt(this.rem[i])):this.userRem;
			i--;
			console.log("Answer Build Yet : " + this.userAns + "   Remainder Build Yet : " + this.userRem);
		}
		console.log("Given Answer : " + this.userAns + "   Remainder : " + this.userRem);
		if (this.userAns == this.result) {
			this.opStatus = "Correct Answer!";
			if (this.isDiv() && this.userRem != this.remainder) {
				this.opStatus = "Wrong Answer!";
			}
		}
		else {
			this.opStatus = "Wrong Answer!";
		}
	};
	
	this.isDiv = function() {
		return this.operator=='/';
	}
});