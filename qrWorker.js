importScripts('https://cdn.jsdelivr.net/npm/jsqr@1.2.0/dist/jsQR.js');

self.onmessage = function(e) {
    let imageData = e.data;

    // Quét mã QR từ dữ liệu hình ảnh đã được gửi
    let code = jsQR(imageData.data, imageData.width, imageData.height);

    // Gửi kết quả trở lại
    if (code) {
        self.postMessage(code.data);
    }
};
