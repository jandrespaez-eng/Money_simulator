# Life Simulator Design Screenshots

This directory contains comprehensive design documentation extracted from the Figma export.

## Contents

### Screenshots (14 screens)
All screens captured at desktop resolution and saved as `.webp` files:

1. **01-inicio.webp** - Home dashboard with financial overview
2. **02-escenarios.webp** - Scenario management page
3. **03a-crear-escenario-salario.webp** - Create salary scenario (wizard step 1)
4. **03b-crear-escenario-loteria.webp** - Create lottery scenario (wizard step 2)
5. **04-disena-tu-vida.webp** - Dream/life design studio
6. **05-explorar.webp** - Search and discover real properties
7. **06-mi-coleccion.webp** - Personal collection of saved items
8. **07-proyectos-fondo-inversion.webp** - Investment fund project detail
9. **08-evaluacion-comparar-carros.webp** - Car comparison evaluation
10. **09-finanzas.webp** - Complete financial breakdown
11. **10-asesor-gpt-propuesta-pendiente.webp** - AI advisor with proposal
12. **11-versiones-comparacion.webp** - Version history and comparison
13. **12-componentes-estados.webp** - Design system components
14. **14-componente-navegacion-superior.webp** - Top navigation component

### Documentation

**DESIGN_ANALYSIS.md** - Comprehensive 53KB analysis document covering:
- Complete color palette with hex codes and usage
- Typography system (Instrument Serif + Geist)
- Spacing and layout patterns
- All component styles and states
- Navigation structure
- UI patterns and design system elements
- Detailed screen-by-screen breakdown
- Implementation recommendations
- Technical notes

## Quick Design System Reference

### Colors
- **Primary (Bosque)**: `#2E5A44` - Forest green for actions
- **Asesor IA**: `#3A5674` - Muted blue for AI features
- **Estimado**: `#B7570F` - Burnt orange for estimates
- **Salidas**: `#BC3F2B` - Deep red for expenses
- **Fondo**: `#F8F4EF` - Warm off-white background
- **Texto**: `#1E2320` - Near-black text

### Typography
- **Headings**: Instrument Serif (84/60/44/32pt)
- **Body**: Geist (17/15/13pt, weights 400/500/600)
- **Numbers**: Tabular figures with format `11.835 · 14.2 · 3.200`

### Key Measurements
- **Base unit**: 8px
- **Border radius**: 8-12px (cards), 24px (pills)
- **Button padding**: 12-16px vertical, 24-32px horizontal
- **Max content width**: ~1360px

### Component States
- ✓ Normal, Hover, Focus, Disabled
- ✓ Empty, Loading, Error, Success
- ✓ Verified, Estimated, Calculated

## Usage

These screenshots and documentation are intended for:
- **Developers**: Implementation reference for UI components
- **Designers**: Style guide and pattern library
- **Product**: Understanding user flows and feature interactions
- **QA**: Visual regression testing reference

## Notes

- All screenshots captured on October 27, 2026
- Source: design-reference.html (Figma export)
- Spanish language interface
- Desktop-first design with responsive considerations

---

For detailed analysis, see **DESIGN_ANALYSIS.md**
