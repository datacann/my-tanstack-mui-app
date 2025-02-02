# Ekip ve Kullanıcı Yönetimi Uygulaması

Bu proje, **Vite**, **TypeScript** ve **TanStack Query** (önceden React Query) kullanarak geliştirilmiş bir kullanıcı yönetim uygulamasıdır. Kullanıcıların login olabileceği bir sayfa, veri düzenleme ve silme işlemleri yapabilen bir DataGrid sayfası içerir. Proje, verilerin **Context API** aracılığıyla yönetilmesi, **MUI** (Material UI) komponentleri ile stil düzenlemeleri yapılması ve **styled-components** kullanılarak görselleştirilmesi için gerekli tüm araçları içerir.

## Proje Özellikleri

### 1. **Login Sayfası**
- Kullanıcılar giriş yapabilir. (Ardında gerçek bir API olması gerekmez.)
- Giriş işleminde, kullanıcı bilgileri (örneğin; `name` ve `email`) oluşturulup saklanır.
- Kullanıcı bilgileri, giriş yapıldıktan sonra state içinde saklanır.

### 2. **Veri Yönetimi ve Custom Hooklar**
- **TanStack Query** kullanılarak **GET**, **POST**, **PUT**, **DELETE** işlemleri gerçekleştirilir.
- Her bir işlem için özel custom hooklar oluşturulmuştur.

### 3. **Navigasyon Barı**
- Kullanıcılar, uygulamanın farklı sayfaları arasında geçiş yapabilmek için bir navigasyon barı kullanabilirler.

### 4. **Data Grid Sayfası**
- Public bir API'dan veri çekilir ve bu veriler bir **DataGrid** içerisinde görselleştirilir.
- Veriler **React Context** içinde saklanır.
- **DataGrid** sayfasında kullanıcılar verileri düzenleyebilir, ekleyebilir veya silebilir.

### 5. **Veri Ekleme, Düzenleme ve Silme**
- **Add**, **Edit**, **Delete** işlemleri DataGrid'deki verilere uygulanabilir.
- Veriler, **TanStack Query** ile API'ye gönderilip güncellenir.

### 6. **Stillendirme**
- **MUI** (Material UI) komponentleri kullanılarak uygulama stilize edilmiştir.
- **styled-components** kullanılarak ekstra özelleştirmeler yapılmıştır.

## Teknolojik Gereksinimler

- **Vite**: Hızlı geliştirme sunucusu ve üretim yapılandırması sağlayan modern bir build aracıdır.
- **TypeScript**: JavaScript'in tip güvenli bir versiyonudur.
- **TanStack Query (React Query)**: API ile etkileşim kuran, veri önbellekleme ve güncellemeyi sağlayan bir kütüphanedir.
- **MUI (Material UI)**: Uygulamanın UI bileşenlerini oluşturmak için kullanılan popüler bir React UI kütüphanesidir.
- **styled-components**: CSS-in-JS ile stil yazmanızı sağlayan bir kütüphanedir.
- **React Context API**: Global state yönetimi için kullanılan React'in dahili state yönetim aracıdır.

## Proje Yapısı
