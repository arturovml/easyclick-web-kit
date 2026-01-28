# EasyClick Web Kit

Base de proyecto para sitios con Next.js App Router, TypeScript strict, Tailwind
CSS y contenido en MDX. Pensado para iniciar nuevos proyectos con estructura,
componentes y reglas claras desde el primer día.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- MDX (render con `next-mdx-remote`)

## Estructura

```
app/                 Rutas App Router
components/          Componentes UI
content/             Contenido y data (MDX + TS)
lib/                 Utilidades y provider MDX
styles/              Estilos globales
public/brand/         Assets de marca
```

## Componentes MDX permitidos

Solo se permiten los siguientes componentes dentro de MDX:

- Hero
- Features
- HowItWorks
- FAQ
- Contact
- CTA
- PageHeader
- ServiceList
- DeviceGrid

## Reglas del kit

- No usar `any`
- No mutar estado directo
- Manejo de loading/error
- Componentes con responsabilidad única
- Accesibilidad básica (labels, aria cuando aplique)
- No inventar dependencias innecesarias
- Mantener el set de componentes MDX pequeño

## Cómo correr

```
npm install
npm run dev
```

## Prompt de ejemplo (MDX)

```
Tarea: convertir el contenido estratégico de Nodo 88 en archivos MDX del kit.

Contexto:
Este repo usa MDX con componentes permitidos:
Hero, Features, HowItWorks, FAQ, Contact, CTA, PageHeader, ServiceList, DeviceGrid.

Usa el contenido que te voy a pegar (estrategia y copy de Nodo 88) y tradúcelo a:

1) content/mdx/pages/home.mdx
   - Hero (valor principal + subtítulo + CTAs)
   - Features (problemas / soluciones)
   - HowItWorks (cómo lo hacemos)
   - Sectores que atendemos (como Features o lista)
   - CTA final
   - FAQ corto (4–5 preguntas)

2) content/mdx/pages/servicios.mdx
   - PageHeader
   - ServiceList con 3 servicios:
     • Control/bloqueo de dispositivos
     • Mejora de cobranza
     • Integración y acompañamiento
   - CTA

3) content/mdx/pages/faq.mdx
   - PageHeader
   - FAQ con las preguntas definidas

4) content/mdx/pages/contacto.mdx
   - PageHeader
   - Contact
   - CTA

Reglas:
- No inventes capacidades
- No prometas resultados garantizados
- Lenguaje profesional B2B
- No cambies la arquitectura ni agregues componentes nuevos
- El resultado debe ser copy listo para producción en MDX
```
