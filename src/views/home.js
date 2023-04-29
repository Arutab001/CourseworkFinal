import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mobillio Online Store</title>
        <meta property="og:title" content="Mobillio Online Store" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar1">
            <div className="home-container01">
              <img
                alt="search3271286"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                className="home-image"
              />
              <input
                type="text"
                placeholder="search"
                className="home-textinput input"
              />
            </div>
            <div className="home-middle">
              <div className="home-left">
                <Link to="/catalog" className="home-text navbar-link">
                  SHOP
                </Link>
                <span className="navbar-link">SPECIAL</span>
              </div>
              <span className="navbar-logo-title">ARTEM</span>
              <div className="home-right">
                <a href="#about" className="home-text02 navbar-link">
                  ABOUT
                </a>
                <a href="#contacts" className="home-text03 navbar-link">
                  CONTACT
                </a>
              </div>
            </div>
            <div className="home-icons">
              <img
                alt="iconsbxscart3271299"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                className="home-image01"
              />
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="home-image02"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="home-image03"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container02">
                <span className="home-logo-center1">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle1">
                <span className="home-text04">SHOP</span>
                <span className="home-text05">LOOKBOOK</span>
                <span className="home-text06">SPECIAL</span>
                <span className="home-text07">ABOUT</span>
                <span className="home-text08">BLOG</span>
                <span className="home-text09">CONTACT</span>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container03">
                <h1 className="home-text10">Lenovo</h1>
                <div className="home-container04">
                  <span className="home-text11">FROM</span>
                  <span className="home-text12">$339</span>
                </div>
                <div className="home-btn-group">
                  <button className="button">Buy</button>
                </div>
              </div>
              <img
                src="/playground_assets/laptop-transformed-600h.png"
                className="home-image04"
              />
            </div>
          </div>
        </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              subtitle="Start shopping based on the categories you are interested in"
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard
                name="Computers"
                category_img="/playground_assets/desktop-1500w.jpg"
                rootClassName="category-card-root-class-name2"
              ></CategoryCard>
              <div className="home-category-card">
                <img
                  alt="image"
                  src="/playground_assets/20220601160636730_igrovaya-pristavka-sony-ps5-with-disk-825gb-1-1800h.jpg"
                  className="home-image05"
                />
                <span className="home-text13">Came Consoles</span>
              </div>
              <div className="home-category-card1">
                <img
                  alt="image"
                  src="/playground_assets/msigeforcertx4090gamingxtrio24gbgddr6xrtx4090gamingxtrio24gb_1-1500w.jpg"
                  className="home-image06"
                />
                <span className="home-text14">PC components</span>
              </div>
              <CategoryCard
                name="Laptops"
                category_img="/playground_assets/%5Bremoval.ai%5D_tmp-64492e41bf8f4-1500w.png"
                rootClassName="category-card-root-class-name3"
              ></CategoryCard>
              <div className="home-category-card2">
                <img
                  alt="image"
                  src="/playground_assets/iphone-13-pink-select-2021-1800h.png"
                  className="home-image07"
                />
                <span className="home-text15">
                  <span>Smartphones</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container05">
              <h3 className="home-text18">
                <span className="Heading-3">Artem</span>
                <br></br>
                <span>project</span>
                <br></br>
              </h3>
            </div>
          </div>
          <div id="about" className="home-container06 max-width-container">
            <div className="home-container07">
              <span className="home-text23">
                <span>Some info about my shop.</span>
                <br></br>
              </span>
              <button className="button">Read more</button>
            </div>
          </div>
        </div>
        <div className="home-trending-items section-container">
          <div className="home-max-width2 max-width-container">
            <div className="home-section-heading">
              <h1 className="home-text26 Heading-2">TRENDING ITEMS</h1>
              <span className="home-text27">
                Explore monthly most trending smartphones, laptops and the best
                offers you can buy
              </span>
            </div>
            <div className="home-gallery">
              <div className="home-left1">
                <div className="home-gallery-card">
                  <img
                    alt="image"
                    src="/playground_assets/google_pixel_6_1112-1200x800-600h.jpg"
                    className="home-image08"
                  />
                  <div className="home-container08">
                    <h3 className="home-text28">Google Pixel</h3>
                    <div className="home-container09">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                      </svg>
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                      </svg>
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                      </svg>
                      <svg viewBox="0 0 1024 1024" className="home-icon16">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                      </svg>
                      <svg viewBox="0 0 1024 1024" className="home-icon18">
                        <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                      </svg>
                    </div>
                    <div className="home-container10">
                      <span className="home-currency">$</span>
                      <span className="home-value">550</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-right1">
                <div className="home-top">
                  <div className="home-left2">
                    <div className="home-gallery-card1">
                      <img
                        alt="image"
                        src="/playground_assets/macbook-1800h.jpg"
                        className="home-image09"
                      />
                      <div className="home-container11">
                        <h3 className="home-text29">
                          <span>MacBook M2</span>
                          <br></br>
                        </h3>
                        <div className="home-container12">
                          <svg viewBox="0 0 1024 1024" className="home-icon20">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon22">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon24">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon26">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon28">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container13">
                          <span className="home-currency1">$</span>
                          <span className="home-value1">429</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-right2">
                    <div className="home-gallery-card2">
                      <img
                        alt="image"
                        src="/playground_assets/iphone-13-pink-select-2021-1800h.png"
                        className="home-image10"
                      />
                      <div className="home-container14">
                        <h3 className="home-text32">Iphone 13</h3>
                        <div className="home-container15">
                          <svg viewBox="0 0 1024 1024" className="home-icon30">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon32">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon34">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon36">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon38">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container16">
                          <span className="home-currency2">$</span>
                          <span className="home-value2">600</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-left3">
                    <div className="home-gallery-card3">
                      <img
                        alt="image"
                        src="/playground_assets/xbox-series-s%20%5B1%5D-1800h.jpg"
                        className="home-image11"
                      />
                      <div className="home-container17">
                        <h3 className="home-text33">
                          <span>Xbox Series S</span>
                          <br></br>
                        </h3>
                        <div className="home-container18">
                          <svg viewBox="0 0 1024 1024" className="home-icon40">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon42">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon44">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon46">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon48">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container19">
                          <span className="home-currency3">$</span>
                          <span className="home-value3">270</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-right3">
                    <div className="home-gallery-card4">
                      <img
                        alt="image"
                        src="/playground_assets/20220601160636730_igrovaya-pristavka-sony-ps5-with-disk-825gb-1-1800h.jpg"
                        className="home-image12"
                      />
                      <div className="home-container20">
                        <h3 className="home-text36">PlayStation 5</h3>
                        <div className="home-container21">
                          <svg viewBox="0 0 1024 1024" className="home-icon50">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon52">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon54">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon56">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                          <svg viewBox="0 0 1024 1024" className="home-icon58">
                            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                          </svg>
                        </div>
                        <div className="home-container22">
                          <span className="home-currency4">$</span>
                          <span className="home-value4">500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <SectionHeading
              heading="Our blog"
              subtitle="Read the last news about devices"
              rootClassName="section-heading-root-class-name"
            ></SectionHeading>
            <div className="home-container23">
              <div className="home-blog-post-card">
                <img
                  alt="image"
                  src="/playground_assets/dscf0857-1500w.jpg"
                  className="home-image13"
                />
                <div className="home-container24">
                  <span className="home-text37">AMD Ryzen review</span>
                  <span className="home-text38">
                    <span>
                      AMD Ryzen 5 7600 review. Is it worth your money? 
                    </span>
                    <br></br>
                  </span>
                  <a
                    href
                    target="_blank"
                    rel="noreferrer noopener"
                    className="button"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="home-blog-post-card1">
                <img
                  alt="image"
                  src="/playground_assets/pixel-8-pro-5k2-scaled_large-1500w.jpg"
                  className="home-image14"
                />
                <div className="home-container25">
                  <span className="home-text41">
                    Latest news about Google Pixel 8
                  </span>
                  <span className="home-text42">
                    <span>
                      The new flagship was shown in the first high-quality
                      images
                    </span>
                    <br></br>
                  </span>
                  <a
                    href
                    target="_blank"
                    rel="noreferrer noopener"
                    className="button"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="home-blog-post-card2">
                <img
                  alt="image"
                  src="/playground_assets/keyboard-2-1655071227274-1500w.jpg"
                  className="home-image15"
                />
                <div className="home-container26">
                  <span className="home-text45">
                    Top 5 mechanic keyboard 2023
                  </span>
                  <span className="home-text46">
                    Ultimate keyboards for typing, gaming, and more
                  </span>
                  <a
                    href
                    target="_blank"
                    rel="noreferrer noopener"
                    className="button"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div id="contacts" className="home-container27">
              <h3 className="home-text47 Heading-3">ARTEM</h3>
              <span className="home-text48">
                Volgogradskaya 34, 41, Minsk, Belarus, 220049
              </span>
              <span className="home-text49">(44)-757-33-25</span>
              <span className="home-text50">375447573325@yandex.by</span>
            </div>
            <div className="home-links-container">
              <div className="home-container28">
                <span className="home-text51">Categories</span>
                <span className="home-text52">PC</span>
                <span className="home-text53">Smartphones</span>
                <span className="home-text54">Laptops</span>
                <span className="home-text55">Game Consoles</span>
                <span className="home-text56">PC components</span>
              </div>
              <div className="home-container29">
                <span className="home-text57">Company</span>
                <span className="home-text58">Shop</span>
                <span className="home-text59">Lookbook</span>
                <span className="home-text60">Specials</span>
                <span className="home-text61">About</span>
                <span className="home-text62">
                  <span>Contact</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <div className="home-container30">
                <span className="home-text66">Resources</span>
                <span className="home-text67">Contact us</span>
                <span className="home-text68">Order</span>
                <span className="home-text69">Track your order</span>
                <span className="home-text70">Shipping &amp; Delivery</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
