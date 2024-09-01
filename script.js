var params = new URLSearchParams(window.location.search);
var id = params.get("id");

//komment

var xhr = new XMLHttpRequest();
xhr.open("get", "https://rickandmortyapi.com/api/character/" + id);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);
        console.log(json);

        document.getElementById("nev").innerHTML = json.name;
        document.getElementById("id").innerHTML = json.id;
        document.getElementById("status").innerHTML = json.status;
        document.getElementById("species").innerHTML = json.species;
        document.getElementById("gender").innerHTML = json.gender;

        var kep = document.getElementById("kep");
        kep.setAttribute("src", json.image);
        kep.setAttribute("alt", json.name);
        kep.setAttribute("title", json.name);
        kep.setAttribute("class", "w-100");
    }
};
xhr.send(null);