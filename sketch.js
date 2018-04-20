var friends;
let table;

function preload(){
    table = loadTable('data/data.csv', 'header'); // csv file takes a path, also load in the headers 
}                                  
 //csv works like excel, you can save an excel file as a csv 

function setup(){
    createCanvas(800,800);
    loadData();
}

function draw(){
    background(0);
    angleMode(RADIANS);

    for (var i = 0; i < friends.length; i++) {
        friends[i].display();
    }
}

function loadData(){

    friends = [];

    for(var i = 0; i < table.getRowCount(); i++){
        var row = table.getRow(i);
        var x = row.get("x");
        var x2 = row.get("x2");
        var y2 = row.get("y2");
        var n = row.get("name");

    friends[i] = new Friend(x, x2, y2, n);

    }
}
