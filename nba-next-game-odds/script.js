


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if (min === 0) {
        min = "00";
    }
    var sec = a.getSeconds();
    var time = month + ' ' + date + ' '  + hour % 12 + ':' + min;
    return time;
  }



function getGames() {
    var api_key = "689cf3e724784887b792675a76e34af7";
    var basketball = "basketball_nba";
    var region = "us";
    var mkt = "h2h";
    var url = "https://api.the-odds-api.com/v3/odds/?apiKey=" + api_key + "&sport=" + basketball + "&region=" + region 
               + "&mkt=" + mkt;

    $.getJSON(url, function(data) {
        var result = data.data;
        var versus = " VS ";
        var oddResults = result;
        for (var i = 0; i < result.length; i++) {
            var team1 = result[i].teams[0];
            var team2 = result[i].teams[1];
            var game = team1 + versus + team2;
            var gameOdds = oddResults[i].sites[2].odds.h2h;
            var timeDate = result[i].commence_time;
            var postTimeDate = timeConverter(timeDate);
            $("div.games").append(postTimeDate + " " + "<span>&#8226;</span>" + " ");
            $("div.games").append(game + " " + "<span>&#8226;</span>" + " " +  gameOdds);
            $("div.games").append("<br/>");
        }
        
        
    })
}

getGames();