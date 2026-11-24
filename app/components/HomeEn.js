"use client";

import { useThemeHandler } from "../hooks/useThemeHandler";
import Image from "next/image";
import Section from "./Section";
import Card from "./Card";

export default function HomeEn() {
    const { mounted } = useThemeHandler();

    if (!mounted) {
        return null;
    }

    return (
        <div className="max-w-5xl mx-auto px-5 py-8 md:px-8 text-foreground">
            <header className="profile-header">
                <h1 className="profile-name">
                    Tomoki Yoshikawa
                </h1>
                <p className="profile-role">Network Engineer / Developer</p>
            </header>

            <Section title="About Me">
                <Card className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <Image
                            src="/profile.png"
                            priority
                            alt="Tomoki Yoshikawa"
                            fill
                            className="rounded-full object-cover border-4 border-primary/20"
                        />
                    </div>
                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold">Tomoki Yoshikawa</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-secondary">
                            <a href="https://x.com/_marokiki" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start underline decoration-primary/50 hover:decoration-primary">
                                <span>𝕏</span> @_marokiki
                            </a>
                            <a href="https://github.com/marokiki" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start underline decoration-primary/50 hover:decoration-primary">
                                GitHub: @marokiki
                            </a>
                            <a href="https://facebook.com/marokiki.net" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start underline decoration-primary/50 hover:decoration-primary">
                                Facebook: marokiki.net
                            </a>
                            <a href="mailto:segre@marokiki.net" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start underline decoration-primary/50 hover:decoration-primary">
                                Email: segre@marokiki.net
                            </a>
                        </div>
                    </div>
                </Card>
            </Section>

            <Section title="Affiliations">
                <div className="space-y-4">
                    <Card>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <span className="font-bold text-lg">Kyoto University Graduate School of Informatics</span>
                            <span className="text-sm text-secondary tabular-nums">2025/4 - Now</span>
                        </div>
                        <p className="text-secondary mt-1">Course of Communication and Computer Engineering, Multimedia and Secure Networking Group</p>
                    </Card>
                    <Card>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <span className="font-bold text-lg">Kyoto University, Faculty of Engineering</span>
                            <span className="text-sm text-secondary tabular-nums">2021/4 - 2025/3</span>
                        </div>
                        <p className="text-secondary mt-1">School of Informatics and Mathematical Science, Computer Science Course</p>
                    </Card>
                    <Card>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <span className="font-bold text-lg">Ikeda Senior High School Attached to Osaka Kyoiku University</span>
                            <span className="text-sm text-secondary tabular-nums">2018/4 - 2021/3</span>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section title="Blogs">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="https://qiita.com/marokiki" target="_blank" className="block h-full group">
                        <Card className="h-full group-hover:border-primary/50 transition-colors">
                            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                Qiita <span className="text-secondary group-hover:text-primary text-xs">↗</span>
                            </h3>
                            <p className="text-sm text-secondary">marokiki</p>
                        </Card>
                    </a>
                    <a href="https://segre.hatenablog.com" target="_blank" className="block h-full group">
                        <Card className="h-full group-hover:border-primary/50 transition-colors">
                            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                Hatena Blog <span className="text-secondary group-hover:text-primary text-xs">↗</span>
                            </h3>
                            <p className="text-sm text-secondary">segre.hatenablog.com</p>
                        </Card>
                    </a>
                    <a href="https://www.homenoc.ad.jp/en/blog/" target="_blank" className="block h-full group">
                        <Card className="h-full group-hover:border-primary/50 transition-colors">
                            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                Blog (HomeNOC) <span className="text-secondary group-hover:text-primary text-xs">↗</span>
                            </h3>
                            <p className="text-sm text-secondary">HomeNOC Blog</p>
                        </Card>
                    </a>
                </div>
            </Section>

            <Section title="Activities">
                <div className="grid grid-cols-1 gap-4">
                    <Card>
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-bold text-lg"><a href="https://www.kmc.gr.jp" target="_blank" className="hover:underline hover:text-primary">Kyoto University Microcomputer Club (KMC)</a></h3>
                            <span className="text-sm text-secondary tabular-nums">2021/4 - Now</span>
                        </div>
                        <ul className="list-disc list-inside text-secondary space-y-1 ml-2">
                            <li>45th Vice President / 46th Vice Representative</li>
                            <li>AS59128, club room server infrastructure operation</li>
                        </ul>
                    </Card>

                    <Card>
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-bold text-lg"><a href="https://www.homenoc.ad.jp/en/" target="_blank" className="hover:underline hover:text-primary">Home NOC Operators&apos; Group</a></h3>
                            <span className="text-sm text-secondary tabular-nums">2024/7 - Now</span>
                        </div>
                        <ul className="list-disc list-inside text-secondary space-y-1 ml-2">
                            <li>Full member / AS59105 operation</li>
                            <li>Maintenance of network devices and servers at datacenters and home NOCs</li>
                            <li>Contributing to the community through conference participation</li>
                        </ul>
                    </Card>

                    <Card>
                        <h3 id="conferences" className="font-bold text-lg mb-1">Conferences &amp; Academic Meetings</h3>
                        <div className="space-y-4 mt-5">
                            <EventItem date="2026/11" title="IETF 127" role="SIDROPS presentation: Post-Quantum Cryptography for the RPKI">
                                <Link href="https://datatracker.ietf.org/meeting/127/materials/slides-127-sidrops-sessb-post-quantum-cryptography-for-the-rpki-01" text="Slides" />
                                <Link href="https://datatracker.ietf.org/meeting/127/session/sidrops/" text="Session" />
                                <Link href="https://datatracker.ietf.org/doc/draft-yoshikawa-sidrops-pqc-rpki/" text="Internet-Draft" />
                            </EventItem>
                            <EventItem date="2026/11" title="Peering Asia 8.0" role="Peering Coordination / JP Student Fellowship">
                                <Link href="https://8.peeringasia.org/" text="Event page" />
                                <Link href="https://8.peeringasia.org/fellows/" text="Fellowship" />
                            </EventItem>
                            <EventItem date="2026/7" title="IETF 126" role="Presentation: Post-Quantum Signature Algorithm Profile and Migration Considerations for the Resource Public Key Infrastructure (RPKI)">
                                <Link href="https://datatracker.ietf.org/meeting/126/materials/slides-126-sidrops-post-quantum-signature-algorithm-profile-and-migration-considerations-for-the-resource-public-key-infrastructure-rpki-00" text="Materials" />
                                <Link href="https://datatracker.ietf.org/meeting/126/session/sidrops/" text="Session" />
                                <Link href="https://datatracker.ietf.org/meeting/126/materials/slides-126-sidrops-post-quantum-signature-algorithm-profile-and-migration-considerations-for-the-resource-public-key-infrastructure-rpki-00.pdf" text="PDF" />
                            </EventItem>
                            <EventItem date="2026/7" title="JANOG58" role={'Program Committee / Presentation: What Path Leads to “Saka no Ue no Kumo”?' }>
                                <Link href="https://www.janog.gr.jp/meeting/janog58/pr-sakanouenokumo/" text="Session details" />
                            </EventItem>
                            <EventItem date="2026/5" title="TWNOG 7.0" role="Presentation: Bridging Communities — HomeNOC's New PoP in Taiwan">
                                <Link href="https://speakerdeck.com/as59105/bridging-communities-homenocs-new-pop-in-taiwan" text="Slides" />
                                <Link href="https://2026.twnog.net/agenda/c8d38c" text="Session details" />
                            </EventItem>
                            <EventItem date="2026/4" title="RubyKaigi 2026 NOC" role="Member (Cabling)" />
                            <EventItem date="2026/3" title="ICTSC2025" role="Team &quot;KOC&quot; Runner-up">
                                <Link href="https://icttoracon.net/archives/category/ictsc2025" text="Event page" />
                            </EventItem>
                            <EventItem
                                date="2026/2"
                                title="JANOG57"
                                role={
                                    <>
                                        <div>NOC BackBone / L2,L3 Team Leader</div>
                                        <div>Program Committee</div>
                                        <div>Presentation: Talking about the forefront of event networks - insights from the JANOG57 venue network and what comes next</div>
                                    </>
                                }
                            >
                                <Link href="https://www.janog.gr.jp/meeting/janog57/evnw/" text="Presentation Details" />
                                <Link href="https://noc.janog57.ishikari-dc.jp" text="NOC Overview" />
                            </EventItem>
                            <HistoryDisclosure summary="Earlier conferences and academic meetings (22)">
                            <EventItem date="2025/12" title="CKP Kyushu Joint Study Meeting 2025 with QBP & QGPOP" role="Presentation: Activities of Team Shirankedo and eduroam/OpenRoaming operation know-how and challenges at Shirankedo NOC" />
                            <EventItem date="2025/11" title="Internet Week 2025" role="Program Committee/NOC L2,L3 Team Leader" />
                            <EventItem date="2025/11" title="Peering Asia 7.0" role="Peering Personal / Peering Coordination">
                                <Link href="https://www.homenoc.ad.jp/blog/report/2026/01/03/peering-asia-2025.html" text="Report" />
                            </EventItem>
                            <EventItem date="2025/10" title="HKNOG 14.0" role="Attendee" />
                            <EventItem date="2025/10" title="BAKUCHIKU BANBAN #2" role="Presentation: Operational know-how and challenges of eduroam/OpenRoaming">
                                <Link href="https://bakuchiku.connpass.com/event/367521/" text="Event Details" />
                                <Link href="https://segre.hatenablog.com/entry/2025/10/12/151227" text="Blog" />
                            </EventItem>
                            <EventItem date="2025/7" title="JANOG56" role="Presentation: Significance of Philippine POP & international backbone">
                                <Link href="https://www.homenoc.ad.jp/blog/report/2025/08/09/janog56-bof.html" text="Report" />
                                <Link href="https://speakerdeck.com/as59105/ge-ren-yasakurudenoasyun-yong-woyi-lun-surubof-janog56?slide=35" text="Slides" />
                            </EventItem>
                            <EventItem date="2025/7" title="IETF123 Hackathon" role="Topic: RPKI Repository Efficiency" />
                            <EventItem date="2025/7" title="PhNOG 2025+" role="Attendee">
                                <Link href="https://www.homenoc.ad.jp/blog/report/2025/07/23/phnog-2025.en.html" text="Report" />
                            </EventItem>
                            <EventItem date="2025/6" title="Internet Week Showcase in Nara" role="BackBone / L2,L3 Team Leader">
                                <Link href="https://blog.nic.ad.jp/2025/10695/" text="Article" />
                            </EventItem>
                            <EventItem date="2025/4" title="TWNOG 6 in Taipei" role="Peering Personal Presentation">
                                <Link href="https://2025.twnog.net" text="HP" />
                            </EventItem>
                            <EventItem date="2025/3" title="ICTSC2024" role="Team &quot;KMC&quot; Runner-up">
                                <Link href="https://icttoracon.net/archives/category/ictsc2024" text="Event page" />
                            </EventItem>
                            <EventItem date="2025/2" title="APRICOT 2025 in Petaling Jaya" role="LT Presentation / Peering Personal">
                                <Link href="https://www.homenoc.ad.jp/blog/report/2025/02/27/apricot2025.en.html" text="Report" />
                                <Link href="https://www.youtube.com/live/SnGq4_LLl4Q?si=wjtJ1LM4bpPt-VBw&t=2760" text="Video" />
                            </EventItem>
                            <EventItem date="2024/12" title="AXIES 2024 NOC" role="BackBone / L2,L3 Team Leader">
                                <Link href="https://knowledge.sakura.ad.jp/41828/" text="Report" />
                            </EventItem>
                            <EventItem date="2024/11" title="BBIX BGP Meeting 2024 Winter" role="Attendee">
                                <Link href="https://www.homenoc.ad.jp/blog/report/2024/12/15/bgp-meeting.html" text="Report" />
                            </EventItem>
                            <EventItem date="2024/10" title="NaniwaNOG 2 Meeting" role="Presentation / NOC Member">
                                <Link href="https://youtu.be/eQBW5bq1jgk?si=tOYraueNoGG8Kg_-&t=277" text="Video" />
                                <Link href="https://knowledge.sakura.ad.jp/39964/" text="Activities" />
                            </EventItem>
                            <EventItem date="2024/8" title="Asia Peering Forum in Chiang Mai" role="Peering Personal Presentation">
                                <Link href="https://www.homenoc.ad.jp/blog/report/2024/08/22/AFP2024.en.html" text="Report" />
                            </EventItem>
                            <EventItem date="2024/7" title="JANOG54" role="Presentation: Current IX connection status">
                                <Link href="https://www.homenoc.ad.jp/blog/janog/2024/07/05/JANOG54_BOF_2.html" text="Report" />
                                <Link href="https://speakerdeck.com/as59128/amatiyuaasyun-yong-woyi-lun-surubof-janog54" text="Slides" />
                            </EventItem>
                            <EventItem date="2024/6" title="JPIX User Meeting 2024 Summer" role="Attendee" />
                            <EventItem date="2024/6" title="Interop24 Tokyo Shownet" role="Contributor (WiFi OpenRoaming/Eduroam)" />
                            <EventItem date="2024/5" title="RubyKaigi 2024 NOC" role="Member (Cabling)" />
                            <EventItem date="2024/3" title="ICTSC2023" role="Team &quot;KMC&quot; 5th place">
                                <Link href="https://icttoracon.net/archives/category/ictsc2023" text="Event page" />
                            </EventItem>
                            <EventItem date="2023/10" title="IGF 2023 Kyoto" role="Attendee" />
                            </HistoryDisclosure>
                        </div>
                    </Card>
                </div>
            </Section>

            <Section title="Internships">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InternshipCard
                        company="CyberAgent"
                        date="2025/9 - 10"
                        desc="Worked on network infrastructure validation, design, and deployment, and designed and developed a network automation controller for Cycloud VPC."
                        href="https://developers.cyberagent.co.jp/blog/archives/59362/"
                        linkText="Internship article"
                        featured
                    />
                    <InternshipCard
                        company="LINE Yahoo Corporation"
                        date="2025/8 - 9"
                        desc="Worked on network validation, design, and deployment, including evaluations of robotic patch panels and RPKI in data centers."
                        featured
                    />
                    <div className="md:col-span-2">
                        <HistoryDisclosure summary="Earlier internships (4)">
                    <InternshipCard
                        company="Flatt Security"
                        date="2024/9"
                        desc="Completed hands-on web security training and gained practical experience in security assessments."
                    />
                    <InternshipCard
                        company="Yahoo! JAPAN"
                        date="2023/8 - 9"
                        desc="Built a content delivery system, including infrastructure design and review and server and network device deployment."
                    />
                    <InternshipCard
                        company="DMM.com LLC"
                        date="2023/8"
                        desc="Evaluated router engines and automated network operations with Ansible in the network infrastructure course."
                    />
                    <InternshipCard
                        company="NTT Research Institute"
                        date="2023/2 - 3"
                        desc="Analyzed vulnerability impact using security visualization and implemented Layer 2 protocols."
                    />
                        </HistoryDisclosure>
                    </div>
                </div>
            </Section>

            <Section title="Part-time Work">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <h3 className="font-bold">BBIX, Inc.</h3>
                        <p className="text-sm text-secondary mb-2">2025/6 - 2025/12</p>
                        <p className="text-sm">Backbone network validation</p>
                    </Card>
                    <Card>
                        <h3 className="font-bold">Momiji Tech Inc.</h3>
                        <p className="text-sm text-secondary mb-2">2024/7 - Now</p>
                        <p className="text-sm">Deploying web applications using Docker, Kubernetes, etc.</p>
                    </Card>
                    <div className="md:col-span-2">
                        <HistoryDisclosure summary="Earlier part-time roles (2)">
                    <Card>
                        <h3 className="font-bold">Enzan Kobo Co., Ltd.</h3>
                        <p className="text-sm text-secondary mb-2">2021/10 - 2024/3</p>
                        <p className="text-sm">Windows Form, WPF development</p>
                    </Card>
                    <Card>
                        <h3 className="font-bold">Entergram Co., Ltd.</h3>
                        <p className="text-sm text-secondary mb-2">2022/10 - 2024/11</p>
                        <p className="text-sm">Game development using C++</p>
                    </Card>
                        </HistoryDisclosure>
                    </div>
                </div>
            </Section>

            <Section title="Certifications">
                <Card>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center border-b border-card-border last:border-0 pb-2 last:pb-0">
                            <span>Passed IPA Network Specialist Exam</span>
                            <span className="text-sm text-secondary tabular-nums">2024/7</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-card-border last:border-0 pb-2 last:pb-0">
                            <span>Basic SecCap7 Completed</span>
                            <span className="text-sm text-secondary tabular-nums">2024/3</span>
                        </li>
                    </ul>
                </Card>
            </Section>

            <footer className="mt-20 pt-8 border-t border-card-border text-center text-secondary">
                <p>© 2026 Tomoki Yoshikawa</p>
            </footer>
        </div>
    );
}

