
	var app = angular.module('mathApp', []);


	app.controller('WindowController', function() {
		this.text = "Old Text";

		this.change = function() {
			this.text = "New Text";
		};
	});