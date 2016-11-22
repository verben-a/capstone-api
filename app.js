
$(document).ready(function() {

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
           
            var length = results.length;
            $.each(results, function(index, item) {
                
                var price = function(data) {
                    fx.rates = data.rates
                    // conversion from("RUB") to("USD")
                    var rate = fx.convert(item.value, {from: "RUB", to: "USD"});
                    $(".results-body").append("<tr><td>" + item.destination + "</td><td>" + rate.toFixed(2) + "</td></tr>");
    
                    if (length-1 == index){
                        // show the table
                        $('.results').DataTable();
                    }
                }
                $.getJSON("http://api.fixer.io/latest", price);
            });
        }).fail(function(data) {
        });

    });
});

















