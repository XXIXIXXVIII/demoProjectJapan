import img_advertisement from "../assets/images/img_advertisement.png";
import img_advertisement_sp from "../assets/images/img_advertisement_sp.png";

export default function Advertisement() {
  return (
    <div class="advertisement">
      <div class="inner">
        <div class="tlt_section">
          <h4>
            ANYTIME<span>エニタイム</span>
          </h4>
          <div class="dot">
            <span class="util_pc">.....</span>
            <span class="util_sp">......</span>
            <p>には嬉しいキャンペーンがいっぱい！</p>
          </div>
        </div>
        <div class="content">
          <div class="txt_desp">
            <div class="frist">
              <span>初 回</span>
              <h2>3</h2>
              <span class="percent">%</span>
              <span class="conversion">
                換金率<strong>UP!</strong>
              </span>
            </div>
            <div class="last">
              <span>
                <strong style={{ color: "white" }}>2</strong>回 目
              </span>
              <h2>3</h2>
              <p>
                <span>万円</span>キャッシュバック!
              </p>
            </div>
          </div>
          <p class="txt_note">
            個人事業主・経営者はいつでも換金率<span>3</span>
            <strong>%</strong>
            <span class="up">UP!</span>
          </p>
          <div class="thumb">
            <img
              class="util_pc"
              loading="lazy"
              src={img_advertisement}
              width="270"
              height="291"
              alt="img advertisement"
            />
            <img
              class="util_sp"
              loading="lazy"
              src={img_advertisement_sp}
              width="270"
              height="291"
              alt="img advertisement"
            />
          </div>
        </div>
        <div class="btn">
          <div class="phone">
            <a href="">0120-778-831</a>
          </div>
          <div class="mail">
            <a href="">オンライン申込み</a>
          </div>
        </div>
      </div>
    </div>
  );
}
