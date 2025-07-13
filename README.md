# 📝 Task Management App - Aplicación Full Stack (Sin Autenticación)

## 📋 Descripción del Proyecto

Una aplicación completa de gestión de tareas desarrollada con **Angular** (frontend) y **NestJS** (backend), utilizando **MySQL** como base de datos con **Prisma ORM**.## 📖 Manual de Usuario

### 🎯 **¿Qué es Tasks Sin Login?**

**Tasks Sin Login** es una aplicación web de gestión de tareas diseñada para **uso inmediato y sin complicaciones**. No requiere registro ni login - simplemente abre la aplicación y comienza a gestionar tus tareas al instante.

### 🌟 **Características Principales**
- ✅ **Acceso inmediato** - Sin registro ni login requerido
- ✅ **Interfaz moderna** - Material Design responsive
- ✅ **Tema personalizable** - Modo claro/oscuro
- ✅ **Edición flexible** - Inline y formulario dedicado
- ✅ **Funciona en cualquier dispositivo** - Móvil, tablet, desktop

### 🚀 **Primeros Pasos**

#### **1. Acceso a la Aplicación**
```
🌐 URL Local: http://localhost:4200
📱 Compatible con: Chrome, Firefox, Safari, Edge
💻 Funciona en: Windows, Mac, Linux, Android, iOS
```

#### **2. Navegación Principal**
- **🏠 Inicio**: Lista de todas tus tareas
- **➕ Nueva Tarea**: Formulario para crear tareas
- **🌙/☀️ Cambiar Tema**: Switch claro/oscuro en la navbar

### 📝 **Gestión de Tareas**

#### **✅ Crear Nueva Tarea**

**Método 1: Formulario Rápido (Página Principal)**
1. En la página de inicio, ve al formulario superior
2. Escribe el **título** de tu tarea (obligatorio)
3. Opcionalmente añade:
   - **Descripción**: Detalles adicionales
   - **Fecha límite**: Para organizar por prioridad
4. Haz clic en **"Crear Tarea"**

**Método 2: Formulario Completo (Página Dedicada)**
1. Haz clic en **"Nueva Tarea"** en la navbar
2. Completa todos los campos disponibles
3. Previsualiza tu tarea antes de crearla
4. Haz clic en **"Guardar"**

#### **📋 Ver y Gestionar Tareas**

**Lista Principal:**
- **📊 Estado visual**: Verde (✓) = Completada, Naranja (○) = Pendiente
- **📅 Organización**: Las tareas se muestran con la más reciente primero
- **👁️ Vista completa**: Título, descripción, fecha y estado

**Cambiar Estado:**
- Haz clic en el **checkbox** de cualquier tarea
- ✅ Pendiente → Completada (se marca en verde)
- ⭕ Completada → Pendiente (vuelve a estar activa)

#### **✏️ Editar Tareas**

**Edición Inline (Recomendada):**
1. Haz clic en el **botón de editar** (✏️) de cualquier tarea
2. Los campos se transforman en editables
3. Modifica lo que necesites:
   - Título, descripción, fecha
4. **Guardar**: Haz clic en el check verde (✓)
5. **Cancelar**: Haz clic en la X roja para descartar cambios

**Validaciones en Tiempo Real:**
- ❌ **Título vacío**: No se puede guardar
- ❌ **Fecha inválida**: Formato incorrecto detectado
- ✅ **Cambios válidos**: Botón guardar habilitado

#### **🗑️ Eliminar Tareas**

1. Haz clic en el **botón eliminar** (🗑️) de la tarea
2. **Confirmación automática**: La tarea se elimina inmediatamente
3. **Sin recuperación**: Una vez eliminada, no se puede deshacer

### 🎨 **Personalización**

#### **🌙 Modo Oscuro / ☀️ Modo Claro**
1. Haz clic en el **switch de tema** en la navbar superior derecha
2. El cambio es **inmediato** y se aplica a toda la aplicación
3. **Persistencia**: Tu preferencia se guarda localmente

**Características de cada tema:**
- **🌙 Modo Oscuro**: Fondo negro, menos fatiga visual, ideal para uso nocturno
- **☀️ Modo Claro**: Fondo blanco, mayor contraste, ideal para uso diurno

### 📱 **Uso en Dispositivos Móviles**

#### **🤳 Responsive Design**
- **Automático**: La interfaz se adapta a tu pantalla
- **Touch-friendly**: Botones optimizados para dedos
- **Navegación móvil**: Navbar compacta en pantallas pequeñas

#### **💡 Consejos para Móvil**
- **Edición**: Toca cualquier campo para editarlo
- **Navegación**: Usa los botones de la navbar superior
- **Velocidad**: La aplicación funciona offline una vez cargada

### 🔄 **Flujos de Trabajo Comunes**

#### **📊 Gestión Diaria de Tareas**
```
1. 🌅 Abrir aplicación al comenzar el día
2. 👀 Revisar tareas pendientes (marcadas en naranja)
3. ✅ Marcar como completadas las terminadas
4. ➕ Añadir nuevas tareas que surjan
5. 🌙 Cambiar a modo oscuro si trabajas de noche
```

#### **📝 Creación Rápida de Múltiples Tareas**
```
1. 🏠 Ir a página principal
2. ➕ Usar formulario rápido superior
3. 🔄 Crear tarea → Limpiar formulario → Repetir
4. 📋 Ver todas las tareas creadas en la lista
```

