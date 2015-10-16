(function(){	
	var app = angular.module('todo',[ ]);

	app.controller('TodoController', function(){
        this.newthing = "";
        this.todothings = JSON.parse(localStorage.getItem("storedthings"));

        this.addthing = function(todothing){

            var newthingObj = {content:this.newthing,finished:false};
            var storedthings = JSON.parse(localStorage.getItem("storedthings"));
            if(!storedthings){
                storedthings = [];
            }
            storedthings.push(newthingObj);
            localStorage.setItem("storedthings",JSON.stringify(storedthings));
            this.newthing = "";
            this.todothings = JSON.parse(localStorage.getItem("storedthings"));
        };


        this.clearthing = function(){
            localStorage.clear();
            this.todothings = JSON.parse(localStorage.getItem("storedthings"));
        };


        this.compelete = function(e){
            var location = this.todothings.indexOf(e);
            this.todothings.splice(location,1);
            localStorage.setItem("storedthings",JSON.stringify(this.todothings));
        };

        this.finish = function(e){
            var location = this.todothings.indexOf(e);
            if(this.todothings[location].finished == true)
                this.todothings[location].finished = false;
            else
                this.todothings[location].finished = true;
            localStorage.setItem("storedthings",JSON.stringify(this.todothings));
            // this.todothings = JSON.parse(localStorage.getItem("storedthings"));
        };

        this.isFi = function(e){
            if(e.finished == true)
                return 1;
            else
                return 0;
        };
	});

})();