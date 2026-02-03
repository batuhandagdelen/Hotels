# 🏨 Hotels - Konaklama Yönetim Uygulaması

Modern ve kullanıcı dostu bir otel yönetim platformudur. Türkiye genelindeki konaklama yerlerini arayabileceğiniz, detaylı bilgileri inceleyebileceğiniz, filtreleyebileceğiniz ve yönetebileceğiniz responsive web uygulamasıdır.

## 🛠️ Kullanılan Teknolojiler

- **React 19** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenliği ve kod kalitesi
- **Vite** - Hızlı geliştirme ve build aracı
- **Tailwind CSS** - Utility-first CSS framework
- **@tanstack/react-query** - Veri senkronizasyonu ve cache yönetimi
- **React Router DOM** - Client-side routing
- **Formik** - Form yönetimi
- **Yup** - Schema validasyonu
- **Axios** - HTTP client
- **React Toastify** - Toast bildirimleri
- **Lucide React** - Icon kütüphanesi

## ⭐ Özellikler

- 🏨 **Otel Listeleme** - Grid layout ile konaklama yerleri görüntüleme
- 🔍 **Güçlü Filtreleme** - Lokasyon, isim ve fiyat sıralamasına göre filtreleme
- 📊 **Rating Sistemi** - Yıldız puanlama gösterimi
- 💰 **Fiyat Bilgisi** - Gecelik konaklama ücretleri
- 🏷️ **Amenities** - WiFi, havuz, kahvaltı gibi otel olanakları
- ➕ **Yeni Otel Ekleme** - Formik & Yup validasyonu ile form
- 🗑️ **Otel Silme** - Güvenli silme işlemi
- ✏️ **Detaylı Görünüm** - Otel detay sayfası ve resim galerisi
- 📱 **Responsive Tasarım** - Mobil, tablet ve desktop uyumlu
- ⚡ **Hızlı Performans** - Vite ve React Query cache
- 🔔 **Toast Bildirimleri** - Kullanıcı geri bildirimi
- ⏳ **Loading States** - Skeleton loader ve loading göstergeleri

## 📦 Kurulum

### Gereksinimler

- Node.js (v18+)
- npm veya yarn

### Kurulum Adımları

**Backend:**

```bash
cd backend
npm install
npm start
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

Frontend `http://localhost:5173` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
frontend/
├── src/
│   ├── components/
│   │   ├── card/              # Otel kartı
│   │   ├── error/             # Error handling
│   │   ├── header/            # Navbar
│   │   └── loader/            # Loading
│   ├── pages/
│   │   ├── home/              # Ana sayfa ve filtreleme
│   │   ├── detail/            # Otel detayları
│   │   └── form/              # Yeni otel ekleme
│   ├── services/
│   │   ├── api.ts             # Axios config
│   │   └── hooks.ts           # React Query hooks
│   ├── types/                 # TypeScript types
│   ├── constants/             # Sabitler ve schemas
│   └── App.tsx
└── package.json
```

## 💡 Teknik Özellikler

- ✅ **Type Safety** - TypeScript ile tam tip kontrolü
- ✅ **Form Validation** - Yup ile güvenli validasyon
- ✅ **Custom Hooks** - React Query ile data fetching
- ✅ **Error Handling** - Kullanıcı dostu hata mesajları
- ✅ **Responsive Design** - Tailwind ile mobil uyumlu
- ✅ **Modular Structure** - Yeniden kullanılabilir componentler