#### **🎯 Organización por Fechas**
```
1. ➕ Crear tareas con fechas límite específicas
2. 👁️ Visualizar en la lista cuáles vencen pronto
3. ✏️ Editar fechas si cambian las prioridades
4. ✅ Completar tareas a medida que las terminas
```

### ❓ **Preguntas Frecuentes**

**P: ¿Necesito crear una cuenta?**  
R: No, la aplicación funciona sin registro. Solo accede y comienza a usarla.

**P: ¿Se guardan mis tareas?**  
R: Sí, las tareas se almacenan en la base de datos y persisten entre sesiones.

**P: ¿Puedo usar la aplicación offline?**  
R: Parcialmente. Una vez cargada, puedes ver tus tareas, pero necesitas conexión para guardar cambios.

**P: ¿Hay límite de tareas?**  
R: No hay límite artificial, pero el rendimiento puede variar con miles de tareas.

**P: ¿Puedo compartir mis tareas?**  
R: En esta versión no. Para funcionalidades de usuario múltiple, existe la versión con autenticación.

**P: ¿La aplicación es segura?**  
R: Sí, aunque al no tener autenticación, cualquier persona con acceso al servidor puede ver las tareas.

### 🎯 **Tips y Trucos**

#### **⚡ Productividad**
- **Títulos descriptivos**: Usa verbos de acción ("Llamar", "Revisar", "Enviar")
- **Fechas realistas**: Establece fechas límite alcanzables
- **Descripción útil**: Añade contexto para recordar detalles importantes

#### **🎨 Interfaz**
- **Modo oscuro**: Ideal para trabajo nocturno o en pantallas grandes
- **Edición inline**: Más rápida que ir a formularios separados
- **Checkbox visual**: Feedback inmediato del progreso

#### **📱 Móvil**
- **Landscape mode**: Mejor experiencia en tablet
- **Touch gestures**: Toca con seguridad, la interfaz es responsive
- **Zoom**: La aplicación respeta el zoom del navegadorEsta versión se enfoca en la funcionalidad core de gestión de tareas sin sistema de autenticación, permitiendo acceso directo a todas las funcionalidades de CRUD con una interfaz moderna y responsive.

---

## 🏗️ Arquitectura del Sistema

### Stack Tecnológico
- **Frontend**: Angular 19 + Angular Material + TypeScript
- **Backend**: NestJS + TypeScript + Prisma ORM
- **Base de Datos**: MySQL 8.0 con esquema simplificado
- **UI/UX**: Material Design con tema claro/oscuro
- **Herramientas**: VS Code Tasks, Docker ready, ESLint

---

## 🎯 Backend (NestJS)

### 📊 Características Implementadas

#### ✅ **API REST Completa (Acceso Público)**
- **Framework**: NestJS 11.0.1 con TypeScript
- **Arquitectura**: Modular con controllers, services y DTOs
- **Validaciones**: Class-validator para validación de datos
- **Transformación**: Class-transformer para mapeo de objetos
- **Acceso**: Todas las rutas son públicas (sin autenticación)

#### ✅ **Endpoints Disponibles**
```http
GET    /tareas          # Obtener todas las tareas
POST   /tareas          # Crear nueva tarea
GET    /tareas/:id      # Obtener tarea específica por ID
PATCH  /tareas/:id      # Actualizar tarea por ID
DELETE /tareas/:id      # Eliminar tarea por ID
```

#### ✅ **Modelo de Datos (DTOs)**
```typescript
// CreateTareaDto
{
  titulo: string (max 75 chars, required)
  descripcion?: string (max 200 chars, optional)
  fecha_fin?: string (ISO date, optional)
  completada?: boolean (default: false)
  // fecha_creacion se asigna automáticamente
}

// UpdateTareaDto (Partial de CreateTareaDto)
{
  titulo?: string
  descripcion?: string
  fecha_fin?: string
  completada?: boolean
}
```

#### ✅ **Configuración y Características**
- **CORS**: Habilitado para desarrollo local (puerto 4200)
- **Validación Global**: Pipes de validación configurados globalmente
- **Variables de Entorno**: Configuración con dotenv
- **Transformación**: Whitelist y transform habilitados
- **Error Handling**: Manejo centralizado de errores
- **Logging**: Sistema de logs integrado

#### ✅ **Dependencias Principales**
```json
{
  "@nestjs/core": "^11.0.1",
  "@nestjs/common": "^11.0.1",
  "@nestjs/config": "^4.0.2",
  "@prisma/client": "^6.11.1",
  "class-validator": "^0.14.2",
  "class-transformer": "^0.5.1",
  "prisma": "^6.11.1"
}
```

---

## 🎨 Frontend (Angular)

### 📱 Características Implementadas

#### ✅ **Aplicación Single Page (SPA) de Acceso Libre**
- **Framework**: Angular 19.2.0 con TypeScript
- **Routing**: Lazy loading components sin restricciones
- **UI Framework**: Angular Material 19.2.19
- **Forms**: Reactive Forms con validaciones robustas
- **Acceso**: No requiere login, acceso directo a todas las funciones

#### ✅ **Componentes Desarrollados**

##### 1. **NavBar Component (Simplificado)**
- **Tema dinámico**: Switch claro/oscuro con persistencia en localStorage
- **Navegación libre**: Enlaces directos sin autenticación
- **Responsive**: Adaptable a móvil, tablet y desktop
- **Branding**: Logo y título de la aplicación

