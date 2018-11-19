// Use id 0 by default
var id = 0;
var baseUrl = "http://localhost:8080/MarkovChain";

$(document).ready(function() {
    // Try to get a new id for this session
    $.get(baseUrl + "/id", function(data) {
        id = data;
    });
    
    $("#insert").click(function() {
        var text = $("#text").val();
        var data = {
            id: id,
            str: text
        }
        $.post(baseUrl + "/Chain", data, function(data) {
           console.log(data); 
        });
    });

    $("#generate").click(function() {
        $.get(baseUrl + "/Chain?id=" + id + "&numWords=100", function(data) {
            $("#genText").val(data);
        })
    });
    
});