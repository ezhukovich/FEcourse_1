let modal = document.getElementById('modal-window');
let open = document.getElementById('open-modal-window');
let close = document.getElementById('close-modal-window');

open.onclick = function() {
    modal.style.display = 'block';
    open.style.display = 'none';
}

close.onclick = function() {
    modal.style.display = 'none';
    open.style.display = 'flex';
}