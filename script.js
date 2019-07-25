

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var textInput = $(this).val();
    let index = $(this).index()-2;
    $(`.playersName:eq(${index})`).text(textInput);
    $(this).val("");
  }
});



for(let i = 1; i<=4; i++){
    $(`.player${i} input`).on('focusin', function(){
      console.log("Saving value " + $(this).val());
      $(this).data('val', $(this).val());
  });
    
    $(`.player${i} input`).on("change", function(){
     var prev = $(this).data('val');
     var current = $(this).val();
    let sumPlayer = $(`.playerResult${i}`);
      console.log(Number(sumPlayer.text()), prev, current);
     let total = Number(sumPlayer.text()) + Number(current);
      if(prev){
        total -= Number(prev);
      }
    sumPlayer.text(total);
  
  })
  }


  $('.box').on("click", function(){
    $(this).toggleClass("boxRed");
  })
  
























// $("input[type='text']:eq(1)").keypress(function(event){
//   if(event.which === 13){
//     var textInput = $(this).val();
//     $(".playersName:eq(1)").text(textInput);
//     $(this).val("");
// }
// });
// $("input[type='text']:eq(2)").keypress(function(event){
//   if(event.which === 13){
//     var textInput = $(this).val();
//     $(".playersName:eq(2)").text(textInput);
//     $(this).val("");
// }
// });
// $("input[type='text']:eq(3)").keypress(function(event){
//   if(event.which === 13){
//     var textInput = $(this).val();
//     $(".playersName:eq(3)").text(textInput);
//     $(this).val("");
// }
// });

