export default function Header() {
  return (
    <header id="header">
      <div className="pc ">
        <div className="logo">
          <h1>
            ANYTIME
            <p>エニタイム</p>
          </h1>
        </div>

        <nav className="nav_pc util_pc">
          <ul>
            <li>
              <a href="#evaluate">現金化が不安な方へ</a>
            </li>
            <li>
              <a href="#flow">申込手順</a>
            </li>
            <li>
              <a href="#rate">換金率</a>
            </li>
            <li>
              <a href="#voices">お客様の声</a>
            </li>
            <li>
              <a href="#QA">よくある質問</a>
            </li>
          </ul>
          <a href="#" className="btn_contact">
            お申込みはこちら
          </a>
        </nav>
      </div>

      <nav className="nav_sp util_sp">
        <div className="inner">
          <ul>
            <li>
              <a href="#evaluate">現金化が不安な方へ</a>
            </li>
            <li>
              <a href="#flow">申込手順</a>
            </li>
            <li>
              <a href="#rate">換金率</a>
            </li>
            <li>
              <a href="#voices">お客様の声</a>
            </li>
            <li>
              <a href="#QA">よくある質問</a>
            </li>
          </ul>

          <div className="list_sns">
            <a href="#">お申込みはこちら</a>
          </div>

          <div className="copyright">
            <p>©︎ All Right Reserved by Engrass</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
