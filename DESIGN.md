---
name: TopoCode
description: Landing page premium para una mini agencia de desarrollo de software enfocada en negocios locales.
colors:
  polar-neon: "#6E87B7"
  polar-neon-dark: "#5F78A9"
  midnight-bg: "#2B303A"
  midnight-surface: "#333A46"
  midnight-surface-soft: "#414A5A"
  midnight-black: "#222731"
  frost: "#D5DEEB"
  cloud: "#F0F1F5"
  steel: "#C1CBDC"
  borderline: "#566176"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.polar-neon}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.polar-neon-dark}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.frost}"
    rounded: "{rounded.full}"
    padding: "14px 32px"
  card:
    backgroundColor: "{colors.midnight-surface}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.midnight-black}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: TopoCode

## 1. Overview

**Creative North Star: "The Midnight Studio"**

TopoCode se presenta como un estudio nocturno de diseño y desarrollo: un espacio oscuro, enfocado y deliberado, donde el color solo aparece cuando tiene algo que decir. El fondo profundo absorbe la atención; el azul frío actúa como una luz de trabajo precisa. No hay ruido visual, no hay gradientes decorativos, no hay llamadas desesperadas a la acción. Cada sección respira, cada interacción responde, cada superficie tiene un peso real.

Este sistema rechaza las plantillas genéricas de agencia: no aceptamos tarjetas idénticas en filas de tres, bordes de acento laterales, textos gradiente ni mockups construidos con `<div>`s. La obra digital es el protagonista; el diseño solo debe ponerla en escena.

**Key Characteristics:**
- Oscuro por convicción, no por moda. El fondo profundo sostiene el contenido.
- Un solo acento: el azul polar. Raro y preciso.
- Superficies con borde de vidrio: bordes translúcidos, inner highlights y transiciones suaves.
- Tipografía Inter usada con intención: pesos, tracking y escala claros.
- Movimiento como respuesta, no como decoración.

## 2. Colors

La paleta se construye sobre un fondo de medianoche con un acento azul frío. Los neutros son azulados para mantener coherencia térmica; no mezclamos grises cálidos con grises fríos.

### Primary
- **Polar Neon** (`#6E87B7`): acento principal. Botones primarios, iconos activos, enlaces hover, estados de foco, elementos flotantes clave. Se usa con disciplina; nunca cubre más del ~10% de una pantalla.
- **Polar Neon Dark** (`#5F78A9`): estado hover del acento. Transiciones de botón primario y superficies que necesitan un tono más profundo del mismo acento.

### Neutral
- **Midnight BG** (`#2B303A`): fondo principal de la página. Color base oscuro, azulado, sin llegar al negro puro.
- **Midnight Black** (`#222731`): superficie más profunda, usada en inputs, footer y secciones que necesitan anclar visualmente.
- **Midnight Surface** (`#333A46`): fondo de tarjetas, paneles y contenedores elevados.
- **Midnight Surface Soft** (`#414A5A`): fondo secundario dentro de tarjetas o celdas bento para crear capas sin sombra.
- **Frost** (`#D5DEEB`): texto secundario, subtítulos, iconos en reposo, pequeños detalles.
- **Cloud** (`#F0F1F5`): texto principal. Alto contraste contra Midnight BG.
- **Steel** (`#C1CBDC`): texto terciario, placeholders, meta-información.
- **Borderline** (`#566176`): bordes sutiles, divisores, líneas de estructura.
- **Pure White** (`#FFFFFF`): texto sobre acento y estados de máximo énfasis.

### Named Rules
**The One Accent Rule.** Solo existe Polar Neon como acento en toda la página. No hay segundos acentos, no hay gradientes multicolor, no hay estados verdes o amarillos por inercia. Si un elemento necesita énfasis, usa peso, escala o Polar Neon.

**The No Black Rule.** El negro puro (`#000000`) está prohibido. Los fondos oscuros son azulados o carbonizados (`#222731` como límite inferior).

## 3. Typography

**Display / Body / Label Font:** Inter (system-ui, sans-serif fallback)

Inter se elige por su legibilidad técnica y su neutralidad disciplinada. No buscamos originalidad tipográfica por sí sola; buscamos jerarquía clara y presencia controlada. Los títulos grandes usan tracking negativo para ganar presencia; los labels usan tracking positivo y mayúsculas con moderación.

### Hierarchy
- **Display** (800, clamp(2.5rem, 6vw, 4.5rem), line-height 1.1, letter-spacing -0.03em): hero headline únicamente. Máximo 2 líneas en desktop.
- **Headline** (700, clamp(2rem, 4vw, 3rem), line-height 1.15, letter-spacing -0.02em): títulos de sección. Frases cortas, una sola idea.
- **Title** (600, 1.25rem, line-height 1.3): títulos de tarjetas, nombres de servicio, pasos de proceso.
- **Body** (400, 1rem, line-height 1.65): párrafos y descripciones. Longitud máxima 65ch.
- **Label** (600, 0.75rem, letter-spacing 0.08em, uppercase): etiquetas de formulario, micro-textos, badges ocasionales. Uso restringido.

### Named Rules
**The Two-Line Hero Rule.** El headline del hero no puede superar 2 líneas en desktop. Si el copy no cabe, se acorta el copy o se reduce la escala, nunca se rompe la regla.

