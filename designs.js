// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
     
    $('#sizePicker').submit(function(event){
      event.preventDefault();
      height = $('#inputHeight').val();
      width = $('#inputWidth').val();
      makeGrid(height, width);
    })
    
  function makeGrid(row, col) {
    $('tr').remove();
       for (var j = 1; j <= row; j++){
          $('#pixelCanvas').append('<tr id=table' + j + '></tr>');
            for (var k = 1; k <= col; k++){
               $('#table' + j).append('<td></td>');
             }
           
          };
$('td').click(function addcolor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')){
     $(this).removeAttr('style')
     } else { $(this).attr('style','background-color:' + color);
     }
   })
}
