function preload(){
classifier=ml5.imageClassifier("DoodleNet")
}
function setup(){
    canvas=createCanvas(280,280)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas)
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
    if(error){
console.error(error)
    }
    else{
        console.log(results);
        var result = results[0].label; document.getElementById('nome').innerHTML = 'Nome: ' + result.replace('_', ' ');
         document.getElementById('precisão').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';
    }
}
function limpar() { background("white"); } function draw() { 
    //Defina strokeWeight como 13
     strokeWeight(13);
      //Defina a cor de stroke como preto
       stroke(0);
        //Se o moude for clicado, desenhe uma linha entre a posição antiga e atual do mouse 
        if (mouseIsPressed) { line(pmouseX, pmouseY, mouseX, mouseY); } }