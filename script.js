function imgclick() {
    let url = this.src;
    let id = this.id;

    if (id == 'large') {
        document.getElementById('img_selected').style.transform = 'scaleX(1.5)';
    } else if (id == 'courte') {
        document.getElementById('img_selected').style.transform = 'scaleY(0.5)';
    } else {
        document.getElementById('img_selected').style.transform = 'scaleX(1)';
    }

    document.getElementById('rxph').style.opacity = '0';
    document.getElementById('zenithtrox').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('rxph').style.position = 'absolute';
        document.getElementById('rxph').style.top = '-2000px';
        document.getElementById('zenithtrox').style.position = 'absolute';
        document.getElementById('zenithtrox').style.top = '-2000px';

        document.getElementById('img_selected').style.opacity = '0';
        document.getElementById('img_selected').style.visibility = 'visible';
        document.getElementById('img_selected').style.position = 'relative';

        setTimeout(() => {
            document.getElementById('img_selected').style.opacity = '1';
            document.getElementById('img_selected').src = url;
        }, 100);
        
        document.getElementById('reset').style.display = 'block';
    }, 200);
}

function resetimg() {
    document.getElementById('rxph').style.position = 'relative';
    document.getElementById('rxph').style.top = '0';
    document.getElementById('zenithtrox').style.position = 'relative';
    document.getElementById('zenithtrox').style.top = '0';
    document.getElementById('rxph').style.opacity = '1';
    document.getElementById('zenithtrox').style.opacity = '1';

    document.getElementById('img_selected').style.visibility = 'hidden';
    document.getElementById('img_selected').style.opacity = '0';
    document.getElementById('img_selected').style.position = 'absolute';

    document.getElementById('reset').style.display = 'none';
}

// chatgpt full
function zoom() {
    let element = document.getElementById('img_selected');
    let imageUrl = element.src;

    // Afficher l'image avec un effet de zoom
    let zoomContainer = document.createElement('div');
    zoomContainer.style.position = 'fixed';
    zoomContainer.style.top = '0';
    zoomContainer.style.left = '0';
    zoomContainer.style.width = '100%';
    zoomContainer.style.height = '100%';
    zoomContainer.style.background = `rgba(0, 0, 0, 0.8) url('${imageUrl}') no-repeat center`;
    zoomContainer.style.backgroundSize = 'contain';
    zoomContainer.style.zIndex = '1000';
    zoomContainer.style.cursor = 'zoom-out';
    
    // Supprime le zoom au clic
    zoomContainer.addEventListener('click', () => {
        document.body.removeChild(zoomContainer);
    });

    document.body.appendChild(zoomContainer);
}
