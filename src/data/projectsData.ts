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
export const projectsData: ProjectItem[] = [
  {
    id: "aparna-county",
    name: "Aparna County",
    category: "",
    coverImage: "",
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
