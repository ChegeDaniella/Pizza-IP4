$(document).ready(function(){
    $(".slide").click(function(){
        $(".simim").slideToggle();
    });
});

function Pizza(size,crust,toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    
}
Pizza.prototype.cost = function(){
    var cost = 0;
    if (this.size ==="small"){
        cost = 500;
    } else if (this.size === "medium"){
        cost = 800;
    }else {
        cost= 1000;
    }
    
Pizza.prototype.costNew = function() {
    var costNew = 0;
    if(this.crust === "thin-crusted"){
        costNew = 300;
    }else if(this.crust === "crispy"){
        costNew = 200;
    }else {
        costNew = 100
    }
   
    $("input[name='toppings[]']:checked").each(function(){
        cost =parseInt(costNew) + parseInt(cost) + parseInt($(this.val()));
    });
    return cost;
}
}
$("#form").submit(function(event){
    event.preventDefault();
    var size = $("select.size").val();
    var toppings  =$("input[name='toppings[]']:checked").val();
    var crust = $("select.crust").val();
    var pizzaOrder= new Pizza(size,crust,toppings);
    var cost= pizzaOrder.cost();
    $("#info").html("Size"+" "+ size)
    $("#info").append("Toppings:"+" "+ toppings)
    $("#info").append("Total cost:"+" "+ cost)  
});
document.getElementById("button").onclick =function(){
    var fname = ""
    var address = ""
    var number = ""
    
    fname=document.getElementById("fname").value
    address=document.getElementById("address").value
    number = document.getElementById("number").value
    if( fname == ""){
      alert("please key in your name")
      return false
    }
    if( address == "" ){
      alert("please key in your address")
      return false
    }
    if( number == ""){
      alert("please key in phone number")
    }
    else{
      alert( "Thanks " +name+ " "+"we have recieved your order")
    }
}
  


