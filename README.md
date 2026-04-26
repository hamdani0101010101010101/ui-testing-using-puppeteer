# ui-testing-using-puppeteer
use puppeteer to test ui from a web 

disusun oleh:
Hamdani ( 230504062 )
Mustaqim ( 230504078 )

Pengujian perangkat lunak merupakan tahap penting dalam pengembangan sistem untuk memastikan bahwa aplikasi dapat berjalan sesuai dengan fungsinya. Salah satu jenis pengujian yang umum digunakan adalah UI Testing, yaitu pengujian yang berfokus pada interaksi pengguna dengan antarmuka aplikasi. Dalam proses ini, dibutuhkan tools automation untuk membantu mempercepat pengujian serta mengurangi kesalahan manusia. Oleh karena itu, pada tugas ini digunakan Puppeteer sebagai alat untuk melakukan pengujian otomatis pada aplikasi web.

A) Tujuan dari pengujian ini adalah untuk menguji beberapa fitur utama pada aplikasi web, seperti proses login, navigasi halaman, serta interaksi pengguna dengan sistem. Selain itu, pengujian ini juga bertujuan untuk memastikan bahwa proses penambahan produk ke dalam keranjang dapat berjalan dengan baik.

Dalam pengujian ini digunakan beberapa tools, yaitu Puppeteer sebagai framework utama untuk automation testing, Node.js sebagai runtime environment, serta Visual Studio Code sebagai code editor. Puppeteer dipilih karena mampu mengontrol browser secara langsung melalui script sehingga dapat mensimulasikan aktivitas pengguna secara otomatis.

Pengujian dilakukan pada website https://www.saucedemo.com, yang merupakan situs demo yang dirancang khusus untuk latihan pengujian aplikasi web. Website ini menyediakan fitur login, daftar produk, serta keranjang belanja yang cocok digunakan untuk simulasi pengujian.

B) Metode yang digunakan dalam pengujian ini adalah UI Testing, yaitu pengujian yang dilakukan dengan mensimulasikan interaksi pengguna secara langsung pada antarmuka website. Proses pengujian meliputi membuka halaman website, mengisi data login, menekan tombol, serta melakukan navigasi antar halaman. Semua proses tersebut dilakukan secara otomatis menggunakan script Puppeteer.

C) Skenario pengujian yang dilakukan dimulai dari proses login ke dalam sistem menggunakan username dan password yang valid. Setelah berhasil login, sistem akan menampilkan halaman produk. Selanjutnya dilakukan pemilihan salah satu produk, kemudian produk tersebut ditambahkan ke dalam keranjang. Terakhir, sistem membuka halaman keranjang untuk memastikan bahwa produk telah berhasil ditambahkan.

Pengujian diimplementasikan menggunakan script berbasis JavaScript dengan bantuan Puppeteer. Script dimulai dengan membuka browser, kemudian mengakses halaman utama website. Setelah itu, sistem secara otomatis mengisi form login, menekan tombol login, dan menunggu hingga halaman produk ditampilkan. Selanjutnya, script melakukan interaksi lanjutan seperti scroll halaman, memilih produk, menambahkan ke keranjang, dan membuka halaman cart.

D) Berdasarkan hasil pengujian yang telah dilakukan, seluruh proses berjalan dengan baik. Browser berhasil dibuka secara otomatis, proses login berhasil dilakukan, halaman produk dapat ditampilkan, dan produk berhasil ditambahkan ke dalam keranjang. Hal ini menunjukkan bahwa sistem berjalan sesuai dengan skenario yang telah dirancang.

Penggunaan Puppeteer dalam pengujian ini memiliki beberapa kelebihan, di antaranya mampu mengotomatisasi proses pengujian secara cepat dan efisien serta dapat mengurangi kesalahan yang disebabkan oleh faktor manusia. Selain itu, Puppeteer juga memungkinkan pengujian dilakukan secara langsung pada antarmuka pengguna. Namun, terdapat beberapa kekurangan, seperti membutuhkan pemahaman dasar pemrograman JavaScript serta ketergantungan terhadap struktur elemen pada halaman web.

E) Berdasarkan pengujian yang telah dilakukan, dapat disimpulkan bahwa Puppeteer merupakan tools yang efektif untuk melakukan automation testing pada aplikasi web, khususnya dalam pengujian antarmuka pengguna. Pengujian yang dilakukan berhasil memenuhi skenario yang telah ditentukan, sehingga dapat membantu memastikan bahwa sistem berjalan dengan baik dan sesuai dengan kebutuhan pengguna.

PERSAYARATN SYSTEM :
1. Node.js  
Puppeteer merupakan library untuk Node.js, sehingga sistem harus memiliki Node.js yang terpasang. Versi yang direkomendasikan adalah Node.js 14 atau lebih baru agar kompatibilitas dan stabilitas terjamin.

2. NPM (Node Package Manager)  
NPM diperlukan untuk mengelola paket dan melakukan instalasi Puppeteer. NPM biasanya sudah terpasang secara otomatis bersama Node.js.

3. Browser Chromium/Chrome  
Puppeteer secara default akan mengunduh Chromium versi yang sesuai. Namun, pengguna juga dapat mengonfigurasi Puppeteer untuk menggunakan Chrome yang sudah tersedia di sistem.
