/**
 * Created by owen on 4/3/17.
 */

$(document).ready(function(){

    $.get("/api/", function(data, status){
        var i;
        for(i = 0; i < data.length; i++){
            $("#myTable").find('tbody')
                .append($('<tr>')
                    .append($('<td>')
                        .append(
                            data[i].sid
                        )
                    )
                    .append($('<td>')
                        .append(
                            data[i].name
                        )
                    )
                    .append($('<td>')
                        .append(
                            (data[i].trip1?'<input type="checkbox" value=' + (i+1) + ' checked>':'<input type="checkbox" value=' + (i+1) + '>')
                        )
                    )
                );
        }
    })

    $("#b1").click(function(){
        var query = "/api/" + $("#id1").val() + "/" + $("#name").val();
        //console.log(query);
        var rowCount = $('#myTable tr').length +1;
        $.get( query , function(data, status){
            //console.log(data);
            //console.log(status);
            $("#myTable").find('tbody')
                .append($('<tr>')
                    .append($('<td>')
                        .append(
                            $("#id1").val()
                        )
                    )
                    .append($('<td>')
                        .append(
                            $("#name").val()
                        )
                    )
                    .append($('<td>')
                        .append(
                            '<input type="checkbox" value=' + rowCount + '>'
                        )
                    )
                );
        });
    });

    $("#b2").click(function(){
        $.post("/api/cnt", function(data, status){
            console.log(data);
            if(data.rows[0].count == 1){
                $("#cnt").html('There is ' + data.rows[0].count + ' student going.');
            }else{
                $("#cnt").html('There are ' + data.rows[0].count + ' students going.');
            }
        });
    });
});
$(document).on('change', '[type=checkbox]', function () {
    if(this.checked) {
        $.ajax({
            url: "/api/" + this.value + "/1",
            type: 'PUT',
            success: function(result) {
                // Do something with the result
                //console.log(result);
            }
        });
    }else{
        $.ajax({
            url: "/api/" + this.value + "/0",
            type: 'PUT',
            success: function(result) {
                // Do something with the result
                // console.log(result);
            }
        });
    }
});