import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { getBrandingImages } from "@/lib/cloudinary";
import { BrandingGallery } from "./branding-gallery";

const identities = [
    {
        name: "designali",
        role: "Founder · Design & Engineering",
        description:
            "My studio and longest-running project. Years of separate experiments needed one home, one brand and one system. That became designali.",
        deliverables: ["Logo", "Visual identity", "Custom typeface", "Design system"],
        colors: ["#00A8FF", "#000000", "#FFFFFF"],
        image: "/designs/designali.jpg",
        href: "/story/designali",
    },
    {
        name: "PREDICT",
        role: "Design Engineer · Predict Fit",
        description:
            "Scientific and premium without feeling cold. MuscleAGE™, OrthoAGE™ and LegAGE™ share one visual grammar, and the brand lives in code, not just a PDF.",
        deliverables: ["Logo & wordmark", "Naming system", "Colour & type", "Mascot", "Tone of voice", "Guidelines"],
        colors: ["#9500FF", "#000000", "#FFFFFF"],
        image: "/designs/predict.jpg",
        href: "/story/predict",
    },
    {
        name: "optm",
        role: "Head of Design · OPTM Health Care",
        description:
            "A biomarker-driven pain clinic, positioned around one idea: measure what imaging can’t. Confident in the science, plain-spoken with patients.",
        deliverables: ["Wordmark & logo system", "Colour & type", "Photo direction", "Tone of voice", "Guidelines"],
        colors: ["#00381F", "#F5F0EA", "#FFFFFF"],
        image: "/designs/optm.jpg",
        href: "/story/optm",
    },
];

/** Captions by Cloudinary public id, since the uploaded file names aren't readable. */
const captions: Record<string, string> = {
    ezvisit1_cz80mn: "ezvisit 10",
    AccessMaster1_cps9ta: "access master",
    Atendio1_nbdwoi: "attendio 5",
    AInsights1_xiwv8j: "AInsights",
    "Logos-03_u1twwd_v0kajt": "Exelon",
    "11_q9mlpb_flgjnd_fl5dsz_e4qi2m_s5lo7f": "Deoband Satyagrah",
    logo4_mhbrvu_rxzx74_mjtnic_hujvhx_annsio: "Raw Cuts",
    logo5_dwzywo_sqvd6a_of8eeg_ekqind_je49z1: "Finexic Concordia",
    Logo_gu8swy_wmmmkh_ue7nod: "Purple Sphere",
    "Logos-01_a2omxs_ienjpk": "Cigna",
    "Logo-02_psg8sa_ifqedn_db9lhk": "Kapha",
    "Logos-05_pqsh1t_mjmoxk": "Truist",
    "Logo-06_ouvp53_chb7ve_xjw0ga": "Vinson Edge",
    "Logos-04_kkycuo_xiqkre": "Bloomberg Television",
    "Logos-02_nbwpis_mdlhdx": "Bret Learning Center",
    "Sapne_Foundation-03_gntmoh_afi6bu": "Sapne Foundation",
    "KR2-copy_lb6zjo": "Knight Rider",
    "MM2-copy_moqcv4": "Max Man",
    "HF2-copy_uyezlh": "Horse Fire",
    "ar-1_vbvut6": "Horse Fire Oil",
    "ar-2_pg0hyp": "Ashwagandha",
    "ar-3_dhocgx": "Himalayan Shilajit",
    "ar-4_rykjum": "Amrut Granules",
    "ar-5_j7whde": "Ashwarin Plus",
    "ar-6_zsrhja": "B-Grow",
    "ar-7_rdpov8": "Kamini",
    "ar-8_dtsia8": "Body Care",
    "ar-9_cn1256": "Ashwashakti",
};

type CloudinaryImage = {
    public_id: string;
    secure_url: string;
};

function toItems(images: CloudinaryImage[]) {
    return images.map(({ public_id, secure_url }) => ({
        src: secure_url,
        caption: captions[public_id.split("/").pop() ?? ""],
    }));
}

function SectionHeading({ title, note }: { title: string; note: string }) {
    return (
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-y-2 border-dotted p-4">
            <h2 className="font-serif text-3xl">{title}</h2>
            <p className="text-sm text-muted-foreground">{note}</p>
        </div>
    );
}

export async function Branding() {
    const [logos, packaging] = await Promise.all([
        getBrandingImages("logos"),
        getBrandingImages("packaging"),
    ]);

    return (
        <section className="mx-auto w-full max-w-6xl border-dotted xl:border-x-2">
            <div className="grid gap-2 p-2">
                {identities.map((brand) => (
                    <Link
                        key={brand.name}
                        href={brand.href}
                        className="group grid border border-dotted outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-5"
                    >
                        <div className="overflow-hidden md:col-span-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={brand.image}
                                alt={`${brand.name} brand applied to its website`}
                                loading="lazy"
                                className="aspect-video h-full w-full object-cover transition-[filter] duration-300 group-hover:grayscale"
                            />
                        </div>

                        <div className="flex flex-col justify-between gap-6 border-t border-dotted p-5 md:col-span-2 md:border-t-0 md:border-l">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-3">
                                    <h2 className="font-serif text-4xl leading-none">{brand.name}</h2>
                                    <ArrowUpRightIcon className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                                </div>
                                <p className="text-xs text-primary">{brand.role}</p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {brand.description}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <ul className="flex flex-wrap gap-1">
                                    {brand.deliverables.map((item) => (
                                        <li key={item} className="border px-2 py-1 text-xs">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex h-8 border" aria-hidden="true">
                                    {brand.colors.map((color) => (
                                        <span
                                            key={color}
                                            className="flex-1 first:flex-[2]"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <SectionHeading title="Logos & Marks" note="Wordmarks, emblems and symbols" />
            <BrandingGallery items={toItems(logos)} fallbackAlt="Logo design" fit="contain" />

            <SectionHeading title="Packaging" note="Labels, pouches, bottles and boxes" />
            <BrandingGallery items={toItems(packaging)} fallbackAlt="Packaging design" fit="cover" />
        </section>
    );
}
