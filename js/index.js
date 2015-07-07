function nextItem(){
    var press = jQuery.Event("keypress");
    press.ctrlKey = false;
    press.which = 115;
    $(document).trigger(press);
 }

 function prevItem(){
    var press = jQuery.Event("keypress");
    press.ctrlKey = false;
    press.which = 122;
    $(document).trigger(press);
 }

$(document).ready(function () {

$(document).on('impress:stepactivate', function (event) {
  var target = $(event.target);
  var body = $(document.body);
  body.removeClass(
    'white-bg gray-bg red-bg orange-bg green-bg purple-bg blue-bg yellow-bg light-yellow-bg black-bg');
  if (target.hasClass('white'))
    body.addClass('white-bg');
  else if (target.hasClass('gray'))
    body.addClass('gray-bg');
  else if (target.hasClass('red'))
    body.addClass('red-bg');
  else if (target.hasClass('orange'))
    body.addClass('orange-bg');
  else if (target.hasClass('black'))
    body.addClass('black-bg');
  else if (target.hasClass('green'))
    body.addClass('green-bg');
  else if (target.hasClass('purple'))
    body.addClass('purple-bg');
  else if (target.hasClass('blue'))
    body.addClass('blue-bg');
  else if (target.hasClass('yellow'))
    body.addClass('yellow-bg');
  else if (target.hasClass('light-yellow'))
    body.addClass('light-yellow-bg');
});

for (var s in steps)
  steps[s]();

impress().init();
impressConsole().init(css="lib/css/impressConsole.css");
impressConsole().registerKeyEvent([115], nextItem, window);
impressConsole().registerKeyEvent([122], prevItem, window);
})
