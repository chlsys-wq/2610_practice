import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="페이지 맨 위로">hello, me<span>.</span></a>
    <nav aria-label="페이지 메뉴">
      <a href="#about">소개</a>
      <a href="#interests">관심사</a>
      <a href="#contact">연락하기</a>
    </nav>
  </header>

  <main id="top">
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow"><span class="status-dot"></span> 반가워요, 저는</p>
        <h1 id="intro-title">나를 소개합니다<span class="accent">.</span></h1>
        <p class="intro-lede">안녕하세요! <strong>[이름]</strong>입니다.<br>저를 가장 잘 보여주는 한두 문장을 적어 보세요.</p>
        <a class="button" href="#about">더 알아보기 <span aria-hidden="true">↓</span></a>
      </div>
      <div class="profile-card" aria-label="프로필 사진 자리">
        <div class="avatar-placeholder"><span>사진을<br>넣어 주세요</span></div>
        <span class="card-sparkle" aria-hidden="true">✳</span>
        <div class="profile-caption"><span class="caption-label">A LITTLE ABOUT ME</span><strong>[이름] · [하는 일]</strong></div>
      </div>
      <span class="intro-decoration" aria-hidden="true">✳</span>
    </section>

    <section class="content-section about-section" id="about" aria-labelledby="about-title">
      <div class="section-heading"><p class="eyebrow">01 — ABOUT</p><h2 id="about-title">저는 이런 사람입니다</h2></div>
      <div class="about-copy">
        <p>이곳에 나의 성격, 지금 하는 일, 그리고 중요하게 생각하는 것을 적어 보세요. 정답은 없으니 편안한 말투로 나답게 써 주세요.</p>
        <div class="quick-facts">
          <div><span>사는 곳</span><strong>[도시 또는 지역]</strong></div>
          <div><span>요즘 하는 일</span><strong>[직업 · 공부 · 프로젝트]</strong></div>
          <div><span>한마디로</span><strong>[나를 표현하는 말]</strong></div>
        </div>
      </div>
    </section>

    <section class="content-section interests-section" id="interests" aria-labelledby="interests-title">
      <div class="section-heading"><p class="eyebrow">02 — THINGS I LOVE</p><h2 id="interests-title">좋아하고, 관심 있는 것</h2></div>
      <div class="interest-grid">
        <article class="interest-card"><span class="interest-icon" aria-hidden="true">☀</span><h3>[관심사 하나]</h3><p>이것을 좋아하는 이유나 요즘 빠져 있는 것을 적어 보세요.</p></article>
        <article class="interest-card"><span class="interest-icon" aria-hidden="true">✿</span><h3>[취미 또는 분야]</h3><p>즐겨 하는 활동이나 더 알아가고 싶은 분야를 소개해 주세요.</p></article>
        <article class="interest-card"><span class="interest-icon" aria-hidden="true">♫</span><h3>[요즘의 즐거움]</h3><p>책, 음악, 음식처럼 나를 기분 좋게 하는 것을 적어 보세요.</p></article>
      </div>
    </section>

    <section class="contact-banner" id="contact" aria-labelledby="contact-title">
      <div><p class="eyebrow">03 — SAY HELLO</p><h2 id="contact-title">함께 이야기 나눠요.</h2><p>편하게 연락할 수 있는 방법을 적어 주세요.</p></div>
      <a class="button button-light" href="mailto:hello@example.com">이메일 보내기 <span aria-hidden="true">↗</span></a>
    </section>
  </main>

  <footer class="site-footer"><a class="wordmark" href="#top">hello, me<span>.</span></a><p>천천히, 나답게. · © <span id="year"></span> [이름]</p></footer>
`

document.querySelector('#year').textContent = new Date().getFullYear()