##### 2. **Home Page Component (Dashboard Principal)**
- **Vista completa**: Dashboard con todas las tareas del sistema
- **Estados visuales**: Carga, error, lista vacía con mensajes apropiados
- **Acciones rápidas**: Botón "Nueva Tarea" prominente
- **Lista integrada**: Componente lista-tareas embebido
- **Responsive**: Layout adaptativo para todos los dispositivos

##### 3. **Lista Tareas Component (Mejorado)**
- **Visualización completa**: Todas las tareas del sistema sin filtros
- **Integración**: Comunicación perfecta con tarea-card component
- **Estados avanzados**: Loading spinners, manejo de errores, empty states
- **Refresh automático**: Actualización en tiempo real
- **Grid responsive**: Layout que se adapta al tamaño de pantalla

##### 4. **Tarea Card Component (Funcionalidad Completa)**
- **Modo Visualización**: 
  - Información completa de solo lectura
  - Título, descripción, fechas, estado visual
  - Design consistente con Material
- **Modo Edición Inline**: 
  - Formularios reactivos editables sin cambio de página
  - Validaciones en tiempo real
  - Transiciones suaves entre modos
- **Checkbox Interactivo**: 
  - Cambio visual inmediato de estado completado/pendiente
  - Persiste el estado en base de datos
  - Animaciones de transición
- **Botones de Acción**: 
  - **Editar**: Activa modo edición inline
  - **Guardar**: Valida y persiste cambios
  - **Cancelar**: Descarta cambios y vuelve a visualización
  - **Eliminar**: Confirmación y eliminación definitiva
- **Validaciones Avanzadas**: 
  - Mensajes de error descriptivos
  - Validación de longitudes y formatos
  - Feedback visual inmediato

##### 5. **Form Tarea Component (Formulario Avanzado)**
- **Campos completos**: Título, descripción, fecha límite
- **Validaciones robustas**: 
  - Título requerido (3-75 caracteres)
  - Descripción opcional (máx 200 caracteres)
  - Fecha límite con DatePicker de Material
- **UX mejorada**: Mensajes de ayuda y validación en tiempo real
- **Responsive**: Formulario adaptativo

##### 6. **Nueva Tarea Page (Página Dedicada)**
- **Formulario especializado**: Integra form-tarea component
- **Navegación fluida**: Regreso al home post-creación
- **Validaciones**: Mismas validaciones que edición inline
- **Feedback**: Mensajes de éxito/error con SnackBar

#### ✅ **Servicios Implementados**

##### 1. **Tareas Service (HTTP Completo)**
```typescript
// Métodos HTTP implementados con manejo de errores
getTareas(): Observable<Tarea[]>                    // Lista completa
getTarea(id: number): Observable<Tarea>             // Por ID
createTarea(tarea: Tarea): Observable<Tarea>        // Crear nueva
updateTarea(id: number, tarea: Partial<Tarea>): Observable<Tarea>  // Actualizar
deleteTarea(id: number): Observable<void>           // Eliminar

// Características adicionales
- Manejo de errores HTTP con retry automático
- Loading states integrados
- Caché temporal de datos
- Transformación automática de fechas
```

##### 2. **Theme Service (Gestión de Temas)**
- **Temas disponibles**: Claro y oscuro
- **Persistencia**: localStorage para recordar preferencia
- **Aplicación automática**: Detecta y aplica tema al cargar
- **Integración Material**: Variables CSS customizadas
- **Smooth transitions**: Transiciones suaves entre temas

#### ✅ **Routing Simplificado pero Completo**
```typescript
// Rutas públicas - sin guards de autenticación
Routes:
'/' → HomePageComponent (lazy load)              // Dashboard principal
'/nueva-tarea' → NuevaTareaComponent (lazy load) // Crear tarea
'/**' → redirect to '/'                          // Fallback
```

#### ✅ **Características UX/UI Avanzadas**
- **Material Design**: Componentes consistentes y modernos
- **Responsive Design**: Mobile-first approach
- **Tema Claro/Oscuro**: Switch intuitivo con persistencia
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Loading States**: Spinners elegantes y skeleton loaders
- **Error Handling**: Mensajes claros y acciones de recuperación
- **Touch-friendly**: Optimizado para dispositivos táctiles

#### ✅ **Dependencias y Configuración**
```json
{
  "@angular/core": "^19.2.0",
  "@angular/material": "^19.2.19",
  "@angular/cdk": "^19.2.19",
  "@angular/forms": "^19.2.0",
  "@angular/router": "^19.2.0",
  "@angular/common": "^19.2.0",
  "@angular/animations": "^19.2.0"
}
```

---

## 🗄️ Base de Datos (MySQL)

### 📊 Configuración y Esquema Simplificado

