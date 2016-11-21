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
            period: $('input[name="flightdate"]').val() + ":season",
            direct: true,
            one_way: true,
            no_visa: true,
            schengen: true,
            need_visa: false,
            locale: 'EN'
        };


        $.getJSON("http://map.aviasales.ru/prices.json", request).done(function(results) {
            // console.log(results);
            console.log('here')
            var length = results.length;
            // $(".results").append("<thead><tr><th>Destination</th><th>Price (USD)</th></tr></thead>");
            $.each(results, function(index, item) {
                console.log(item);
                var price = function(data) {
                    console.log('data', data);
                    fx.rates = data.rates
                    // var rate = fx(1).from("EUR").to("USD")
                    var rate = fx.convert(item.value, {from: "RUB", to: "USD"});
                    console.log("£1 = " + rate.toFixed(4))
                    $(".results-body").append("<tr><td>" + item.destination + "</td><td>" + rate.toFixed(2) + "</td></tr>");
                    /// if the last Result has been reahed, show the data
                    if (length-1 == index){
                        // show the table
                        $('.results').DataTable();
                    }
                }
                $.getJSON("http://api.fixer.io/latest", price);
            });
            
            
        }).fail(function(data) {
            console.log('failed', data);
        });




    });
});






// $('input[name="daterange"]').val().split('-')[0].replace(/\s/g, '').replace('/', '-').replace('/', '-')






