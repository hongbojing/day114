angular
    .module('myApp', [])
    .controller('myController', myController);

function myController() {
    var vm = this;
    vm.nums = [1,2,3,4,5,6,7,8,9,10];
}