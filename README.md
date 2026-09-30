# NewTab

**NewTab** là một tiện ích / tùy chỉnh đơn giản giúp nâng cấp trang New Tab (trang thẻ mới) trên các trình duyệt nhân Chromium cho phép sử dụng Custom New Tab Page.

---

## 🛠️ Hướng Dẫn Cài Đặt

Có **2 cách** để sử dụng NewTab. Nếu trình duyệt của bạn không cho phép tùy chỉnh New Tab bằng `Custom New Tab Page`, hãy sử dụng **Cách 1**.

### **Cách 1: Gán trực tiếp URL làm trang New Tab mặc định**

Đây là cách **đơn giản và ngắn gọn nhất**. Bạn chỉ cần đặt URL dưới đây làm trang New Tab mặc định của trình duyệt:

👉 **https://nguyenvinnh.github.io/NewTab/**

Cách này đặc biệt hữu ích với các trình duyệt đã **chặn hoặc không hỗ trợ tính năng `Custom New Tab Page`** trong `chrome://flags/`.

> 💡 Chỉ cần sao chép URL trên và đặt nó làm trang được mở khi tạo tab mới theo tùy chọn của trình duyệt.

---

### **Cách 2: Sử dụng `Custom New Tab Page`**

Cách này cho phép sử dụng trực tiếp file `index.html` từ mã nguồn của dự án.

### **Bước 1: Tải về và giải nén**

1. Tải toàn bộ mã nguồn của dự án về máy:
   👉 [**Tải NewTabVideo (.zip)**](https://github.com/nguyenvinnh/NewTab/archive/refs/heads/main.zip)
2. Giải nén file `.zip` vừa tải về vào thư mục lưu trữ mà bạn mong muốn (ví dụ: `C:\NewTab` hoặc `D:\Tools\NewTab`).

### **Bước 2: Bật tính năng "Custom New Tab Page" trên trình duyệt**

1. Mở trình duyệt Chromium của bạn và truy cập:

   ```text
   chrome://flags/
   ```

2. Tại ô tìm kiếm, nhập từ khóa: **`Custom New Tab Page`**

3. Chuyển trạng thái của tính năng này từ **Default / Disabled** sang **Enabled** (Bật).

   ![](demo/img.png)

### **Bước 3: Lấy URL file `index.html`**

1. Tìm đến thư mục bạn vừa giải nén ở **Bước 1**.
2. Click chuột phải (hoặc kéo thả) file **`index.html`** vào trình duyệt để mở file.
3. Sao chép toàn bộ địa chỉ URL trên thanh địa chỉ của trình duyệt.

   Ví dụ:

   ```text
   file:///C:/NewTab-main/index.html
   ```

### **Bước 4: Cấu hình trang New Tab**

1. Quay lại trang `chrome://flags/` tại mục **Custom New Tab Page** đã bật ở Bước 2.
2. Dán địa chỉ URL của file `index.html` đã sao chép ở Bước 3 vào ô nhập liệu của tùy chọn **Custom New Tab Page**.
3. Chọn **Relaunch** để khởi động lại trình duyệt và áp dụng thay đổi.

   ![](demo/video.gif)

---

## 💡 Đóng Góp & Phản Hồi

Nếu bạn gặp lỗi hoặc có ý tưởng muốn đóng góp cho dự án, vui lòng tạo **Issue** hoặc gửi **Pull Request** tại GitHub repo của dự án!