// Helper Components for Cleaner Code
function Link({ href, text }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-[var(--on-primary)] border border-primary/30 bg-primary/5 hover:bg-primary px-2 py-0.5 rounded-md transition-all duration-200"
        >
            <span className="relative top-[0.5px]">{text}</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
    );
}

function HistoryDisclosure({ summary, children }) {
    return (
        <details className="history-disclosure rounded-lg border border-[var(--card-border)] bg-[var(--background)]/60">
            <summary className="cursor-pointer select-none list-none flex items-center justify-between gap-4 px-4 py-3 font-medium text-[var(--primary-strong)] hover:bg-[var(--accent-bg)] rounded-lg transition-colors">
                <span>{summary}</span>
                <span className="history-chevron transition-transform" aria-hidden="true">⌄</span>
            </summary>
            <div className="space-y-4 px-4 pb-4 pt-2">{children}</div>
        </details>
    );
}

function EventItem({ date, title, role, children }) {
    return (
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 border-l-2 pl-4 py-1 relative border-card-border">
            <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-secondary"></div>
            <div className="flex-shrink-0 w-24 text-sm text-secondary tabular-nums">{date}</div>
            <div className="flex-1">
                <div className="font-medium text-foreground flex flex-wrap items-center gap-y-1">
                    <span className="mr-1">{title}</span>
                    {children}
                </div>
                <div className="text-sm text-secondary">{role}</div>
            </div>
        </div>
    );
}

function InternshipCard({ company, date, desc, href, linkText, featured = false }) {
    return (
        <Card className={`h-full transition-colors ${featured ? "border-primary/35 bg-[var(--accent-bg)]" : "hover:border-primary/50"}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold">{company}</h3>
                {href && <Link href={href} text={linkText} />}
            </div>
            <p className="text-sm text-secondary mb-2 tabular-nums">{date}</p>
            <p className="text-sm text-secondary">{desc}</p>
        </Card>
    );
}