#### ✅ **Configuración de Conexión**
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=1234
DB_NAME=tasks_db
DATABASE_URL="mysql://root:1234@localhost:3306/tasks_db"
```

#### ✅ **Esquema Prisma (Simplificado)**
```prisma
model Tarea {
  id             Int       @id @default(autoincrement())
  titulo         String    @db.VarChar(75)
  descripcion    String?   @db.VarChar(200)
  fecha_creacion DateTime  @default(now()) @db.DateTime
  fecha_fin      DateTime? @db.Date
  completada     Boolean   @default(false)

  @@map("tareas")
}
```

#### ✅ **Estructura de Tabla MySQL**
```sql
CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(75) NOT NULL,
    descripcion VARCHAR(200),
    fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_fin DATE,
    completada BOOLEAN NOT NULL DEFAULT FALSE
);
```

#### ✅ **Características de la Base de Datos**
- **Simplicidad**: Esquema directo sin relaciones complejas
- **Acceso universal**: Todas las tareas son globales (sin usuarios)
- **Timestamps**: Fecha de creación automática
- **Flexibilidad**: Campos opcionales para mayor versatilidad
- **Performance**: Índices optimizados en campos de búsqueda frecuente

#### ✅ **Datos de Prueba Incluidos**
- **Script completo**: `create-database.sql` con estructura optimizada
- **Datos de ejemplo**: `seed-data.sql` con 5+ tareas variadas
- **Migraciones**: Prisma configurado con migración inicial
- **Reset fácil**: Scripts para reiniciar datos de prueba

#### ✅ **Prisma ORM Features Implementadas**
- **Client Generation**: Auto-generación de tipos TypeScript
- **Migrations**: Control de versiones de esquema simplificado
- **Type Safety**: Tipado fuerte en todas las consultas
- **Query Builder**: Sintaxis limpia y expresiva
- **Development Tools**: Prisma Studio para inspección visual
- **Seeding**: Datos de prueba automatizados

---

## � Manual de Usuario

### �🚀 Acceso y Navegación

#### **1. Acceso Directo a la Aplicación**
1. **Acceder**: Navega a `http://localhost:4200`
2. **Sin registro**: No necesitas crear cuenta ni iniciar sesión
3. **Acceso inmediato**: La aplicación carga directamente el dashboard
4. **Todas las funciones**: Acceso completo desde el primer momento

#### **2. Interfaz Principal (Dashboard)**
- **Vista general**: Todas las tareas del sistema en una sola pantalla
- **Acciones rápidas**: Botón "Nueva Tarea" prominente
- **Estados visuales**: Las tareas se muestran con colores y estados claros
- **Responsive**: Funciona perfectamente en móvil, tablet y desktop

### 📝 Gestión Completa de Tareas

#### **1. Ver Todas las Tareas**
- **Lista completa**: Al acceder verás todas las tareas del sistema
- **Sin filtros**: Todas las tareas son visibles para todos
- **Información mostrada**: 
  - Título de la tarea
  - Descripción (si tiene)
  - Fecha de creación
  - Fecha límite (si se estableció)
  - Estado: Pendiente ✏️ o Completada ✅
- **Layout responsive**: Se adapta automáticamente al tamaño de pantalla

#### **2. Crear Nueva Tarea**

##### **Método 1: Botón Nueva Tarea (Recomendado)**
1. **Click en "Nueva Tarea"**: Botón prominente en el dashboard
2. **Página dedicada**: Se abre formulario completo
3. **Campos disponibles**:
   - **Título**: Obligatorio, entre 3-75 caracteres
   - **Descripción**: Opcional, máximo 200 caracteres
   - **Fecha límite**: Opcional, selector de fecha intuitivo
4. **Guardar**: Click en "Crear Tarea"
5. **Regreso automático**: Vuelves al dashboard con la nueva tarea visible

##### **Método 2: Edición Rápida (Alternativo)**
- También puedes usar el formulario inline desde el dashboard principal

#### **3. Editar Tareas Existentes**
1. **Activar edición**: Click en botón "Editar" ✏️ en cualquier tarea
2. **Modo edición inline**: Los campos se vuelven editables sin cambiar de página
3. **Campos modificables**:
   - **Título**: Cambiar el nombre de la tarea
   - **Descripción**: Añadir, modificar o eliminar descripción
   - **Fecha límite**: Cambiar o establecer nueva fecha
4. **Opciones de guardado**:
   - **Guardar**: ✅ Aplica los cambios inmediatamente
   - **Cancelar**: ❌ Descarta cambios y vuelve al modo visualización
5. **Validaciones**: El sistema verifica que los datos sean correctos antes de guardar

#### **4. Marcar como Completada/Pendiente**
- **Checkbox intuitivo**: Click en la casilla ☑️ junto a cada tarea
- **Cambio visual inmediato**: 
  - ✅ **Completada**: Color verde, texto tachado
  - ☐ **Pendiente**: Color normal, texto regular
- **Reversible**: Puedes cambiar el estado tantas veces como quieras
- **Persistencia**: El estado se guarda automáticamente

#### **5. Eliminar Tareas**
1. **Botón eliminar**: Click en el icono de papelera 🗑️ en cada tarea
2. **Sin confirmación compleja**: Eliminación directa (ten cuidado)
3. **Eliminación inmediata**: La tarea desaparece del dashboard al instante
4. **Irreversible**: No hay papelera de reciclaje, la eliminación es definitiva

### 🎨 Personalización y Configuración

#### **1. Cambiar Tema Visual**
- **Toggle en navbar**: Icono de sol ☀️ / luna 🌙 en la barra superior
- **Temas disponibles**:
  - **Claro**: Fondo blanco, texto oscuro, ideal para uso diurno
  - **Oscuro**: Fondo oscuro, texto claro, ideal para uso nocturno
- **Aplicación inmediata**: El tema cambia al instante sin recargar
- **Persistencia**: Tu preferencia se guarda entre sesiones

