const puppeteer = require('puppeteer');

(async () => {
  // Launch browser 
  const browser = await puppeteer.launch({ headless: false, slowMo: 200 }); 
  const page = await browser.newPage();

  // Buka halaman utama
  console.log("Membuka halaman saucedemo...");
  await page.goto('https://www.saucedemo.com/');
  await new Promise(r => setTimeout(r, 2000));

  // Isi username
  console.log("Mengisi username...");
  await page.click('#user-name');
  await page.type('#user-name', 'visual_user');
  await new Promise(r => setTimeout(r, 2000));

  // Isi password
  console.log("Mengisi password...");
  await page.click('#password');
  await page.type('#password', 'secret_sauce');
  await new Promise(r => setTimeout(r, 2000));

  // Klik tombol login
  console.log("Klik tombol login...");
  await page.click('#login-button');
  await new Promise(r => setTimeout(r, 3000));

  // Tunggu halaman produk tampil
  console.log("Halaman produk terbuka...");
  await new Promise(r => setTimeout(r, 3000));

  // Scroll ke bawah 
  console.log("Scroll ke bawah...");
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await new Promise(r => setTimeout(r, 3000));

  // Klik salah satu produk
  console.log("Klik produk terakhir...");
  await page.click('.inventory_item:last-child .inventory_item_name');
  await new Promise(r => setTimeout(r, 3000));

  // Tambahkan ke cart
  console.log("Tambah ke cart...");
  await page.click('.btn_inventory');
  await new Promise(r => setTimeout(r, 3000));

  // Buka cart
  console.log("Buka cart...");
  await page.click('.shopping_cart_link');
  await new Promise(r => setTimeout(r, 3000));

  // Tutup browser
  console.log("Menutup browser...");
  await browser.close();
})();
