# Life Simulator - Design Analysis
## Figma Export Analysis - 14 Screens

Date: October 27, 2026
Source: design-reference.html (Figma export)

---

## Overview
This document contains a comprehensive analysis of the Life Simulator app design system based on 14 screens exported from Figma. The app is a personal life planning application in Spanish that allows users to explore alternative lifestyles, model financial implications, and discover real-world products.

---

## 1. COLOR PALETTE

### Primary Colors
- **Accent/Primary (Bosque)**: `#2E5A44` - Deep forest green
  - Used for primary buttons, active states, navigation highlights
  - Creates a sophisticated, trustworthy financial planning feel

- **Asesor IA (AI Blue)**: `#3A5674` - Muted blue
  - Used for AI-related features and suggestions
  - Distinguishes AI-generated content from user input

### Secondary Colors
- **Estimado (Estimated)**: `#B7570F` - Burnt orange/amber
  - Used for estimated values and provisional data
  - Warning/attention color without being alarming

- **Salidas/Extraordinario (Extraordinary/Exits)**: `#BC3F2B` - Deep red
  - Used for extraordinary expenses, negative flows
  - Clearly indicates outflows or caution items

### Background Colors
- **Fondo (Background)**: `#F8F4EF` - Warm off-white/cream
  - Main background color throughout the app
  - Provides warmth and reduces eye strain

- **Texto/Carbón (Text/Carbon)**: `#1E2320` - Near black
  - Primary text color
  - Excellent contrast against cream background

### Neutral/Illustrative Colors
- Multiple muted tones used for illustrative elements:
  - Sage greens
  - Soft blues
  - Warm beiges
  - Terracotta/rust tones
- These create visual interest in property cards and illustrations without competing with data

### Status Indicators
- **Verificado (Verified)**: Green indicator for verified data
- **Estimado (Estimated)**: Orange/amber for estimates
- **Calculado (Calculated)**: Likely uses primary green for calculated values
- **Pendiente (Pending)**: Amber/orange for pending states

---

## 2. TYPOGRAPHY

### Primary Font Family
**Geist** - Modern, geometric sans-serif
- Licensed under SIL Open Font License 1.1
- Used throughout for interface and content

**Instrument Serif** - Elegant serif font
- Used for titles and large headings (84/60/44/32 point sizes)
- Creates hierarchy and sophistication
- Used in formats like: `11.835 · 14.2 · 3.200`

### Font Hierarchy

#### Display/Hero Text
- **Instrument Serif**: 84/60/44/32 points
- Used for main page titles and hero sections
- Examples: "Baloto + Vida de finca", "¿Cómo te imaginas tu vida?"

#### Body Text - Geist
- **Regular weight (17/15/13 points)**: Base body text, descriptions
- **Medium (400, 500, 600 weights)**: Labels, emphasized text
- Numbers are tabular: `11.835 · 14.2 · 3.200`

#### Small Text
- Smallest readable size appears to be 13pt
- Used for metadata, timestamps, secondary information

### Special Typography Patterns
1. **Financial Numbers**: Always use tabular figures for alignment
2. **Currency Format**: "COP 11.835 M" or "$11.835 millones"
3. **Italics**: Used sparingly for "tu" in "Diseña tu vida" - adds personality
4. **Line Height**: Generous spacing for readability (appears to be ~1.5 for body text)

---

## 3. SPACING & LAYOUT

### Grid System
- Appears to use 8px base unit system
- Consistent padding/margins throughout
- Desktop width: ~1200px max content width with side margins

### Common Spacing Values
- **Tight**: 8-12px (between related elements)
- **Default**: 16-24px (standard component spacing)
- **Generous**: 32-48px (section separation)
- **Large**: 64-80px (major section breaks)

### Layout Patterns

#### Container Patterns
1. **Full-width with contained content**: Most screens
2. **Cards with 16-24px padding**: Property cards, scenario cards
3. **Modals**: Centered with overlay, rounded corners (~12px radius)

#### Navigation
- **Top bar height**: ~64-72px
- **Logo left**, **scenario selector center**, **utilities right**
- Horizontal menu items with ~24-32px spacing
- Active state: Underline with primary color

#### Content Sections
- Clear visual hierarchy with whitespace
- Headers followed by 24-32px gap before content
- Related items grouped with tighter spacing (8-12px)

---

## 4. COMPONENT STYLES

### Buttons

#### Primary Button (Guardar, Continuar, etc.)
- **Background**: `#2E5A44` (primary green)
- **Text**: White
- **Padding**: ~12-16px vertical, 24-32px horizontal
- **Border radius**: ~8px
- **States**:
  - Normal: Solid color
  - Hover: Slightly darker
  - Focus: Visible outline
  - Disabled: Reduced opacity (~40%)

#### Secondary Button (Duplicar, Cancelar)
- **Background**: Transparent or light gray
- **Border**: 1-2px solid neutral
- **Text**: Dark gray
- **Same spacing/radius as primary**

#### Tertiary/Text Button
- **No background or border**
- **Underlined on hover**
- **Primary color text**

#### Button with Icon
- Icon + text with ~8px gap
- Plus icon for "Crear" actions

### Input Fields

#### Text Input
- **Border**: 1px solid light gray
- **Border radius**: ~8px
- **Padding**: ~12px vertical, 16px horizontal
- **Focus state**: Primary color border, possible subtle shadow
- **Error state**: Red border with error message below

#### Currency/Number Input
- **Currency prefix**: "COP", "USD" shown as label or prefix
- **Comma thousand separators**: Automatically formatted
- **Right-aligned**: For better number comparison

#### Dropdown/Select
- **Chevron icon**: Down arrow on right
- **Same styling as text input**
- **Active/open**: Shows options list with shadow

#### Search Input
- **Search icon**: Left side
- **Rounded pill shape**: More rounded than standard inputs (~24px radius)
- **Light background**: Slightly darker than page background

### Cards

#### Property/Item Card
- **Border radius**: ~12px
- **Shadow**: Subtle (0 2px 8px rgba(0,0,0,0.08))
- **Padding**: 16-20px
- **Image aspect ratio**: Appears to be 16:9 or 4:3
- **Hover state**: Slight elevation increase

#### Scenario Card
- **Similar to property card**
- **Status badge**: Top-right corner
- **Prominent title and financial figure**
- **Action buttons at bottom**

#### Info Card/Panel
- **Lighter background**: Slightly off-white or tinted
- **Optional border**: Very subtle
- **Rounded corners**: ~12px

### Data Visualization

#### Charts
- **Line charts**: Clean lines, gridlines subtle
- **Bar charts**: Rounded rectangle bars
- **Colors**: Uses palette colors consistently
- **Labels**: Small, Geist font
- **Tooltips**: On hover, white background with shadow

#### Financial Breakdowns
- **Waterfall charts**: Show progression from gross to net
- **Color coding**: 
  - Positive/additions: Primary green
  - Negative/deductions: Red
  - Neutral: Gray
- **Bar segments**: With labels and values

#### Progress Indicators
- **Horizontal bars**: Showing allocation percentages
- **Stacked segments**: Different colors for categories
- **Labels**: Both start and end

