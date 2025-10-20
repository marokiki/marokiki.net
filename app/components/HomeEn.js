"use client";

import { useThemeHandler } from "../hooks/useThemeHandler";
import Image from "next/image";
import styles from "../styles/styles";

export default function HomeEn() {
    const { mounted, currentTheme } = useThemeHandler();

    if (!mounted) {
        return null;
    }

    const dynamicStyles = {
        infoItem: {
            ...styles.infoItem,
            color: currentTheme === "dark" ? "#f0f8ff" : "#222222",
        },
        infoSubItem: {
            ...styles.infoSubItem,
            color: currentTheme === "dark" ? "#ffffe5" : "#708090",
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Tomoki Yoshikawa</h1>
            </header>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>About Me</h2>
                <ul style={styles.infoList}>
                    <li
                        style={{
                            ...dynamicStyles.infoItem,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Tomoki Yoshikawa
                        <Image
                            src="/profile.png"
                            alt="Tomoki Yoshikawa"
                            width={100}
                            height={100}
                            style={{
                                borderRadius: "50%",
                                marginLeft: "10px",
                            }}
                        />
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        X: {" "}
                        <a href="https://x.com/_marokiki" target="_blank" style={styles.link}>
                            @_marokiki
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        GitHub: {" "}
                        <a href="https://github.com/marokiki" target="_blank" style={styles.link}>
                            @marokiki
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        Facebook: {" "}
                        <a href="https://facebook.com/marokiki.net" target="_blank" style={styles.link}>
                            marokiki.net
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        Mail: {" "}
                        <a href="segre@marokiki.net" target="_blank" style={styles.link}>
                            segre@marokiki.net
                        </a>
                    </li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Affiliations</h2>
                <ul style={styles.infoList}>
                    <li style={dynamicStyles.infoItem}>
                        2018/4 - 2021/3: Ikeda Senior High School Attached to Osaka Kyoiku University
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        2021/4 - 2025/3: Kyoto University, Faculty of Engineering, School of Informatics and Mathematical Science, Computer Science Course
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        2025/4 - : Kyoto University Graduate School of Informatics, Course of Communication and Computer Engineering, Multimedia and Secure Networking Group
                    </li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Blogs</h2>
                <ul style={styles.infoList}>
                    <li style={dynamicStyles.infoItem}>
                        Qiita: {" "}
                        <a href="https://qiita.com/marokiki" target="_blank" style={styles.link}>
                            marokiki
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        Hatena Blog (KMC): {" "}
                        <a href="https://blog.kmc.gr.jp/search?q=segre" target="_blank" style={styles.link}>
                            KMC Activity Blog
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        Blog (HomeNOC): {" "}
                        <a href="https://www.homenoc.ad.jp/blog/" target="_blank" style={styles.link}>
                            HomeNOC Blog
                        </a>
                    </li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Activities</h2>
                <ul style={styles.infoList}>
                    <li style={dynamicStyles.infoItem}>
                        2021/4-: {" "}
                        <a href="https://www.kmc.gr.jp" target="_blank" style={styles.link}>
                            Kyoto University Microcomputer Club (KMC)
                        </a>
                    </li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>45th Vice President</li>
                        <li style={dynamicStyles.infoSubItem}>46th Vice Representative</li>
                        <li style={dynamicStyles.infoSubItem}>AS59128, club room server infrastructure operation</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>
                        2024/7-: {" "}
                        <a href="https://www.homenoc.ad.jp" target="_blank" style={styles.link}>
                            Home NOC Operators&apos; Group
                        </a>
                    </li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Full member</li>
                        <li style={dynamicStyles.infoSubItem}>AS59105 operation</li>
                        <li style={dynamicStyles.infoSubItem}>Maintenance of network devices and servers at datacenters and home NOCs</li>
                        <li style={dynamicStyles.infoSubItem}>Contributing to the community through conference participation</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>
                        2023/10/8-12: Internet Governance Forum(IGF) 2023 Kyoto {" "}
                        <ul style={styles.infoList}>
                            <li style={dynamicStyles.infoSubItem}>Attendee</li>
                        </ul>
                    </li>
                    <li style={dynamicStyles.infoItem}>
                        2024/3: ICTSC2023 Team &quot;KMC&quot; 5th place {" "}
                        <a href="https://icttoracon.net/archives/category/ictsc2023" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>Event page</span>
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>2024/5: RubyKaigi 2024 NOC Member</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Cable installation, etc.</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2024/6: Interop24 Tokyo Shownet Contributor</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Provided venue WiFi OpenRoaming / Eduroam</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2024/6: JPIX User Meeting 2024 Summer</li>
                    <li style={dynamicStyles.infoItem}>
                        2024/7: JANOG54 &quot;BoF discussing amateur AS operation&quot; {" "}
                        <a href="https://www.homenoc.ad.jp/blog/janog/2024/07/05/JANOG54_BOF_2.html" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>Report</span>
                        </a>
                    </li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Presentation &quot;Current IX connection status&quot; {" "}
                            <a href="https://speakerdeck.com/as59128/amatiyuaasyun-yong-woyi-lun-surubof-janog54" target="_blank" style={styles.link}>
                                <span style={styles.linkHover}>Slides</span>
                            </a>
                        </li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>
                        2024/8: Asia Peering Forum in Chiang Mai {" "}
                        <a href="https://www.homenoc.ad.jp/blog/report/2024/08/22/AFP2024.html" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>Report</span>
                        </a>
                    </li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Presented &quot;Peering Personal&quot;</li>
                        <li style={dynamicStyles.infoSubItem}>Had meetings about connections between multiple AS teams and HomeNOC</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2024/10: NaniwaNOG 2 Meeting in Himeji</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Presentation &quot;Young Session 2024&quot; {" "}
                            <a href="https://youtu.be/eQBW5bq1jgk?si=tOYraueNoGG8Kg_-&t=277" target="_blank" style={styles.link}>
                                <span style={styles.linkHover}>Video</span>
                            </a>
                        </li>
                        <li style={dynamicStyles.infoSubItem}>NOC Member {" "}
                            <a href="https://knowledge.sakura.ad.jp/39964/" target="_blank" style={styles.link}>
                                <span style={styles.linkHover}>Activities</span>
                            </a>
                        </li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2024/11/28: BBIX BGP Meeting 2024 Winter {" "}
                        <a href="https://www.homenoc.ad.jp/blog/report/2024/12/15/bgp-meeting.html" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>Report</span>
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>2024/12: AXIES 2024 NOC Member</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>BackBone / L2,L3 Team Leader {" "}
                            <a href="https://knowledge.sakura.ad.jp/41828/" target="_blank" style={styles.link}>
                                <span style={styles.linkHover}>Report</span>
                            </a>
                        </li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2025/2: APRICOT 2025 in Petaling Jaya {" "}
                        <a href="https://www.homenoc.ad.jp/blog/report/2025/02/27/apricot2025.html" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>Report</span>
                        </a>
                    </li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Presented &quot;Peering Personal&quot;</li>
                        <li style={dynamicStyles.infoSubItem}>Held meetings with multiple AS teams and HomeNOC about connections</li>
                        <li style={dynamicStyles.infoSubItem}>Lightning Talk &quot;Community Activities as a non-profit Learning/Research ASN&quot; {" "}
                            <a href="https://www.youtube.com/live/SnGq4_LLl4Q?si=wjtJ1LM4bpPt-VBw&t=2760" target="_blank" style={styles.link}>
                                <span style={styles.linkHover}>Video</span>
                            </a>
                        </li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2025/3: ICTSC2024 Team &quot;KMC&quot; Runner-up {" "}
                        <a href="https://icttoracon.net/archives/category/ictsc2024" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>Event page</span>
                        </a>
                    </li>
                    <li style={dynamicStyles.infoItem}>2025/4/18: TWNOG 6 in Taipei {" "}
                        <a href="https://2025.twnog.net" target="_blank" style={styles.link}>
                            <span style={styles.linkHover}>HP</span>
                        </a>
                    </li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Presented &quot;Peering Personal&quot;</li>
                        <li style={dynamicStyles.infoSubItem}>Interacted with local HomeNOC users</li>
                    </ul>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Certifications</h2>
                <ul style={styles.infoList}>
                    <li style={dynamicStyles.infoItem}>2024/3: Basic SecCap7 Completed</li>
                    <li style={dynamicStyles.infoItem}>2024/7: Passed IPA Network Specialist Exam</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Internships</h2>
                <ul style={styles.infoList}>
                    <li style={dynamicStyles.infoItem}>2023/2/20-3/18: NTT Research Institute Internship</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Study on impact analysis method of vulnerabilities using security visualization information</li>
                        <li style={dynamicStyles.infoSubItem}>Implementation of Layer2 protocol</li>
                        <li style={dynamicStyles.infoSubItem}>Visualization of vulnerability information</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2023/8/1-8/18: DMM.com LLC Internship</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Network infrastructure course</li>
                        <li style={dynamicStyles.infoSubItem}>Verification of router engine</li>
                        <li style={dynamicStyles.infoSubItem}>Automation using ansible</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2023/8/21-9/1: Yahoo!Japan Internship</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Experience building a content delivery system using modern infrastructure</li>
                        <li style={dynamicStyles.infoSubItem}>Design, creation, and review of infrastructure</li>
                        <li style={dynamicStyles.infoSubItem}>Building network, servers, storage, load balancers, and CDN</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2024/9/9-9/13: Flatt Security Internship</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Hands-on training on web security</li>
                        <li style={dynamicStyles.infoSubItem}>Experience in security assessment work</li>
                    </ul>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Part-time Work</h2>
                <ul style={styles.infoList}>
                    <li style={dynamicStyles.infoItem}>2021/10-: Enzan Kobo Co., Ltd.</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Windows Form, WPF development</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2022/10-2024/11: Entergram Co., Ltd.</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Game development using C++</li>
                    </ul>
                    <li style={dynamicStyles.infoItem}>2024/7-: Momiji Tech Inc.</li>
                    <ul style={styles.infoList}>
                        <li style={dynamicStyles.infoSubItem}>Deploying web applications using Docker, Kubernetes, etc.</li>
                    </ul>
                </ul>
            </section>
        </div>
    );
}
