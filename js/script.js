$(document).ready(function(){
    $(".slide").click(function(){
        $(".simim").slideToggle();
    });
    $("#submit").click(function(){
        var size=($(".size").val());
        var crust=($(".crust").val());
        alert(size+" "+crust).val()
    });
});

function Pizza(size,crust,toppings,prizes){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.prizes = prizes;
}