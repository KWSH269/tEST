$(document).ready(function() {
    const flipbook = $("#flipbook");
    const imageUpload = $("#image-upload");
    const uploadButton = $("#upload-button");

    uploadButton.on("click", function() {
        const files = imageUpload[0].files;
        if (files.length > 0) {
            flipbook.empty(); // 기존 페이지 삭제
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const page = $("<div class='page'><img src='" + e.target.result + "' alt='Uploaded Image'></div>");
                    flipbook.append(page);
                }
                reader.readAsDataURL(file);
            });

            // 모든 이미지가 로드된 후 turn.js 초기화
            setTimeout(() => {
                flipbook.turn({
                    width: 800,
                    height: 600,
                    autoCenter: true,
                    acceleration: true,
                    gradients: true
                });
            }, 100);
        }
    });
});
