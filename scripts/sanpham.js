currentModal=null;
function showModal(event,productId) {
    event.preventDefault();
    if (currentModal) {
        currentModal.style.display = 'none';
      }
    document.getElementById(productId).style.display = 'block';
  }
  
  function closeModal(event,productId) {
    event.preventDefault();
    if (currentModal) {
        currentModal.style.display = 'none';
      }
    document.getElementById(productId).style.display = 'none';
  }
  
  