#### **2. Navegación y Accesibilidad**
- **Keyboard friendly**: Navegación completa con teclado
- **Touch optimized**: Botones y controles optimizados para touch
- **Screen reader**: Compatible con lectores de pantalla
- **High contrast**: Buenos contrastes en ambos temas

### 💡 Consejos de Uso

#### **Mejores Prácticas**
1. **Títulos descriptivos**: Usa títulos claros y específicos
2. **Fechas límite**: Establece fechas para tareas importantes
3. **Descripciones útiles**: Añade contexto cuando sea necesario
4. **Revisión regular**: Marca tareas completadas regularmente
5. **Limpieza**: Elimina tareas obsoletas para mantener orden

#### **Atajos y Trucos**
- **Edición rápida**: Double-click en una tarea para editarla rápidamente
- **Enter para guardar**: En modo edición, presiona Enter para guardar
- **Escape para cancelar**: Presiona Escape para cancelar edición
- **Tab navigation**: Usa Tab para navegar entre campos

---

## 👨‍💻 Manual para Desarrollador

### 🔧 Configuración del Entorno de Desarrollo

#### **1. Prerrequisitos**
```bash
# Software requerido
- Node.js 18+ (LTS recomendado)
- MySQL 8.0+ (o MariaDB 10.5+)
- Git para control de versiones
- VS Code (recomendado) con extensiones Angular y TypeScript

# Herramientas globales a instalar
npm install -g @angular/cli@19
npm install -g @nestjs/cli@10
```

#### **2. Configuración de Base de Datos**
```sql
-- 1. Crear base de datos
CREATE DATABASE tasks_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. Crear usuario específico (opcional pero recomendado)
CREATE USER 'tasks_dev'@'localhost' IDENTIFIED BY 'dev_password';
GRANT ALL PRIVILEGES ON tasks_db.* TO 'tasks_dev'@'localhost';
FLUSH PRIVILEGES;

-- 3. Verificar conexión
USE tasks_db;
SHOW TABLES; -- Debería estar vacío inicialmente
```

#### **3. Setup Backend (NestJS)**
```bash
# Navegar al directorio backend
cd tasks-backend-nestjs

# Instalar todas las dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales reales:
# - DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
# - PORT para el servidor (default: 4000)

# Configurar Prisma ORM
npx prisma generate          # Generar cliente TypeScript
npx prisma migrate dev       # Aplicar migraciones
npx prisma db seed          # Cargar datos de prueba (opcional)

# Verificar configuración
npx prisma studio           # Abrir interfaz visual (opcional)

# Iniciar en modo desarrollo
npm run start:dev

# ✅ Backend corriendo en: http://localhost:4000
# ✅ API disponible en: http://localhost:4000/tareas
```

#### **4. Setup Frontend (Angular)**
```bash
# Navegar al directorio frontend
cd tasks-frontend-angular

# Instalar todas las dependencias
npm install

# Verificar versión de Angular
ng version

# Configurar variables (si aplica)
# Este proyecto no requiere configuración especial de environment

# Iniciar servidor de desarrollo
ng serve

# Opciones adicionales:
ng serve --open             # Abre automáticamente en navegador
ng serve --port 4201        # Cambiar puerto si 4200 está ocupado

# ✅ Frontend corriendo en: http://localhost:4200
```

### 🏗️ Arquitectura Detallada del Proyecto

#### **Backend (NestJS) - Estructura**
```
tasks-backend-nestjs/
├── src/
│   ├── app.controller.ts           # Controller principal (health check)
│   ├── app.module.ts               # Módulo raíz
│   ├── app.service.ts              # Service principal
│   ├── main.ts                     # Bootstrap de la aplicación
│   ├── prisma/                     # Módulo Prisma
│   │   ├── prisma.module.ts        # Configuración de Prisma
│   │   └── prisma.service.ts       # Cliente Prisma singleton
│   └── tareas/                     # Módulo de Tareas
│       ├── dto/                    # Data Transfer Objects
│       │   ├── create-tarea.dto.ts # DTO para crear tarea
│       │   └── update-tarea.dto.ts # DTO para actualizar tarea
│       ├── tareas.controller.ts    # REST endpoints
│       ├── tareas.module.ts        # Configuración del módulo
│       └── tareas.service.ts       # Lógica de negocio
├── prisma/
│   ├── schema.prisma               # Esquema de BD
│   ├── seed.ts                     # Datos de prueba
│   └── migrations/                 # Historial de migraciones
├── test/                          # Tests end-to-end
├── .env.example                   # Template de variables
├── package.json                   # Dependencias y scripts
└── tsconfig.json                  # Configuración TypeScript
```

#### **Frontend (Angular) - Estructura**
```
tasks-frontend-angular/
├── src/
│   ├── app/
│   │   ├── components/             # Componentes reutilizables
│   │   │   ├── form-tarea/         # Formulario de tareas
│   │   │   ├── lista-tareas/       # Lista de tareas
│   │   │   ├── navbar/             # Barra de navegación
│   │   │   └── tarea-card/         # Tarjeta individual
│   │   ├── models/                 # Interfaces TypeScript
│   │   │   └── tarea.model.ts      # Modelo de Tarea
│   │   ├── pages/                  # Páginas principales
│   │   │   ├── home-page/          # Dashboard principal
│   │   │   └── nueva-tarea/        # Página crear tarea
│   │   ├── services/               # Servicios HTTP
│   │   │   ├── tareas.service.ts   # API de tareas
│   │   │   └── theme.service.ts    # Gestión de temas
│   │   ├── app.component.ts        # Componente raíz
│   │   ├── app.routes.ts           # Configuración de rutas
│   │   └── environments/           # Variables de entorno
│   ├── styles.css                  # Estilos globales
│   ├── index.html                  # HTML principal
│   └── main.ts                     # Bootstrap Angular
├── angular.json                    # Configuración Angular CLI
├── package.json                    # Dependencias y scripts
└── tsconfig.json                   # Configuración TypeScript
```

