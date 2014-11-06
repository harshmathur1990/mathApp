
	var app = angular.module('mathApp', []);


	app.controller('WindowController', function() {
		this.text = "Old Text";
		this.main = false;
		this.num1 = 0;
		this.num2 = 0;
		this.result = 0;
		this.num1arr = new Array(6);
		this.num2arr = new Array(6);

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
			this.main = true;
			this.generateNum();
			if (type == 1) {
				this.result = this.num1 + this.num2;
			}
			
			else if (type == 2) {
				this.result = this.num1 - this.num2;
			}
			
			else if (type == 3) {
				this.result = this.num1 * this.num2;
				while (this.result >= 1000000) {
					this.generateNum();
					this.result = this.num1 * this.num2;
				}
			}
			else {
				this.result = this.num1/ this.num2;
			}
			
			i = 0;
			while (this.num1 > 0) {
				this.num1arr[i] = this.num1%10;
				console.log("this.num1arr["+i+"] = "+ this.num1arr[i]);
				this.num1 = Math.floor(this.num1 / 10);
				console.log("this.num1 = " + this.num1);
				i++;
			}
			i = 0;
			while (this.num2 > 0) {
				this.num2arr[i] = this.num2%10;
				console.log("this.num2arr["+i+"] = " + this.num2arr[i]);
				this.num2 = Math.floor(this.num2 / 10);
				console.log("this.num2 = " + this.num2);
				i++;
			}
		};
		
		this.generateNum = function() {
			a = Math.floor(Math.random() * (100000 - 1)) + 1;
			b = Math.floor(Math.random() * (100000 - 1)) + 1;
			console.log ("A : " + a);
			console.log("B : " + b);
			this.num1 = a>b?a:b;
			this.num2 = a<b?a:b;
		}
	});