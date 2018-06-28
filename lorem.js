//$(document).ready(() => {})
//create container for buttons
//var container = document.createElement("div")
//container
/*container.style.position = "absolute"
container.style.right = 0
container.style.top = 0
container.style.display = "inline-block"*/

//Buttons currently rely on 1st div in the HTML document for positioning

//Create button for text randomization
var button = document.createElement("button");
button.innerHTML = "Obfuscate Text";
/*button.style.position = "absolute"
button.style.display = "inline-block"
button.style.right = 0
button.style.top = 0 */

//Append 
var body = document.getElementsByTagName("div")[0];
body.appendChild(button);

//container.append(button)

//Add event handler
button.addEventListener ("click", function() {
    randomizeText();

    if (storage !== []){
        button2.style.display = "inline-block"
    //button2.style.visibility = 'visible';
    }
});


var button2 = document.createElement("button");
button2.innerHTML = "Undo";
button2.style.position = "absolute"
//button2.style.right = 0
//button2.style.top = 0

//Append 
var body2 = document.getElementsByTagName("div")[0];
body.appendChild(button2);

button2.style.display = 'none';
//button2.style.visibility = 'hidden';

//Add event handler
button2.addEventListener ("click", function() {
    unrandomizeText();
    button2.style.display = 'none';
    //button2.style.visibility = 'hidden';

});

//creates div to append message to, even if none exists
var hud = document.createElement("div")
hud.id = "dis"
hud.style.position = 'absolute'
//hud.style.right = 0
//hud.style.top = 0
document.body.appendChild(hud)

//css style - used for annotation element id  
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = "#annotation {position: fixed; top: 5px; right: 5px; padding: 3px; background-color: rgba(255, 255, 255, 0.63);font-family: sans-serif;font-size:  20px;z-index: 5000;color: #E3E3E3; background: #000;}"
document.getElementsByTagName('head')[0].appendChild(style);

var tag = ""
//select elements with specified tag
var element = document.getElementsByTagName(tag)
var message = document.getElementById("dis")

document.addEventListener("dblclick", function (evt) {
    storage =[]
    var elem
    if (evt.srcElement)  elem = evt.srcElement;
    else if (evt.target) elem = evt.target;

    tag = elem.tagName.toLowerCase();

    console.log(typeof tag)
    
    /*jQuery Version
    $('#dis').children('div').remove()
    message = $('#dis').append("<div id = 'annotation'>" +tag+ "</div>");    
    message.show();
    
    //message.delay(1500).fadeOut(500);
    */
    
    while (message.hasChildNodes()){
        message.removeChild(message.firstChild)}

    message.innerHTML += "<div id = 'annotation'>" +tag+ "</div>"
    
    console.log(tag)
    //select element type by double-clicked tag 
    element = document.getElementsByTagName(tag)
})


//lorem ipsum dictionary (all words)
const words = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate" ] 

//randomly generate number between 0 and length of dictionary
var rmin = 0
var rmax = words.length

function getRandomPosIntRange(min, max) {
        return Math.abs(Math.floor(Math.random() * (max - min)) + min);
    }

//console.log(getRandomPosIntRange(rmin, rmax));


/*
function wordCount(str) { 
    return str.split(" ").length;
  }

console.log(element.item(0).textContent)*/

//global variable to store previous text
var storage = []
var tagHist

function randomizeText (){
    //console.log(/^h/.test(tag))
    if (tag === "p" || /^h[1-6]/.test(tag)){
        console.log(element.item(0).textContent)
        var itemCount 
        for (itemCount = 0; itemCount < element.length; itemCount++){
            var loremipsum = ""
            var index
            //Store previous text in array
            storage[itemCount] = element.item(itemCount).innerHTML
            //strlength is equal to the HTMLCollection.item's text content's word count, assuming words are seperated by spaces
            var strlength = element.item(itemCount).textContent.split(" ").length
            //generate a lorem ipsum string with variable length 
            for (index = 0; index<strlength; index++){
                loremipsum = words[getRandomPosIntRange(rmin, rmax)] + " " + loremipsum 
            }
            //create new element of specified type, replace the previous element with new element (contains same word count)
            var newElement = document.createElement(tag)
            //tagHist = tag
            newElement.innerHTML = loremipsum.trim()
            element.item(itemCount).parentNode.replaceChild(newElement, element.item(itemCount))

            //return true
        }
    } else message.innerHTML +="<div id = 'annotation'>Select a Text Element</div>"
    /*jQuery version
    message = $('#dis').append("<div id = 'annotation'>" +"Select a Text Element"+ "</div>");    
    message.show();
    */
}

function unrandomizeText () {
    console.log(storage)
    for (let i = 0; i < storage.length; i++){
        let newElement = document.createElement(tag)
        newElement.innerHTML = storage[i]
        element.item(i).parentNode.replaceChild(newElement, element.item(i))
    }
    storage = []
}


//console.log(loremipsum)

/*
function nativeTreeWalker() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    var textNodes = [];

    while(walker.nextNode()) {
        textNodes.push(node.nodeValue);
        console.log(textNodes[0])
    }
}
*/
//console.log(textNodes[0])