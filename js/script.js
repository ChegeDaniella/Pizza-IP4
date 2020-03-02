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
    
Pizza.prototype.cost2 = function() {
    var costNew = 0;
    if(this.crust === "thin-crusted"){
        costNew = 300;
    }else if(this.crust === "crispy"){
        costNew = 200;
    }else {
        costNew = 100
    }
}    
    $("input[name='toppings[]']:checked").each(function(){
        cost =parseInt(costNew) + parseInt(cost) + parseInt($(this.val()));
    });
    return cost;
}
$("#form").submit(function(event){
    event.preventDefault();
    var size = $("select.size").val();
    var toppings  =$("input[name='toppings[]']:checked").val();
    var crust = $("select.crust").val();
    var pizzaOrder= new Pizza(size,crust,toppings);
    var cost= pizzaOrder.cost();
    alert( size + toppings + crust + pizzaOrder)
    $("#info").html("Size"+" "+ size)
    $("#info").append("Toppings:"+" "+ toppings)
    $("#info").append("Total cost:"+" "+ cost)  
});
document.getElementById("button").onclick =function(){
    var name = ""
    var email = ""
    var comment = ""
    
    name=document.getElementById("name").value
    email=document.getElementById("email").value
    comment = document.getElementById("info").value
    if( name == ""){
      alert("please key in your name")
      return false
    }
    if( email == "" ){
      alert("please key in your mail")
      return false
    }
    if( comment == ""){
      alert("please key in comment")
    }
    else{
      alert( "thanks " +name+ " we have recieved your cooment")
    }
  
// document.getElementById("button").onclick=function(){
// var size=["small","medium","large"]
// var amount = 0;
// var adder =0 ;
// var valueTaker;
// var selectedsize;

// function smallsize(){
//     valueTaker = document.getElementById("small").val();
//     selectedsize = size[0];
//     alert(selectedsize)
// }
// function mediumsize(){
//     valueTaker = document.getElementById("medium").val();
//     selectedsize = size[1];    
// }
// function largesize(){
//     valueTaker = document.getElementById("large").val();
//     selectedsize = size[2];  
// }
// function size(){
//     if (valueTaker==500){
//         amount=adder+500;
//         alert("You have selected"+" "+selectedsize+" "+"pizza size and amount is"+" "+amount);
//         amount =0;
//         selectedsize=null;
//     }else if (valueTaker==800){
//         amount = adder + 800;
//         alert("You have selected"+" "+selectedsize+" "+"pizza size and amount is"+" "+amount);
//         amount =0;
//         selectedsize=null;
//     }else if (valueTaker==1000){
//         amount = adder + 1000;
//         alert("You have selected"+" "+selectedsize+" "+"pizza size and amount is"+" "+amount);
//         amount =0;
//         selectedsize=null;
//     }
// }};
