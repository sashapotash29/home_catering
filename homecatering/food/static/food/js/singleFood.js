document.onreadystatechange = function() {

    function loadXMLDoc() {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
               if (xmlhttp.status == 200) {
                    // alert(xmlhttp.responseText);
                    var JSONresponse = JSON.parse(xmlhttp.responseText)["result"];
                    alert(JSONresponse);
                    // REVIEWS ADDED FROM BACKEND NEED TO CREATE ELEMENTS

               }
               else if (xmlhttp.status == 400) {
                  alert('There was an error 400');
               }
               else {
                   alert('something else other than 200 was returned');
               }
            }
    };

    var id = document.getElementById("colPicture").dataset["food"];
    console.log(id);
    xmlhttp.open("GET", "/food/reviews/"+id, true);
    xmlhttp.send();
    }

    loadXMLDoc()










    // var foo = document.getElementById('div')
    // foo = document.createElement('foo')
    // foo.innerHTML = '<a href="#" target="_self">Text of A 1.</a>'+
    //                 '<a href="#" onclick="return !!alert(this.innerHTML)">Text of <b>A 2</b>.</a> '+
    //                 '<hr size="1" />'
    // /*// Append 'foo' element to target element*/
    // ul.appendChild(foo);

    // /*// Add event*/
    // foo.firstChild.onclick = function() { return !!alert(this.target) }

    // // ul.appendChild(foo);
    // // while (foo.firstChild) {
    // //     /*// Also removes child nodes from 'foo'*/
    // //     targetElement.insertBefore(foo.firstChild, foo)
    // // }
    // // /*// Remove 'foo' element from target element*/
    // // targetElement.removeChild(foo)
};