import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section class="page-header page-header--about">
        <div class="gradient-overlay"></div>
        <div class="row page-header__content">
          <div class="column">
            <h1>We Are The Lord's Brethren</h1>
          </div>
        </div>
      </section>

      {/* page content */}

      <section class="page-content">
        <div class="row">
          <div class="column">
            <p class="lead drop-cap text-justify">
            The Lord’s Brethren Church International (TLBC) is the church arm of the 
            Believers School of Faith Ministries, a vibrant community of believers who, 
            by faith, recognize themselves as brethren with Jesus Christ and share the 
            same Father as He. We are passionate about spreading the Good News of His 
            love to people across the world.
 
            Our vision is to call men and women by the Gospel of Jesus Christ into the 
            Glory of God, as we take the word of faith to peoples and nations of the world, 
            accompanied by the demonstration of the Holy Spirit.
  
            At TLBC, the Word of God is Lord. We do not accept as doctrine or practice anything 
            that is not firmly rooted in the teachings of Scripture. We believe that the Christian 
            faith is both historical and apostolic, which means we do not innovate in ways that 
            introduce doctrines or practices not taught or exemplified by the Apostles.
            </p>

            <div class="row">
              <div class="column large-half medium-full text-center">
                <h2 className="display-1">Our Vision.</h2>
                <p className="text-justify lead">
                  To take the word of Faith to the nations of the world and to
                  call men by the Gospel into the glory of God.
                </p>
              </div>

              <div class="column large-half medium-full ">
                <h2 className="display-1">Our Mission.</h2>
                <p className="lead">
                  1. Win sinners to Christ. <br />
                  2. Build saints in Christ. <br />
                  3. Make every saint a minister of the Lord Jesus Christ.
                </p>
              </div>
            </div>

            <blockquote cite="http://where-i-got-my-info-from.com">
              <p className="mb-4 text-justify">
                Whereunto he called you by our gospel, to the obtaining of the
                glory of our Lord Jesus Christ.
              </p>
              <cite className="mb-8 md:text-xl 2xl:text-3xl italic">
                <a>2 Thessalonians 2:14 KJV</a>
              </cite>

              <p className="mb-4 text-justify">
                “The Lord’s Brethren Church was born out of my fellowship with
                the father and as an expression of my trainings in the work of
                the ministry.”
              </p>
              <cite className="md:text-xl 2xl:text-3xl italic">
                <a>Reverend Elochukwu Udegbunam</a>
              </cite>
            </blockquote>
            <br />

            <h2 className="text-center display-1" style={{ marginTop: "2rem" }}>
              ABOUT OUR PRESIDENT
            </h2>
            <div class="row">
              <div class="column">
                <div class="media-wrap flex items-center justify-center">
                  <img
                    src="/Reverend-Elo.jpg"
                    srcset="/Reverend-Elo.jpg 2000w, 
                          /Reverend-Elo.jpg 1000w, 
                          /Reverend-Elo.jpg 500w"
                    sizes="(max-width: 600px) 330vw, (max-width: 3000px) 110vw, 2000px"
                    alt=""
                    className="bg-red"
                  />
                </div>

                <div class="event-content">
                  <div class="event-title">
                    <h2 class="display-1">Reverend Elochukwu Udegbunam</h2>
                  </div>

                  <p className="text-justify">
                  Reverend Elochukwu Udegbunam is the founding pastor of the Lord’s Brethren Church 
                  International (TLBC), a church born out of the ministry he began many years ago in Nkpor, 
                  Anambra State, Nigeria. What started as a teenage ministry has since expanded into a thriving 
                  church with a presence in multiple cities and states across Nigeria, along with an online following 
                  that extends beyond the country’s borders.
 
                  Affectionately called “Leader” by those closest to him—many of whom have been with him from the very 
                  beginning—Reverend Elochukwu is a dynamic teacher of God’s Word, with a deep passion for teaching the 
                  Bible with precision and accuracy. This commitment has been evident throughout his ministry, where he 
                  has ensured that the Scriptures are understood in their original context, preserving their meaning and 
                  relevance for today.                 
                  </p>


                  <p className="text-justify">
                  His ministry is marked by miraculous signs, wonders, healings, and the gifts of the Spirit. Over the years, 
                  he has shown that biblical scholarship and charismatic ministry can coexist harmoniously. As a result of 
                  his obedience to the Lord, many have been saved, trained, and are now actively serving in the ministry of the Gospel.
                  </p>

                  <p className="text-justify">
                  Reverend Elochukwu Udegbunam received a three-fold mandate from the Lord for the work of the ministry: <br />
                    1. Winning Sinners to Christ <br />
                    2. Building Saints in Christ <br />
                    3. Making Every Saint a Minister of the Lord Jesus Christ.{" "}
                    <br />
                  </p>

                  <p className="text-justify">
                    To fulfil this mandate, he utilizes various platforms,
                    including local churches, conferences, crusades, Bible schools, 
                    school of ministry, music, media and print publications. <br/>
                    
                    Currently, he resides in Awka with his family, all of whom are 
                    actively involved in the work of the ministry.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="zonal pastor section">

              <h2 className="display-1">Meet our zonal Pastors.</h2>

              <div class="row block-large-1-2 block-tab-full church-staff">
                <div class="column church-staff__item">
                  <div class="church-staff__header">
                    <div class="church-staff__picture">
                      <img src="/pst-mmeso.jpg" alt="" />
                    </div>
                    <h4 class="church-staff__name">
                      Pastor Mmesoma Okafor
                      <span class="church-staff__position">
                        Zonal Direcor, TLBC Int'l Awka.
                      </span>
                    </h4>
                  </div>

                  <p className="text-justify">
                    Pastor Mmesoma Okafor is the zonal Director of TLBC Int'l
                    Awka zone. <br />
                    She is also the General Secretary of TLBC Int'l and a member
                    of the Central Executive Council of the Ministry.
                  </p>
                </div>

                <div class="column church-staff__item">
                  <div class="church-staff__header">
                    <div class="church-staff__picture">
                      <img src="/pst-iyke.jfif" alt="" />
                    </div>
                    <h4 class="church-staff__name">
                      Pastor Ikechukwu Egwu
                      <span class="church-staff__position">
                        Zonal Direcor, TLBC Int'l Nnewi.
                      </span>
                    </h4>
                  </div>

                  <p className="text-justify">
                    Pastor Ikechukwu Egwu is the zonal Director of TLBC Int'l
                    Nnewi zone. <br />
                    He is also the Finance Director of TLBC Int'l and a member
                    of the Central Executive Council of the Ministry.
                  </p>
                </div>

                <div class="column church-staff__item">
                  <div class="church-staff__header">
                    <div class="church-staff__picture">
                      <img src="/pst-eloka.jpg" alt="" />
                    </div>
                    <h4 class="church-staff__name">
                      Pastor Eloka Okeke
                      <span class="church-staff__position">
                        Zonal Direcor, TLBC Int'l Ekwulobia.
                      </span>
                    </h4>
                  </div>

                  <p className="text-justify">
                    Pastor Eloka Okeke is the zonal Director of TLBC Int'l
                    Ekwulobia zone. <br />
                    He is also the Director of the Ministerial Bureau of TLBC
                    Int'l and a member of the Central Executive Council of the
                    Ministry.
                  </p>
                </div>

                <div class="column church-staff__item">
                  <div class="church-staff__header">
                    <div class="church-staff__picture">
                      <img src="/evang.jfif" alt="" />
                    </div>
                    <h4 class="church-staff__name">
                      Evangelist Chidimma Egwu
                      <span class="church-staff__position">
                        Zonal Direcor, TLBC Int'l Owerri.
                      </span>
                    </h4>
                  </div>

                  <p className="text-justify">
                    Evangelist Chidimma Egwu is the zonal Director of TLBC Int'l
                    Owerri zone. <br />
                    He is also the Cell Ministry Director of TLBC Int'l and a
                    member of the Pastoral Team of the Ministry.
                  </p>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
