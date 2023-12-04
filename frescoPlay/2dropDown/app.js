function runList() {
    // write your code here
    var text = document.getElementById("txtbox").value 
    var list = document.getElementById("list")
    var newOpt = document.createElement('option')
    newOpt.text = text;
    list.add(newOpt)
    text = ''
}