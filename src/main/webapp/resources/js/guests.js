$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    var divParent=$("#guestList");
    divParent.empty();

    var guestList = $("<table>").append("<tr><th>First</th><th>Last</th></tr>");
    data.forEach(function (item) {
        guestList.append("<tr><td>"+item.first+"</td><td>"+item.last+"</td></tr>");
    });
    guestList.appendTo($("#guestList"));
    
}