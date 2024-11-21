function imgclick(){
    let url = this.src;
    let id = this.id;
    if (id == 'large'){
        document.getElementById('img_selected').style.transform = 'scaleX(1.5)';
    }else if (id == 'courte'){
        document.getElementById('img_selected').style.transform = 'scaleY(0.5)';
    }else{
        document.getElementById('img_selected').style.transform = 'scaleX(1)';
    }
    document.getElementById('rxph').style.display = 'none';
    document.getElementById('zenithtrox').style.display = 'none';
    document.getElementById('img_selected').style.display = 'block';
    document.getElementById('img_selected').src = url;
}
function resetimg(){
    document.getElementById('rxph').style.display = 'block';
    document.getElementById('zenithtrox').style.display = 'block';
    document.getElementById('img_selected').style.display = 'none';
}