### Tags/Badges
- **Small rounded rectangles**: ~4-6px radius
- **Padding**: 4-8px vertical, 8-12px horizontal
- **Font size**: Small (11-13px)
- **Types**:
  - Status (Activo, Guardado, Provisional): Colored backgrounds
  - Category (Terrenos, Carros, Clubes): Neutral backgrounds
  - Interactive filters: Can be selected/deselected

### Dialogs/Modals
- **Overlay**: Dark semi-transparent (~40% opacity)
- **Modal**: White background, centered
- **Border radius**: ~16px
- **Padding**: 24-32px
- **Max width**: ~500-600px
- **Header**: Title + optional close button
- **Footer**: Action buttons right-aligned

### Empty States
- **Icon**: Large, centered, muted color
- **Text**: Explanatory message
- **Action**: Primary button to resolve

### Loading States
- **Skeleton screens**: Gray placeholder shapes
- **Spinners**: Subtle, primary color
- **Text**: "Buscando en 2 portales..."

### Error States
- **Red background**: Light red/pink tint
- **Red border**: On affected input
- **Error icon**: Exclamation or X
- **Error message**: Red text below input

### Success/Confirmation States
- **Green checkmark**: Circle background
- **Success message**: Temporary toast or permanent card
- **Green accent**: Subtle use of color

---

## 5. NAVIGATION STRUCTURE

### Top Navigation Bar (Navegación superior)
**Components (left to right):**
1. **Logo**: "A Mi Manera" with tree/leaf icon
2. **Main Navigation Menu**:
   - Inicio
   - Escenarios
   - Diseña tu vida
   - Explorar
   - Mi colección
   - Proyectos
   - Evaluación
   - Finanzas
   - Asesor GPT
3. **Utility Items** (right):
   - Scenario selector dropdown: "ESCENARIO ACTIVO: Baloto + Vida de finca"
   - Search: Icon button
   - Versiones: Version history button
   - Theme toggle: Sun/moon icon
   - User initials: "MR" in circle

**Behavior:**
- Sticky/fixed to top
- Active page underlined with primary color
- Responsive: Likely collapses to hamburger on mobile

### Breadcrumbs
- Shown below top nav on detail pages
- Format: "Escenarios / Baloto + Vida de finca / Versiones"
- Links to parent pages
- Current page in regular weight

### Tabs
- Used for sub-navigation within pages
- Examples:
  - Finanzas: Resumen | Flujo de caja | Patrimonio | Ingresos y gastos | etc.
  - Proyectos: Resumen | Supuestos | Hitos | Investigación | Relacionados
- **Active tab**: Underlined with primary color
- **Hover**: Subtle color change

### Multi-step Flows (Wizards)
- Used in "Crear escenario"
- **Step indicators**: Numbered circles
  1. Tipo de escenario
  2. Datos
  3. Supuestos financieros
  4. Revisar y guardar
- **Progress line**: Connects completed steps
- **Current step**: Highlighted circle
- **Buttons**: "Atrás" (back) and "Continuar" (continue) at bottom

---

## 6. UI PATTERNS & DESIGN SYSTEM ELEMENTS

### Recurring Patterns

#### 1. **Scenario Selector**
- **Location**: Always visible in top nav
- **Format**: Dropdown with current scenario name
- **Purpose**: Quick switching between financial scenarios
- **Visual**: Dark text on light background with chevron

#### 2. **Financial Summary Cards**
- **Pattern**: Large number + label + status indicator
- **Examples**:
  - "Capital neto disponible: $11.835 M"
  - "Ingreso recurrente: $14,2 M / mes"
- **Status**: Icons for verified, estimated, calculated
- **Hover**: May reveal formula or details

#### 3. **Comparison Tables**
- **Structure**: Side-by-side columns for alternatives
- **Headers**: Bold scenario names
- **Rows**: Aligned metrics
- **Highlighting**: Differences in color
- **Actions**: "Comparar" checkbox to select items

#### 4. **AI Suggestions**
- **Visual distinction**: Blue badge "Sugerencia IA"
- **Action options**: "Aceptar" (accept) or "Quitar" (dismiss)
- **Context**: Shows why suggestion was made
- **Editable**: User can modify before accepting

#### 5. **Property/Item Listings**
- **Grid layout**: 2-3 columns on desktop
- **Card components**: Image, title, price, key details, actions
- **Filters**: Top of listing (location, price, features)
- **Source attribution**: "Fuente: [Portal de origen]" link
- **Save action**: Heart/bookmark icon

#### 6. **Version History**
- **Timeline view**: Chronological list of saved versions
- **Each version shows**:
  - Version name
  - Date
  - Status (Guardada, Provisional, Activa)
  - Key metrics
- **Actions**: "Duplicar como escenario nuevo" or "Restaurar v3"

#### 7. **Chat Interface (Asesor GPT)**
- **Two-column layout**: Chat on left, context on right
- **Context panel shows**: Current scenario, plan details, recent items
- **Message types**:
  - User questions: Right-aligned
  - AI responses: Left-aligned with "Asesor GPT" badge
  - Proposals: Special card format with accept/reject buttons
- **Suggested prompts**: Chips below input for common questions

#### 8. **Data Origin Indicators**
- **Verificado** (verified): Green dot + "con fuente y fecha"
- **Tu dato** (your data): Gray circle + "ingresado por ti"
- **Estimado** (estimated): Orange dot + "modelo o supuesto"
- **Sugerencia IA**: Blue dot + "requiere revisión"
- **Calculado** (calculated): Gray dash + "motor determinístico"
- **Ilustrativo**: Gray text + "contenido de demostración"

#### 9. **Formula/Calculation Display**
- **Format**: `variable_name = expression`
- **Example**: `bruto - impuestos - costos - deducciones`
- **Hover or expand**: Shows full calculation details
- **Editable**: User can adjust parameters

#### 10. **Responsive Tables**
- **Desktop**: Full table with all columns
- **Mobile**: Likely card-based view or horizontal scroll
- **Sticky headers**: On scroll
- **Sortable columns**: Click header to sort

---

## 7. SCREEN-BY-SCREEN BREAKDOWN

### Screen 01: Inicio (Home/Dashboard)
**Purpose**: Main dashboard showing active scenario overview

**Key Elements**:
- Hero section with scenario title: "Baloto + Vida de finca"
- Descriptive tagline about the scenario
- Main action buttons: "Crear escenario", "Describir un sueño", "Explorar opciones reales"
- Financial summary cards:
  - Capital neto disponible
  - Ingreso recurrente
  - Gastos recurrentes
  - Patrimonio estimado
- Chart: "Patrimonio proyectado a 10 años" (line chart)
- Distribution chart: "Cómo se reparte el capital" (stacked bar)
- Recent additions: "Guardados recientemente" (property cards)
- Projects in progress: "Proyectos en curso" (with progress indicators)
- AI suggestions: "Sugerencias del asesor" (action items)

**Design notes**:
- Most content-rich screen
- Clear visual hierarchy from hero to details
- Mix of data viz and actionable cards

---

### Screen 02: Escenarios
**Purpose**: Manage all financial scenarios

**Key Elements**:
- Page title: "Escenarios"
- Subtitle explaining independence of scenarios
- Tab filters: "Todos (9)", "Recurrentes", "Extraordinarios", "Estilos de vida"
- Sort control: "Ordenar por: Última modificación"
- Archive indicator: "1 escenario archivado"
- Scenario groups:
  - **Ingresos recurrentes**: Salary, consulting, business income scenarios
  - **Ingresos extraordinarios**: Lottery, business sale scenarios
