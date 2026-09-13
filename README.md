# Kripta

Aplikasi web untuk mengamankan dan memverifikasi keaslian dokumen digital. Berjalan sepenuhnya di browser pengguna — tanpa server, tanpa akun, tanpa database.

## Cara Kerja Singkat

- **Enkripsi hybrid:** dokumen dienkripsi dengan AES-256-GCM, kunci AES diamankan dengan RSA-2048 OAEP (mode kunci publik) atau diturunkan dari password (PBKDF2)
- **Tanda tangan digital:** RSA-PSS + SHA-256 sebagai bukti keaslian dan integritas
- **Verifikasi publik:** siapa pun bisa mengecek keaslian dokumen tanpa akun dan tanpa password
- **Zero-knowledge:** kunci privat dan isi dokumen tidak pernah meninggalkan perangkat pengguna

## Status

**Mockup antarmuka (tahap perancangan).** Seluruh alur dan interaksi sudah dapat didemokan, namun logika kripto masih simulasi — belum memakai Web Crypto API yang sesungguhnya. Prototype fungsional menyusul.

## Struktur

```
Kripta/
├── index.html         # Halaman utama
├── amankan.html       # Alur enkripsi & tanda tangan dokumen
├── buka.html          # Membuka paket .sdoc
├── verifikasi.html    # Verifikasi keaslian oleh pihak ketiga
├── kunci.html         # Manajemen identitas (kunci publik & privat)
└── assets/
    ├── tailwind.js    # Tailwind CSS (lokal, siap offline)
    ├── lucide.js      # Ikon Lucide (lokal)
    └── identity.js    # Helper identitas demo (localStorage)
```

## Menjalankan Secara Lokal

1. Letakkan folder ini di `htdocs` XAMPP
2. Jalankan Apache, lalu buka `http://localhost/Kripta/`

Disarankan mengakses lewat localhost (bukan `file://`) agar penyimpanan identitas di browser konsisten antar halaman.

## Deploy

Situs statis murni — tanpa build step. Cocok untuk Vercel, Netlify, GitHub Pages, atau Cloudflare Pages.

## Rancangan Keamanan (Target Implementasi)

| Kebutuhan | Algoritma |
|---|---|
| Kerahasiaan isi dokumen | AES-256-GCM |
| Distribusi kunci | RSA-2048 OAEP |
| Tanda tangan digital | RSA-PSS + SHA-256 |
| Perlindungan kunci privat | PBKDF2 (iterasi tinggi) + AES-GCM |

## Format Paket `.sdoc`

Paket self-contained berisi metadata, dokumen terenkripsi, kunci AES terbungkus, tanda tangan digital, dan kunci publik penandatangan — dapat dikirim melalui kanal apa pun.

---

Proyek penelitian mata kuliah Metodologi Penelitian — 2026.
