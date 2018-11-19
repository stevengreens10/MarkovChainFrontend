var id = 0;

$(document).ready(function() {
    $.get("http://localhost:8080/MarkovChain/id", function(data) {
        id = data;
    });
    
    $("#insert").click(function() {
        var text = $("#text").val();
        var data = {
            id: id,
            str: text
        }
        $.post("http://localhost:8080/MarkovChain/Chain", data, function(data) {
           console.log(data); 
        });
    });

    $("#generate").click(function() {
        $.get("http://localhost:8080/MarkovChain/Chain?id=" + id + "&numWords=100", function(data) {
            $("#genText").val(data);
        })
    });
    
});