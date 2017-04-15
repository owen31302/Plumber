/**
 * Created by paddy on 2017/4/15.
 */

$(document).ready(function(){
    $.get('/api/work/:problem/:zipcode',function (data, status) {
        var i ;
        document.getElementById("waitss").innerHTML = Math.floor((Math.random()*50))+"min";

        for(i = 0; i < 4; i++){
            $.each(data,function (key,value) {

                document.getElementById(key).innerHTML= value;
            });
        }
    })
});