- Each scenario card shows:
  - Type badge (SALARIO, CONSULTORÍA, NEGOCIO, LOTERÍA, VENTA DE EMPRESA)
  - Status badge (Activo, Borrador, Provisional, En revisión)
  - Title
  - Location and currency
  - Net monthly/capital amount
  - Last modified date
  - Actions: Editar, Duplicar, Comparar (checkbox)
- Floating action: "2 escenarios seleccionados" → "Comparar lado a lado"
- Primary action button: "+ Crear escenario"

**Design notes**:
- Strong organizational structure with categories
- Status and type clearly distinguished by color
- Batch actions enabled through checkboxes

---

### Screen 03a: Crear escenario — Salario
**Purpose**: Create recurring income scenario

**Key Elements**:
- Breadcrumb: "Escenarios / Nuevo escenario"
- Title: "Crear un escenario"
- Helper text: "Se guardará como un escenario nuevo e independiente"
- Example link: "Ejemplo ilustrativo: salario en Colombia"
- **Progress steps** (1 of 4):
  1. **Tipo de escenario** ← Current
  2. Datos
  3. Supuestos financieros
  4. Revisar y guardar
- Step 1 content:
  - Radio selection: "Tipo: Salario o ingreso recurrente"
  - Option to change type
- **Right panel**: Live calculation preview
  - "Ingreso neto mensual estimado: $14.200.000"
  - Note: "Estimado con modelo Colombia - provisional"
  - Breakdown table:
    - Ingreso bruto mensual: 18.000.000
    - Salud -4%: -720.000
    - Pensión -4%: -720.000
    - Fondo de solidaridad pensional -1%: -180.000
    - Retención en la fuente estimada: -2.180.000
    - **Neto mensual**: 14.200.000
  - Annual summary:
    - Neto anual (incl. bono): $187,7 M
    - Tasa efectiva de impuesto: 12,8%
- Form fields:
  - País de empleo: Colombia (dropdown)
  - País de residencia fiscal: Colombia
  - Moneda: COP - Peso colombiano
  - **Salario y beneficios** section:
    - Salario bruto: COP 18.000.000 (large input)
    - Frecuencia de pago: Mensual
    - Tipo de contrato: Indefinido - salario ordinario
    - Bonificación anual: COP 21.600.000
    - Medicina prepagada (mensual): COP 650.000
    - Dependientes económicos: 1 (stepper)
- Bottom actions: "Atrás" (secondary), "Guardar borrador", "Continuar" (primary)

**Design notes**:
- Progressive disclosure: Only step 1 visible
- Real-time calculation helps user understand impact
- Clear distinction between input and calculated values
- Generous use of helper text

---

### Screen 03b: Crear escenario — Lotería
**Purpose**: Create extraordinary income scenario (lottery)

**Key Elements**:
- Same header and progress steps as 03a
- **Step 2**: Datos del evento
- **Left panel**: "De premio bruto a capital disponible"
  - Waterfall chart showing:
    - Premio bruto: 15.000 (black bar)
    - Impuesto estimado 20% - provisional: -3.000 (red)
    - Costos de transacción - asesoría legal y financiera: -45 (red)
    - Otras deducciones - deudas que decides pagar: -120 (red)
    - **Capital neto disponible: 11.835** (green bar)
  - Chart subtitle: "Cifras en millones de COP"
- **Right panel**: "Capital neto disponible"
  - "$11.835 millones"
  - Explanation: "El 78,9 % del premio bruto. Este capital pasa al paso 3, donde defines reserva, gastos e inversión."
  - **Estado de verificación**:
    - Monto bruto: Tu dato
    - Regla tributaria: Sin verificar
    - Costos de asesoría: Estimado
- Form fields:
  - Tipo de premio: Lotería - Baloto (dropdown)
  - Contexto fiscal: Colombia - residente fiscal
  - Moneda del premio: COP 15.000.000.000
  - **Supuesto tributario**:
    - Dropdown: "Ganancia ocasional - 20% (provisional)"
  - **Costos de transacción**: COP 45.000.000
  - **Deudas y otras deducciones**: COP 120.000.000
  - **Calendario de pago**: Pago único, date picker (11/14/2026)
- Bottom actions: "Atrás", "Guardar borrador", "Continuar a supuestos"

**Design notes**:
- Waterfall chart clearly shows money flow
- Verification status helps build trust
- Uses actual lottery context (Baloto - Colombian lottery)
- Emphasizes transparency ("motor de cálculo")

---

### Screen 04: Diseña tu vida
**Purpose**: Dream/life design studio with AI interpretation

**Key Elements**:
- Title: "¿Cómo te imaginas *tu vida*?" (italics on "tu")
- Subtitle: "Cuéntanos cómo te gustaría vivir, qué te apasiona, dónde te gustaría estar y qué te gustaría hacer con tu tiempo."
- **Large text area** with example text:
  - "Quiero vivir en una finca en el Oriente antioqueño, a menos de una hora del aeropuerto..."
  - (Full lifestyle description in natural language)
- **Suggestion chips** below: "Ideas para empezar · son atajos, no categorías"
  - "Convertirme en farmer"
  - "Dedicarme al golf"
  - "Vivir entre Colombia y Estados Unidos"
  - "Crear una empresa"
  - "Viajar por el mundo"
  - "Construir una colección de carros clásicos"
- Action buttons: "Interpretar mi visión" (primary), "Agregar detalles" (secondary)
- **Right panel**: Visual representation
  - Abstract illustration with labels: "Imagen de referencia · ilustrativa"
  - Muted colors (greens, beige, terracotta)
  - Simple house, trees, landscape elements

**AI Interpretation Section**:
- Title: "Así entendemos tu visión"
- Subtitle: "Todo es editable. Nada de esto es una recomendación fija."
- Toggle options:
  - ○ Lo dijiste tú
  - ● Sugerencia IA · revisala
  - ⌀ Estimado
- Structured sections:
  - **VISIÓN PERSONAL**: [object Object]
  - **UBICACIÓN**: [object Object]
  - **VIVIENDA**: [object Object] with AI suggestion card
    - "💡 Sugerencia IA"
    - "Considera alquilar 12 meses en la zona antes de comprar."
    - Actions: "Aceptar" | "Quitar"
  - **ACTIVIDADES Y HOBBIES**: [object Object]
  - **TRABAJO O NEGOCIO**: [object Object]
  - **ACTIVOS Y RECURSOS**: [object Object] with AI suggestion
    - "Tierra de 8 – 12 ha con agua, sistema de riego, bodega, camioneta 4x4 y tractor compacto."
    - Actions: "Aceptar" | "Quitar"
  - **FUENTES DE INGRESO POTENCIALES**: [object Object]
    - "Venta a exportadora desde el año 3, turismo rural ocasional y consultoría."
    - Actions: "Aceptar" | "Quitar"
  - **CAPITAL INICIAL REQUERIDO**: [object Object]
    - "💡 Sugerencia IA · estimado"
    - "COP 2.800 – 3.600 millones entre tierra, siembra, vivienda y equipo."
    - Actions: "Aceptar" | "Quitar"
  - **GASTOS RECURRENTES**: [object Object]
    - "COP 18 – 24 millones al mes de operación hasta la primera cosecha."
    - Actions: "Aceptar" | "Quitar"
  - **TIEMPO REQUERIDO**: ○ Lo dijiste tú
  - **HABILIDADES Y PERSONAL**: [object Object]
  - **PRIORIDADES PERSONALES**: ○ Lo dijiste tú

