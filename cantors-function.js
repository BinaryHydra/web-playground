document.addEventListener('DOMContentLoaded', draw(), false);

function draw(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var witdh = 2000;
    var points = [];
    var recursionDeep = 10;
    var pointCount = 3000;
    var split = 3;
    for (var i = 0 ; i < pointCount; i++) {
        points.push(i);
    }
    evenMiddle(points,0, pointCount, recursionDeep);

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(0,points[i]);
    for (var i = 1 ; i < pointCount; i++) {
        ctx.lineTo(i,points[i]);   
    }
    ctx.stroke();
}

function evenMiddle(points, a, b, recursionDeep){ 
    if (recursionDeep == 0)
        return;
    //console.log("recursion form " + a + " to " + b + " recusion dept: " + recursionDeep);
    //console.log("debug:" + Math.floor(a+(b-a)/3) + " " + Math.floor(a+(b-a)/3*2));
    recursionDeep-=1;
    var eStart = Math.floor(a+(b-a)/3);
    var eEnd = Math.floor(a+(b-a)/3*2);
    avg = points[Math.floor((a+b)/2)];
    console.log(avg);
    for (var fr = eStart;fr< eEnd; fr++){
        points[fr]=avg;
        
    }
    /*stepSize = avg/(b-a/2);
    console.log(stepSize);
    for (var fr= a; fr < eStart; fr++) {
        points[fr]=stepSize * fr;
        points[eEnd+fr]=stepSize * fr+ avg;
    }*/
    var y =  Math.random();
    console.log("Math.random():" + (y * 10000 ) + " " + a +  " " + eStart + " " + eEnd + " " + b);
    evenMiddle(points, eEnd, b,recursionDeep);
    console.log("Math.random():" + (y * 10000 ) + " " + a + " " + eStart + " " + eEnd + " "  +  b);
    evenMiddle(points, a, eStart, recursionDeep);

}




