"use client";

import { useThemeHandler } from "../hooks/useThemeHandler";
import Image from "next/image";
import styles from "../styles/styles";

export default function Home() {
  const { mounted, currentTheme } = useThemeHandler();

  if (!mounted) {
    return null;
  }

  const dynamicStyles = {
    infoItem: {
      ...styles.infoItem,
      color: currentTheme === "dark" ? "#f0f8ff" : "#696969",
    },
    infoSubItem: {
      ...styles.infoSubItem,
      color: currentTheme === "dark" ? "#e6e6fa" : "#708090",
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
            吉川 知輝 (よしかわ ともき)
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
            X:{" "}
            <a
              href="https://x.com/_marokiki"
              target="_blank"
              style={styles.link}
            >
              @_marokiki
            </a>
          </li>
          <li style={dynamicStyles.infoItem}>
            GitHub:{" "}
            <a
              href="https://github.com/marokiki"
              target="_blank"
              style={styles.link}
            >
              @marokiki
            </a>
          </li>
          <li style={dynamicStyles.infoItem}>
            Facebook:{" "}
            <a
              href="https://facebook.com/marokiki.net"
              target="_blank"
              style={styles.link}
            >
              marokiki.net
            </a>
          </li>
          <li style={dynamicStyles.infoItem}>
            Mail:{" "}
            <a href="segre@marokiki.net" target="_blank" style={styles.link}>
              segre@marokiki.net
            </a>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>所属</h2>
        <ul style={styles.infoList}>
          <li style={dynamicStyles.infoItem}>
            2018/4 - 2021/3: 大阪教育大学附属高等学校池田校舎
          </li>
          <li style={dynamicStyles.infoItem}>
            2021/4 - 2025/3: 京都大学工学部情報学研究科計算機科学コース
          </li>
          <li style={dynamicStyles.infoItem}>
            2025/4 - : 京都大学大学院情報学研究科 通信情報システムコース 修士課程 (岡部研究室)
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ブログ</h2>
        <ul style={styles.infoList}>
          <li style={dynamicStyles.infoItem}>
            Qiita:{" "}
            <a
              href="https://qiita.com/marokiki"
              target="_blank"
              style={styles.link}
            >
              marokiki
            </a>
          </li>
          <li style={dynamicStyles.infoItem}>
            Hatena Blog (KMC):{" "}
            <a
              href="https://blog.kmc.gr.jp/search?q=segre"
              target="_blank"
              style={styles.link}
            >
              KMC活動ブログ
            </a>
          </li>
          <li style={dynamicStyles.infoItem}>
            Blog (HomeNOC):{" "}
            <a
              href="https://www.homenoc.ad.jp/blog/"
              target="_blank"
              style={styles.link}
            >
              HomeNOC Blog
            </a>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>活動</h2>
        <ul style={styles.infoList}>
          <li style={dynamicStyles.infoItem}>
            2021/4-:{" "}
            <a href="https://www.kmc.gr.jp" target="_blank" style={styles.link}>
              京大マイコンクラブ(KMC)
            </a>
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>45代 副会長</li>
            <li style={dynamicStyles.infoSubItem}>46代 副代表</li>
            <li style={dynamicStyles.infoSubItem}>AS59128, 部室サーバーインフラ運用</li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2024/7-:{" "}
            <a href="https://www.homenoc.ad.jp" target="_blank" style={styles.link}>
              Home NOC Operators&apos; Group
            </a>
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>正会員</li>
            <li style={dynamicStyles.infoSubItem}>AS59105運用</li>
            <li style={dynamicStyles.infoSubItem}>データセンターや自宅NOCでのネットワーク機器・サーバーのメンテナンス</li>
            <li style={dynamicStyles.infoSubItem}>カンファレンス等への参加を通じてコミュニティへの貢献</li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2023/3: ICTSC2024 チーム「KMC」5位{" "}
            <a href="https://icttoracon.net/archives/category/ictsc2023" target="_blank" style={styles.link}>
              <span style={styles.linkHover}>大会ページ</span>
            </a>
          </li>
          <li style={dynamicStyles.infoItem}>2024/5: RubyKaigi 2024 NOC Member</li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>ケーブル敷設等</li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2024/6: Interop24 Tokyo Shownet Contributer
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>会場WiFi OpenRoaming / Eduroam 提供</li>
          </ul>
          <li style={dynamicStyles.infoItem}>2024/6: JPIX User Meeting 2024 Summer</li>
          <li style={dynamicStyles.infoItem}>
            2024/7: JANOG54 「アマチュアAS 運用を議論するBoF」
            <a href="https://www.homenoc.ad.jp/blog/janog/2024/07/05/JANOG54_BOF_2.html" target="_blank" style={styles.link}>
              <span style={styles.linkHover}>参加報告</span>
            </a>
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>発表 「現在のIXへの接続状況」
              <a href="https://speakerdeck.com/as59105/amatiyuaasyun-yong-woyi-lun-surubof-janog54" target="_blank" style={styles.link}>
                <span style={styles.linkHover}>スライド</span>
              </a>
            </li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2024/8: Asia Peering Forum in チェンマイ{" "}
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>Peering Personal 発表</li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2024/10: NaniwaNOG 2 Meeting in Himeji
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>発表 「若手セッション2024」
              <a href="https://youtu.be/eQBW5bq1jgk?si=tOYraueNoGG8Kg_-&t=277" target="_blank" style={styles.link}>
                <span style={styles.linkHover}>発表録画</span>
              </a>
            </li>
            <li style={dynamicStyles.infoSubItem}>NOC Member</li>
          </ul>
          <li style={dynamicStyles.infoItem}>2024/11/28: BBIX BGP Meeting 2024 Winter</li>
          <li style={dynamicStyles.infoItem}>
            2024/12: 大学ICT推進協議会(AXIES)2024 NOC Member
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>BackBone / L2,L3 Team リーダー{" "}
              <a href="https://knowledge.sakura.ad.jp/41828/" target="_blank" style={styles.link}>
                <span style={styles.linkHover}>実施報告</span>
              </a>
            </li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2025/2: APRICOT 2025 in Petaling Jaya{" "}
            <a href="https://www.homenoc.ad.jp/blog/report/2025/02/27/apricot2025.html" target="_blank" style={styles.link}>
              <span style={styles.linkHover}>参加報告</span>
            </a>
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>Peering Personal 発表</li>
            <li style={dynamicStyles.infoSubItem}>Lightning Talk 発表「Community Activities as a non-profit Learning/Research ASN」{" "}
              <a href="https://www.youtube.com/live/SnGq4_LLl4Q?si=wjtJ1LM4bpPt-VBw&t=2760" target="_blank" style={styles.link}>
                <span style={styles.linkHover}>発表録画</span>
              </a>
            </li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2025/3: ICTSC2024 チーム「KMC」準優勝{" "}
            <a href="https://icttoracon.net/archives/category/ictsc2024" target="_blank" style={styles.link}>
              <span style={styles.linkHover}>大会ページ</span>
            </a>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>資格等</h2>
        <ul style={styles.infoList}>
          <li style={dynamicStyles.infoItem}>2024/3: Basic SecCap7 修了</li>
          <li style={dynamicStyles.infoItem}>2024/7: IPA ネットワークスペシャリスト試験 合格</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>インターン</h2>
        <ul style={styles.infoList}>
          <li style={dynamicStyles.infoItem}>2023/2/20-3/18: NTT研究所 インターン</li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>
              「セキュリティ可視化情報を用いた脆弱性の影響分析手法の検討」
            </li>
            <li style={dynamicStyles.infoSubItem}>Layer2プロトコルの実装</li>
            <li style={dynamicStyles.infoSubItem}>脆弱性情報の可視化</li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2023/8/1-8/18: 合同会社DMM.com インターン
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>ネットワークインフラコース</li>
            <li style={dynamicStyles.infoSubItem}>ルーターエンジンの検証</li>
            <li style={dynamicStyles.infoSubItem}>ansible を用いた自動化</li>
          </ul>
          <li style={dynamicStyles.infoItem}>2023/8/21-9/1: Yahoo!Japan インターン</li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>
              「モダンなインフラ基盤を用いた、コンテンツ配信システムの構築を体験」
            </li>
            <li style={dynamicStyles.infoSubItem}>
              インフラ構成の設計・作成・レビュー
            </li>
            <li style={dynamicStyles.infoSubItem}>
              ネットワーク、サーバー、ストレージ、ロードバランサー、CDNの構築作業
            </li>
          </ul>
          <li style={dynamicStyles.infoItem}>
            2024/9/9-9/13: Flatt Security インターン
          </li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>
              Webセキュリティに関するハンズオントレーニング
            </li>
            <li style={dynamicStyles.infoSubItem}>セキュリティ診断業務の体験</li>
          </ul>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>アルバイト</h2>
        <ul style={styles.infoList}>
          <li style={dynamicStyles.infoItem}>2021/10-: 株式会社演算工房</li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>Windows Form, WPF 開発</li>
          </ul>
          <li style={dynamicStyles.infoItem}>2022/10-: 株式会社エンターグラム</li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>C++ を用いたゲーム開発</li>
          </ul>
          <li style={dynamicStyles.infoItem}>2024/7-: もみじテック株式会社</li>
          <ul style={styles.infoList}>
            <li style={dynamicStyles.infoSubItem}>
              Docker, Kubernetes を用いたWebアプリケーションのデプロイ等
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
}
