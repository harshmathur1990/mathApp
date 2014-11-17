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
		this.generateNum();
		if (type == 1) {
			this.result = this.num1 + this.num2;
			while (this.result > 9999999) {
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
			while (this.result > 9999999) {
				this.generateNum();
				this.result = this.num1 * this.num2;
			}
			this.operator = 'X';
		} else {
			this.result = this.num1 / this.num2;
			this.operator = '/';
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
		a = Math.floor(Math.random() * ((max | 100000) - (min | 1))) + 1;
		b = Math.floor(Math.random() * ((max | 100000) - (min | 1))) + 1;
		this.num1 = a > b ? a : b;
		this.num2 = a < b ? a : b;
		console.log("A : " + this.num1);
		console.log("B : " + this.num2);
	}
	
	this.checkAnswer = function() {
		this.userAns = 0;
		i = 6;
		while (i>=0) {
			console.log("Given Digit : " + this.userin[i]);
			this.userAns = (this.userin[i])?(this.userAns * 10 + parseInt(this.userin[i])):this.userAns;
			i--;
			console.log("Answer Build Yet : " + this.userAns);
		}
		console.log("Given Answer : " + this.userAns);
		if (this.userAns == this.result) {
			this.opStatus = "Correct Answer!";
		}
		else {
			this.opStatus = "Wrong Answer!";
		}
	};
});