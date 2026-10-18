PRD Front End Website E-Commerce Fashion (Tema Hitam dan Abu)
Versi 1.0 | Cakupan: front end saja | Referensi tata letak: saintpjkt.com
1. Ringkasan Produk
Dokumen ini menjelaskan kebutuhan produk untuk sisi front end sebuah website toko online fashion. Tata letak mengacu pada website saintpjkt.com, tetapi warna dasarnya diganti menjadi hitam dan abu. Dokumen ini mengasumsikan website yang dibuat adalah toko online pakaian dengan katalog produk, keranjang, dan halaman pesanan. Kalau asumsi ini keliru, bagian fitur perlu disesuaikan.
Backend, database, dan payment gateway tidak dibahas di sini. Front end akan memakai data tiruan (mock data) dulu, lalu dihubungkan ke API saat backend siap.
2. Latar Belakang Masalah
Brand pakaian lokal skala kecil dan menengah sering mengandalkan media sosial dan chat pribadi untuk menjual. Cara ini punya beberapa masalah nyata:
• Calon pembeli harus bertanya satu per satu soal harga, ukuran, dan stok, sehingga proses beli lambat.
• Katalog tersebar di banyak postingan, jadi produk sulit dicari dan dibandingkan.
• Identitas brand tidak konsisten karena tampilan bergantung pada fitur platform.
• Pembeli tidak punya tempat yang jelas untuk melihat status pesanan.
Website dengan tampilan yang rapi dan fokus pada produk dibutuhkan agar pembeli bisa melihat, memilih, dan memesan tanpa banyak tanya jawab.
3. Tujuan dan Metrik Keberhasilan
Tujuan
1. Menyajikan katalog produk dengan tampilan yang bersih dan konsisten dengan identitas brand hitam dan abu.
2. Memudahkan pengguna dari melihat produk sampai menambahkannya ke keranjang dalam sedikit langkah.
3. Memberi pengalaman yang nyaman di ponsel, karena sebagian besar pengunjung toko online di Indonesia mengakses lewat HP.
Metrik
Metrik
Target awal
Largest Contentful Paint (LCP) halaman utama
2,5 detik atau kurang
Interaction to Next Paint (INP)
200 ms atau kurang
Cumulative Layout Shift (CLS)
0,1 atau kurang
Skor Lighthouse Accessibility
90 atau lebih
Langkah dari beranda ke keranjang
Maksimal 3 klik
Tampilan benar pada lebar layar
360 px sampai 1920 px
Angka LCP, INP, dan CLS di atas mengikuti ambang batas kategori "good" pada Core Web Vitals dari Google.
4. Target Pengguna
Pembeli utama. Usia 17 sampai 30 tahun, berdomisili di kota besar, terbiasa belanja online lewat HP, peduli pada gaya dan tampilan produk.
Pembeli kedua. Pembeli dari luar kota atau luar negeri yang mencari produk brand lokal dan butuh informasi pengiriman yang jelas.
Pengelola toko. Tidak memakai front end ini secara langsung, tetapi konten seperti banner dan daftar produk nantinya akan dikelola lewat backend.
5. Hasil Pembacaan Website Referensi
Dari halaman beranda saintpjkt.com, struktur yang terbaca adalah sebagai berikut:
1. Header berisi logo brand, tautan ke keranjang, dan tautan ke halaman pesanan.
2. Banner utama besar (hero) di bagian atas.
3. Bagian "Signature Pieces" berupa banner pembuka lalu deretan produk unggulan. Tiap produk menampilkan gambar, nama, dan harga dalam Rupiah. Pada saat dibaca ada enam produk.
4. Bagian "Daily" berupa banner kategori di bagian bawah.
5. Halaman detail produk, keranjang, dan pesanan tersedia sebagai halaman terpisah.
6. Tagline brand ditampilkan pada metadata, yaitu "Jakarta's Finest, Shipping Worldwide."
Hal yang belum bisa dipastikan dari pembacaan teks dan perlu kamu cek langsung di browser: jumlah kolom grid di desktop dan HP, jenis huruf, perilaku header saat scroll, ada tidaknya footer, serta efek hover pada gambar produk.
6. Arah Desain Visual
Tata letak mengikuti referensi. Yang berubah hanya warna dasar.
Palet warna (usulan)
Peran
Warna
Kode
Latar utama
Hitam pekat
#0D0D0D
Permukaan kartu dan header
Abu sangat gelap
#1A1A1A
Garis pemisah dan border
Abu gelap
#2E2E2E
Teks sekunder
Abu sedang
#9A9A9A
Teks utama
Putih lembut
#F2F2F2
Tombol utama
Abu terang
#D9D9D9 dengan teks #0D0D0D
Semua kode di atas adalah usulan awal dan boleh diganti. Pastikan rasio kontras teks terhadap latar minimal 4,5 banding 1 sesuai pedoman WCAG 2.1 level AA. Kombinasi putih lembut di atas hitam pekat sudah memenuhi ini dengan margin besar, tetapi abu sedang pada teks kecil perlu diperiksa dengan alat pengecek kontras.
Prinsip tampilan
• Foto produk menjadi pusat perhatian, jadi elemen dekoratif dibuat seminimal mungkin.
• Ruang kosong dipakai dengan sengaja agar halaman terasa lega, bukan kosong.
• Satu gaya tombol utama dan satu gaya tombol sekunder di seluruh halaman.
• Tipografi cukup satu keluarga huruf sans-serif dengan dua sampai tiga ukuran judul.
7. Struktur Halaman
1. Beranda
2. Daftar produk (katalog)
3. Detail produk
4. Keranjang
5. Pesanan (riwayat dan status)
6. Halaman 404 dan halaman kosong (keranjang kosong, pesanan kosong)
Checkout dan pembayaran belum masuk cakupan versi ini dan akan dibahas saat backend dimulai.
8. Kebutuhan Fungsional
Prioritas: P0 wajib ada di rilis pertama, P1 sebaiknya ada, P2 bisa menyusul.
8.1 Header dan Navigasi
ID
Kebutuhan
Prioritas
FE-01
Header menampilkan logo yang bisa diklik menuju beranda
P0
FE-02
Ikon keranjang dengan badge jumlah item
P0
FE-03
Tautan ke halaman pesanan
P0
FE-04
Menu hamburger pada layar kecil
P0
FE-05
Header tetap terlihat saat scroll (sticky)
P1
8.2 Beranda
ID
Kebutuhan
Prioritas
FE-10
Banner utama lebar penuh, gambar berbeda untuk desktop dan HP
P0
FE-11
Bagian produk unggulan berupa grid kartu produk
P0
FE-12
Banner kategori yang mengarah ke katalog terfilter
P0
FE-13
Footer berisi tautan brand, kontak, dan media sosial
P1
FE-14
Carousel pada banner utama
P2
8.3 Katalog Produk
ID
Kebutuhan
Prioritas
FE-20
Grid produk dengan gambar, nama, dan harga dalam format Rupiah (contoh: Rp 660.000)
P0
FE-21
Penanda stok habis pada kartu produk
P0
FE-22
Filter berdasarkan kategori
P1
FE-23
Pengurutan berdasarkan harga dan terbaru
P1
FE-24
Pencarian produk
P2
8.4 Detail Produk
ID
Kebutuhan
Prioritas
FE-30
Galeri foto produk dengan beberapa gambar
P0
FE-31
Nama, harga, dan deskripsi produk
P0
FE-32
Pilihan ukuran dan warna
P0
FE-33
Tombol tambah ke keranjang, nonaktif sampai ukuran dipilih
P0
FE-34
Panduan ukuran dalam bentuk tabel atau modal
P1
FE-35
Zoom pada gambar
P2
8.5 Keranjang
ID
Kebutuhan
Prioritas
FE-40
Daftar item dengan gambar, nama, ukuran, harga, dan jumlah
P0
FE-41
Ubah jumlah dan hapus item
P0
FE-42
Ringkasan subtotal yang langsung diperbarui
P0
FE-43
Tampilan keranjang kosong dengan tombol kembali belanja
P0
FE-44
Keranjang tersimpan di browser sehingga tidak hilang saat refresh
P1
8.6 Pesanan
ID
Kebutuhan
Prioritas
FE-50
Daftar pesanan dengan nomor, tanggal, total, dan status
P0
FE-51
Detail satu pesanan
P1
FE-52
Tampilan saat belum ada pesanan
P0
9. Cerita Pengguna Utama
1. Sebagai pembeli, aku ingin melihat produk unggulan begitu membuka website, supaya aku cepat tahu brand ini menjual apa.
2. Sebagai pembeli, aku ingin memilih ukuran sebelum menambahkan ke keranjang, supaya aku tidak salah pesan.
3. Sebagai pembeli, aku ingin mengubah jumlah barang di keranjang tanpa pindah halaman, supaya belanja terasa cepat.
4. Sebagai pembeli di HP, aku ingin semua tombol mudah ditekan dengan jempol, supaya aku tidak salah tekan.
5. Sebagai pembeli, aku ingin melihat status pesananku, supaya aku tidak perlu bertanya lewat chat.
10. Alur Pengguna Utama
Beranda, lalu pilih produk dari grid unggulan, lalu halaman detail, lalu pilih ukuran, lalu tambah ke keranjang, lalu halaman keranjang, lalu lanjut ke checkout (di luar cakupan versi ini).
Alur pendukung: Beranda, lalu banner kategori, lalu katalog terfilter, lalu detail produk.
11. Kebutuhan Non-Fungsional
Responsif. Pendekatan mobile first. Titik patah (breakpoint) minimal untuk HP, tablet, dan desktop.
Performa. Gambar memakai format modern seperti WebP, ukuran menyesuaikan perangkat, dan gambar di bawah layar awal dimuat belakangan (lazy loading). Target Core Web Vitals ada pada bagian 3.
Aksesibilitas. Kontras warna sesuai WCAG 2.1 AA, semua gambar produk punya teks alternatif, seluruh elemen bisa dijangkau dengan keyboard, dan fokus terlihat jelas.
Kompatibilitas browser. Dua versi terbaru dari Chrome, Safari, Firefox, dan Edge, termasuk Chrome Android dan Safari iOS.
SEO dasar. Judul halaman, deskripsi meta, dan gambar pratinjau (Open Graph) tersedia di setiap halaman utama.
12. Usulan Teknologi Front End
Bagian ini hanya usulan dan bisa diganti sesuai kemampuan tim.
• Kerangka kerja: React dengan Next.js atau Vite, atau Vue dengan Nuxt.
• Penataan gaya: Tailwind CSS dengan variabel warna yang disimpan sebagai design token supaya mudah diganti.
• Data awal: file JSON tiruan yang strukturnya meniru calon respons API.
• Pengelolaan keranjang: state management ringan dengan penyimpanan di localStorage.
13. Di Luar Cakupan
• Backend, database, dan panel admin.
• Login, registrasi, dan akun pengguna.
• Checkout, pembayaran, dan perhitungan ongkos kirim.
• Sistem ulasan dan wishlist.
14. Asumsi dan Risiko
Hal
Keterangan
Asumsi jenis toko
Website adalah toko pakaian online
Aset gambar
Foto produk dan banner disediakan sendiri, tidak memakai gambar dari website referensi
Hak cipta desain
Tata letak boleh terinspirasi, tetapi logo, foto, teks, dan aset milik saintpjkt.com tidak boleh dipakai
Kontras abu pada teks kecil
Berisiko tidak terbaca, perlu diuji
Detail visual referensi
Belum terverifikasi penuh, perlu pengecekan manual di browser
15. Pertanyaan Terbuka
1. Nama brand dan jenis produknya apa saja?
2. PRD ini untuk tugas kuliah, proyek pribadi, atau klien? Jawabannya memengaruhi kedalaman bagian metrik dan teknologi.
3. Apakah checkout dan akun pengguna akan dibuat di tahap berikutnya?
4. Apakah perlu versi bahasa Inggris selain bahasa Indonesia?