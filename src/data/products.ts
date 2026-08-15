export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  color: string;
  lightColor: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "SELMITAN-Trio 6.25",
    slug: "selmitan-trio-625",
    category: "CARDIAC CARE",
    description:
      "Telmisartan 40 mg + Chlorthalidone 6.25 mg + Cilnidipine 10 mg Tablets",
    image: "/images/selmitantrio6.25.png",
    color: "#1B1F1C",
    lightColor: "#E6F5EC",
  },
  {
    id: 2,
    name: "SELMITAN-C",
    slug: "selmitan-c",
    category: "CARDIAC CARE",
    description:
      "Telmisartan 40 mg + Cilnidipine 10 mg Tablets",
    image: "/images/selmitanc.png",
    color: "#1B1F1C",
    lightColor: "#E6F5EC",
  },
  {
    id: 3,
    name: "D-HEAMO",
    slug: "d-heamo",
    category: "HEMATINIC",
    description:
      "Ferric Pyrophosphate Liposomal with Vitamin C, Vitamin B12 & Folic Acid Tablets",
    image: "/images/dheamo.png",
    color: "#146B3E",
    lightColor: "#E6F5EC",
  },
  {
    id: 4,
    name: "S-TRACT EX Syrup",
    slug: "s-tract-ex",
    category: "RESPIRATORY",
    description:
      "Terbutaline Sulphate + Bromhexine HCl + Guaiphenesin + Menthol Syrup",
    image: "/images/stractex.png",
    color: "#1F8A55",
    lightColor: "#E6F5EC",
  },
  {
    id: 5,
    name: "ONSTOK Injection",
    slug: "onstok",
    category: "INJECTION",
    description:
      "Ondansetron Hydrochloride Injection IP 4mg/2ml",
    image: "/images/onstokinjection.png",
    color: "#146B3E",
    lightColor: "#E6F5EC",
  },
  {
    id: 6,
    name: "DIAM Injection",
    slug: "diam",
    category: "INJECTION",
    description:
      "Diclofenac Sodium Injection IP 75mg/ml",
    image: "/images/diclofenac.png",
    color: "#146B3E",
    lightColor: "#E6F5EC",
  },
];