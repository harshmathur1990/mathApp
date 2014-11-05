
	var app = angular.module('mathApp', []);


	app.controller('WindowController', function() {
		this.text = "Old Text";
		this.main = false;
		
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
		}
	});