**Comparison Section**: "Otras versiones de esta vida"
- Table comparing 3 alternatives:
  - A · Finca de aguacate (Tu versión)
  - B · Finca de descanso
  - C · Alquilar un año primero (Sugerencia IA)
- Metrics compared:
  - Capital inicial
  - Gasto mensual
  - Ingreso potencial
  - Tiempo semanal
  - Lo que cambia
- Note: "Cifras estimadas e ilustrativas. Las versiones no se ordenan de mejor a peor."

**Action Section**: "Explora opciones reales"
- Subtitle: "Búsquedas preparadas a partir de tu visión"
- Chips: 
  - "Fincas de 8 – 12 ha en La Ceja"
  - "Tractores compactos"
  - "Camionetas 4x4"
  - "Colegios bilingües en Rionegro"

**Connection Section**: "Conecta tu visión a un escenario"
- "Así podrás ver el el capital y el flujo alcanzar."
- Scenario selector: "Baloto ilustrativo · $11.835 M"
- Button: "Conectar y ver finanzas" (primary)
- Link: "O evaluar esta idea primero"

**Design notes**:
- Natural language input encourages dreaming
- AI interprets and structures the dream
- Clear labeling of data sources builds trust
- Multiple versions help explore trade-offs
- Bridge to financial reality via scenario connection

---

### Screen 05: Explorar
**Purpose**: Search and discover real-world properties and items

**Key Elements**:
- Title: "Explora opciones reales"
- **Search bar** (prominent, centered):
  - Icon: Magnifying glass
  - Placeholder: "Finca de 8 a 12 hectáreas con agua cerca de Rionegro"
  - Button: "Buscar" (primary)
- **Tab navigation**:
  - Casas y apartamentos
  - **Terrenos y fincas** ← Active
  - Carros
  - Clubes y membresías
  - Viajes y experiencias
  - Negocios
  - Equipamiento
  - Inversiones y proyectos
  - Otros

**Filter Section**:
- **Ubicación**: Oriente antioqueño (dropdown)
- **Área**: 8 – 12 ha (dropdown)
- **Precio**: Hasta COP 3.500 M ↓ (dropdown)
- **Agua**: Nacimiento o concesión ↓ (dropdown)
- **Uso del suelo**: Agrícola (dropdown)
- Link: "Limpiar filtros"

**Info banner**:
- "Resultados de ejemplo. En el producto, cada resultado proviene de un portal real y enlaza al anuncio exacto. Un precio sin fuente nunca se muestra como verificado."

**Results Grid**: "6 resultados de ejemplo"
- Each card shows:
  - Placeholder image: "Ilustrativo · sin foto real" (stylized landscape illustration)
  - Title: "Finca de 10 ha con nacimiento de agua"
  - Location: "La Ceja, Antioquia"
  - Price: "COP 2.850.000.000" (large, bold)
    - Label: "Precio publicado"
  - Key features (icon + text):
    - "10 ha" (area)
    - "Agua propia" (water source)
    - "Casa de 3 hab." (house)
  - Source link: "Fuente: [Portal de origen] ↗"
  - Actions:
    - "Guardar" (secondary button)
    - "Agregar al plan" (text link)

