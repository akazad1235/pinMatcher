function number(num){
    var  oldValue = document.getElementById('number-display').value
  var output = oldValue+num
  var ConvertNumber = parseInt(output)
  document.getElementById('number-display').value = ConvertNumber


}
function pinNotMatch(data){
    var dontMatch = document.getElementById('pin-not-match')
        dontMatch.style.display = data
}
function pinMatch(data){
    var dontMatch = document.getElementById('pin-match')
        dontMatch.style.display = data
}


