// $(function(){
	// are the same
//$(document).ready(function() {

$(document).ready(function() {

	/// write date range event here (it is a little separate)

    // $('input[name="flightdate"]').daterangepicker();

	// form code below is for when you actually submit the form (not selecting a date)
	
    $('form').submit(function(event) {
        event.preventDefault();

        var request = {
            origin_iata: $('#search').val(),
            period: $('input[name="flightdate"]').val()+":season",
            direct: true,
            one_way: true,
            no_visa: true,
            schengen: true,
            need_visa: false,
            locale: 'EN'
        };


// origin_iata – IATA code for the point of departure. IATA code is shown by uppercase letters, for example MOW.
// period – Period of dates to search for.
// direct – Whether non-stop flights are available.
// one_way – “true” for one-way tickets, “false” for round trips.
// no_visa – Payment not made with a Visa card.
// schengen – Can the ticket be changed.
// need_visa – Visa required (or not).
// locale – Search language.
// min_trip_duration_in_days – Shortest trip duration (in days).
// max_trip_duration_in_days – Longest trip duration (in days).

        $.getJSON("http://map.aviasales.ru/prices.json", request).done(function(results) {
            // console.log(results);
            $.each(results, function(index, item) {
                console.log(item);

                $(".results").append(item.destination + " " + item.value + "<br/>");
            });
        }).fail(function(data) {

        });


    });
});


// $('input[name="daterange"]').val().split('-')[0].replace(/\s/g, '').replace('/', '-').replace('/', '-')