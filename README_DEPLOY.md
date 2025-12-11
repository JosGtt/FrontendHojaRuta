# Frontend - Sistema de Hojas de Ruta SEDEGES

Frontend del sistema de gestión de hojas de ruta desarrollado con React, TypeScript y Vite.

## 🚀 Despliegue en Railway

### Variables de Entorno Requeridas

En Railway, configura la siguiente variable de entorno:

```
VITE_API_URL=https://ojaruta-production.up.railway.app
```

**Importante:** Reemplaza `ojaruta-production.up.railway.app` con la URL real de tu backend en Railway.

### Pasos para Desplegar

1. **Crear nuevo proyecto en Railway**
   - Ve a [Railway](https://railway.app)
   - Haz clic en "New Project"
   - Selecciona "Deploy from GitHub repo"
   - Selecciona este repositorio

2. **Configurar Variables de Entorno**
   - En el dashboard del proyecto, ve a "Variables"
   - Agrega `VITE_API_URL` con la URL de tu backend

3. **Desplegar**
   - Railway detectará automáticamente que es un proyecto Vite
   - El build se ejecutará automáticamente
   - La aplicación estará disponible en la URL generada por Railway

### Configuración del Backend (CORS)

Asegúrate de que tu backend en Railway tenga configurado el CORS para permitir peticiones desde el dominio del frontend:

```javascript
CORS_ORIGIN=https://tu-frontend.up.railway.app
```

## 🛠️ Desarrollo Local

### Instalación

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

### Preview de producción local

```bash
npm run preview
```

## 📋 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (usa `.env.example` como referencia):

```
VITE_API_URL=http://localhost:3001
```

## 🏗️ Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación
- **Axios** - Cliente HTTP
- **React Hook Form** - Manejo de formularios

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Iconos SVG y recursos
├── components/      # Componentes reutilizables
├── contexts/        # Contextos de React (Auth, Search)
├── pages/          # Páginas principales
├── routes/         # Configuración de rutas
├── config/         # Configuración (API endpoints)
├── styles/         # Estilos globales
├── types/          # Definiciones de TypeScript
└── utils/          # Utilidades y helpers
```

## 🔐 Autenticación

El sistema usa JWT para autenticación. El token se almacena en `sessionStorage` y se incluye automáticamente en todas las peticiones mediante interceptores de Axios.

## 📝 Notas de Producción

- El frontend usa variables de entorno para configurar la URL del backend
- Todos los endpoints de API están centralizados en `src/config/api.ts`
- El CORS debe estar configurado correctamente en el backend
- Railway automáticamente detecta y ejecuta el build de Vite

## 👥 Roles de Usuario

- **Administrador**: Acceso completo
- **Desarrollador**: Acceso de desarrollo
- **Jefe**: Gestión de hojas de ruta
- **Usuario**: Acceso básico

## 📄 Licencia

Proyecto privado - SEDEGES La Paz
