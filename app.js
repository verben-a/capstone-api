// $(function(){
	// are the same
//$(document).ready(function() {

$(document).ready(function() {

	/// write date range event here (it is a little separate)

    $('input[name="daterange"]').daterangepicker();

	// form code below is for when you actually submit the form (not selecting a date)
	
    $('form').submit(function(event) {
        event.preventDefault();

        var request = {
            origin_iata: $('#search').val(),
            one_way: true,
            direct: true,
            locale: 'EN'
            // period: 
        };

        $.getJSON("http://map.aviasales.ru/supported_directions.json", request).done(function(results) {
            console.log(results);
            $.each(results.directions, function(index, item) {
                console.log(item);

                $(".results").append(results.origin.iata + " " + item.name + "<br/>");
            });
        }).fail(function(data) {

        });


    });
});


// $('input[name="daterange"]').val().split('-')[0].replace(/\s/g, '').replace('/', '-').replace('/', '-')