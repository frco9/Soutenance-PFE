shuffle = function(o){ //v1.0
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var steps = {

slideNumber: function () {
  $('#impress').on('impress:stepactivate', function (event) {
    var step = event.target;
    var number = step.dataset["slideNumber"];
    if (typeof number == 'undefined') {
      $('.slide-number').addClass("hidden");
    } else {
      $('.slide-number').removeClass("hidden");
      $('.slide-number').text(number);
    }
  });
},


prezItemEnabler: function () {
  var stepID;
  $('#impress').on('impress:stepactivate', function (event) {
    stepID = event.target.id;
  });
  $(document).keypress(function(e) {
    if (typeof stepID !== 'undefined') {
      if(e.which == 115) {
        var l = $("#"+stepID+" .prezItem.hidden:first");
        l.removeClass("hidden");
        l.addClass("visible");
      } else if (e.which == 122) {
        var l = $("#"+stepID+" .prezItem.visible:last");
        l.removeClass("visible");
        l.addClass("hidden");
      }
    };
  });
  $('#impress').on('impress:stepleave', function (event) {
    var l = $("#"+event.target.id+" .prezItem.visible");
    l.removeClass("visible");
    l.addClass("hidden");
  });
},


imGrowth: function () {
  var interval, index, chart;
  $('#step-chart-imGrowth').on('impress:stepactivate', function () {
    var c = $('#step-chart-imGrowth canvas');
    var ctx = c.get(0).getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    index = 0;

    var options = {
      animationSteps: 60,
      legendTemplate : "<div class=\"row\"><div class=\"col-xs-3\"><ul class=\"legend-list\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul></div></div>"
    }
    chart = new Chart(ctx).Line(imGrowthInitData,options);
    chart.scale.xLabels = ["Sep-2011"];
    chart.update();
    var legend = chart.generateLegend();
    $("#step-chart-imGrowth .legend").html(legend);
    
    if (interval !== undefined)
      clearInterval(interval);

    interval = setInterval(function(){
      if ((index == imGrowthData.dataSMS.length) && chart.datasets[0].points.length == imGrowthData.dataSMS.length + 1) {
        clearInterval(interval);
        interval = undefined;
      } else {
        chart.addData([imGrowthData.dataSMS[index], imGrowthData.dataWhatsapp[index]], imGrowthData.labels[index]);
        index++;
      };
    }, 100);
  });
  $('#step-chart-imGrowth').on('impress:stepleave', function () {
    clearInterval(interval);
    chart.removeData();
    interval = undefined;
  });
},

injectCarouselForNotes: function () {
  $('#step-libon-numbers').on('impress:stepactivate', function () {
    if ($("#libon-carousel").length <= 0) {
      $("#libon-carousel-container").prepend('\
            <div id="libon-carousel" class="carousel slide center-block" data-ride="carousel" data-interval="2000">\
              <div class="carousel-inner" role="listbox">\
                <div class="item active">\
                  <img src="img/screenLibon1.png">\
                </div>\
                <div class="item">\
                  <img src="img/screenLibon2.jpeg">\
                </div>\
                <div class="item">\
                  <img src="img/screenLibon3.jpeg">\
                </div>\
              </div>\
            </div>\
        ');
      $('#libon-carousel').carousel({
        interval: 2000
      });
    }  
  });
  $('#step-libon-numbers').on('impress:stepleave', function () {
    $("#libon-carousel").remove();
  });

  
  $('#step-wittiz-numbers').on('impress:stepactivate', function () {
      if ($("#wittiz-carousel").length <= 0) {
        $("#wittiz-carousel-container").prepend('\
              <div id="wittiz-carousel" class="carousel slide center-block" data-ride="carousel" data-interval="2000">\
                <div class="carousel-inner" role="listbox">\
                  <div class="item active">\
                    <img src="img/wittiz_1.jpg">\
                  </div>\
                  <div class="item">\
                    <img src="img/wittiz_2.jpg">\
                  </div>\
                  <div class="item">\
                    <img src="img/wittiz_3.jpg">\
                  </div>\
                  <div class="item">\
                    <img src="img/wittiz_4.jpg">\
                  </div>\
                  <div class="item">\
                    <img src="img/wittiz_5.jpg">\
                  </div>\
                </div>\
              </div>\
          ');
        $('#wittiz-carousel').carousel({
          interval: 2000
        });
      };
  });
  $('#step-wittiz-numbers').on('impress:stepleave', function () {
    $("#wittiz-carousel").remove();
  });






},


playVideoNonVerbCom: function () {
  var doughnut;
  $('#step-non-verbal-com').on('impress:stepactivate', function () {
    var $video = $('#step-non-verbal-com video.bgvid');
    $video.get(0).play();
  });
},

imCompetitor: function () {
  var doughnut;
  $('#step-chart-multiple-actors').on('impress:stepactivate', function () {
    var c = $('#step-chart-multiple-actors canvas');
    var ctx = c.get(0).getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    index = 0;
    var options = {
      animateScale: true,
      legendTemplate : "<div class=\"row\"><div class=\"col-xs-3\"><% for (var i=0; i<Math.round(segments.length/2); i++){%><ul class=\"legend-list\"><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%>: <%=segments[i].value%>M<%}%></li></ul><%}%></div><div class=\"col-xs-3 col-xs-offset-6\"><% for (var i=Math.round(segments.length/2); i<segments.length; i++){%><ul class=\"legend-list\"><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%> <%=segments[i].label%>: <%=segments[i].value%>M<%}%></li></ul><%}%></div></div>"
    }
    doughnut = new Chart(ctx).Doughnut(imCompetitorData, options); 
    var legend = doughnut.generateLegend();
    $("#step-chart-multiple-actors .legend").html(legend);
  });
  $('#step-chart-multiple-actors').on('impress:stepleave', function () {
    doughnut.removeData();
    doughnut.clear();
  });
},

internMission: function () {
  $(document).keypress(function(e) {
    if((e.which == 115) && ($('#step-internship-mission').hasClass("active"))) {
      var l = $('#step-internship-mission .libon-app');
      var w = $('#step-internship-mission .wittiz-app');
      l.removeClass("libon-app col-xs-offset-1");
      l.addClass("libon-app-merged col-xs-offset-4");
      w.removeClass("wittiz-app col-xs-offset-2");
      w.addClass("wittiz-app-merged col-xs-offset-4");
    } else if ((e.which == 122) && ($('#step-internship-mission').hasClass("active"))) {
      var l = $('#step-internship-mission .libon-app-merged');
      var w = $('#step-internship-mission .wittiz-app-merged');
      l.removeClass("libon-app-merged col-xs-offset-4")
      l.addClass("libon-app col-xs-offset-1");
      w.removeClass("wittiz-app-merged col-xs-offset-4")
      w.addClass("wittiz-app col-xs-offset-2");
    }
  });
  $('#step-internship-mission').on('impress:stepleave', function () {
    var l = $('#step-internship-mission .libon-app-merged');
    var w = $('#step-internship-mission .wittiz-app-merged');
    l.removeClass("libon-app-merged col-xs-offset-4")
    l.addClass("libon-app col-xs-offset-1");

    w.removeClass("wittiz-app-merged col-xs-offset-4")
    w.addClass("wittiz-app col-xs-offset-2");
  });
},


emoticonWall: function () {
  var doughnut;
  $('#step-with-emoticon').on('impress:stepactivate', function () {
    var lowEnd = 1;
    var highEnd = $('.grid-item').length-1;
    var arr = [];
    while(lowEnd <= highEnd){
       arr.push(lowEnd++);
    }
    var randorder = shuffle(arr);
    var display = function(i, arr){ //v1.0
      if (i < arr.length) {
        $('.grid-item').eq(arr[i]).transition({
          animation : 'scale',
          interval  : 100,
          duration: 100,
          onShow: function() {
            display(i+1, arr);
          } 
        });
      }
      return;
    };
    display(0, randorder.slice(0, Math.round(randorder.length/4)));
    display(0, randorder.slice(Math.round(randorder.length/4), 2*Math.round(randorder.length/4)));
    display(0, randorder.slice(2*Math.round(randorder.length/4), 3*Math.round(randorder.length/4)));
    display(0, randorder.slice(3*Math.round(randorder.length/4), randorder.length));
  });
  $('#step-with-emoticon').on('impress:stepleave', function () {
    $('.grid-item.visible').addClass("hidden");
    $('.grid-item.visible').removeClass("visible");
  });
},


textInputDisplay: function () {
  var timer, fullText, currentOffset, sub_string;
  $('#step-text-input').on('impress:stepactivate', function () {
    function Speak(text) {
        fullText = text;
        currentOffset = 0;
        timer = setInterval(onTick, 295);
    }
    function onTick() {
        currentOffset++;
        if (currentOffset > fullText.length) {
            complete();
            return;
        }
        if (fullText.substring(currentOffset-1, currentOffset) === "1") {
          sub_string = ":)";
          fullText = fullText.replace("1", sub_string);
          currentOffset += sub_string.length;
        } else if (fullText.substring(currentOffset-1, currentOffset) === "2") {
          sub_string = "\n&lt;wittiz-addition&gt;{thumbnailUrl::http://p.com/img.jpg videoUrl::http://p.com/vid.mp4 publicUrl::http://p.com/public label::'My Label'}\n&lt;wittiz-addition&gt;";
          fullText = fullText.replace("2", sub_string);
          currentOffset += sub_string.length;
        };
        var text = fullText.substring(0, currentOffset);
        $("#step-text-input .message").html(text);
        Prism.highlightElement($("#step-text-input .message")[0]);
    }
    function complete() {
        $("#step-text-input .message").html(fullText);
        Prism.highlightElement($("#step-text-input .message")[0]);
        fullText = "Hello, 1, toujours malade? 2";
        clearInterval(timer);
        timer = null;
        currentOffset = 0;
        setTimeout(reboot, 5200)
    }
    function reboot() {
      timer = setInterval(onTick, 300);
    }

    d = new Date();
    $('#step-text-input .gif-image').prepend('<img class="center-block" src="img/input_text.gif?'+d.getTime()+'">');
    Speak("Hello, 1, toujours malade?2");
  });
  $('#step-text-input').on('impress:stepleave', function () {
    $('#step-text-input .gif-image img').remove();
    clearInterval(timer);
    timer = null;
  });
},


};
