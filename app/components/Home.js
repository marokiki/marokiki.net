"use client";

import { useThemeHandler } from "../hooks/useThemeHandler";
import Image from "next/image";
import Section from "./Section";
import Card from "./Card";

export default function Home() {
  const { mounted } = useThemeHandler();

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-foreground">
      <header className="text-center mb-16 mt-8">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Tomoki Yoshikawa
        </h1>
        <p className="text-xl text-secondary">Network Engineer / Developer</p>
      </header>

      <Section title="About Me">
        <Card className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src="/profile.png"
              alt="Tomoki Yoshikawa"
              fill
              className="rounded-full object-cover border-4 border-primary/20"
            />
          </div>
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">吉川 知輝 (よしかわ ともき)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-secondary">
              <a href="https://x.com/_marokiki" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                <span>𝕏</span> @_marokiki
              </a>
              <a href="https://github.com/marokiki" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                GitHub: @marokiki
              </a>
              <a href="https://facebook.com/marokiki.net" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                Facebook: marokiki.net
              </a>
              <a href="mailto:segre@marokiki.net" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                Email: segre@marokiki.net
              </a>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="所属">
        <div className="space-y-4">
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <span className="font-bold text-lg">京都大学大学院情報学研究科 通信情報システムコース 修士課程</span>
              <span className="text-sm text-secondary font-mono">2025/4 - Now</span>
            </div>
            <p className="text-secondary mt-1">岡部研究室</p>
          </Card>
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <span className="font-bold text-lg">京都大学工学部情報学研究科計算機科学コース</span>
              <span className="text-sm text-secondary font-mono">2021/4 - 2025/3</span>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <span className="font-bold text-lg">大阪教育大学附属高等学校池田校舎</span>
              <span className="text-sm text-secondary font-mono">2018/4 - 2021/3</span>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="ブログ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://qiita.com/marokiki" target="_blank" className="block h-full">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <h3 className="font-bold mb-2">Qiita</h3>
              <p className="text-sm text-secondary">marokiki</p>
            </Card>
          </a>
          <a href="https://blog.kmc.gr.jp/search?q=segre" target="_blank" className="block h-full">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <h3 className="font-bold mb-2">Hatena Blog (KMC)</h3>
              <p className="text-sm text-secondary">KMC活動ブログ</p>
            </Card>
          </a>
          <a href="https://www.homenoc.ad.jp/blog/" target="_blank" className="block h-full">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <h3 className="font-bold mb-2">Blog (HomeNOC)</h3>
              <p className="text-sm text-secondary">HomeNOC Blog</p>
            </Card>
          </a>
        </div>
      </Section>

      <Section title="活動">
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-bold text-lg"><a href="https://www.kmc.gr.jp" target="_blank" className="hover:underline hover:text-primary">京大マイコンクラブ (KMC)</a></h3>
              <span className="text-sm text-secondary font-mono">2021/4 - Now</span>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-1 ml-2">
              <li>45代 副会長 / 46代 副代表</li>
              <li>AS59128, 部室サーバーインフラ運用</li>
            </ul>
          </Card>

          <Card>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-bold text-lg"><a href="https://www.homenoc.ad.jp" target="_blank" className="hover:underline hover:text-primary">Home NOC Operators&apos; Group</a></h3>
              <span className="text-sm text-secondary font-mono">2024/7 - Now</span>
            </div>
            <ul className="list-disc list-inside text-secondary space-y-1 ml-2">
              <li>正会員 / AS59105運用</li>
              <li>ネットワーク機器・サーバーメンテナンス (データセンター/自宅NOC)</li>
              <li>カンファレンス参加・登壇</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-bold text-lg mb-3 border-b border-card-border pb-2">イベント・カンファレンス</h3>
            <div className="space-y-4">
              <EventItem date="2025/10" title="BAKUCHIKU BANBAN #2" role="発表: Shirankedo NOCで見えてきたeduroam/OpenRoaming運用ノウハウと課題">
                <Link href="https://bakuchiku.connpass.com/event/367521/" text="概要" />
                <Link href="https://segre.hatenablog.com/entry/2025/10/12/151227" text="ブログ" />
              </EventItem>
              <EventItem date="2025/7" title="JANOG56" role="発表: フィリピンPOP設立と国際バックボーンを持つ意義">
                <Link href="https://www.homenoc.ad.jp/blog/report/2025/08/09/janog56-bof.html" text="報告" />
                <Link href="https://speakerdeck.com/as59105/ge-ren-yasakurudenoasyun-yong-woyi-lun-surubof-janog56?slide=35" text="スライド" />
              </EventItem>
              <EventItem date="2025/7" title="IETF123 Hackathon" role="Topic: RPKI Repository Efficiency" />
              <EventItem date="2025/7" title="PhNOG 2025+" role="BackBone Team Member">
                <Link href="https://www.homenoc.ad.jp/blog/report/2025/07/23/phnog-2025.html" text="報告" />
              </EventItem>
              <EventItem date="2025/6" title="Internet Week ショーケース in 奈良" role="BackBone / L2,L3 Team Leader">
                <Link href="https://blog.nic.ad.jp/2025/10695/" text="記事" />
              </EventItem>
              <EventItem date="2025/4" title="TWNOG 6 in Taipei" role="Peering Personal 発表">
                <Link href="https://2025.twnog.net" text="HP" />
              </EventItem>
              <EventItem date="2025/3" title="ICTSC2024" role="チーム「KMC」準優勝">
                <Link href="https://icttoracon.net/archives/category/ictsc2024" text="HP" />
              </EventItem>
              <EventItem date="2025/2" title="APRICOT 2025 in Petaling Jaya" role="LT発表 / Peering Personal">
                <Link href="https://www.homenoc.ad.jp/blog/report/2025/02/27/apricot2025.html" text="報告" />
                <Link href="https://www.youtube.com/live/SnGq4_LLl4Q?si=wjtJ1LM4bpPt-VBw&t=2760" text="動画" />
              </EventItem>
              <EventItem date="2024/12" title="AXIES 2024 NOC" role="BackBone / L2,L3 Team Leader">
                <Link href="https://knowledge.sakura.ad.jp/41828/" text="報告" />
              </EventItem>
              <EventItem date="2024/11" title="BBIX BGP Meeting 2024 Winter" role="参加">
                <Link href="https://www.homenoc.ad.jp/blog/report/2024/12/15/bgp-meeting.html" text="報告" />
              </EventItem>
              <EventItem date="2024/10" title="NaniwaNOG 2 Meeting" role="発表 / NOC Member">
                <Link href="https://youtu.be/eQBW5bq1jgk?si=tOYraueNoGG8Kg_-&t=277" text="動画" />
                <Link href="https://knowledge.sakura.ad.jp/39964/" text="活動内容" />
              </EventItem>
              <EventItem date="2024/8" title="Asia Peering Forum in Chiang Mai" role="Peering Personal 発表">
                <Link href="https://www.homenoc.ad.jp/blog/report/2024/08/22/AFP2024.html" text="報告" />
              </EventItem>
              <EventItem date="2024/7" title="JANOG54" role="発表: 現在のIXへの接続状況">
                <Link href="https://www.homenoc.ad.jp/blog/janog/2024/07/05/JANOG54_BOF_2.html" text="報告" />
                <Link href="https://speakerdeck.com/as59105/amatiyuaasyun-yong-woyi-lun-surubof-janog54" text="スライド" />
              </EventItem>
              <EventItem date="2024/6" title="JPIX User Meeting 2024 Summer" role="参加" />
              <EventItem date="2024/6" title="Interop24 Tokyo Shownet" role="Contributor (WiFi OpenRoaming/Eduroam)" />
              <EventItem date="2024/5" title="RubyKaigi 2024 NOC" role="Member (Cabling)" />
              <EventItem date="2024/3" title="ICTSC2023" role="チーム「KMC」5位">
                <Link href="https://icttoracon.net/archives/category/ictsc2023" text="HP" />
              </EventItem>
              <EventItem date="2023/10" title="IGF 2023 Kyoto" role="一般参加" />
            </div>
          </Card>
        </div>
      </Section>

      <Section title="インターン">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InternshipCard
            company="サイバーエージェント"
            date="2025/9 - 10"
            desc="ネットワークインフラ検証・設計・構築。Cycloud VPC用の自動化コントローラ設計開発。"
          />
          <InternshipCard
            company="LINEヤフー"
            date="2025/8 - 9"
            desc="ネットワーク検証・設計・構築。ロボットパッチパネル検証、RPKI in DC検証。"
          />
          <InternshipCard
            company="Flatt Security"
            date="2024/9"
            desc="Webセキュリティハンズオン、セキュリティ診断業務体験。"
          />
          <InternshipCard
            company="Yahoo! JAPAN"
            date="2023/8 - 9"
            desc="コンテンツ配信システム構築。インフラ設計・レビュー、各種サーバー・NW機器構築。"
          />
          <InternshipCard
            company="DMM.com"
            date="2023/8"
            desc="ネットワークインフラコース。ルーターエンジン検証、Ansible自動化。"
          />
          <InternshipCard
            company="NTT研究所"
            date="2023/2 - 3"
            desc="セキュリティ可視化・脆弱性影響分析。L2プロトコル実装。"
          />
        </div>
      </Section>

      <Section title="アルバイト">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-bold">BBIX株式会社</h3>
            <p className="text-sm text-secondary mb-2">2025/6 - Now</p>
            <p className="text-sm">バックボーンネットワークの検証</p>
          </Card>
          <Card>
            <h3 className="font-bold">もみじテック株式会社</h3>
            <p className="text-sm text-secondary mb-2">2024/7 - Now</p>
            <p className="text-sm">Docker, Kubernetes を用いたWebアプリデプロイ等</p>
          </Card>
          <Card>
            <h3 className="font-bold">株式会社演算工房</h3>
            <p className="text-sm text-secondary mb-2">2021/10 - Now</p>
            <p className="text-sm">Windows Form, WPF 開発</p>
          </Card>
          <Card>
            <h3 className="font-bold">株式会社エンターグラム</h3>
            <p className="text-sm text-secondary mb-2">2022/10 - 2024/11</p>
            <p className="text-sm">C++ を用いたゲーム開発</p>
          </Card>
        </div>
      </Section>

      <Section title="資格等">
        <Card>
          <ul className="space-y-2">
            <li className="flex justify-between items-center border-b border-card-border last:border-0 pb-2 last:pb-0">
              <span>IPA ネットワークスペシャリスト試験 合格</span>
              <span className="text-sm text-secondary font-mono">2024/7</span>
            </li>
            <li className="flex justify-between items-center border-b border-card-border last:border-0 pb-2 last:pb-0">
              <span>Basic SecCap7 修了</span>
              <span className="text-sm text-secondary font-mono">2024/3</span>
            </li>
          </ul>
        </Card>
      </Section>

      <footer className="mt-20 pt-8 border-t border-card-border text-center text-secondary">
        <p>© 2025 Tomoki Yoshikawa</p>
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
      className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-white border border-primary/30 bg-primary/5 hover:bg-primary px-2 py-0.5 rounded-md transition-all duration-200"
    >
      <span className="relative top-[0.5px]">{text}</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
  );
}

function EventItem({ date, title, role, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 border-l-2 border-card-border pl-4 pb-1 relative">
      <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-secondary"></div>
      <div className="flex-shrink-0 w-24 text-sm text-secondary font-mono">{date}</div>
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

function InternshipCard({ company, date, desc }) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <h3 className="font-bold">{company}</h3>
      <p className="text-sm text-secondary mb-2 font-mono">{date}</p>
      <p className="text-sm text-secondary">{desc}</p>
    </Card>
  );
}
