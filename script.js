$(function() {
   
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
  });
  $("#userFontInput").on("click", function(e) {
    var inputFont = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont);
  });
  
  $("#userFontColorInput").on("click", function(e) {
    var inputColor = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputColor);
  });
  
  
  $("#confirmOrder").on("click", function(e) {
    event.preventDefault();
    
    var previewMsg = $("#userSignInput").val();
    previewMsg += '<a href="#" id="cancelPreview">X</a>'
    
    $('#previewScreen').append(previewMsg);
        
      $('#previewScreen').animate({ 'right': '0px' }, 250);
   
  }); //closing tag to preview/confirm click event
}); //closing tagto my docready funct

function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;

  if (fontUpgrade) {
    costPerTile = 6;
  } else {
    costPerTile = 5;
  }

  var subTotal = signLength * costPerTile;
  var shipping = 7;

  if (signLength != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }

  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}