import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import classes from "./YoutubeTrend.module.css";

const YOUTUBE_PLAY_URL = "https://www.youtube.com/watch?v=";

const youtubeJSON = [
  {
    imgURL: "https://i.ytimg.com/vi/z0JraysWnNw/maxresdefault.jpg",
    videoId: "z0JraysWnNw",
    title:
      "GOAL | Hwang Hee-chan | Liverpool v Wolverhampton Wanderers | Third Round | Emirates FA",
    host: "The Emirates FA Cup",
    view: "27.59만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/zrLdC7aYy64/maxresdefault.jpg",
    videoId: "zrLdC7aYy64",
    title: "맛의 고장 전라도에서 환장하고 먹고 왔습니다 | 또간집 EP.19",
    host: " 재밌는 거 올라온다",
    view: " 141.26만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/ukkAzff8_q0/maxresdefault.jpg",
    videoId: "ukkAzff8_q0",
    title:
      "[아형✪하이라이트] ＜재벌집 막내아들＞ 순양가가 떴다↗ '촬영 비하인드'부터 '송중기 에피소드'까지🔥 | 아는 형님 | JTBC 230107 방송",
    host: " 아는형님 Knowingbros",
    view: " 32.49만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/fFrwFXqqTZ0/maxresdefault.jpg",
    videoId: "fFrwFXqqTZ0",
    title:
      "Liverpool v Wolverhampton Wanderers | Key Moments | Third Round | Emirates FA Cup 2022-23",
    host: " The Emirates FA Cup",
    view: " 183.39만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/w3mfNInFsEU/maxresdefault.jpg",
    videoId: "w3mfNInFsEU",
    title: "Resumen de RCD Mallorca vs Real Valladolid (1-0)",
    host: " LaLiga Santander",
    view: " 11.48만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/K5MIC21dqd8/maxresdefault.jpg",
    videoId: "K5MIC21dqd8",
    title:
      "[놀면 뭐하니?] 이게 아직도 굴러가...? 입이 떡 벌어지는 폐차 직전 30년 된 갤로퍼 복원! (Hangout with Yoo) MBC 20230107 방송",
    host: " 놀면 뭐하니?",
    view: " 55.64만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/aNpFd0bYwno/maxresdefault.jpg",
    videoId: "aNpFd0bYwno",
    title:
      "[EN] 이제 좀 한가한 거 같지 않와르르르르르르르르ㅡㄹ | 카페 | 메가MGC커피 | 레전드 | 워크맨2",
    host: " 워크맨-Workman",
    view: " 131.15만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/9IHyK737ukk/maxresdefault.jpg",
    videoId: "9IHyK737ukk",
    title: "[클린버전] 대학부 - 사랑해 누나 ❤미스터트롯2 3화❤ TV CHOSUN 230105 방송",
    host: " 미스&미스터트롯",
    view: " 24.28만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/QaswjrVQr9M/maxresdefault.jpg",
    videoId: "QaswjrVQr9M",
    title: "RM님 주문하신 8화 나왔습니다 I 메타코미디클럽 EP.08",
    host: " 메타코미디클럽",
    view: " 56.64만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/yasvDkYWqww/maxresdefault.jpg",
    videoId: "yasvDkYWqww",
    title:
      "[4K 직캠] 박창근X동생 박창광 - 먼지가 되어 [불후의 명곡2 전설을 노래하다/Immortal Songs 2] | KBS 방송",
    host: " KBS 레전드 케이팝",
    view: " 8.75만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/OxZOC8BO7EI/maxresdefault.jpg",
    videoId: "OxZOC8BO7EI",
    title: "[짐승친구들] 중요한 것은 꺾이지 않는 마음",
    host: " 짤툰",
    view: " 63.8만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/N5B-scexu7s/maxresdefault.jpg",
    videoId: "N5B-scexu7s",
    title: "[도장TV 88회] 도장가족!! 인도네시아를 접수하다!! 발리에서 생긴 일^^",
    host: " 도장TV",
    view: " 50.82만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/SP-LJqVgQuw/maxresdefault.jpg",
    videoId: "SP-LJqVgQuw",
    title: "뉴진스 초대석",
    host: " 침착맨",
    view: " 227.14만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/hDXxKC7gE8Y/maxresdefault.jpg",
    videoId: "hDXxKC7gE8Y",
    title: "Team Faker 인터뷰🎤 | 2023 LCK KICK-OFF",
    host: " LCK",
    view: " 12.62만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/LQAtD-O8x48/maxresdefault.jpg",
    videoId: "LQAtD-O8x48",
    title:
      "Kane, Son & Doherty score as Spurs put FOUR past Palace | HIGHLIGHTS | Crystal Palace 0-4 Spurs",
    host: " Tottenham Hotspur",
    view: " 105.93만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/WHKALveS5lg/maxresdefault.jpg",
    videoId: "WHKALveS5lg",
    title: "3D펜으로 하는 도어즈 실사판 【산냥고】 | 고양이산책",
    host: " 고양이산책",
    view: " 8.6만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/1hcdQixxJdA/maxresdefault.jpg",
    videoId: "1hcdQixxJdA",
    title:
      "뉴진스 (NewJeans) _ OMG | 1theKILLPO | 원더킬포 | 킬포인트 | 퍼포먼스 | Performance | 4K | 민지 하니 다니엘 해린 혜인",
    host: " 1theK Originals - 원더케이 오리지널",
    view: " 375.83만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/_9HE3qI9EUQ/maxresdefault.jpg",
    videoId: "_9HE3qI9EUQ",
    title: "[05학번이즈히어] 신도시 새언니는 시누이와 어떤 사이인가",
    host: " 피식대학Psick Univ",
    view: " 63.18만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/CxKlKGwo2bE/maxresdefault.jpg",
    videoId: "CxKlKGwo2bE",
    title:
      "[아는형님] 진성준X모현민 역시 혐관이 제일..🤤 현실에서 투닥거리는 재벌집 장손 부부 김남희X박지현｜핫클립｜JTBC 230107 방송 외",
    host: " JTBC Voyage",
    view: " 41.25만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/vbkdpZVx4BQ/maxresdefault.jpg",
    videoId: "vbkdpZVx4BQ",
    title: "한국인 사위를 처음 만나는 일본 부모님..",
    host: " 네루짱NERU",
    view: " 29.58만 누적 조회수 ",
  },
];

