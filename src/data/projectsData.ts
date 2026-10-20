export interface ProjectItem {
  id: string;
  name: string;
  category?: string;
  location?: string;
  year?: string;
  area?: string;
  scope?: string;
  style?: string;
  summary?: string;
  highlights?: string[];
  coverImage?: string;
  gallery?: string[];
}

/**
 * Phase 1 Projects Data
 * Exactly 11 projects in order.
 * All unknown details left blank until provided by user in Phase 2.
 */
export const projectsData = [
  {
    id: "aparna-county",
    slug: "aparna-county",
    name: "Aparna County",
    category: "Residential",
    location: "Janapriya Nagar, Hafeezpet, Hyderabad, Telangana 500049",
    scope: "Luxury Modular Kitchen & Interior Architecture",
    style: "Contemporary Warm Minimalist",
    summary:
      "A warm and timeless residential interior blending matte anthracite cabinetry, fluted glass vitrines, woven cane accents, and architectural track illumination.",
    highlights: [
      "Custom matte anthracite & fluted glass modular kitchen joinery",
      "Woven cane wicker cabinetry accents & natural oak textures",
      "Recessed architectural track lighting & integrated LED cove profiles",
      "Seamless quartz countertop with undermount dual workstation sink",
      "Built-in smart microwave, oven tower & integrated appliance concealment",
    ],
    coverImage: "/images/projects/aparna-county/cover.jpg",
    gallery: [
      "/images/projects/aparna-county/cover.jpg",
      "/images/projects/aparna-county/1.jpg",
      "/images/projects/aparna-county/2.jpg",
      "/images/projects/aparna-county/3.jpg",
      "/images/projects/aparna-county/4.jpg",
    ],
  },
  {
    id: "aparna-serene",
    name: "Aparna Serene",
    category: "",
    coverImage: "",
  },
  {
    id: "apilla",
    name: "Apilla",
    category: "",
    coverImage: "",
  },
  {
    id: "la-paloma",
    name: "La Paloma",
    category: "",
    coverImage: "",
  },
  {
    id: "la-paloma-villas",
    name: "La Paloma Villas",
    category: "",
    coverImage: "",
  },
  {
    id: "myhome-bhuja",
    name: "MyHome Bhuja",
    category: "",
    coverImage: "",
  },
  {
    id: "myhome-avtar",
    name: "MyHome Avtar",
    category: "",
    coverImage: "",
  },
  {
    id: "praneeth-villas",
    name: "Praneeth Villas",
    category: "",
    coverImage: "",
  },
  {
    id: "rainbow-vistas",
    name: "Rainbow Vistas",
    category: "",
    coverImage: "",
  },
  {
    id: "raja-pushpa-prestinia",
    name: "Raja Pushpa Prestinia",
    category: "",
    coverImage: "",
  },
  {
    id: "sark-one-villas",
    name: "SARK One Villas",
    category: "",
    coverImage: "",
  },
];