### 🔧 Desarrollo y Debugging

#### **Scripts Disponibles Backend**
```bash
# Desarrollo
npm run start              # Iniciar aplicación
npm run start:dev          # Modo desarrollo (auto-reload)
npm run start:debug        # Modo debug
npm run start:prod         # Modo producción

# Building
npm run build              # Compilar TypeScript
npm run format             # Formatear código con Prettier
npm run lint               # Linter ESLint

# Testing
npm run test               # Tests unitarios
npm run test:watch         # Tests en modo watch
npm run test:cov           # Cobertura de tests
npm run test:e2e           # Tests end-to-end

# Base de datos
npx prisma studio          # Interfaz visual de BD
npx prisma migrate reset   # Resetear BD
npx prisma db seed         # Re-seed de datos
```

#### **Scripts Disponibles Frontend**
```bash
# Desarrollo
ng serve                   # Servidor de desarrollo
ng build                   # Build para producción
ng build --watch           # Build continuo
ng lint                    # Linter
ng test                    # Tests unitarios
ng e2e                     # Tests end-to-end

# Generación de código
ng generate component nombre     # Nuevo componente
ng generate service nombre       # Nuevo servicio
ng generate module nombre        # Nuevo módulo

# Análisis
ng build --stats-json            # Estadísticas de build
ng analytics                     # Analytics de uso
```

#### **Debugging en VS Code**
1. **Backend**: 
   - Usar configuración de debug incluida
   - Breakpoints en archivos .ts
   - Variables y call stack disponibles

2. **Frontend**:
   - Chrome DevTools con source maps
   - Angular DevTools extension
   - Breakpoints en archivos .ts

#### **Base de Datos - Herramientas**
```bash
# Prisma Studio (Interfaz visual)
npx prisma studio

# Conectar a MySQL directamente
mysql -u root -p tasks_db

# Ver logs de queries (desarrollo)
# Añadir en schema.prisma:
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  # log = ["query", "info", "warn", "error"]
}
```

### 📦 Build y Despliegue

#### **Build para Producción**

##### **Backend**
```bash
# Build optimizado
npm run build

# El directorio dist/ contiene la aplicación compilada
# Estructura: dist/src/main.js + dependencias

# Variables de entorno producción
cp .env.example .env.production
# Configurar:
# - URL de BD de producción
# - NODE_ENV=production
# - PORT=puerto_deseado

# Ejecutar en producción
npm run start:prod
```

##### **Frontend**
```bash
# Build optimizado para producción
ng build --configuration production

# Resultado en dist/tasks-frontend-angular/
# Archivos estáticos listos para servir

# Opciones avanzadas:
ng build --aot                 # Ahead-of-Time compilation
ng build --build-optimizer     # Optimizaciones adicionales
ng build --stats-json          # Generar estadísticas
```

#### **Dockerización (Opcional)**
```dockerfile
# Backend Dockerfile incluido
# Para construir imagen:
cd tasks-backend-nestjs
docker build -t tasks-backend .

# Para ejecutar:
docker run -p 4000:4000 -e DATABASE_URL="..." tasks-backend
```

### 🧪 Testing y Calidad

#### **Testing Backend**
```bash
# Configuración Jest incluida
npm run test                # Tests unitarios
npm run test:watch          # Modo watch
npm run test:cov            # Con cobertura

# Estructura de tests:
src/tareas/tareas.service.spec.ts     # Tests del service
src/tareas/tareas.controller.spec.ts  # Tests del controller
```

#### **Testing Frontend**
```bash
# Configuración Jasmine/Karma incluida
ng test                     # Tests unitarios
ng test --watch=false       # Una sola ejecución
ng test --code-coverage     # Con cobertura

# Tests ubicados junto a cada archivo:
*.component.spec.ts         # Tests de componentes
*.service.spec.ts           # Tests de servicios
```

### 🛠️ VS Code - Configuración Optimizada

#### **Extensiones Recomendadas**
```json
{
  "recommendations": [
    "angular.ng-template",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "prisma.prisma"
  ]
}
```

