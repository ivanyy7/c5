# Инструкция по деплою на Vercel

## Способ 1: Через веб-интерфейс Vercel (рекомендуется)

1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите репозиторий `c5`
5. Настройки проекта:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** (оставьте пустым)
   - **Output Directory:** `public`
6. Нажмите "Deploy"

## Способ 2: Через Vercel CLI

### Установка Vercel CLI:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
npm install -g vercel
```

### Деплой:

```powershell
# Войдите в Vercel
vercel login

# Деплой (preview)
vercel

# Деплой в продакшн
vercel --prod
```

## Структура для деплоя

Vercel будет использовать:
- `public/index.html` - главная страница (доступна по `/`)
- `calculator.html` - также доступен по `/calculator.html`

## После деплоя

После успешного деплоя вы получите URL вида:
- Preview: `https://c5-xxxxx.vercel.app`
- Production: `https://your-project.vercel.app`

## Автоматический деплой

После подключения репозитория к Vercel, каждый push в `main` ветку будет автоматически деплоиться в продакшн.
