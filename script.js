document.addEventListener('DOMContentLoaded', function() {
    const picImages = document.querySelectorAll('.pic'); 
    
    picImages.forEach(function(picImage) {
        picImage.addEventListener('click', function() {
            picImages.forEach(function(img) {
                if (img !== picImage) {
                    img.style.filter = 'blur(5px)';
                    img.style.transition = 'filter 0.3s ease-out';
                }
            });

            const fullscreenContainer = document.createElement('div');
            fullscreenContainer.classList.add('fullscreen-container');

            const fullscreenImage = document.createElement('img');
            fullscreenImage.src = picImage.src; 
            fullscreenImage.classList.add('fullscreen-image');

            fullscreenContainer.appendChild(fullscreenImage);

            document.body.appendChild(fullscreenContainer);

            fullscreenImage.style.position = 'fixed';
            fullscreenImage.style.top = '50%';
            fullscreenImage.style.left = '50%';
            fullscreenImage.style.transform = 'translate(-50%, -50%)';
            fullscreenImage.style.maxWidth = '90%';
            fullscreenImage.style.maxHeight = '90%';
            fullscreenImage.style.borderRadius = '10px';
            fullscreenImage.style.zIndex = '1000'; 
            fullscreenImage.style.transition = 'transform 0.3s ease-out';

            setTimeout(function() {
                fullscreenContainer.remove();
                picImages.forEach(function(img) {
                    img.style.filter = 'none';
                    img.style.transition = 'none';
                });
            }, 2000);  
        });
    });
});
