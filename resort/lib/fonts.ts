import localFont from "next/font/local";

export const neueMontreal = localFont({
    src: [
        {
            path: "../fonts/NeueMontreal-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/NeueMontreal-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/NeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/NeueMontreal-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-montreal",
    display: "swap",
});

export const spara = localFont({
    src: [
        {
            path: "../fonts/spara.otf",
            weight: "400",
        },
    ],
    variable: "--font-spara",
});

export const dastin = localFont({
    src: [
        {
            path: "../fonts/dastin.ttf",
            weight: "400",
        },
    ],
    variable: "--font-dastin",
});

export const caster = localFont({
    src: [
        {
            path: "../fonts/caster-regular.ttf",
            weight: "400",
        },
    ],
    variable: "--font-caster",
});

export const slight = localFont({
    src: [
        {
            path: "../fonts/slight.ttf",
            weight: "400",
        },
    ],
    variable: "--font-slight",
});