const YouTubeTrend = forwardRef((_, youtubeRef) => {
  // const { youtubeList } = useSelector(state => state.trend);
  const youtubeList = youtubeJSON;

  const youtubeListHtml = youtubeList.map((el, index) => (
    <li key={el.videoId}>
      <a href={`${YOUTUBE_PLAY_URL}${el.videoId}`} target="_blank" rel="noopener noreferrer">
        <div className={classes.img_wrap}>
          <img src={el.imgURL} alt={el.imgURL} />
        </div>
        <div className={classes.info_wrap}>
          <div className={classes.rank}>
            <span className={classes.num}>
              <span className="blind">랭킹</span>
              {index + 1}
            </span>
          </div>
          <div className={classes.info}>
            <span className={classes.title}>{el.title}</span>
            <span className={classes.host}>{el.host}</span>
            <span className={classes.view}>
              <span className="blind">뷰</span>
              {`조회수 ${el.view.replace(" 누적 조회수", "")}`}
            </span>
          </div>
        </div>
      </a>
    </li>
  ));

  return (
    <section className={classes.youtube__section} ref={youtubeRef}>
      <div className={classes.youtube__wrapper}>
        <p className="section__title">
          24시간 동안 한국에서 <br />
          가장 많이 본 유튜브를 시청하세요.
        </p>
        <ol className={classes.youtube_list}>{youtubeListHtml}</ol>
      </div>
    </section>
  );
});

export default YouTubeTrend;