**The No Serif Rule.** No se usa serif para "darle creatividad". La creatividad viene del layout, la animación y la precisión, no de mezclar familias tipográficas.

## 4. Elevation

El sistema usa una mezcla de capas tonales y bordes de vidrio. Las sombras son tintadas y suaves; nunca negras puras a baja opacidad. La profundidad se comunica principalmente a través del cambio de superficie (Midnight BG → Midnight Surface → Midnight Surface Soft) y de bordes translúcidos (`border-white/10`, `border-polar-neon/20`).

### Shadow Vocabulary
- **Ambient Lift** (`0 20px 44px rgba(110,135,183,0.18)`): elevación de tarjetas en hover. Tintada con el acento para que la superficie parezca responder a una luz fría.
- **Diffuse Depth** (`0 25px 50px rgba(0,0,0,0.35)`): paneles grandes y modales. Negra pero suave, usada sobre fondos oscuros.
- **Soft Float** (`0 8px 24px rgba(0,0,0,0.25)`): elementos flotantes como el nav al hacer scroll.

### Named Rules
**The Glass Edge Rule.** Todo contenedor elevado lleva un borde superior o interno translúcido (`border-white/10` o similar) para simular refracción de luz sobre el borde. Una superficie sin borde se siente plana; un borde opaco se siente pesada.

## 5. Components

### Buttons
- **Shape:** píldora completa (9999px radius). Alto táctil generoso.
- **Primary:** fondo Polar Neon, texto blanco, padding 14px 32px. Hover: Polar Neon Dark + translateY(-2px) + scale(1.02).
- **Secondary:** fondo transparente, borde Polar Neon/70, texto Frost. Hover: fondo Polar Neon/15 + texto blanco.
- **Dark / Light variant:** fondo Frost, texto Midnight Black, para secciones oscuras que necesitan contraste inverso.
- **Tactile feedback:** active scale(0.98) y translateY(-1px) en todos los botones.
- **Focus:** anillo Polar Neon de 2px con offset de 2px.

### Cards / Containers
- **Corner Style:** 16px radius (rounded-lg). Interior con padding 24px.
- **Background:** Midnight Surface.
- **Border:** 1px Borderline, con inner highlight superior (`border-white/10`) cuando está elevada.
- **Shadow:** ninguna en reposo. Sombra Ambient Lift aparece en hover.
- **Hover:** translateY(-8px) + sombra tintada. No scale.

### Inputs / Fields
- **Style:** fondo Midnight Black/80, borde 1px Borderline, radius 12px.
- **Texto:** Cloud en valor, Steel en placeholder (contrastado contra Midnight Black).
- **Focus:** anillo Polar Neon de 2px, borde transparente.
- **Label:** arriba del input, Label style, color Frost.
- **Error:** borde rojo apagado (si se usa, mantenerlo sutil y siempre con texto de error inline).

### Navigation
- **Desktop:** altura 72-80px, fondo transparente en top, Midnight Black/85 + backdrop-blur al hacer scroll.
- **Enlaces:** texto Frost/80, hover blanco con subraya escalable desde la izquierda.
- **CTA nav:** button-primary compacto.
- **Mobile:** menú hamburguesa con panel deslizante, fondo Midnight Surface/95 + backdrop-blur.

### Hero CTA Block
- **Primary:** "Cotizar proyecto".
- **Secondary:** "Ver servicios" (solo si se justifica; evitar duplicar intención).
- Ambos en píldora, alineados horizontalmente en desktop, apilados en mobile.

## 6. Do's and Don'ts

### Do:
- **Do** mantener el fondo oscuro en toda la página. Midnight BG como base, Midnight Surface para tarjetas.
- **Do** usar Polar Neon como único acento, con moderación. Un botón, un icono, un foco. No más.
- **Do** reservar espacio en blanco entre secciones. La página debe respirar (`py-24` a `py-32` mínimo por sección en desktop).
- **Do** usar imágenes reales o generadas para el hero y el portfolio. Un mockup de `<div>`s no cuenta.
- **Do** implementar `prefers-reduced-motion` para todas las animaciones.
- **Do** asegurar contraste WCAG AA en todo texto, incluyendo placeholders.
- **Do** mantener la navegación en una sola línea en desktop.

### Don't:
- **Don't** usar gradientes de texto o fondos con blobs morados/azules sin significado. PRODUCT.md lista explícitamente "gradientes morados/azules neon" como anti-referencia.
- **Don't** poner una eyebrow mayúscula encima de cada sección. Máximo una cada tres secciones.
- **Don't** usar tarjetas idénticas en filas de tres como solución por defecto. PRODUCT.md prohíbe "tarjetas iguales con icono + título + texto repetidos sin fin".
- **Don't** construir previews de producto con `<div>`s que simulan dashboards o terminales. Usa imágenes reales o componentes reales.
- **Don't** mezclar grises cálidos y fríos en la misma página. Todos los neutros son azulados.
- **Don't** usar negro puro (`#000000`) ni blanco puro como fondo de sección.
- **Don't** tener más de una intención de CTA duplicada en la página. "Cotizar proyecto" es la acción principal; no la dupliques con "Contáctanos", "Hablemos" o "Escríbenos".
