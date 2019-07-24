


$("input[type='text']:eq(0)").keypress(function(event){
  if(event.which === 13){
    var textInput = $(this).val();
    $(".playersName:eq(0)").text(textInput);
    $(this).val("");
}
});
$("input[type='text']:eq(1)").keypress(function(event){
  if(event.which === 13){
    var textInput = $(this).val();
    $(".playersName:eq(1)").text(textInput);
    $(this).val("");
}
});
$("input[type='text']:eq(2)").keypress(function(event){
  if(event.which === 13){
    var textInput = $(this).val();
    $(".playersName:eq(2)").text(textInput);
    $(this).val("");
}
});
$("input[type='text']:eq(3)").keypress(function(event){
  if(event.which === 13){
    var textInput = $(this).val();
    $(".playersName:eq(3)").text(textInput);
    $(this).val("");
}
});