#### **Tasks Configuradas**
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend",
      "type": "shell",
      "command": "cd tasks-backend-nestjs && npm run start:dev",
      "group": "build",
      "isBackground": true
    },
    {
      "label": "Start Frontend", 
      "type": "shell",
      "command": "cd tasks-frontend-angular && ng serve",
      "group": "build",
      "isBackground": true
    },
    {
      "label": "Full Setup",
      "dependsOrder": "sequence",
      "dependsOn": ["Install Backend", "Install Frontend", "Setup DB"]
    }
  ]
}
```

### 🚀 Guía de Contribución

#### **Flujo de Desarrollo**
1. **Fork & Clone**: Hacer fork del repositorio
2. **Branch**: Crear branch para feature/bugfix
3. **Develop**: Implementar cambios con tests
4. **Test**: Ejecutar todos los tests
5. **Commit**: Commits descriptivos
6. **Pull Request**: PR con descripción detallada

#### **Convenciones de Código**
- **TypeScript**: Tipado fuerte obligatorio
- **ESLint**: Seguir reglas configuradas
- **Prettier**: Formateo automático
- **Naming**: camelCase para variables, PascalCase para clases
- **Comments**: JSDoc para funciones públicas

---

## 🔒 Configuración y Variables de Entorno

### ⚠️ **IMPORTANTE: Archivos .env**

**NUNCA subas archivos `.env` al repositorio** - contienen información sensible como:
- Credenciales de base de datos
- URLs de conexión con passwords
- Configuraciones específicas del entorno

### ✅ **Configuración Implementada**

#### **Variables de Entorno Backend (.env)**
```bash
# Base de datos
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=tasks_db
DATABASE_URL="mysql://root:your-password@localhost:3306/tasks_db"

# Configuración del servidor
PORT=4000
NODE_ENV=development

# Configuración CORS (opcional)
FRONTEND_URL=http://localhost:4200
```

#### **Configuración Inicial**
```bash
# 1. Copiar archivo de ejemplo
cp tasks-backend-nestjs/.env.example tasks-backend-nestjs/.env

# 2. Editar con tus valores reales
# - Cambiar credenciales de base de datos
# - Ajustar puertos si es necesario
# - Configurar URLs según tu entorno
```

#### **Archivos .gitignore Configurados**
- ✅ `.gitignore` principal en la raíz
- ✅ `.gitignore` específico en backend y frontend  
- ✅ Exclusión de todos los archivos `.env*` (excepto `.env.example`)
- ✅ Exclusión de node_modules, dist, build, logs

### 🛡️ **Mejores Prácticas Implementadas**
- ✅ **Variables externalizadas**: Configuración sensible en archivos .env
- ✅ **Validación de entrada**: Class-validator en todos los endpoints
- ✅ **CORS configurado**: Protección contra requests no autorizados
- ✅ **Error handling**: Manejo centralizado de errores
- ✅ **Logging**: Sistema de logs para debugging

---

## 🧪 Testing y Calidad de Código

### 📊 **Testing Implementado**

#### **Backend (NestJS)**
```bash
# Ejecutar tests
npm run test                # Tests unitarios
npm run test:watch          # Modo watch para desarrollo  
npm run test:cov            # Tests con reporte de cobertura
npm run test:e2e            # Tests end-to-end

