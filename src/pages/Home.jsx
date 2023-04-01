//Router
import { Link } from "react-router-dom";

//Background Video
import videoBg from "../assets/images/videoBg/Tissot-Official-Trailer.mp4";

//images
import superSport from "../assets/images/home/bg-cover/supersport-product.avif";
import damian from "../assets/images/home/bg-cover/damian-lilard-supersport_v3.avif";
import manwatches from "../assets/images/home/man/watchesmen.webp";
import womanwatches from "../assets/images/home/woman/watcheswomen.webp";
import manwatches1 from "../assets/images/home/man/manwatch1.avif";
import manwatches2 from "../assets/images/home/man/manwatch2.avif";
import manwatches3 from "../assets/images/home/man/manwatch3.avif";
import manwatches4 from "../assets/images/home/man/manwatch4.webp";
import womanwatches1 from "../assets/images/home/woman/womanwatch1.webp";
import womanwatches2 from "../assets/images/home/woman/womanwatch2.webp";
import womanwatches3 from "../assets/images/home/woman/womanwatch3.webp";
import womanwatches4 from "../assets/images/home/woman/womanwatch4.webp";
import categoryClassic from "../assets/images/home/categories/Categorie-classic.webp";
import categorySport from "../assets/images/home/categories/Categorie-sport.webp";
import categoryHeritage from "../assets/images/home/categories/Categorie-heritage.webp";
import categoryTouch from "../assets/images/home/categories/Categorie-touch.webp";
import categoryPocket from "../assets/images/home/categories/Categorie-pocket.webp";
import categoryGold from "../assets/images/home/categories/Categorie-gold.webp";
import giftCover from "../assets/images/home/bg-cover/gift-finder.webp";
import registerCover from "../assets/images/home/bg-cover/register-cover.webp";
import damianCover from "../assets/images/home/bg-cover/damian-cover.webp";
import primozCover from "../assets/images/home/bg-cover/primoz-cover.webp";
import swiper1 from "../assets/images/home/slider/swiper-1.avif";
import swiper2 from "../assets/images/home/slider/swiper-2.avif";
import swiper3 from "../assets/images/home/slider/swiper-3.avif";
import swiper4 from "../assets/images/home/slider/swiper-4.avif";
import swiper5 from "../assets/images/home/slider/swiper-5.avif";
import swiper6 from "../assets/images/home/slider/swiper-6.avif";
import news1 from "../assets/images/home/news/news1.webp";
import news2 from "../assets/images/home/news/news2.webp";
import news3 from "../assets/images/home/news/news3.webp";
import news4 from "../assets/images/home/news/news4.webp";
import location_bg from "../assets/images/home/location/bg-store-locator.avif";
import service_bg from "../assets/images/home/location/bg-customer-service.avif";

//Components
import Button from "../components/Button";

// //Icons
// import { FiPause } from "react-icons/fi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper Images

// import required modules
import { Navigation } from "swiper";

//States
import { useState } from "react";

