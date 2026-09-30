// Cấu hình toàn cục & Bảo vệ Quyền riêng tư (Chặn lấy tọa độ GPS)
(function blockGeolocation() {
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
        const dummyError = { code: 1, message: 'Geolocation access disabled for privacy.' };
        navigator.geolocation.getCurrentPosition = function (success, error) {
            if (typeof error === 'function') error(dummyError);
        };
        navigator.geolocation.watchPosition = function (success, error) {
            if (typeof error === 'function') error(dummyError);
            return 0;
        };
    }
})();

const CONFIG = {
    defaultBg: './anime-bikini-girls.1920x1080.mp4',
    suggestionDebounce: 500,
    margin: 20,
};
window.CONFIG = CONFIG;