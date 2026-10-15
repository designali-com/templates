import React from 'react';
import { Download, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

type ExperienceItem = {
    id: string;
    role: string;
    company: string;
    employmentType: string;
    period: string;
    location: string;
    logo: string;
};

const experiences: ExperienceItem[] = [
    {
        id: "1",
        role: "Head of Design",
        company: "OPTM Health Care",
        employmentType: "Full-time",
        period: "Jul 2026 - Present",
        location: "Delhi",
        logo: "/logos/logo-1-2.png",
    },
    {
        id: "2",
        role: "Design Engineer",
        company: "Predict Fit",
        employmentType: "Full-time",
        period: "Jul 2026 - Present",
        location: "Delhi",
        logo: "/logos/logo-1-1.png",
    },
    {
        id: "3",
        role: "Senior Graphic Designer",
        company: "IDCUBE",
        employmentType: "Full-time",
        period: "Feb 2024 - Jan 2026",
        location: "Noida",
        logo: "/logos/logo-1.png",
    },
    {
        id: "4",
        role: "Senior Graphic Designer",
        company: "Steadfast Nutrition",
        employmentType: "Full-time",
        period: "Aug 2023 - Jan 2024",
        location: "Noida",
        logo: "/logos/logo-1-3.png",
    },
    {
        id: "5",
        role: "Assistant Art Director",
        company: "Garage Productions",
        employmentType: "Full-time",
        period: "Dec 2020 - Dec 2022",
        location: "Noida",
        logo: "/logos/logo-1-4.png",
    },
    {
        id: "6",
        role: "Graphic Designer",
        company: "Forms Adda",
        employmentType: "Full-time",
        period: "Jun 2020 - Dec 2020",
        location: "Ranchi",
        logo: "/logos/logo-1-5.png",
    },
    {
        id: "7",
        role: "Senior Visualizer",
        company: "Yellow Straw Advertising",
        employmentType: "Full-time",
        period: "Nov 2018 - Jun 2020",
        location: "Noida",
        logo: "/logos/logo-1-6.png",
    },
    {
        id: "8",
        role: "Faculty",
        company: "WLC College India Ltd.",
        employmentType: "Part-time",
        period: "Aug 2018 - Nov 2018",
        location: "Delhi, India",
        logo: "/logos/logo-1-7.png",
    },
    {
        id: "9",
        role: "Animator",
        company: "Pointillist Media Private Limited",
        employmentType: "Full-time",
        period: "Nov 2017 - Aug 2018",
        location: "Delhi",
        logo: "/logos/logo-11.png",
    },
    {
        id: "10",
        role: "Tele Caller",
        company: "Jukaso Journeys Resorts",
        employmentType: "Full-time",
        period: "Nov 2016 - Aug 2017",
        location: "Gurugram",
        logo: "/logos/logo-1-8.png",
    },
];

export default function ExperienceSection() {
    return (
        <section className="border-b-2 border-dotted flex items-center justify-center">
            <div className="max-w-6xl relative w-full h-full border-x-2 border-dotted grid grid-cols-1 md:grid-cols-2 gap-6 items-start p-6">
                <div className="flex flex-col h-full gap-3">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex border items-start gap-4">
                            <div className="relative flex shrink-0 items-center justify-center overflow-hidden h-full border-r bg-background p-2">
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    className="object-contain invert grayscale w-20 h-full p-2"
                                />
                            </div>

                            <div className="min-w-0 py-2 flex-1">
                                <h3 className="font-semibold">{experience.role}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {experience.company} · {experience.employmentType}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {experience.period} · {experience.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex sticky top-10 flex-col justify-between space-y-6">
                    <div className="space-y-6">
                        <h2 className="italic font-serif text-5xl tracking-wide">
                            Where I stand
                        </h2>

                        <p className=" text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
                            For 6+ years I&apos;ve been collaborating with dynamic tech founders, teams
                            shaping tomorrow, from independent builders to design-driven SMBs across
                            Fintech, DevTools, Web3, and SaaS.
                        </p>

                        <p className=" text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
                            My mission is to make founders more competitive through design. I craft
                            identities, websites, and visual systems that people respond to, earning trust
                            with investors, opening doors to partnerships, and turning good products into
                            companies others benchmark.
                        </p>
                    </div>

                    <div className="space-x-2 pt-6">
                        <Button render={<Link href="/cv.pdf" target="_blank" />}>
                            <Download className="text-white" />
                            <span>Download my CV</span>
                        </Button>
                        <Button render={<Link href="/book-a-call" target="_blank" />}>
                            <Phone strokeWidth={0} fill='white' className="text-white" />
                            Book a call
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}