export interface Project {
  title: string;
  subtitle: string;
  slug: string;
  coverImage: string;
  content: {
    type: "image" | "text";
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "Golbourne Road",
    subtitle: "Apartment",
    slug: "golbourne-road-apartment-interior",
    coverImage: "/images/projects/golbourne-road.jpg",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  {
    title: "Cassandra Goad",
    subtitle: "Shop",
    coverImage: "/images/projects/cassandra-goad.jpg",
    slug: "cassandra-goad-interior-design",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  {
    title: "Holland Park",
    subtitle: "Family House",
    coverImage: "/images/projects/holland-park.jpg",
    slug: "holland-park-interior-design",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  {
    title: "Elgin Crescent",
    subtitle: "Loft",
    coverImage: "/images/projects/elgin-crescent.jpg",
    slug: "elgin-crescent-interior",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  {
    title: "Notting Hill",
    subtitle: "Townhouse",
    coverImage: "/images/projects/notting-hill.jpg",
    slug: "notting-hill-townhouse-interior",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  {
    title: "Camden",
    subtitle: "Family Home",
    coverImage: "/images/projects/camden.jpg",
    slug: "camden-family-home-interior",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  {
    title: "Kensal Rise",
    subtitle: "Tasha's Home",
    coverImage: "/images/projects/kensal-rise.jpg",
    slug: "kensal-rise-interior-design",
    content: [
      {
        type: "text",
        value:
          "A refined West London apartment focused on material warmth and spatial clarity.",
      },
      {
        type: "image",
        value: "/images/projects/golbourne-road.jpg",
      },
      {
        type: "text",
        value:
          "Natural oak, soft limestone tones and layered lighting create a calm yet contemporary interior.",
      },
    ],
  },
  // Add others the same way
];
