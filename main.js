let yourName=prompt("what's Your Name?");
if(yourName==null||yourName==""){
    document.getElementById("title").innerHTML='Unknown';
}
else{
    document.getElementById("title").innerHTML=yourName;
}

let duration=1000;
let blocksContainer=document.querySelector(".blocks");
let blocks=Array.from(blocksContainer.children);
 


function interm(block, index){
    block.addEventListener('click',function(){
        block.classList.add('is-flipped');
        // flipped block is an argument                    this is the result of the function
        let allFlippedBlocks=blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
        if(allFlippedBlocks.length==2){
            stopClicking();
            checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
        }
})
}
blocks.forEach(interm);

function stopClicking(){
    blocksContainer.classList.add('no-clicking');
    setTimeout(()=>{
        blocksContainer.classList.remove('no-clicking');
    },duration)
}

function checkMatchedBlocks(firstBlock,secondBlock){
    if(firstBlock.dataset.technology===secondBlock.dataset.technology){
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        let allMatchedBlocks=blocks.filter(flippedBlock=>flippedBlock.classList.contains('has-match'));
        
        if(allMatchedBlocks.length==16){
            setTimeout(() => {alert("You won!")
            },duration);
}
    }

    else{
        setTimeout(()=>{
            let triesCountElem=document.getElementById("triesCount");
            triesCountElem.innerHTML=parseInt(triesCountElem.innerHTML)+1;

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
    
        }, duration);
        
}
function shuffle(array){
    let current=array.length,temp,random;
    while(current>0){
        random=Math.random(random*current);
        current--;
        
    }

}
}