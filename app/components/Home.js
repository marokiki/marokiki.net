import styles from "../styles/styles";
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tomoki Yoshikawa</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>吉川 知輝 (よしかわ ともき)</li>
          <li style={styles.infoItem}>
            <strong>X:</strong>{" "}
            <a
              href="https://x.com/_marokiki"
              target="_blank"
              style={styles.link}
            >
              @_marokiki
            </a>
          </li>
          <li style={styles.infoItem}>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/marokiki"
              target="_blank"
              style={styles.link}
            >
              @marokiki
            </a>
          </li>
          <li style={styles.infoItem}>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://facebook.com/marokiki.net"
              target="_blank"
              style={styles.link}
            >
              marokiki.net
            </a>
          </li>
          <li style={styles.infoItem}>
            <strong>Mail:</strong>{" "}
            <a href="segre@marokiki.net" target="_blank" style={styles.link}>
              segre@marokiki.net
            </a>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>所属</h2>
        <ul style={styles.infoItem}>
          <li style={styles.infoName}>
            2021年4月～ 京都大学工学部情報学研究科計算機科学コース
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ブログ</h2>
        <ul style={styles.infoItem}>
          <li style={styles.infoItem}>
            <strong>Qiita:</strong>{" "}
            <a
              href="https://qiita.com/marokiki"
              target="_blank"
              style={styles.link}
            >
              marokiki
            </a>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>活動</h2>
        <h3 style={styles.subtitle}>京大マイコンクラブ</h3>
        <ul style={styles.infoItem}>
          <li style={styles.infoItem}>2021/4～ 京大マイコンクラブ</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>インターン</h2>
        <ul style={styles.infoItem}>
          <li style={styles.infoName}>
            2023/2/20～3/18 NTT研究所 インターン
            「セキュリティ可視化情報を用いた脆弱性の影響分析手法の検討」
          </li>
          <li style={styles.infoName}>
            2023/8/1～8/18 合同会社DMM.com インターン ネットワークインフラコース
          </li>
          <li style={styles.infoName}>
            2023/8/21～9/1 Yahoo!Japan インターン
            「モダンなインフラ基盤を用いた、コンテンツ配信システムの構築を体験」
          </li>
          <li style={styles.infoName}>
            2024/9/9～9/13 Flatt Security インターン セキュリティ診断
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>アルバイト</h2>
        <ul style={styles.infoItem}>
          <li style={styles.infoName}>
            2021/10～ 株式会社演算工房 Windows Form, WPF 開発
          </li>
          <li style={styles.infoName}>
            2022/10～ 株式会社エンターグラム C++ を用いたゲーム開発
          </li>
          <li style={styles.infoName}>
            2024/7～ もみじテック株式会社 Docker, Kubernetes
            を用いたインフラ構築
          </li>
        </ul>
      </section>
    </div>
  );
}
