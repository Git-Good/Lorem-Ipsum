//$(document).ready(() => {})


//lorem ipsum dictionary (all words)
const words = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate" ] 

//randomly generate number between 0 and length of dictionary
var rmin = 0
var rmax = words.length

function getRandomPosIntRange(min, max) {
        return Math.abs(Math.floor(Math.random() * (max - min)) + min);
    }

//console.log(getRandomPosIntRange(rmin, rmax));

//select elements with specified tag
var element = document.getElementsByTagName("p")
/*
function wordCount(str) { 
    return str.split(" ").length;
  }

console.log(element.item(0).textContent)
*/
function randomizeText (){
    var itemCount
    for (itemCount = 0; itemCount < element.length; itemCount++){
        var loremipsum = ""
        var index = 0
        //strlength is equal to the HTMLCollection.item's text content's word count, assuming words are seperated by spaces
        var strlength = element.item(itemCount).textContent.split(" ").length
        //generate a lorem ipsum string with variable length 
        for (index; index<strlength; index++){
            loremipsum = words[getRandomPosIntRange(rmin, rmax)] + " " + loremipsum 
        }
        //create new element of specified type, replace the previous element with new element (contains same word count)
        var newElement = document.createElement('p')
        newElement.innerHTML = loremipsum
        element.item(itemCount).parentNode.replaceChild(newElement, element.item(itemCount))
    }
}

randomizeText();

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