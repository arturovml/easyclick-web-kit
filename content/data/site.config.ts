export const siteConfig = {
  name: "EasyClick",
  description: "Scaffold base",
  seo: {
    titleTemplate: "%s | EasyClick",
    defaultDescription: "Scaffold base",
  },
  routes: {
    home: "/",
    servicios: "/servicios",
    dispositivos: "/dispositivos",
    faq: "/faq",
    contacto: "/contacto",
    privacidad: "/privacidad",
    terminos: "/terminos",
  },
} as const;
