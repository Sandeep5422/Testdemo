var request=new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    for (var i=0; i<data.length; i++){
        console.log(data[i].authorname);
    }
    }