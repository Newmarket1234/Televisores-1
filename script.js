function my_function(element){
 var text=element.textContent;
alert("hola");
var length = 18;
var trimmedString = text.length > length ? 
                    text.substring(0, length - 3) + "..." : 
                    text;
element.textContent = trimmedString;
}