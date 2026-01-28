export type DeviceItem = {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  featured?: boolean;
};

export const devices: DeviceItem[] = [
  {
    id: "click-pro",
    name: "EasyClick Pro",
    description: "Dispositivo premium con integración completa al panel web.",
    tags: ["wifi", "nfc"],
    featured: true,
  },
  {
    id: "click-mini",
    name: "EasyClick Mini",
    description: "Formato compacto ideal para puntos de venta pequeños.",
    tags: ["bluetooth", "bateria"],
  },
  {
    id: "click-outdoor",
    name: "EasyClick Outdoor",
    description: "Diseñado para exteriores con carcasa resistente al clima.",
    tags: ["ip65", "solar"],
  },
];
