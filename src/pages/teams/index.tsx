import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Team = (props: any) => {
  const [users, setUsers] = useState([
    {
      name: "DEBORAH OJENGBEDE",
      description: `Deborah Ojengbede is a seasoned banker with over 5 years of working experience in the industry and has thrived in roles ranging from Business Analytics, Strategy and Project Management to culminate in leadership roles in Women Empowerment and Banking.By virtue of her experience, both within and outside the Bank, she has also garnered experience in building, scaling and impacting various businesses in the entertainment sector.`,
      title: "Chief Executive Officer",
      image: "/assets/images/user01.png",
      twitter: "https://twitter.com/binancefreak?s=21",
    },
    {
      name: "KEITH MALI CHUNG",
      description: `Keith Mali Chung is a pro-blockchain technology enthusiast widely informed in the world of cryptocurrency. He has pioneered the development of several blockchain products such as a decentralized social media with Swirge, and is on board AFEN as the Chairman of the Advisory board.  Keith brings with him a wealth of knowledge and expertise.`,
      title: "Chairman Advisory Board",
      image: "/assets/images/user02.png",
      twitter: "https://twitter.com/bitcoinkeith?s=21",
      instagram: "https://instagram.com/majorbillionaire?utm_medium=copy_link",
    },
    {
      name: "IBIDOYIN AINA",
      description: `Doyin Aina is the head of our legal team. Her practice focuses on Sports and Entertainment Law, ICT Law, Real Estate Law and general commercial practice. She is also a crypto-enthusiast. Doyin handles the administrative and legal secretarial aspects of our company. Her knowledge of the crypto business and her practice experience helps bring a new flavor to our Company.
      Doyin is an alumnus of Afe Babalola University, Ado-Ekiti, Ekiti State. She is also a football enthusiast and is best described by her passion for sports and for the development of Female Football in Nigeria. She has also written a number of published articles on Sports Law. She is also a member of the Chartered Institute of Arbitrators, UK.`,
      title: "Legal Adviser/Company Secretary",
      image: "/assets/images/user010.jpeg",
      instagram:
        "https://www.instagram.com/p/B9c58aqFi6x/?utm_medium=copy_link",
      linkedin: "https://www.linkedin.com/in/ibidoyin-aina-9450a8120",
    },
    {
      name: "RUGI KAVAMAHANGA",
      description: `Rugi Kavamahanga is a Blockchain marketing professional with experience in community engagement and strategic messaging development. He has been working in Crypto since 2017 and has had an MBA from Penn State University.`,
      title: "Chief Marketing Officer",
      image: "/assets/images/user03.png",
      linkedin: "https://www.linkedin.com/in/rugi-kavamahanga-0870ba5/",
    },
    {
      name: "AVINASH SENGAR",
      description: `Avinash Sengar is a blockchain enthusiast & tech evangelist with over 11 years industry experience. He has worked on various projects in Blockchain technology such as DeFi/NFTs, SSI, Banking & Healthcare sector. He is currently fulfilling his goal of helping startups build decentralized applications targeted at solving real time problems.
      `,
      title: "Chief Technology Officer",
      image: "/assets/images/user04.png",
      linkedin: "https://www.linkedin.com/in/avinash-sengar",
    },
    {
      name: "BUKOLA AKINPELU",
      description: `Bukola is an industry recognized expert in product design, data analysis and blockchain startup marketing. She has over 3 years  of working experinece in various fields in computer science. She combines UI/UX design experience from building blockchain products, website development with product marketing to offer an invaluable mix of service.`,
      title: "Lead Product Designert",
      image: "/assets/images/user07.png",
      twitter: "https://twitter.com/cryptobea_",
      linkedin: "http://www.linkedin.com/in/oluwabukola-akinpelu-b65b6b174",
    },

    {
      name: "DAVID SABA",
      description: `Saba David is a professional graphic designer with over 4 years of working experience in various design applications. He is focused on creating and developing meaningful human-centred experiences, through visual designs and branding. As a result, he has secured special knowledge in Brand management, Social media management and Content Creation.
      `,
      title: "Head of designs",
      image: "/assets/images/user05.png",
      twitter: "https://twitter.com/king__dayvee",
      linkedin: "https://linkedin.com/SabaDavid",
    },
    {
      name: "OLIVA- NWOKO EXCEL BIENOSE",
      description: `Excel Oliva is an enigmatic and enthusiastic communication expert vast in Public relations, content creation, crypto marketing, blockchain technology, and several forms of writing. He has a wealth of experience working in the Real eststae industry as well as the blockchain industry, and is a great addition to the team.
      `,
      title: "Team Lead Corporate Communications and Strategy",
      image: "/assets/images/user06.png",
      twitter: "https://twitter.com/thequietex?s=09",
      linkedin: "https://www.linkedin.com/in/excel-oliva-700868207",
    },

    {
      name: "JOHNSON DANIEL",
      description: `Johnson Daniel has over 5 years of working experience in computer programming on various computer languages, and also experience in Blockchain development, building, programming, and maintenance.`,
      title: "Technical Advisor",
      image: "/assets/images/user08.png",
      twitter: "https://twitter.com/mrjaycrypto?s=21",
    },
    {
      name: "JOSHUA RAMADAN",
      description: `Joe Ramadan is a Tourism/Cultural enthusiast, A&R specialist, Africa sound collector/promoter, and the former Special Assistant to the Governor of Plateau State.`,
      title: "Government Advisor",
      image: "/assets/images/user09.png",
      facebook: "https://www.facebook.com/joshua.ramadan.7%20",
    },
  ]);

  const rightView = (
    ele: any = {
      name: "",
      description: "",
      title: "",
      image: "",
      twitter: "",
    },
    index: number
  ) => {
    return (
      <>
        <li className="rightside">
          <div className="usercontent">
            <h4>{ele.name || ""} </h4>
            {ele?.twitter && (
              <ul className="sociallinks">
                <li>
                  <a href={ele.twitter} target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            )}
            {ele?.facebook && (
              <ul className="sociallinks">
                <li>
                  <a href={ele.facebook} target="_blank">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
              </ul>
            )}
            {ele?.linkedin && (
              <ul className="sociallinks">
                <li>
                  <a href={ele.linkedin} target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            )}
            <h6>{ele.title || ""}</h6>
            <p>{ele.description || ""}</p>
          </div>
          <div className="userimg">
            <img
              src={ele.image || `assets/images/user0${index + 1}.png`}
              alt="#"
              className="img-fluid"
            />
          </div>
        </li>
        <p className="usercontent_mobile right">{ele.description || ""}</p>
      </>
    );
  };

  const leftview = (
    ele: any = { image: "", description: "", date: "", title: "" },
    index: number
  ) => {
    return (
      <>
        <li className="leftside">
          <div className="userimg">
            <img
              src={ele.image || `assets/images/user0${index + 1}.png`}
              alt="#"
              className="img-fluid"
            />
          </div>
          <div className="usercontent">
            <h4>{ele.name || ""}</h4>
            {ele.twitter && (
              <ul className="sociallinks">
                <li>
                  <a href={ele.twitter} target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            )}
            {ele?.facebook && (
              <ul className="sociallinks">
                <li>
                  <a href={ele?.facebook} target="_blank">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
              </ul>
            )}
            {ele?.linkedin && (
              <ul className="sociallinks">
                <li>
                  <a href={ele?.linkedin} target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            )}
            {ele?.instagram && (
              <ul className="sociallinks">
                <li>
                  <a href={ele?.linkedin} target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            )}
            <h6>{ele.title || ""}</h6>
            <p>{ele.description || ""}</p>
          </div>
        </li>
        <p className="usercontent_mobile">{ele.description || ""}</p>
      </>
    );
  };

  return (
    <section className="meettheTeam">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="meetteamouter">
              <h2>Meet The Team</h2>
              <ul className="teammember">
                {users.map((user, i) => {
                  if (i % 2 === 0) {
                    return leftview(user, i);
                  }
                  if (i % 2 !== 0) {
                    return rightView(user, i);
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team };
