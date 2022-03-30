//jshint esversion:6

exports.getDate = function(){
    today = new Date();
    let options = {
    day: "numeric",
    weekday: "long",
    month: "long",
}
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function(){
    today = new Date();
    let options = {
    weekday: "long",
}
    return today.toLocaleDateString("en-US", options);
}; 








