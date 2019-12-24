setInterval(function() { 
  loadData();
}, 5000);

function loadData() {
  $.ajax({
    type: "POST",
    url: "data.php",
    dataType: "json",
    processData: false,
    contentType: false,
    async: false,
    success: function(response) {
      for(var i = 1; i <= 10; i++) {
        var value = document.getElementById("div" + i).innerHTML;
        if (value == "") {
          value = response[i - 1].value;
        } else {
          value = parseInt(value);
          value += response[i - 1].value;
        }
        document.getElementById("div" + i).innerHTML = value;
      }
    },
    error: function(jqXHR, exception) {
        console.log(jqXHR);
        console.log(exception);
    }
  });
}
