document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo các module theo thứ tự phụ thuộc
    Background.init();
    SettingsUI.init();
    Position.init();
    Drag.init();
    Search.init();

    // Gán sự kiện cho input file
    document.getElementById('bg-file-input').addEventListener('change', (e) => {
        Background.handleFileSelect(e);
    });

    // Đăng ký Service Worker để cache offline
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => {
                    console.log('SW registered:', reg.scope);
                    reg.addEventListener('updatefound', () => {
                        console.log('SW đang cập nhật...');
                    });
                })
                .catch(err => console.warn('SW registration failed:', err));
        });
    }

    // Trạng thái online/offline
    window.addEventListener('online', () => console.log('Đã online trở lại'));
    window.addEventListener('offline', () => console.log('Đang ở chế độ offline - dùng cache + IndexedDB'));

    console.log('Tab mới đã sẵn sàng! Offline-ready:', 'serviceWorker' in navigator);
});