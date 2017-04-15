/**
 * Created by paddy on 2017/4/15.
 */
$(document).ready(function(){
    $.get('/api/worker',function (data, status) {
        var i ;
        for(i = 0; i < 3; i++){
            $.each(data,function (key,value) {

                if(key == "lat"){
                    var lat = value;
                }
                else if(key == "log"){
                    var log = value;
                }
                else{
                    document.getElementById(key).innerHTML= value;
                }
            });
        }

    })
});
