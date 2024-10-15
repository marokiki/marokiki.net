import styles from "../styles/styles";

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
            X:{" "}
            <a
              href="https://x.com/_marokiki"
              target="_blank"
              style={styles.link}
            >
              @_marokiki
            </a>
          </li>
          <li style={styles.infoItem}>
            GitHub:{" "}
            <a
              href="https://github.com/marokiki"
              target="_blank"
              style={styles.link}
            >
              @marokiki
            </a>
          </li>
          <li style={styles.infoItem}>
            Facebook:{" "}
            <a
              href="https://facebook.com/marokiki.net"
              target="_blank"
              style={styles.link}
            >
              marokiki.net
            </a>
          </li>
          <li style={styles.infoItem}>
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
          <li style={styles.infoItem}>
            2021/4-: 京都大学工学部情報学研究科計算機科学コース
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>ブログ</h2>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>
            Qiita:{" "}
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
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>2021/4-: 京大マイコンクラブ</li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>45代 副会長</li>
            <li style={styles.infoSubItem}>46代 副代表</li>
          </ul>
          <li style={styles.infoItem}>
            2024/7-: Home NOC Operators&apos; Group
          </li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>正会員</li>
            <li style={styles.infoSubItem}>データセンターや自宅NOCでのネットワーク機器・サーバーのメンテナンス</li>
            <li style={styles.infoSubItem}>カンファレンス等への参加を通じてコミュニティへの貢献</li>
          </ul>
          <li style={styles.infoItem}>2024/5: RubyKaigi 2024 NOC Member</li>
          <li style={styles.infoItem}>
            2024/6: Interop24 Tokyo Shownet Contributer
          </li>
          <li style={styles.infoItem}>2024/6: JPIX User Meeting 2024 Summer</li>
          <li style={styles.infoItem}>
            2024/7: JANOG54 「アマチュアAS 運用を議論するBoF」
          </li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>発表 「現在のIXへの接続状況」</li>
          </ul>
          <li style={styles.infoItem}>
            2024/8: Asia Peering Forum in チェンマイ{" "}
          </li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>Peering Personal で発表</li>
          </ul>
          <li style={styles.infoItem}>
            2024/10: NaniwaNOG 2 Meeting in Himeji
          </li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>発表 「若手セッション2024」</li>
            <li style={styles.infoSubItem}>NOC Member</li>
          </ul>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>インターン</h2>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>2023/2/20-3/18: NTT研究所 インターン</li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>
              「セキュリティ可視化情報を用いた脆弱性の影響分析手法の検討」
            </li>
            <li style={styles.infoSubItem}>Layer2プロトコルの実装</li>
            <li style={styles.infoSubItem}>脆弱性情報の可視化</li>
          </ul>
          <li style={styles.infoItem}>
            2023/8/1-8/18: 合同会社DMM.com インターン
          </li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>ネットワークインフラコース</li>
            <li style={styles.infoSubItem}>ルーターエンジンの検証</li>
            <li style={styles.infoSubItem}>ansible を用いた自動化</li>
          </ul>
          <li style={styles.infoItem}>2023/8/21-9/1: Yahoo!Japan インターン</li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>
              「モダンなインフラ基盤を用いた、コンテンツ配信システムの構築を体験」
            </li>
            <li style={styles.infoSubItem}>
              インフラ構成の設計・作成・レビュー
            </li>
            <li style={styles.infoSubItem}>
              ネットワーク、サーバー、ストレージ、ロードバランサー、CDNの構築作業
            </li>
          </ul>
          <li style={styles.infoItem}>
            2024/9/9-9/13: Flatt Security インターン
          </li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>
              Webセキュリティに関するハンズオントレーニング
            </li>
            <li style={styles.infoSubItem}>セキュリティ診断業務の体験</li>
          </ul>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>アルバイト</h2>
        <ul style={styles.infoList}>
          <li style={styles.infoItem}>2021/10-: 株式会社演算工房</li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>Windows Form, WPF 開発</li>
          </ul>
          <li style={styles.infoItem}>2022/10-: 株式会社エンターグラム</li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>C++ を用いたゲーム開発</li>
          </ul>
          <li style={styles.infoItem}>2024/7-: もみじテック株式会社</li>
          <ul style={styles.infoList}>
            <li style={styles.infoSubItem}>
              Docker, Kubernetes 等を用いたインフラ構築・運用
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
}