# Debugging tests
npm run test:debug          # Tests en modo debug
```

**Archivos de Test:**
- ✅ `src/app.controller.spec.ts` - Tests del controller principal
- ✅ `src/tareas/tareas.controller.spec.ts` - Tests endpoints de tareas
- ✅ `src/tareas/tareas.service.spec.ts` - Tests lógica de negocio
- ✅ `test/app.e2e-spec.ts` - Tests de integración

#### **Frontend (Angular)**
```bash
# Ejecutar tests
ng test                     # Tests unitarios
ng test --watch=false       # Una sola ejecución
ng test --code-coverage     # Con reporte de cobertura
ng e2e                      # Tests end-to-end (si configurado)
```

**Archivos de Test:**
- ✅ `*.component.spec.ts` - Tests de componentes
- ✅ `*.service.spec.ts` - Tests de servicios
- ✅ `app.component.spec.ts` - Tests del componente raíz

### 📈 **Herramientas de Calidad**
- **ESLint**: Linting configurado para TypeScript
- **Prettier**: Formateo automático de código
- **Jest**: Framework de testing para backend
- **Jasmine/Karma**: Testing para Angular
- **TypeScript**: Tipado fuerte en todo el proyecto

---

## 📊 Funcionalidades Implementadas vs Roadmap

### ✅ **Completado al 100%**
- [x] **CRUD completo de tareas**
  - [x] Crear tareas con validaciones
  - [x] Leer/listar todas las tareas
  - [x] Actualizar tareas (inline y página dedicada)
  - [x] Eliminar tareas
  - [x] Cambiar estado completado/pendiente
- [x] **Frontend responsive completo**
  - [x] Angular Material Design System
  - [x] Tema claro/oscuro con persistencia
  - [x] Todas las páginas implementadas
  - [x] Validaciones en tiempo real
  - [x] Estados de carga y error
- [x] **Backend robusto**
  - [x] API REST completa con NestJS
  - [x] Base de datos MySQL con Prisma ORM
  - [x] Validaciones de entrada robustas
  - [x] Manejo de errores centralizado
- [x] **Base de datos optimizada**
  - [x] Esquema simplificado pero funcional
  - [x] Migraciones de Prisma configuradas
  - [x] Datos de prueba incluidos
- [x] **DevOps y Tooling**
  - [x] VS Code tasks configuradas
  - [x] Docker ready (backend)
  - [x] Scripts de desarrollo y producción
  - [x] Configuración de entornos

### 🔄 **Próximas Mejoras Sugeridas**
- [ ] **Funcionalidades avanzadas**
  - [ ] Sistema de autenticación (ver versión con login)
  - [ ] Categorías y etiquetas de tareas
  - [ ] Filtros y búsqueda avanzada
  - [ ] Ordenamiento personalizable
- [ ] **Mejoras de productividad**
  - [ ] Drag & drop para reordenar
  - [ ] Selección múltiple (bulk operations)
  - [ ] Templates de tareas frecuentes
  - [ ] Export/Import (JSON, CSV)
- [ ] **UX/UI Enhancements**
  - [ ] PWA (Progressive Web App)
  - [ ] Notificaciones de navegador
  - [ ] Modo offline básico
  - [ ] Atajos de teclado avanzados
- [ ] **Performance y Escalabilidad**
  - [ ] Paginación de tareas
  - [ ] Lazy loading de imágenes
  - [ ] Caché inteligente
  - [ ] Optimización de queries
- [ ] **DevOps y Deployment**
  - [ ] CI/CD pipelines completos
  - [ ] Deployment automatizado
  - [ ] Monitoring y métricas
  - [ ] Backup automático de BD

---

## 🎯 Casos de Uso Completos Soportados

### 📝 **Gestión Básica de Tareas**
1. **Creación rápida**: Usuario crea tarea con título, opcionalmente descripción y fecha
2. **Visualización clara**: Lista todas las tareas con estado visual claro
3. **Edición flexible**: Modificación inline o en página dedicada
4. **Cambio de estado**: Marcar como completada/pendiente con un click
5. **Eliminación**: Borrado rápido de tareas no deseadas

### ✏️ **Edición Avanzada**
1. **Edición inline**: Cambiar cualquier campo sin salir de la lista
2. **Validación en tiempo real**: Feedback inmediato sobre errores
3. **Cancelación de cambios**: Posibilidad de descartar modificaciones
4. **Formulario dedicado**: Página completa para crear tareas complejas

### 🎨 **Experiencia de Usuario**
1. **Temas adaptativos**: Modo claro/oscuro según preferencia
2. **Responsive design**: Funciona en cualquier dispositivo
3. **Estados visuales**: Loading, error, empty states manejados
4. **Navegación fluida**: SPA sin recargas de página
5. **Accesibilidad**: Compatible con lectores de pantalla

### 🔧 **Casos de Desarrollo**
1. **Setup rápido**: Configuración en minutos con scripts automatizados
2. **Desarrollo en vivo**: Hot reload en frontend y backend
3. **Testing**: Suite completa de tests unitarios y e2e
4. **Debugging**: Herramientas de debug integradas
5. **Deployment**: Scripts para build de producción

---

## 📁 Estructura Completa del Proyecto

```
tasks-sinLogin/
├── 📄 README.md (este archivo)
├── 📄 CAMBIOS-LISTA-TAREAS.md (changelog de UI)
├── 🔧 .vscode/
│   └── tasks.json (VS Code tasks configuradas)
├── 🖥️ tasks-backend-nestjs/
│   ├── 📦 package.json (dependencias backend)
│   ├── 🔧 tsconfig.json, nest-cli.json, eslint.config.mjs
│   ├── 🐳 Dockerfile (containerización)
│   ├── 🔐 .env.example (template de variables)
│   ├── 🗄️ db/ (scripts SQL)
│   │   ├── create-database.sql
│   │   └── seed-data.sql  
│   ├── 🗄️ prisma/ (ORM configuration)
│   │   ├── schema.prisma (esquema de BD)
│   │   ├── seed.ts (datos de prueba)
│   │   └── migrations/ (historial de cambios)
│   ├── 📂 src/ (código fuente)
│   │   ├── main.ts (entry point)
│   │   ├── app.module.ts (módulo raíz)
│   │   ├── 🗄️ prisma/ (módulo Prisma)
│   │   └── 📝 tareas/ (módulo de tareas)
│   │       ├── dto/ (Data Transfer Objects)
│   │       ├── tareas.controller.ts
│   │       ├── tareas.service.ts
│   │       └── tareas.module.ts
│   └── 🧪 test/ (tests e2e)
└── 🌐 tasks-frontend-angular/
    ├── 📦 package.json (dependencias frontend)
    ├── 🔧 angular.json, tsconfig.json
    ├── 🔐 .env.example (si aplicable)
    ├── 📂 public/ (assets estáticos)
    └── 📂 src/ (código fuente)
        ├── main.ts (bootstrap Angular)
        ├── index.html, styles.css (template y estilos)
        └── 📂 app/ (aplicación)
            ├── app.component.ts (componente raíz)
            ├── app.routes.ts (configuración rutas)
            ├── 📂 components/ (componentes reutilizables)
            │   ├── navbar/ (barra navegación)
            │   ├── lista-tareas/ (lista principal)
            │   ├── tarea-card/ (tarjeta individual)
            │   └── form-tarea/ (formulario)
            ├── 📂 pages/ (páginas principales)
            │   ├── home-page/ (dashboard)
            │   └── nueva-tarea/ (crear tarea)
            ├── 📂 services/ (servicios HTTP)
            │   ├── tareas.service.ts
            │   └── theme.service.ts
            ├── 📂 models/ (interfaces TypeScript)
            │   └── tarea.model.ts
            └── 📂 environments/ (configuración entornos)
```

---

*Desarrollado con ❤️ usando Angular + NestJS + MySQL*

**Versión**: Sin autenticación - Acceso libre y directo a todas las funcionalidades  
**Enfoque**: Simplicidad, usabilidad y desarrollo rápido  
**Ideal para**: Prototipos, demos, uso personal o equipos pequeños
