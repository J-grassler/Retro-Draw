function makeGrid(){
for(let i = 0; i < 64; i++){
    let newDiv = $('<div class="cell">')
    $('.grid').append(newDiv)
}
}

makeGrid()

const PALETTE = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'black',
    'white',
]


function makePalette(){
for(let j = 0; j < PALETTE.length; j++){
    const nextColor = PALETTE[j]
    let newButton = $('<button>')
    $(newButton).css('background-color', nextColor)
    $('.palette').append(newButton)
}
//$('.palette button').first().addClass('active');
}

makePalette()

function onPaletteClick(){
    $('.palette button').first().removeClass('active');
    
        $('button.active').removeClass('active');
        $(this).addClass('active');
  
}
$('.palette button').click(onPaletteClick)

function onGridClick(){
    let back = $('button.active').css('background-color'); 
    let color = $(this).data('color');


    if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {;
        $(this).css('background-color', back)
        $(this).addClass('color');
      } else {
        $(this).css('background-color', '');
        $(this).removeClass('color');
      }
    };
$('.grid .cell').click(onGridClick);

function onClearClick(){
    $('.cell').css('background-color', '');   
}
$('.controls .clear').click(onClearClick);

function onFillAllClick(){
    let back = $('button.active').css('background-color');
            $('.cell').css('background-color', back)    
}
$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick(){
    const elements = $('.cell')
    let back = $('button.active').css('background-color');

    for (let index = 0; index < elements.length; index = index + 1) {;
      let nextElement = $( elements[index] );
   
      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {;
        $(nextElement).css('background-color', back);
      }
    }   
}
$('.controls .fill-empty').click(onFillEmptyClick);