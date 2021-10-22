(function(){
$.getJSON("https://api.github.com/gists/9bcfedae0653364aad9e43c7882433f2", function (result) {
    if(!result || !result.files || !result.files["data.json"]) return;
    result = JSON.parse(result.files["data.json"].content);
    
    $("#statss").text(numberWithCommas(result.s));
    $("#statsc").text(numberWithCommas(result.c));
    $("#statsu").text(numberWithCommas(result.u));
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

})();