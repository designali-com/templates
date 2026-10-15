"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type VideoCardProps = {
    src: string;
    poster?: string;
    className?: string;
};

function VideoCard({ src, poster, className = "" }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnail =
        poster ||
        src
            .replace("/video/upload/", "/video/upload/so_1/")
            .replace(/\.mp4(\?.*)?$/, ".jpg");

    async function handlePlay() {
        if (!videoRef.current) return;

        try {
            await videoRef.current.play();
        } catch (error) {
            console.error("Unable to play video:", error);
        }
    }

    return (
        <div
            className={`group relative w-full overflow-hidden bg-black ${className}`}
        >
            <video
                ref={videoRef}
                src={src}
                poster={thumbnail}
                controls={isPlaying}
                playsInline
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="block h-full w-full object-cover"
            />

            {!isPlaying && (
                <button
                    type="button"
                    onClick={handlePlay}
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/90 text-black shadow-xl backdrop-blur transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-1 size-7 fill-current" />
                    </span>
                </button>
            )}
        </div>
    );
}

/* -------------------------------- Reels -------------------------------- */

const reelVideos = [
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607067/013_hlbvas_uwdm7y.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607065/08_mvg5h4_edox5f.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606426/00_d8bech_eqabzu.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607063/02_uk15hb_fooxnb.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607057/06_eviwcm_rmmhku.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607045/03_htugsa_k7fx12.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606426/012_wtq2dx_eqabzu.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606907/01_uperzv_hhld1u.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606992/05_pn5czc_hmb1iy.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607001/010_rjbf0d_n53l03.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606426/04_qyyiwb_emneiu.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606424/09_lpbgv4_gh3qhs.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606422/07_wfyd5k_lpp3wb.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606420/016_ehachw_lvfpef.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606416/015_ngtqoj_rvvm01.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606408/014_mfjhge_ls54er.mp4",
];

export function Reels() {
    return (
        <main className="w-full max-w-6xl mx-auto xl:border-x-2 border-dotted px-2">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {reelVideos.map((src) => (
                    <VideoCard key={src} src={src} />
                ))}
            </div>
        </main>
    );
}

/* -------------------------------- Videos ------------------------------- */

const featuredVideo =
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1726043923/IDCUBE_Video_2_oii2ve.mp4";

const twoColumnVideos = [
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607099/3_likg2t_n4xlwz.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607095/2_kol6av_jhiiee.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607064/4_jpzscs_yn6yq1.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607053/1_axo8ke_gomxnk.mp4",
];

const threeColumnVideos = [
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607072/060_ltzuhh_tsq6ut.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607043/056_mmonti_umovk4.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725607043/052_tnc6k1_lvk4kt.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606999/09_bzk3q2_qkd6th.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606990/011_h43bab_dy03ed.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606990/02_wrqra7_tw8w8x.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606426/01_biln5v_gawtrg.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606425/025_tvpe2h_dvqnke.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606424/08_mmhcn9_hioyhs.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606423/053_vqevwo_azb5ke.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606423/04_t760xh_yrxbwg.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606423/051_bmy5ic_jhhu29.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606421/048_u14cdg_coqqjb.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606421/013_iowkks_o8vy0h.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606421/014_aebxmd_zzpden.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606420/029_jtj3qj_len22q.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606420/03_r8mbrm_h9u42p.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606419/055_k5jwdq_as2fqq.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606419/054_jmj06s_kveomo.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606418/015_na74dz_rckdup.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606418/016_hdkwxl_w0cbzz.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606416/07_f0fbox_nruykj.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606415/058_w5ns29_an4m31.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606413/010_yqyq45_dvzrhp.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606413/057_l2usrw_z6aojq.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606411/06_olm3sg_ydzwls.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606411/049_vqauco_hbkdfj.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606409/026_rdserl_z6aojq.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606408/041_hi0uta_veetzm.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606407/034_nva5gk_hcava1.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606406/046_e4v249_ypvczt.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606406/045_j6hil2_zuauh4.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606406/012_cbjygg_d9vsho.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606005/030_bzlr36_pv83bm.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606005/028_rnonpv_sfax5m.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606004/042_f0kz2w_cm7wap.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606004/050_i7kdh6_xpwbvs.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606002/037_ytlmfq_vygxo6.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606000/038_ltx4nf_rnkur7.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606000/033_ddqq0y_guqgqg.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725606000/043_xgthdf_urgrcq.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605999/040_auwy7k_z8ts30.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605999/027_gxphp2_hjf4dq.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605964/019_lhuffh_ldxphj.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605976/020_fdcwqq_q8urpm.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605984/047_vdi9qs_bdna0w.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605985/036_hef0mm_liuh8i.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605985/039_ztxo2v_buukay.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605989/031_ypddbt_dvqnqe.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605989/031_ypddbt_dvqnqe.mp4",
    "https://res.cloudinary.com/deelfmnhg/video/upload/v1725605995/059_uiulcl_flbcuf.mp4",
];

export function Videos() {
    return (
        <main className="w-full max-w-6xl pt-2 mx-auto xl:border-x-2 border-dotted px-2">
            {/* Featured video */}
            <div className="mb-2">
                <VideoCard
                    src={featuredVideo}
                    className=""
                />
            </div>

            {/* Two-column videos */}
            <div className="mb-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
                {twoColumnVideos.map((src) => (
                    <VideoCard key={src} src={src} />
                ))}
            </div>

            {/* Three-column videos */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {threeColumnVideos.map((src, index) => (
                    <VideoCard key={`${src}-${index}`} src={src} />
                ))}
            </div>
        </main>
    );
}