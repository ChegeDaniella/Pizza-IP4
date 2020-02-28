$(document).ready(function(){
    $(".slide").click(function(){
        $(".simim").slideToggle();
    });
    $("#submit").click(function(){
        alert($(".custom-select").val());
    });
});

function Pizza(size,crust,toppings,prizes){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.prizes = prizes;
}