const Home = () => {
  const [label, setLabel] = useState(null);

  return (
    <>
      <section className="video-section">
        <video className="bgVideo" src={videoBg} autoPlay loop muted />
        <div className="video-background-content">
          <h1 className="video-background-title">TISSOT PRX 35 MM</h1>
          <Link>
            <Button className="video-bg-btn btn" to="#">
              Discover
            </Button>
          </Link>
        </div>
      </section>
      <section className="promotions">
        <div className="container">
          <div className="promotions-title">
            <h2>THE NEW SUPERSPORT CHRONO</h2>
          </div>
          <div className="promotions-row">
            <div className="contentbox-left">
              <img src={superSport} alt="Super Sport" />
            </div>
            <div className="contentbox-right">
              <img src={damian} alt="Damian" />
            </div>
          </div>
          <div className="promotions-btn-box">
            <Button className="promotions-btn btn" to="#">
              Discover
            </Button>
          </div>
        </div>
      </section>
      <section className="man-watches">
        <div className="container">
          <div className="man-watches-row">
            <div className="man-watches-left">
              <img src={manwatches} alt="Man watches" />
              <div className="cover-description">
                <h2>WATCHES FOR HIM</h2>
                <Button className="man-watches-btn btn">Discover</Button>
              </div>
            </div>
            <div className="man-watches-right">
              <div className="watch-img-content">
                <div className="img-box">
                  <img
                    src={manwatches1}
                    alt="Tissot PRX Automatic Chronograph"
                  />
                </div>
                <div className="watch-info">
                  <div className="watch-title">
                    Tissot PRX Automatic Chronograph
                  </div>
                  <div className="watch-technical-badge">AUTOMATIC</div>
                </div>
              </div>
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={manwatches2} alt="Tissot PRX Powermatic" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">Tissot PRX Powermatic 80</div>
                  <div className="watch-technical-badge">AUTOMATIC</div>
                </div>
              </div>
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={manwatches3} alt="TISSOT SEASTAR" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">TISSOT SEASTAR 1000 36MM</div>
                  <div className="watch-technical-badge">QUARTZ</div>
                </div>
              </div>
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={manwatches4} alt="Tissot Gentleman" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">Tissot Gentleman</div>
                  <div className="watch-technical-badge">QUARTZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="woman-watches">
        <div className="container">
          <div className="woman-watches-row">
            <div className="woman-watches-left">
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={womanwatches1} alt="Tissot Bellissima Small Lady" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">
                    Tissot Bellissima Small Lady
                  </div>
                  <div className="watch-technical-badge">QUARTZ</div>
                </div>
              </div>
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={womanwatches2} alt="Tissot Seastar 1000" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">Tissot Seastar 1000 36mm </div>
                  <div className="watch-technical-badge">QUARTZ</div>
                </div>
              </div>
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={womanwatches3} alt="Tissot PR 100 Sport" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">Tissot PR 100 Sport</div>
                  <div className="watch-technical-badge">QUARTZ</div>
                </div>
              </div>
              <div className="watch-img-content">
                <div className="img-box">
                  <img src={womanwatches4} alt="TISSOT T-MY LADY AUTOMATIC" />
                </div>
                <div className="watch-info">
                  <div className="watch-title">TISSOT T-MY LADY AUTOMATIC</div>
                  <div className="watch-technical-badge">AUTOMATIC</div>
                </div>
              </div>
            </div>
            <div className="woman-watches-right">
              <img src={womanwatches} alt="Woman watches" />
              <div className="cover-description">
                <h2>WATCHES FOR HIM</h2>
                <Button className="woman-watches-btn btn">Discover</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories-carusel">
        <div className="container">
          <div className="categories-carusel-title">
            <h2>OUR CATEGORIES</h2>
          </div>
          <div className="categories-swiper">
            <Swiper
              spaceBetween={10}
              breakpoints={{
                400: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 6,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={categoryClassic} alt="Watches category" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={categorySport} alt="Watches category" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={categoryHeritage} alt="Watches category" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={categoryTouch} alt="Watches category" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={categoryPocket} alt="Watches category" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={categoryGold} alt="Watches category" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="gift-finder">
        <div className="container">
          <div className="gift-row">
            <div className="gift-left">
              <img src={giftCover} alt="Gift Finder" />
            </div>
            <div className="gift-right">
              <div className="gift-content">
                <h2>GIFT FINDER</h2>
                <div className="gift-content-text">
                  <p>
                    Showing your affection, expressing your gratitude or simply
                    saying thank you… There are so many reasons and
                    opportunities to show your loved ones how much your
                    appreciate them. And what better way to do so than with the
                    gift of time?
                  </p>
                  <p>
                    When it can be difficult to find the perfect present, our
                    Gift Finder will help you navigate through the universe of
                    Tissot watches. Super trendy or more classic, dark and
                    subtle or bright and shiny… find the perfect luxury Swiss
                    watch and create unforgettable memories.
                  </p>
                </div>
                <div className="gift-content-button">
                  <Button className="gift-btn btn">
                    Find the perfect gift
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="register-watches">
        <div className="container">
          <div className="register-row">
            <div className="register-left">
              <div className="register-content">
                <h2>REGISTER MY WATCH</h2>
                <div className="register-content-text">
                  <p>
                    You can now register your Tissot watches into your Tissot
                    account. Sign up, add your watch to your collection and
                    enjoy the full Tissot Experience. Want to personalize your
                    watch with a compatible strap? Want to know about your
                    warranty status? Want to know how to get the most of your
                    watch thanks to your user guide? Want to access your past
                    order and personal information? All you need is accessible
                    in your account.
                  </p>
                </div>
                <div className="register-content-btn">
                  <Button className="register-btn btn">register</Button>
                </div>
              </div>
            </div>
            <div className="register-right">
              <img src={registerCover} alt="Register cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="damian-section">
        <div className="container">
          <div className="damian-section-row">
            <div className="damian-section-left">
              <img src={damianCover} alt="Damian cover" />
            </div>
            <div className="damian-section-right">
              <div className="damian-section-content">
                <h2>Damian lillard</h2>
                <div className="damian-content-text">
                  <p>
                    Selected by Portland as the sixth overall pick in the 2012
                    NBA Draft, Lillard then won the NBA Rookie of the Year Award
                    in 2013. Loyal to the Trail Blazers, he has pursued his
                    career with the Oregon team, rising to legendary status. The
                    NBA All-Star Damian Lillard is a once in a generation
                    athlete with his own unique approach to watches. ” I like
                    attractive, accessible watches that adapt to every style.
                    That's why I love Tissot.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="primoz-section">
        <div className="container">
          <div className="primoz-section-row">
            <div className="primoz-section-left">
              <div className="primoz-section-content">
                <h2>PRIMOŽ ROGLIČ</h2>
                <div className="primoz-content-text">
                  <p>
                    Primož Roglič is a cycling champion with a unique career
                    path. Born in former Yugoslavia, he began his sporting
                    career as a ski jumper. In 2011, having won several
                    international titles, he decided to swap his skis for a
                    racing bike. The decision paid off: within a few years, the
                    Slovenian champion had joined the world's elite and won
                    multiple races, including La Vuelta, Liège-Bastogne-Liège
                    and the Tour de Romandie. He has achieved numerous Grand
                    Tour podium finishes and in 2020, was named no.1 road
                    cyclist in the UCI World Ranking. “Time measurement is an
                    essential part of my life and my career. For me, this
                    association with Tissot makes perfect sense.”
                  </p>
                </div>
              </div>
            </div>
            <div className="primoz-section-right">
              <img src={primozCover} alt="primoz cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="novelties-slider">
        <div className="container">
          <div className="novelties-row">
            <div className="novelties-title">
              <h2>Novelties</h2>
            </div>
            <div className="home-swiper">
              <Swiper
                spaceBetween={15}
                navigation={true}
                modules={[Navigation]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  400: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={swiper1} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper2} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper3} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper4} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={manwatches3} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={manwatches4} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper5} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper6} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={womanwatches1} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={womanwatches2} alt="watch-swiper" />
                  <div className="watch-info">
                    <div className="watch-title">
                      Tissot PRX Automatic Chronograph
                    </div>
                    <div className="watch-technical-badge">AUTOMATIC</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="novelties-button">
              <Button className="novelties-btn btn">discover</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="news-row">
            <div className="news-contents">
              <div className="news-content">
                <img src={news1} alt="news" />
                <div className="news-info">
                  <p className="news-title">
                    The Tissot Boutique in the heart of Shinsaibashi, Osaka
                    opens its doors
                  </p>
                  <p className="news-date">9/7/22</p>
                  <p className="news-text">
                    Tissot is pleased to announce the opening of its boutique,
                    located at Shinsaibashi-suji Shopping Street, Osaka. It is
                    now ready to welcome you as the biggest Tissot shop in the
                    Western Japan.
                  </p>
                </div>
              </div>
              <div className="news-content">
                <img src={news2} alt="news" />
                <div className="news-info">
                  <p className="news-title">
                    4 days to go before the start of La Vuelta 22!
                  </p>
                  <p className="news-date">8/15/22</p>
                  <p className="news-text">
                    Only a few days left before the start of the 77th edition of
                    La Vuelta, which will be held from August 19 to September
                    11, 2022.
                  </p>
                </div>
              </div>
              <div className="news-content">
                <img src={news3} alt="news" />
                <div className="news-info">
                  <p className="news-title">
                    Relive the glory days of sports timekeeping with the stylish
                    new Tissot Telemeter 1938
                  </p>
                  <p className="news-date">7/22/22</p>
                  <p className="news-text">
                    The Tissot Telemeter 1938 serves as a highly sophisticated,
                    supremely wearable symbol of a rich sports timekeeping
                    history that began in the Alps and continues today with
                    basketball’s NBA, cycling’s Tour de France, and motorsport's
                    MotoGP, to name but a few of the professional sports that
                    rely on Tissot’s legendary timekeeping expertise.
                  </p>
                </div>
              </div>
              <div className="news-content">
                <img src={news4} alt="news" />
                <div className="news-info">
                  <p className="news-title">
                    TISSOT AND THE OLYMPIC COUNCIL OF ASIA EXTEND THEIR STRONG
                    PARTNERSHIP WITH THE ASIAN GAMES
                  </p>
                  <p className="news-date">4/29/22</p>
                  <p className="news-text">
                    The leader in the Swiss watch industry will continue to
                    provide its expert timekeeping services to the biggest event
                    of the OCA, the Asian Summer Games, for the two editions in
                    2026 and 2030.F
                  </p>
                </div>
              </div>
            </div>
            <div className="news-button">
              <Button className="news-btn btn">view all news</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="location-service">
        <div className="location-service-row">
          <div className="location">
            <div className="content-box">
              <h2>store locator</h2>
              <div className="location-button">
                <Button className="location-btn btn">find stores</Button>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="content-box">
              <h2>customer service</h2>
              <div className="service-button">
                <Button className="service-btn btn">find out more</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="join-section">
        <div className="container">
          <div className="join-row">
            <h2>join the tissot family</h2>
            <div className="join-content">
              <h6>
                Sign up to our newsletter to receive the latest updates and
                offers.
              </h6>
              <div className="join-form">
                <div className="form-control">
                  <label
                    className={`join-label ${label && "active-label"}`}
                    htmlFor="join"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="join"
                    onFocus={() => setLabel(true)}
                    onBlur={() => setLabel("")}
                  />
                </div>
                <div className="join-button">
                  <Button className="join-btn btn">submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
