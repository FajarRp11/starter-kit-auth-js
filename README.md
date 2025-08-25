<div align="center">
  <h1>🚀 Starter Kit Otentikasi Next.js 🚀</h1>
  <p>
    Sebuah template siap pakai untuk proyek Next.js dengan fungsionalitas otentikasi dasar. Mulai proyek Anda dalam hitungan menit, bukan jam!
  </p>
</div>

<div align="center">
  <!-- Badges -->
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Auth.js-black?style=for-the-badge&logo=auth0&logoColor=white" alt="Auth.js">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod">
</div>

---

## ✨ Mengapa Menggunakan Starter Kit Ini?

- **Hemat Waktu**: Konfigurasi awal untuk otentikasi dengan tumpukan teknologi modern sudah disiapkan.
- **Praktik Terbaik**: Dibangun di atas fondasi Next.js modern menggunakan App Router.
- **Mudah Diperluas**: Kode yang bersih dan terstruktur memudahkan Anda untuk menambahkan fitur baru.
- **Font Modern**: Sudah terintegrasi dengan [Geist Font](https://vercel.com/font) dari Vercel untuk tipografi yang tajam dan modern.

---

## 🛠️ Teknologi Utama

- **Framework**: [Next.js](https://nextjs.org/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Otentikasi**: [Auth.js](https://authjs.dev/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Validasi Skema**: [Zod](https://zod.dev/)
- **Styling**: CSS Modules / Global CSS (mudah diintegrasikan dengan Tailwind CSS)
- **Package Manager**: Bekerja dengan `npm`, `yarn`, `pnpm`, dan `bun`.

---

## 🏁 Memulai Proyek Anda

Ikuti langkah-langkah sederhana ini untuk menjalankan proyek secara lokal.

### 1. Dapatkan Kode Proyek

Kloning repositori ini ke mesin lokal Anda:

```bash
git clone [https://github.com/FajarRp11/starter-kit-auth-js.git](https://github.com/FajarRp11/starter-kit-auth-js.git)
cd starter-kit-auth-js
```

### 2. Instalasi Dependensi

Pilih manajer paket favorit Anda untuk menginstal semua yang dibutuhkan:

```bash
npm install
# ATAU
yarn install
# ATAU
pnpm install
```

### 3. Siapkan File Environment

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian, buka file `.env` dan sesuaikan variabel di dalamnya, terutama `DATABASE_URL` untuk menunjuk ke database Anda.

**Contoh untuk PostgreSQL:**

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### 4. Jalankan Migrasi Database

Terapkan skema database ke database Anda menggunakan Prisma Migrate:

```bash
npx prisma migrate dev
```

Perintah ini akan membuat tabel database berdasarkan skema di `prisma/schema.prisma`.

### 5. Jalankan Server

Nyalakan server pengembangan untuk memulai coding:

```bash
npm run dev
```

Setelah itu, buka **[http://localhost:3000](http://localhost:3000)** di browser Anda.

---

## 🚀 Deployment

Proyek ini siap untuk di-deploy di platform mana pun yang mendukung Next.js. Untuk pengalaman terbaik, gunakan [**Vercel**](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFajarRp11%2Fstarter-kit-auth-js)

---

## 🤝 Berkontribusi

Kontribusi, isu, dan permintaan fitur sangat diterima! Jangan ragu untuk memeriksa halaman [isu](https://github.com/FajarRp11/starter-kit-auth-js/issues).

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk detailnya.