**Additional Options Section**:
- Cards for alternative search methods:
  - **OPCIÓN 1**: "Abrir búsqueda externa"
    - "Llevamos tus filtros al portal elegido en una pestaña nueva."
    - Links: "[Portal inmobiliario 1] ↗", "[Portal inmobiliario 2] ↗"
  - **OPCIÓN 2**: "Pegar el enlace exacto"
    - "Leemos el título, precio y fotos publicadas. Tú confirmas antes de guardar."
    - Input: "URL del anuncio" (with placeholder https://)
    - Button: "Importar anuncio" (primary)
  - **OPCIÓN 3**: "Registrar manualmente"
    - Form fields:
      - Título
      - Precio publicado | Moneda: COP (dropdown)
      - Ubicación
      - Notas (textarea)
    - Button: "Guardar como dato propio"

**Design notes**:
- Hybrid approach: internal search + external portal integration
- Transparency about data sources
- Flexible: Can import listings or enter manually
- Clear distinction between illustrative and real data

---

### Screen 06: Mi colección
**Purpose**: Personal collection of saved properties and items

**Key Elements**:
- Breadcrumb: "Mi colección"
- Title: "Mi colección"
- Subtitle: "Guarda todas las alternativas que quieras. No hace falta elegir un ganador."
- **Tab filters with counts**:
  - **Todos 8** ← Active
  - Inspiración 1
  - Investigando 2
  - Finalista 3
  - Incluido en el plan 1
  - Descartado 1
- **View controls**:
  - Search: "Buscar en mi colección"
  - Filter: "Categoría: Todas" (dropdown)
  - Sort: "Ordenar: Revisado recientemente" (dropdown)
  - View toggle: "Galería" (icon) | "Lista" (icon) ← Active
- Actions:
  - "Comparar seleccionados (2)" (secondary button)
  - "Agregar desde Explorar" (primary button)

**Item Grid**:
- Similar to Explorar results but with additional context
- Each card shows:
  - Image placeholder
  - Category tag (Terrenos y fincas, Carros, Clubes y membresías, Casas y apartamentos)
  - Status tag (Finalista, Investigando, Inspiración, Descartado)
  - Title
  - Price (or "Precio por confirmar", "Consultar al anunciante")
  - Details/notes
  - Last modified date
  - Source link: "Anuncio original ↗"
  - Actions: "Agregar a escenarios" button
  - **Scenario inclusion checklist**:
    - ☑ Baloto + Vida de finca
    - ☐ Venta de mi empresa
    - ☐ Vida de finca - versión C
  - Secondary action: "Guardar en 1 escenario"
- **Special states**:
  - Items with price drops highlighted
  - Items included in scenarios marked
  - Discarded items shown with reduced opacity

**Design notes**:
- Collection as "maybe pile" rather than commitments
- Status progression: Inspiration → Researching → Finalist → In plan
- Easy scenario association
- Comparison feature for similar items

---

### Screen 07: Proyectos — Fondo de inversión
**Purpose**: Detailed project planning and tracking

**Key Elements**:
- **Header carousel** (horizontal scroll):
  - Active card: "Fondo de inversión"
    - Type badge: "Fondo de inversión"
    - Title: "Fondo de inversión familiar"
    - Subtitle: "Horizonte · liquidez · comisiones · riesgo"
  - Other visible cards:
    - "Finca productiva"
    - "Colección - Carros clásicos"
  - (More cards off-screen)
  
- Breadcrumb: "Fondo de inversión / Vinculado a Baloto + Vida de finca / En diseño"
- Title: "Fondo de inversión familiar" (Instrument Serif, large)
- Status: "En diseño" badge, "Ilustrativo" tag
- Actions:
  - "Evaluar proyecto" (secondary)
  - "Agregar sección" (secondary)

**Tab navigation**:
  - **Resumen** ← Active
  - Supuestos
  - Hitos
  - Investigación
  - Relacionados

**Resumen Tab Content**:
- Intro: "Esta estructura se adaptó al tipo "Fondo de inversión": enfatiza horizonte, liquidez, asignación, comisiones y riesgos. Puedes agregar o quitar secciones."

- **Key Metrics Grid**:
  - Capital inicial: $6.000 M (Tu dato)
  - Horizonte: 15 años (Tu dato)
  - Liquidez: Trimestral (Retiro max 10% al año · Tu dato)
  - Comisiones totales: 1,1 % / año (Estimado)
  - Valor base a 15 años: $12.474 M (Estimado · 5% real neto)

- **OBJETIVO**:
  - "Preservar el poder adquisitivo del premio y generar un ingreso trimestral que cubra parte de los gastos familiares, sin depender de la finca."

- **MOTIVACIÓN Y RESULTADO ESPERADO**:
  - "Tranquilidad para tomar riesgos en otros proyectos. Resultado esperado: capital intacto en términos reales y retiros de hasta COP 50 M por trimestre."

- **Asignación supuesta** (Stacked horizontal bar with labels):
  - Renta fija local y global: 40% → $2.400 M
  - Acciones globales: 35% → $2.100 M
  - Inmobiliario para renta: 15% → $900 M
  - (Rest of allocation visible)

- **Escenarios de rendimiento**:
  - Table with 3 scenarios: Conservador (3% real), Base (5% real), Optimista (7% real)
  - Shows final value at 15 years for each

- **Key Metrics Comparison**:
  - | Metric | Current Plan | Notes |
  - Rentabilidad real por hectárea | Impact → | [Links]
  - Costo de plántulas en el año 3 | | [Links]
  - Concentración en pesos colombianos | Impacto medio |
  - Decisiones familiares sin reglas de gobierno claras | Impacto medio |
  - Note: "El impacto IA defines tú; no es una calificación automática."

- **Investigación pendiente**:
  - ☐ Tratamiento tributario de rendimientos según el vehículo elegido
  - ☐ Comisiones reales de 3 gestores, por escrito
  - ☐ Rentabilidad histórica de portafolios similares

- **Hitos / Timeline**:
  - Milestone timeline with dates
  - ○ Seleccionar gestor o asesor independiente (En curso)
  - ○ Política de inversión escrita (Dic 2026)
  - ○ Primer aporte (Ene 2027)
  - ○ Primera revisión anual (Ene 2028)

- **Relacionado** section:
  - Links to related scenarios:
    - "Escenario · Baloto ilustrativo" → $11.835 M neto
    - "Escenario · Venta de mi empresa" → USD 3,4 M neto
    - "Guardado · Apartamentos en renta (2)" → Investigando

**Design notes**:
- Project type determines structure
- Rich context with multiple data types
- Links risks, assumptions, research tasks
- Timeline with checkpoints
- Connected to scenarios and saved items

---

### Screen 08: Evaluación — Comparar carros
**Purpose**: Side-by-side comparison tool for decision-making

**Key Elements**:
- Breadcrumb: "08 · Evaluación — Comparar carros"
- Title: "Evaluar mi idea"
- **Dropdown selector**: "¿Qué quieres evaluar?"
  - Selected: "Comparar: Pick-up 4x4 diésel vs SUV todoterreno 7 puestos"
- **Tab navigation**:
  - **Carros** ← Active
  - Inversión
  - Finca o negocio
  - Estilo de vida
- **Framework note**:
  - "Marco aplicado: Según el tipo de idea, para carros enfatizamos el costo total de propiedad: impuestos, seguro, combustible, mantenimiento y reventa, no solo el precio."

**Main Content**: "Costo total de propiedad · 5 años"
- Subtitle: "Millones de COP · 15.000 km por año · estimado"
- **Comparison table**:
  - | Concepto | Pick-up 4x4 diésel (2024 · ilustrativo) | SUV 7 puestos (2023 · ilustrativo) | Origen del dato |
  - Precio de compra | 240,0 | 265,0 | Precio publicado |
  - Matrícula e impuesto vehicular | 16,5 | 18,0 | Estimado |
  - Seguro todo riesgo | 36,0 | 42,0 | Estimado · pedir cotización |
  - Combustible | 23,5 | 25,0 | Estimado · consumo de ficha técnica |
  - Mantenimiento y llantas | 20,0 | 24,0 | Estimado |
  - Valor de reventa al año 5 | -132,0 | -132,5 | Supuesto · 55% y 50% |

**Summary Sections** (cards):
1. **Lo que sabemos**:
   - Precios publicados de ambos anuncios, revisados el 19 oct.
   - La pick-up carga 1 t; la SUV lleva 7 personas.

2. **Lo que suponemos**:
   - 15.000 km al año, mitad en vía destapada.
   - Reventa de 55 % y 50 % al quinto año.

3. **Lo que sigue siendo incierto**:
   - Costo real del seguro con uso rural.
   - Si necesitarás los dos vehículos.

**Analysis Sections** (numbered cards):
4. **Trade-offs principales**:
   - Pick-up: sirve a la finca, menos cómoda para la familia.
   - SUV: viajes familiares, no carga insumos.

5. **Alternativas posibles**:
   - Pick-up usada para la finca + carro familiar actual.
   - Alquilar transporte de carga en temporada de cosecha.

6. **Próximos pasos de investigación**:
   - Pedir 2 cotizaciones de seguro por vehículo.
   - Estimar viajes de carga reales con el administrador.

**Comparison Matrix**: "Dimensiones de la comparación"
- Table comparing multiple dimensions:
  - | Dimensión | Pick-up 4x4 | SUV 7 puestos | Cómo se derivó |
  - Requerimiento financiero | Menor · 2% del capital invertible | Menor · 3% del capital invertible | Precio + capital invertible del escenario activo |
  - Costo recurrente | COP 3,4 M / mes | COP 4,0 M / mes | Costo total ÷ 60 meses |
  - Alineación con tus prioridades | Cumple "que la finca se sostenga" | Cumple "tiempo en familia" | Cruza con las prioridades de Diseña tu vida |
  - Complejidad operativa | Baja | Baja | Tu valoración |
  - Incertidumbre | Media · seguro rural sin cotizar | Media · reventa variable | Número de datos estimados frente a verificados |

**Bottom Actions**:
- "Pedir al asesor otra alternativa" (secondary)
- "Ver impacto en mis finanzas" (primary)

**Design notes**:
- Domain-specific frameworks (cars = TCO)
- Separates known, assumed, and uncertain
- Trade-offs, alternatives, next steps
- Multidimensional comparison matrix
- Emphasizes what still needs research

---

### Screen 09: Finanzas
**Purpose**: Complete financial breakdown and projections

**Key Elements**:
- Breadcrumb: (none visible - appears to be top-level)
- Title: "Finanzas"
- Subtitle: "Baloto + Vida de finca · COP · calculado por el motor de cálculo el 21 oct 2026, 14:32"
- **Status indicators**:
  - ● Verificado
  - ○ Tu dato
  - ⌀ Estimado
  - — Calculado
  - Toggle: "Mostrar fórmulas"

**Tab navigation**:
  - **Resumen** ← Active
  - Flujo de caja
  - Patrimonio
  - Ingresos y gastos
  - Inversiones
  - Proyecciones
  - Supuestos

**Resumen Tab Content**:

1. **"Del capital bruto a lo invertible"**:
   - Table breakdown:
     - Capital bruto inicial (Tu dato): 15.000
     - Impuestos (premio_bruto × tasa_premio) (28%) (Estimado): -3.000
     - Costos de transacción (asesoría_legal + asesoría_financiera) (Estimado): -45
     - Otras deducciones (deudas_a_pagar) (Tu dato): -120
     - **Capital neto** (bruto - impuestos - costos - deducciones) (Calculado): **11.835**
     - Adquisición de activos (precio_finca (2.850) + adecuación (350)) (Estimado): -3.200
     - Reserva de efectivo · 24 meses (24 meses × déficit operativo de la finca) (Tu dato): -600
     - **Capital invertible** (capital_neto - activos - reserva) (Calculado): **8.035**
   - Note: "Millones de COP. Todas las cifras salen del motor de cálculo; el asesor no hace aritmética."

**Right sidebar**: Summary cards
- **"Liquidez restante"**:
  - "$8.635 M"
  - "Invertible + reserva, disponible en menos de 90 días"

- **"Superávit mensual"**:
  - "+$4,6 M"
  - "Ingreso 14.2 – gastos 9,6"

- **"Patrimonio proyectado año 10"**:
  - "$20.480 M"
  - "Estimado · base 5.2 % real"

**Design notes**:
- Shows formulas inline
- Distinguishes calculated vs input values
- Waterfall-style breakdown
- All monetary flows traced
- Sidebar with key takeaways
- Transparent about calculation engine

---

### Screen 10: Asesor GPT — Propuesta pendiente
**Purpose**: AI advisor chat with proposal workflow

**Key Elements**:
- Title: "Asesor GPT"
- Subtitle: "Propone cambios; tú decides. Nunca modifica tu plan sin tu aprobación, y sus cifras vienen del motor de cálculo."
- Button: "Nueva conversación" (top right)

**Context Panel** (top horizontal strip):
- "El asesor conoce" (context badges):
  - Escenario · Baloto + Vida de finca
  - Diseña tu vida · versión A
  - 3 proyectos
  - 8 guardados
  - Modelo financiero · 21 oct
  - 4 versiones anteriores
  - "Ajustar contexto" link

**Chat Interface**:

- **User message** (right-aligned, light background):
  - "¿Cómo podría empezar la finca sin abandonar de inmediato mi ingreso actual?"

- **AI response** (left-aligned):
  - Badge: "● Asesor GPT"
  - Message: "Hoy tu plan siembra las 10 hectáreas en el primer año, lo que concentra el gasto justo cuando todavía no conoces el rendimiento real del predio. Una opción es escalonar la siembra y mantener la consultoría mientras validas. Te dejo una propuesta concreta para revisar:"
  
  - **Proposal card** (large, bordered):
    - Header: "PROPUESTA DE CAMBIO"
    - Title: "Sembrar 4 ha el año 1 y 6 ha el año 3"
    - Two-column comparison:
      - **Estado actual**:
        - Siembra completa de 10 ha en el año 1. La consultoría termina al mudarte a la finca.
      - **Cambio propuesto**:
        - 4 ha en el año 1 y 6 ha en el año 3, tras la primera floración. Mantener la consultoría 2 días por semana hasta el año 3.
    - **Impacto en números**:
      - Table:
        - | Métrica | Estado actual | Cambio propuesto | Diferencia |
        - Flujo acumulado años 1 – 3 | -480 | -290 | +170 |
        - Patrimonio proyectado año 10 | 20.480 | 20.120 | -360 |
        - Tiempo semanal en la finca | 5 días | 3 días | -2 días |
    - **Incertidumbres importantes**:
      - Rendimiento real por hectárea en ese predio.
      - Costo de plántulas en el año 3.
      - Si el cliente de consultoría acepta 2 días por semana.
    - **Enlaces relevantes**:
      - [Guía técnica de cultivo de aguacate Hass] ↗
      - [Requisitos de predio exportador] ↗
    - Actions:
      - "Rechazar" (secondary)
      - "Editar propuesta" (secondary)
      - "Aprobar" (primary green button)
  
  - Note below card: "Aprobar crea una versión nueva. Tu plan actual queda guardado y guardado v4 en el historial. Nada se borra."

**Suggested Prompts** (chips below chat):
- "¿Qué gastos estoy olvidando?"
- "¿Qué cambiaría si me dedicara al golf?"
- "Compara esta finca con alquilar con opción de compra durante 12 meses."
- "Sugiere tres versiones alternativas de mi vida"
- "¿Qué debería investigar antes de decidir?"

**Chat Input**:
- Text field: "¿Cómo puedo mejorar este plan?"
- "Enviar" button (primary)

**Design notes**:
- Clear separation: AI suggests, user approves
- Proposals in structured format
- Impact quantified in multiple dimensions
- Version control integrated (no fear of change)
- Suggested prompts lower barrier to interaction
- Context panel shows what AI "knows"

---

### Screen 11: Versiones y comparación
**Purpose**: Version history and side-by-side comparison

**Key Elements**:
- Breadcrumb: "Escenarios / Baloto + Vida de finca / Versiones"
- Title: "Versiones y comparación"
- Subtitle: "Cada cambio importante guarda una versión. Compara cualquier par, restaura o duplica."

**Version Selector**:
- "Elige la versión a comparar con la actual"
- **Timeline** (horizontal, left to right):
  - v1 · 12 sep - "Finca en producción" (Guardada)
  - v2 · 28 sep - "Sin consultoría" (Guardada)
  - v3 · 10 oct - "Alquilar un año primero" (Guardada)
  - ● v4 · 21 oct - "Finca completa" (Versión actual)
  - v5 · Pendiente - "Siembra escalonada" (Propuesta del asesor)

**Tab Navigation**:
- **Versiones del plan** ← Active
- Capital inicial
- Sueños
- Guardados
- Supuestos

**Comparison Table**: "A · versión actual" vs "B · comparada"
- Headers:
  - "A · versión actual" - v4 · Finca completa
  - "B · comparada" - v3 · Alquilar un año primero
  - "B frente a A"
- Rows:
  - Capital inicial | 11.835 | 11.835 | —
  - Costo de adquisición | 3.200 | 60 · compra en año 2 | -3.140 en año 1
  - Gasto mensual | 9,6 / mes | 11,0 / mes | +1,4 / mes
  - Ingreso potencial | Finca desde el año 3 | Finca desde el año 4 | Un año después
  - Tiempo semanal | 5 días en la finca | 2 a 3 días | Más flexible
  - Riesgos principales | Cultivo no se adapta, baja productividad | Disponibilidad de predios a futuro, inflación de precios | ...
  - Próximos pasos | Inspección técnica del predio, análisis de suelo, cotizar seguros | Arrendar con opción de compra, periodo de prueba | ...

**Trade-off Card**:
- Title: "Trade-off principal"
- Content: "Alquilar primero cuesta un año de producción (≈ COP 470 M menos al año 10), pero conserva COP 2.540 M de liquidez mientras validas si esta vida es para ti."

**Projection Comparison**:
- Toggle: "☑ Fila con diferencia" | "Proyecciones estimadas por el motor de cálculo · ilustrativo"
- Shows projected values would appear here

**Bottom Actions**:
- "Duplicar v3 como escenario nuevo" (secondary)
- "Restaurar v3" (secondary)

**Restore Note**:
- "Restaurar convierte v3 en la versión actual y guarda v4 en el historial. Nada se borra."

**Design notes**:
- Visual timeline shows version history
- Side-by-side comparison with differences highlighted
- Trade-offs explicitly called out
- Pending proposals shown in timeline
- No-fear versioning: nothing gets lost
- Can restore or fork (duplicate) any version

---

### Screen 12: Componentes y estados
**Purpose**: Design system documentation page

**Key Elements**:
- Header: "12 · Componentes y estados"
- Title: "SISTEMA DE DISEÑO"
- Large display: "Componentes y estados"
- Tagline: "*Imagínalo. Explóralo. Evalúalo. Hazlo a tu manera.*" (italics)

**COLOR Section**:
- **Fondo**: `#F8F4EF` (cream/off-white)
- **Texto · carbón**: `#1E2320` (near-black)
- **Acento · bosque**: `#2E5A44` (forest green) - "acciones, verificado"
- **Asesor IA**: `#3A5674` (muted blue) - "solo sugerencias"
- **Estimado**: `#B7570F` (burnt orange)
- **Salidas · extraordinario**: `#BC3F2B` (deep red)

**TIPOGRAFÍA Section**:
- **Aa Título**: Instrument Serif - títulos 84/60/44/32 y cifras grandes
- "Geist para la interfaz y la lectura. Cifras con números tabulares: 11.835 · 14.2 · 3.200"
- Details: "Geist · 17 / 15 / 13 · peso 400, 500 y 600"

**ORIGEN DEL DATO Section**:
- ● Verificado · con fuente y fecha
- ○ Tu dato · ingresado por ti
- ⌀ Estimado · modelo o supuesto
- ● Sugerencia IA · requiere revisión
- — Calculado · motor determinístico
- "Ilustrativo · contenido de demostración"

**BOTONES · ESTADOS Section**:
- Table showing button variations:
  - | | Normal | Hover | Foco | Deshabilitado |
  - Primario | "Guardar" (all green states)
  - Secundario | "Duplicar" (all outline/light states)
  - Asesor IA | "Generar" (all blue states, with "⏳ Pensando" for active)

**CAMPO DE MONEDA · ESTADOS Section**:
- | Normal | Foco |
- COP | 18.000.000 | COP | 18.000.000 (focused border)
- USD | 250.000 | USD | 250.000 (focused border)
- Error state: COP | 18.000.000,5,0 (red border)
  - "Escribe un número válido, por ejemplo 16.000.000"
- Estimado · editable: COP | 2.180.000 (orange border)
  - "Calculado por el modelo. Si lo cambias, pasa a ser tu dato."

**NAVEGACIÓN SECUNDARIA Section**:
- Shows secondary nav patterns (would be visible on scroll)

**ESTADOS DE ELEMENTOS Y ESCENARIOS Section**:
- Would show different states for items (loading, empty, error, etc.)

**ANUNCIO GUARDADO · REAL FRENTE A DEMOSTRACIÓN Section**:
- Two cards side by side:
  - Left: Real verified listing
    - "● Anuncio real · verificado"
    - "[Título exacto del anuncio]"
    - "[PRECIO PUBLICADO] {MONEDA}"
    - "Fuente: [Portal] · precio revisado [fecha] · Investigando"
    - "Tu nota personal aparece aquí."
    - "Ver anuncio original ↗"
  - Right: Illustrative example
    - "Ilustrativo · no es un anuncio"
    - "Finca de 10 ha con nacimiento de agua"
    - "COP 2.850 M · precio de ejemplo"
    - "Sin fuente · sin enlace externo"
    - "Contenido para mostrar el diseño."
    - "Enlace no disponible"

**ESTADOS DEL SISTEMA Section**:
- Four state cards:
  - **Vacío**: Empty state with placeholder icon and "Crear proyecto" button
  - **Cargando**: Loading skeleton with "Buscando en 2 portales..."
  - **Error**: Error message in red box with "Reintentar" button
  - **Confirmación**: Success message with checkmark

**DIÁLOGO DE CONFIRMACIÓN Section**:
- Modal overlay example:
  - Title: "¿Archivar "Venta de mi empresa"?"
  - Message explaining action
  - Buttons: "Cancelar" | "Archivar"
- Note: "Comportamiento responsivo: las pantallas son páginas fluidas con ancho máximo de 1360 px. En pantallas angostas, las cuadrículas pasan a una columna, la barra superior aplica sus controles y las pestañas de desplazan dentro de su caja."

**NAVEGACIÓN EN TELÉFONO Section**:
- Mobile navigation mockup:
  - "A Mi Manera" logo with search icon and "MR" avatar
  - Dropdown: "● Baloto + Vida de finca"
  - Horizontal scrolling nav: Inicio | Escenarios | Diseña tu vida | Explorar
  - Current scenario shown: "Baloto + Vida de finca"
  - Key metrics in cards below

**Design notes**:
- Comprehensive design system documentation
- Shows all component states
- Color meanings clearly defined
- Typography hierarchy explained
- Responsive behavior noted
- Distinguishes real vs demo content

---

### Screen 13: [Not present in export]
NOTE: The user's list shows 14 screens total, numbered 01-12 plus "Componente · Navegación superior". There is no screen explicitly labeled "13". The count adds up correctly with the navigation component being the 14th item.

---

### Screen 14: Componente · Navegación superior
**Purpose**: Top navigation bar component documentation

**Key Elements**:
- Label: "Componente · Navegación superior"
- Full-width navigation bar showing complete implementation

**Left Section**:
- **Logo**: "A Mi Manera" (Instrument Serif + icon)
  - Icon: Stylized tree/leaf in circle

**Center Section**:
- **Scenario Selector** (dropdown):
  - Label: "ESCENARIO ACTIVO"
  - Value: "Baloto + Vida de finca"
  - Chevron down icon
  - Background: Slightly darker than page background
  - Border: Subtle

**Main Navigation Menu**:
- Horizontal list of links:
  - Inicio
  - Escenarios
  - Diseña tu vida
  - Explorar
  - Mi colección
  - Proyectos
  - Evaluación
  - Finanzas
  - Asesor GPT
- **Active state**: "Inicio" shown with underline in primary color
- Spacing: ~24-32px between items
- Font: Geist, medium weight
- Color: Dark gray, active = darker

**Right Section** (utility items):
- **Search button**: 
  - Icon: Magnifying glass
  - Label: "Buscar escenarios, anuncio"
  - Light background
- **Versiones button**:
  - Icon: Clock/history icon
  - Text: "Versiones"
- **Theme toggle**:
  - Icon: Sun (light mode active)
  - Circular button
- **User avatar**:
  - Circle with initials: "MR"
  - Primary color background
  - White text

**Responsive Behavior** (noted in design system):
- On narrow screens:
  - Logo stays left
  - Nav menu becomes hamburger
  - Scenario selector might move to dropdown from hamburger
  - Utility items prioritized

**States** (implied from design system):
- Default: As shown
- Scrolled: Possibly adds subtle shadow
- Menu item hover: Slight color change
- Menu item active: Underline in primary color

**Design notes**:
- Persistent across all screens
- Scenario context always visible
- Clear hierarchy: brand → navigation → utilities
- Accessible: Good color contrast, clear interactive elements
- Mobile-first approach with progressive enhancement

---

## 8. KEY DESIGN PATTERNS SUMMARY

### Information Hierarchy
1. **Large serif titles** (Instrument Serif) → **Sans-serif body** (Geist)
2. **Primary actions** (green button) → **Secondary actions** (outline/text)
3. **Verified data** (green dot) → **Estimated** (orange) → **Calculated** (gray)

### Trust & Transparency
- **Data provenance** always labeled
- **Formulas shown** for calculations
- **Sources linked** for external data
- **AI suggestions** clearly marked
- **Version control** prevents data loss

### Progressive Disclosure
- **Wizards** for complex forms (create scenario)
- **Tabs** for related content
- **Expandable sections** for details
- **Hover states** reveal additional info

### Flexibility & Control
- **Multiple paths** to same goal (search, import, manual entry)
- **Comparisons** before committing
- **Versions** allow experimentation
- **AI proposes**, user approves
- **Nothing destructive** without confirmation

### Financial Clarity
- **Tabular numbers** for alignment
- **Waterfall charts** show flow
- **Color coding** for pos/neg
- **Context always present** (scenario, date, source)
- **Breakdowns traceable** to source

### Natural Language
- **Dream/vision input** in user's words
- **AI interprets** into structure
- **Chat interface** for questions
- **Plain language** explanations

### Visual Rhythm
- **Generous whitespace** reduces cognitive load
- **Consistent card patterns** create familiarity
- **Subtle shadows** indicate hierarchy
- **Rounded corners** (8-12px) feel modern and friendly
- **Muted illustration palette** doesn't compete with data

---

## 9. TECHNICAL IMPLEMENTATION NOTES

### Font Loading
- **Geist** family loaded from Google Fonts
- Subset by character range for performance
- Font display: swap (FOUT acceptable)

### Responsive Breakpoints (inferred)
- **Desktop**: 1200px+ (max content width ~1360px)
- **Tablet**: 768-1199px (likely 2-column grids)
- **Mobile**: <768px (single column, hamburger nav)

### Accessibility Considerations
- Color contrast meets WCAG AA minimum (likely AAA for body text)
- Interactive elements have clear focus states
- Icon buttons have text labels (some visible, some screen-reader only)
- Form inputs have associated labels
- Error messages programmatically linked to fields

### Performance
- Images: Likely lazy-loaded below fold
- Charts: Possibly rendered client-side (recharts, d3, etc.)
- Large lists: Potentially virtualized
- Heavy computations: Likely debounced/throttled

### State Management (implied)
- Active scenario stored globally
- User selections persist during session
- Version history tracked server-side
- Real-time calculations likely cached

---

## 10. RECOMMENDATIONS FOR IMPLEMENTATION

### CSS Architecture
1. **Use CSS custom properties** for colors, spacing units
2. **Component-scoped styles** (CSS Modules or styled-components)
3. **Utility classes** for common patterns (Tailwind or custom)
4. **8px grid system** enforced programmatically

### Component Library Structure
```
/components
  /ui               # Base components (Button, Input, Card, etc.)
  /layout           # Navigation, containers, grid systems
  /financial        # Charts, number displays, breakdowns
  /domain           # Scenario cards, project cards, AI proposals
  /states           # Loading, empty, error states
```

### Design Token Categories
- **Colors**: Semantic naming (primary, danger, background, etc.)
- **Typography**: Scale (sizes), weights, line-heights
- **Spacing**: 8px base scale (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24)
- **Shadows**: Elevation levels (0-5)
- **Borders**: Radius values (4, 8, 12, 16, 24)
- **Z-index**: Layering scale (modal, dropdown, sticky, etc.)

### Key Libraries (suggested)
- **UI Framework**: React (likely given Next.js mention in project)
- **Styling**: Tailwind CSS (based on config seen in codebase)
- **Charts**: Recharts (simple, React-native)
- **Forms**: React Hook Form + Zod validation
- **Date**: date-fns (lightweight)
- **Numbers**: Accounting.js or custom (for currency formatting)
- **Icons**: Lucide React (as mentioned in tech stack)

### Critical User Flows to Implement First
1. **View dashboard** (screen 01) - shows all component types
2. **Create salary scenario** (screen 03a) - complex form with calculations
3. **Browse & save properties** (screens 05, 06) - core value prop
4. **View finances breakdown** (screen 09) - builds trust
5. **Version comparison** (screen 11) - key differentiator

---

## 11. OPEN QUESTIONS / MISSING DETAILS

1. **Animation/Motion**: 
   - Transition durations?
   - Easing functions?
   - Page transitions?
   - Chart animations?

2. **Interactions**:
   - Drag-and-drop for reordering?
   - Inline editing patterns?
   - Keyboard shortcuts?
   - Undo/redo?

3. **Mobile-specific patterns**:
   - Bottom navigation?
   - Swipe gestures?
   - Pull-to-refresh?
   - Touch-optimized inputs?

4. **Empty/Error states**:
   - All variations covered?
   - Recovery paths clear?
   - Helpful error messages?

5. **Onboarding**:
   - First-time user experience?
   - Tooltips/tutorials?
   - Sample data?

6. **Offline behavior**:
   - What works offline?
   - Sync indicators?
   - Conflict resolution?

7. **Print styles**:
   - Financial reports printable?
   - PDF exports?
   - Comparison tables?

8. **Localization**:
   - Number formatting variations?
   - Currency symbol positions?
   - Date formats?
   - RTL support needed?

---

## 12. DESIGN SYSTEM STRENGTHS

1. **Clarity**: Every element has clear purpose and meaning
2. **Consistency**: Patterns repeat predictably
3. **Trust**: Data provenance always visible
4. **Flexibility**: Multiple paths, no lock-in
5. **Intelligence**: AI augments, doesn't replace user
6. **Professionalism**: Sophisticated without being intimidating
7. **Personality**: Warm colors, friendly copy, human touch

---

## APPENDIX: File Locations

All screenshots saved to `/workspace/design-screenshots/`:
- 01-inicio.webp
- 02-escenarios.webp
- 03a-crear-escenario-salario.webp
- 03b-crear-escenario-loteria.webp
- 04-disena-tu-vida.webp
- 05-explorar.webp
- 06-mi-coleccion.webp
- 07-proyectos-fondo-inversion.webp
- 08-evaluacion-comparar-carros.webp
- 09-finanzas.webp
- 10-asesor-gpt-propuesta-pendiente.webp
- 11-versiones-comparacion.webp
- 12-componentes-estados.webp
- 14-componente-navegacion-superior.webp

---

**Analysis completed**: October 27, 2026
**Total screens analyzed**: 14
**Design system elements documented**: ~150+
**Color palette**: 6 primary colors + neutrals + illustrative tones
**Typography**: 2 font families (Instrument Serif + Geist)
**Component states documented**: 40+ variations

---

END OF ANALYSIS
