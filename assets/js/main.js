
function openModal(imgElement) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
