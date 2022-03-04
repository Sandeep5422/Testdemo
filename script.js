var request=new XMLHttpRequest();
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

console.log(`authors:${data.authors} isbnno:${data.isbnno} numberOfpages:${data.numberOfpages} publisher:${data.publisher}`);
}

