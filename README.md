# Life Simulator

Una aplicación personal de planificación de vida que te permite explorar estilos de vida alternativos, modelar sus implicaciones financieras, descubrir productos y propiedades del mundo real, y mejorar iterativamente tus planes con un colaborador de IA.

## Características principales

- **Gestión de escenarios**: Crea y compara diferentes escenarios financieros (Baloto, Powerball, salario, venta de negocio, etc.)
- **Dream Studio**: Describe tu vida ideal en lenguaje natural y conviértela en un plan estructurado
- **Exploración del mundo real**: Descubre propiedades, vehículos y experiencias reales
- **Motor financiero**: Cálculos transparentes de flujo de caja, proyecciones y patrimonio neto
- **Colección personal**: Guarda y organiza elementos de interés
- **Plan financiero**: Visualiza el impacto de tus decisiones
- **Asesor IA**: Colabora con inteligencia artificial para optimizar tus planes
- **Control de versiones**: Guarda y compara diferentes versiones de tus planes

## Stack tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Validación**: Zod
- **Gráficos**: Recharts
- **Iconos**: Lucide React

## Comenzar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
life-simulator/
├── app/                    # Rutas de la aplicación (Next.js App Router)
│   ├── escenarios/        # Gestión de escenarios financieros
│   ├── disena/           # Dream Studio - diseño de vida
│   ├── explorar/         # Búsqueda de propiedades y elementos
│   ├── coleccion/        # Colección personal de elementos guardados
│   ├── plan/             # Plan financiero detallado
│   ├── asesor/           # Chat con asesor IA
│   ├── versiones/        # Historial de versiones
│   └── configuracion/    # Configuración de la aplicación
├── components/            # Componentes React reutilizables
│   ├── ui/               # Componentes UI base
│   ├── sidebar.tsx       # Navegación lateral
│   ├── topbar.tsx        # Barra superior
│   └── app-layout.tsx    # Layout principal
└── lib/                   # Lógica de negocio y utilidades
    ├── types.ts          # Definiciones de tipos TypeScript/Zod
    ├── data-store.ts     # Almacenamiento de datos en memoria
    ├── financial-engine.ts # Motor de cálculos financieros
    └── utils.ts          # Funciones utilitarias
```

## Motor financiero

El motor de cálculos financieros (`lib/financial-engine.ts`) proporciona:

- Cálculo de capital inicial neto (después de impuestos y costos)
- Suma de costos de adquisición y configuración
- Flujo de caja mensual neto (ingresos - gastos)
- Proyecciones de patrimonio neto a lo largo del tiempo
- Cálculo de años hasta agotamiento en caso de flujo negativo
- Formateo de moneda localizado

Todos los cálculos son deterministas y están diseñados para ser cubiertos por tests unitarios.

## Próximas mejoras

### Fase actual: Fundación funcional ✅
- [x] Estructura de navegación y diseño
- [x] Modelos de datos y tipos
- [x] Motor de cálculos financieros
- [x] Dashboard funcional
- [x] Gestión básica de escenarios
- [x] Dream Studio básico

### Fase 2: Exploración del mundo real
- [ ] Integración con APIs de búsqueda de propiedades
- [ ] Búsqueda de vehículos
- [ ] Guardado manual de URLs
- [ ] Gestión completa de colección

### Fase 3: Colaboración con IA
- [ ] Integración con proveedor de IA
- [ ] Generación mejorada de planes de vida
- [ ] Propuestas de mejora con flujo de aprobación
- [ ] Análisis contextual de escenarios

### Fase 4: Migración de Excel
- [ ] Importador de archivos .xlsx
- [ ] Análisis de fórmulas
- [ ] Recreación de cálculos en TypeScript
- [ ] Suite de validación y testing

### Fase 5: Pulido y producción
- [ ] Comparación de versiones lado a lado
- [ ] Persistencia en base de datos
- [ ] Autenticación de usuarios
- [ ] Tests completos
- [ ] Optimización de rendimiento

## Filosofía del producto

Life Simulator se construye alrededor de cinco principios:

1. **El usuario posee la visión**: La IA puede sugerir, cuestionar y evaluar, pero nunca cambia silenciosamente el plan del usuario
2. **La exploración del mundo real importa**: Los usuarios descubren opciones reales, guardan URLs originales y las evalúan dentro de sus planes
3. **Los sueños son escenarios editables**: Los usuarios pueden describir cualquier vida que imaginen y explorar qué implicaría ese estilo de vida
4. **Los cálculos financieros deben ser transparentes**: Cada cifra importante debe tener una fórmula, fuente o suposición explícita identificable
5. **La iteración es el flujo de trabajo principal**: Los usuarios pueden experimentar, comparar alternativas, preservar versiones anteriores y continuar hasta estar satisfechos

## Licencia

Proyecto personal - Todos los derechos reservados
