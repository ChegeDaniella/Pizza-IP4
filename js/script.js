$(document).ready(function(){
    $(".slide").click(function(){
        $(".simim").slideToggle();
    });
    // $("#submit").click(function(){
    //     var size=($(".size").val());
    //     var crust=($(".crust").val());
    //     alert(size+" "+crust).val()
    // });
});

function Pizza(size,crust,toppings,prizes){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.prizes = prizes;
}
var size=["small","medium","large"]
var amount = 0;
var adder =0 ;
var valueTaker;
var selectedsize;

function smallsize(){
    valueTaker = document.getElementById("small").val();
    selectedsize = size[0];
    alert(selectedsize)
}
function mediumsize(){
    valueTaker = document.getElementById("medium").val();
    selectedsize = size[1];
    alert(selectedsize)
}
function largesize(){
    valueTaker = document.getElementById("large").val();
    selectedsize = size[2];
    alert(selectedsize)
}
