var times;
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
    
    for (var i = 0; i < times.length; i++) {
        times[i].display();
    }

    fill("blue");
    textSize(20);
    text('What is on your mind, Tae?', 320, 200);
}

function loadData(){

    times = [];

    for(var i = 0; i < table.getRowCount(); i++){
        var row = table.getRow(i);
        var x = row.get("x");
        var y = row.get("y");
        var x2 = row.get("x2");
        var y2 = row.get("y2");
        var n = row.get("name");

    times[i] = new Time(x, y, x2, y2, n);

    }
}
