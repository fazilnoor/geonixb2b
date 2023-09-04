function launch_toast(value) {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    if (value == 'success') {
        document.getElementById('desc').innerHTML = 'query have been send successfully';
        document.getElementById('img').style = 'background-color: rgb(17 149 20);';
        document.getElementById('desc').style = 'background-color: green;';
    }
}