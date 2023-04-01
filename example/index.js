document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById('modal-example').style.display = 'block';
});

document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('modal-example-close')) return;

    document.getElementById('modal-example').style.display = 'none';
});

document.getElementById("open-alert-notification").addEventListener("click", function(e) {
    var div = document.createElement('div');
    div.innerHTML = "<div id='alert-notification-example' class='alert alert-danger alert-notification alert-notification-bottom-right'>Alert Notification Example <span class='close' id='alert-notification-close'>x</span></div>";
    document.getElementById('alert-notification-element').appendChild(div);

    window.setTimeout(function () {
        document.getElementById('alert-notification-example').remove();
    }, 10000);
    document.getElementById("alert-notification-close").addEventListener("click", function() {
        document.getElementById('alert-notification-example').remove();
    });
});
