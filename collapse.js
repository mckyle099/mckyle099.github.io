function getUrlParameter(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}

$(document).ready(function() {
    var tester = getUrlParameter("search_query");
  console.log(tester);
    var level_1 = getUrlParameter("level_1");
    var level_2 = getUrlParameter("level_2");
    var level_3 = getUrlParameter("level_3");
    var current = getUrlParameter("cur");
    $("p." + current).addClass("current");
    $('#' + level_1 + '.collapse').collapse('show');
    // Timeout is definitely not necessary, just for ---> a e s t h e t i c
    setTimeout(function() {
      $('#' + level_1 + ' #' + level_2).collapse('show');
    }, 200);
    setTimeout(function() {
      $('#' + level_1 + ' #' + level_2 + ' #' + level_3).collapse('show');
    }, 400);
});