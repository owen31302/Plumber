/**
 * Created by paddy on 2017/4/15.
 */

$(document).ready(function(){

    $.get('/api/work/:problem/:zipcode',function (data, status) {
        var i ;
        document.getElementById("waitss").innerHTML = Math.floor((Math.random()*50)+1)+"min";

        for(i = 0; i < 3; i++){
            $.each(data,function (key,value) {
                if(key == "cost"){
                    document.getElementById(key).innerHTML= value + "  USD";
                }
                else if(key == "time"){
                    document.getElementById(key).innerHTML= value + "  hr";
                }
            });
        }

    })
});
