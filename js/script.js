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
Pizza.prototype.cost = function(){
    var cost = 0;
    if (this.size ==="small"){
        cost = 500;
    } else if (this.size === "medium"){
        cost = 800;
    }else {
        cost= 1000;
    }
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
