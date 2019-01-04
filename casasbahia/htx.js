function notifyStart() {
    Notification.requestPermission(function(perm) {
        console.log(perm);
    });
    if (window.Notification) {
        Notification.requestPermission(function(status) {
            var n = new Notification('TESTE INICIADO', {
                icon: '../casasbahia/assets/live.png',
                body: "AGUARDE..."
            });
        });
    } else {
        alert('Your browser doesn\'t support notifications.');
    }
}

function notifyAp() {
    Notification.requestPermission(function(perm) {
        console.log(perm);
    });
    if (window.Notification) {
        Notification.requestPermission(function(status) {
            var n = new Notification('Algo de bom aconteceu!', {
                icon: '../casasbahia/assets/live.png',
                body: "+1 FOI APROVADA!"
            });
        });
    } else {
        alert('Your browser doesn\'t support notifications.');
    }
}

function notifyFinish(aprovadas, reprovadas, total) {
    Notification.requestPermission(function(perm) {
        console.log(perm);
    });
    if (window.Notification) {
        Notification.requestPermission(function(status) {
            var n = new Notification('TESTE FINALIZADO!', {
                icon: '../casasbahia/assets/live.png',
                body: "Aprovadas: " + aprovadas + "\nReprovadas: " + reprovadas + "\nTotal: " + total + ""
            });
        });
    } else {
        alert('Your browser doesn\'t support notifications.');
    }
}

function soundLive() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../casasbahia/assets/live.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.load();
    audioElement.play();
}