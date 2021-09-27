import React, { useState, useContext, useEffect } from "react";
import classNames from "classnames";
import { Document, Page } from "react-pdf";
import { PageContext } from "../../context/afenContext";
import { Table } from "react-bootstrap";
import "./index.scss";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const WhitePaper = (props: any) => {
  const [tab, setTab] = useState("overview");
  const { contextState } = useContext(PageContext);
  const [numPages1, setNumPages1] = useState(null);
  const [numPages2, setNumPages2] = useState(null);

  useEffect(() => {
    setTab((contextState && contextState.whitepaper) || "overview");
  }, [contextState]);

  useEffect(() => {
    setTimeout(() => {
      let sidebar_icon: any = document.querySelector(".sidebar_icon");
      sidebar_icon.addEventListener("click", function (this: any) {
        let accordan_sidebar: any = document.querySelector(".accordan_sidebar");
        accordan_sidebar.classList.toggle("open");
      });

      let close_sidebar: any = document.querySelector(".close_sidebar");
      close_sidebar.addEventListener("click", function (this: any) {
        let accordan_sidebar: any = document.querySelector(".accordan_sidebar");
        accordan_sidebar.classList.remove("open");
      });
    }, 1000);
  }, []);

  return (
    <section className="whitepaper_main_sec">
      <div className="row m-0">
        {/*  Header start*/}
        <div className="col-md-3">
          <div className="accordan_sidebar">
            <div className="mobile_header">
              <img src="assets/images/afen_logo.png" alt="images" />
              <span className="close_sidebar">x</span>
            </div>

            {/* Header1 */}
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded={tab === "overview" ? true : false}
                      aria-controls="collapseOne"
                      onClick={() => {
                        setTab("overview");
                      }}
                    >
                      Overview
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
              </div>

              {/* Header 2 */}
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded={
                        ["real-estate", "real-estate-africa"].includes(tab)
                          ? true
                          : false
                      }
                      aria-controls="collapseTwo"
                      onClick={() => {
                        setTab("real-estate");
                      }}
                    >
                      Real Estate
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="list-group" id="myList" role="tablist">
                      <a
                        className="list-group-item list-group-item-action active"
                        data-toggle="list"
                        href="#real-estate-africa"
                        role="tab"
                        onClick={() => {
                          setTab("real-estate-africa");
                        }}
                      >
                        Real Estate in Africa
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header 3 */}
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded={
                        ["arts", "arts-africa"].includes(tab) ? true : false
                      }
                      aria-controls="collapseThree"
                      onClick={() => {
                        setTab("arts");
                      }}
                    >
                      Arts
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="list-group" id="myList" role="tablist">
                      <a
                        className="list-group-item list-group-item-action active"
                        data-toggle="list"
                        href="#arts-africa"
                        role="tab"
                        onClick={() => {
                          setTab("arts-africa");
                        }}
                      >
                        Arts in Africa
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header4 */}
              <div className="card">
                <div className="card-header" id="headingfour">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefour"
                      aria-expanded={
                        ["education", "education-africa"].includes(tab)
                          ? true
                          : false
                      }
                      aria-controls="collapsefour"
                      onClick={() => {
                        setTab("education");
                      }}
                    >
                      Education
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
                <div
                  id="collapsefour"
                  className="collapse"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="list-group" id="myList" role="tablist">
                      <a
                        className="list-group-item list-group-item-action active"
                        data-toggle="list"
                        href="#education-africa"
                        role="tab"
                        onClick={() => {
                          setTab("education-africa");
                        }}
                      >
                        Education in Africa
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header5 */}
              <div className="card">
                <div className="card-header" id="headingfive">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefive"
                      aria-controls="collapsefive"
                      aria-expanded={
                        [
                          "revolutionizing",
                          "revolutionizing1",
                          "revolutionizing2",
                          "revolutionizing3",
                        ].includes(tab)
                          ? true
                          : false
                      }
                      onClick={() => {
                        setTab("revolutionizing");
                      }}
                    >
                      <span>Blockchain : Revolutionizing the Market</span>
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
                <div
                  id="collapsefive"
                  className="collapse"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="list-group" id="myList" role="tablist">
                      <a
                        className="list-group-item list-group-item-action active"
                        data-toggle="list"
                        href="#revolutionizing1"
                        role="tab"
                        onClick={() => {
                          setTab("revolutionizing1");
                        }}
                      >
                        Blockchain &amp; Real Estate
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        data-toggle="list"
                        href="#revolutionizing2"
                        role="tab"
                        onClick={() => {
                          setTab("revolutionizing2");
                        }}
                      >
                        Blockchain &amp; Art
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        data-toggle="list"
                        href="#revolutionizing3"
                        role="tab"
                        onClick={() => {
                          setTab("revolutionizing3");
                        }}
                      >
                        Blockchain &amp; Education
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header6 */}
              <div className="card">
                <div className="card-header" id="headingsix">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsesix"
                      aria-expanded={
                        [
                          "ultimate",
                          "ultimate1",
                          "ultimate2",
                          "ultimate3",
                        ].includes(tab)
                          ? true
                          : false
                      }
                      onClick={() => {
                        setTab("ultimate");
                      }}
                      aria-controls="collapsesix"
                    >
                      <span>AFEN : The Ultimate Combination</span>
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
                <div
                  id="collapsesix"
                  className="collapse"
                  aria-labelledby="headingsix"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="list-group" id="myList" role="tablist">
                      <a
                        className="list-group-item list-group-item-action active"
                        data-toggle="list"
                        href="#ultimate1"
                        role="tab"
                        onClick={() => {
                          setTab("ultimate1");
                        }}
                      >
                        Estate AFEN &amp; Real Estate
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        data-toggle="list"
                        href="#ultimate2"
                        role="tab"
                        onClick={() => {
                          setTab("ultimate2");
                        }}
                      >
                        AFEN &amp; Art
                      </a>
                      <a
                        className="list-group-item list-group-item-action"
                        data-toggle="list"
                        href="#ultimate3"
                        role="tab"
                        onClick={() => {
                          setTab("ultimate3");
                        }}
                      >
                        AFEN &amp; Education
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header7 */}
              <div className="card">
                <div className="card-header" id="headingsiven">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsesiven"
                      aria-expanded={["token"].includes(tab) ? true : false}
                      onClick={() => {
                        setTab("token");
                      }}
                      aria-controls="collapsesiven"
                    >
                      <span>AFEN Token Utilities</span>
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
              </div>

              {/* Header8 */}
              <div className="card">
                <div className="card-header" id="headingeight">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseeight"
                      aria-expanded={["service"].includes(tab) ? true : false}
                      onClick={() => {
                        setTab("service");
                      }}
                      aria-controls="collapseeight"
                    >
                      <span>AFEN Services</span>
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
              </div>

              {/* Header9 */}
              <div className="card">
                <div className="card-header" id="headingeight">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseeight"
                      aria-controls="collapseeight"
                      aria-expanded={
                        ["references"].includes(tab) ? true : false
                      }
                      onClick={() => {
                        setTab("references");
                      }}
                    >
                      <span>References</span>
                      <img
                        src="assets/images/accordian_arrow.png"
                        alt="images"
                      />
                    </button>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COntent start */}
        <div className="col-md-9">
          <div className="tab-content sidebar_deta_outer">
            {/* 1 */}

            <div
              className={classNames("tab-pane", { active: tab === "overview" })}
              id="overview"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Overview</h2>
                <p>
                  We aim to become “a leading hub for African Blockchain-related
                  collaborations with a focus on Decentralized Finance, Arts,
                  Real Estate and Education. AFEN has the objective of combining
                  blockchain’s immutable data structure and the backing of
                  government bodies to provide legitimacy to products.
                </p>
                {/* <img src="assets/images/white_paper_img.png" alt="images" /> */}
                <p>
                  African culture and art are in abundance and if we package and
                  verify the authenticity of its sourcing, buyers will be more
                  willing to invest in the art. Our brand can be legitimate and
                  the promotion of African culture.
                </p>
                <p>
                  Real-Estate NFT’s paired with Government backing would be at
                  the forefront of innovation as the buyer will be able to trust
                  the legitimacy of their ownership. This will be somewhat of a
                  first in the space.
                </p>
                <p>
                  The value of the company is legitimacy. Government backing,
                  decentralized ownership, and revenue being generated to
                  original creators and owners.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "real-estate",
              })}
              id="real-estate"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Real Estate</h2>
                <p>
                  The global blockchain market size is expected to grow from USD
                  3.0 billion in 2020 to USD 39.7 billion by 2025, at an
                  impressive Compound Annual Growth Rate (CAGR) of 67.3% during
                  2020–2025. The increasing need for simplifying the business
                  processes and need for supply chain management applications
                  integrated with the blockchain technology will drive the
                  overall blockchain market.
                </p>
                {/* <img src="assets/images/white_paper_img.png" alt="images" /> */}
                <p>
                  The global blockchain market size is expected to grow from USD
                  3.0 billion in 2020 to USD 39.7 billion by 2025, at an
                  impressive Compound Annual Growth Rate (CAGR) of 67.3% during
                  2020–2025. The increasing need for simplifying the business
                  processes and need for supply chain management applications
                  integrated with the blockchain technology will drive the
                  overall blockchain market.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "real-estate-africa",
              })}
              id="real-estate-africa"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Real Estate in Africa</h2>
                <p>
                  In the past years, private equity firms have taken Africa’s
                  real estate market by storm with millions of dollars in
                  investments, especially in the commercial and hospitality
                  sectors, and we believe the Nigerian market is one of the most
                  sought after, due to the huge returns possible.
                </p>
                {/* <img src="assets/images/white_paper_img.png" alt="images" /> */}
                <p>
                  The growing interest in the Nigerian market is as a result of
                  huge demand buoyed by increasing urban population and changing
                  shopping culture among the expanding middle class, which has
                  resulted in the construction of numerous shopping malls.
                </p>
                <p>
                  Growth in the sector has also been enhanced by the entrance
                  and expansion of new and existing multinational companies in
                  sectors such as ICT, oil and gas, retail merchandising and
                  finance. The upturn in economic activity; experienced from Q4
                  2011 to date, has led to an increase in demand and supply for
                  commercial and high-end residential real estate development,
                  particularly in the key cities of Abuja, Lagos, and Port
                  Harcourt.
                </p>
                <p>
                  The Nigerian market remains attractive as there are numerous
                  opportunities available in the sector. There are opportunities
                  for both institutional investors and real estate developers.
                  We have identified viable opportunities in the following
                  segments of the market for the immediate term:
                </p>
              </div>
            </div>
            {/* 4 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "arts",
              })}
              id="arts"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Arts</h2>
                <p>
                  The global art market is a marketplace of buyers and sellers
                  trading in the services, articles, and works-of-art and
                  culture commonly associated with the various arts. While the
                  market remains predominantly offline, online sales have seen
                  increasing growth in recent years. The global art market was
                  valued at over 67 billion U.S. dollars in 2018, up from almost
                  64 billion the previous year. This increase is also shown in
                  the volume of global art sales which reached approximately 40
                  million transactions in 2018, up from 39 million the previous
                  year.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "arts-africa",
              })}
              id="arts-africa"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Art in Africa</h2>
                <p>
                  African art and culture have thrived for generations, however,
                  historically it has been challenging for local creatives and
                  collectors in Africa to preserve the value of cultural assets
                  that they produce, or own.
                </p>
                <p>
                  Traditional fine art has a huge market, which has been used by
                  affluent investors to diversify their portfolios, but it has
                  been largely inaccessible to consumers and retail investors
                  due to gatekeepers like auction houses that influence what art
                  is deemed “valuable”.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "education",
              })}
              id="education"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Education</h2>
                <p>
                  Global Education and Training Expenditure is set to reach at
                  least $10T by 2030 as population growth in developing markets
                  fuels a massive expansion and technology drives unprecedented
                  re-skilling and up-skilling in developed economies.
                </p>
                <p>
                  The next decade will see an additional 350 million
                  post-secondary graduates and nearly 800 million more K12
                  graduates than today. Asia and Africa are the driving force
                  behind the expansion.
                </p>
                <p>
                  The world needs to add 1.5 million teachers per year on
                  average, approaching 100 million in total. 50% teach in Pre-K
                  and Primary. Post-Secondary teaching will undergo the biggest
                  expansion and change as the role of the teacher represents
                  more of that of a mentor/coach than ‘sage on the stage’.
                </p>
                <img src="assets/images/Picture1.png" alt="images" />
              </div>
            </div>
            {/* 7 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "education-africa",
              })}
              id="education-africa"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Education in Africa</h2>
                <p>
                  Of all regions, sub-Saharan Africa has the highest rates of
                  education exclusion. Over one-fifth of children between the
                  ages of about 6 and 11 are out of school, followed by
                  one-third of youth between the ages of about 12 and 14.
                  According to UIS data, almost 60% of youth between the ages of
                  about 15 and 17 are not in school.
                </p>
                <p>
                  Without urgent action, the situation will likely get worse as
                  the region faces a rising demand for education due to a
                  still-growing school-age population.
                </p>
              </div>
            </div>
            {/* 8 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "revolutionizing",
              })}
              id="revolutionizing"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Blockchain: Revolutionizing the Market</h2>
                <p>
                  The global blockchain market size is expected to grow from USD
                  3.0 billion in 2020 to USD 39.7 billion by 2025, at an
                  impressive Compound Annual Growth Rate (CAGR) of 67.3% during
                  2020–2025. The increasing need for simplifying the business
                  processes and need for supply chain management applications
                  integrated with the blockchain technology will drive the
                  overall blockchain market.
                </p>
                <img src="assets/images/Picture2.png" alt="images" />
                <img src="assets/images/Picture3.png" alt="images" />
              </div>
            </div>
            {/* 9 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "revolutionizing1",
              })}
              id="revolutionizing1"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Blockchain & Real Estate</h2>
                <p>
                  Real estate has not escaped blockchain disruption either.
                  Previously, transacting high value assets such as real estate
                  exclusively through digital channels has never been the norm.
                  Real estate transactions are often conducted offline involving
                  face-to-face engagements with various entities. Blockchain,
                  however, opened up ways to change this. The introduction of
                  smart contracts in blockchain platforms now allows assets like
                  real estate to be tokenized and be traded like
                  cryptocurrencies like bitcoin and ether
                </p>
                <p>
                  Trading real estate this way varies. Here are six ways
                  blockchain has changed the real estate game:
                </p>
                <ol start={1}>
                  <li>
                    Platforms and Marketplaces. Blockchain introduces new ways
                    to trade real estate and can enable trading platforms and
                    online marketplaces to support real estate transactions more
                    comprehensively.
                  </li>
                  <li>
                    No Intermediaries. Cutting out the intermediaries will
                    result in buyers and sellers getting more out of their money
                    as they save on commissions and fees charged by these
                    intermediaries. This also makes the process much quicker as
                    the back-and-forth between these middlemen gets cut.
                  </li>
                  <li>
                    Liquidity. As tokens, real estate can be readily traded. A
                    seller does not have to wait for a buyer who can afford the
                    whole property to get some value out of their property.
                  </li>
                  <li>
                    Fractional Ownership. Through blockchain, investors would
                    simply have to access a trading app to buy and sell even
                    fractions of tokens as they see fit. In addition, fractional
                    ownership would also help them avoid managing the properties
                    themselves such as maintenance and leasing.
                  </li>
                  <li>
                    Decentralization. Blockchain commands trust and security as
                    a decentralized technology. Information stored in the
                    blockchain is accessible to all peers on the network, making
                    data transparent and immutable.
                  </li>
                  <li>
                    Costs. Beyond the savings made by cutting out
                    intermediaries’ professional fees and commissions, there are
                    other costs such as inspections costs, registration fees,
                    loan fees, and taxes associated with real estate. These
                    costs even vary depending on the territory that has
                    jurisdiction. Like intermediaries, these can be reduced or
                    even eliminated from the equation as platforms automate
                    these processes and make them part of the system.
                  </li>
                </ol>
                <p>
                  Employing real estate agents to market property can be costly
                  to property owners and consumers, which creates countless
                  extra fees and processes involved in property purchase that go
                  beyond the price of the property. But blockchain technology
                  helps to cut down some of those costs by reducing the
                  intermediaries.
                </p>
                <p>
                  Blockchain is essentially an online ledger that manages
                  recorded transactions. What makes it innovative is that the
                  ledger is distributed, meaning anyone connected to the network
                  has a copy of it.
                </p>
              </div>
            </div>

            {/* 10 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "revolutionizing2",
              })}
              id="revolutionizing2"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Blockchain & Art</h2>
                <p>
                  Art and NFTs allow users to exchange digital ownership in a
                  fashion that was not capable before. Becoming a collector of
                  an art piece allows you to own it and as you sell it there is
                  a contract the grant the creator or minter a royalty.
                </p>
                <p>
                  Thanks to blockchain technology, new platforms are arising and
                  drive a quiet revolution in how art is being bought, sold,
                  supported, enjoyed, and even created.
                </p>
                <p>
                  Using tokens to represent assets on a blockchain offers
                  several advantages for art collectors:
                </p>
                <ol start={1}>
                  <li>
                    Own shares of artwork. For one, it can make the process of
                    securitization much easier and less costly than it is today,
                    involving fewer and sometimes no intermediaries. That in
                    turn makes fractional ownership of expensive pieces of art
                    (or any highly valuable item) much more viable than has been
                    in the past.
                  </li>
                  <li>
                    Verify authenticity and provenance. Because tokens can be
                    used to represent information as well as assets,
                    blockchain-based platforms can allow large groups of people
                    to share trusted data without relying on a central
                    authority. This too can lead to larger, more liquid and,
                    importantly, more secure, and trustworthy online art markets
                    – markets in which credentials for artworks, artists,
                    buyers, and sellers can be easily authenticated and where
                    transfers of value can be securely carried out directly
                    between parties.
                  </li>
                  <li>
                    Protect ‘digital Picassos’. because blockchain-based tokens
                    are unique and uncopiable, they can be used as the basis for
                    purely digital artworks that cannot be forged and whose
                    ownership can be clearly asserted, maintained, and
                    transferred. This can – and is – opening up new types of art
                    and digital collectibles markets.
                  </li>
                </ol>
              </div>
            </div>

            {/* 11 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "revolutionizing3",
              })}
              id="revolutionizing3"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>Blockchain & Education</h2>
                <p>
                  Decentralized education brings open-source platforms to the
                  table that cannot be changed. History books will no longer be
                  subject to change. There will be more available access to
                  those without it.
                </p>
                <p>
                  There are many applications and benefits of blockchain-based
                  ledger technologies for education:
                </p>
                <ol start={1}>
                  <li>
                    Student records. Academic transcripts are one of the most
                    time-consuming, labor-intensive tasks in academic
                    institutions today. Before issuing a certified transcript of
                    a student’s grades, each entry must be manually verified to
                    ensure accuracy. Another kind of student record that is
                    frequently requested is the certification of course
                    contents. If this information were stored on a blockchain,
                    with just a few clicks, a person could obtain a complete,
                    verified record of content courses and all academic
                    achievements.
                  </li>
                  <li>
                    Diplomas and certificates. Just like grades, a student’s
                    diplomas and credentials could be issued and stored on a
                    blockchain. Instead of asking the institution emitting the
                    diploma to certify a paper copy, employers would only need
                    to be provided with a link to a digital diploma.
                  </li>
                  <li>
                    Badges. Besides degrees, a person’s typical resume contains
                    a lot of additional information that could be relevant to
                    employers. We are talking about foreign language skills,
                    technical knowledge or specific abilities not necessarily
                    related to a person’s profession.
                  </li>
                  <li>
                    File storage. If institutions want to store digital
                    curricula, records, degrees, and other information, that is
                    going to use a lot of file storage space. Saving everything
                    on local hard drives brings us back to the issue of
                    centralizing the files. A possible solution would be
                    blockchain-based cloud storage services.
                  </li>
                  <li>
                    Lessons and courses. Many blockchains are also
                    smart-contract capable. That means that lessons and courses
                    can be programmed into the blockchain and executed
                    automatically when certain conditions are met.
                  </li>
                  <li>
                    Publishing. Undergrad and grad students, teachers,
                    professors, and researchers constantly generate quality
                    material. Publishing on a blockchain could help new writers,
                    researchers and many others break into the industry.
                    Blockchains could also help with rights management and
                    protection against piracy.
                  </li>
                  <li>
                    Lower costs. Many of the applications mentioned above mean
                    that many time-consuming, labor-intensive processes would be
                    automated. This leads to lower costs for institutions, which
                    in turn could translate into savings for students, who may
                    not need to spend years paying off loans. Schools and
                    universities could also reduce costs related to file storage
                    space and by cutting out middlemen in many activities.
                  </li>
                  <li>
                    Rewards. The computer nodes that constantly verify the
                    integrity of the information stored on a blockchain receive
                    rewards in the form of digital tokens like bitcoin or ether.
                    This is what is called cryptocurrency mining.
                  </li>
                </ol>
              </div>
            </div>

            {/* 12 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "ultimate",
              })}
              id="ultimate"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>AFEN: The Ultimate Combination</h2>
                <p>
                  Now, imagine the powerful combination of Blockchain with Real
                  Estate, Arts and Education: AFEN.
                </p>
                <p>
                  At AFEN Blockchain Group we believe in the power of strategic
                  networking and collaborations in building sustainable wealth.
                </p>
                <p>
                  Our vision is to become a leading hub for Blockchain related
                  collaborations with focus on Decentralized Finance, Art, and
                  Education.
                </p>
                <p>
                  NFTs have become hugely popular with crypto users and
                  companies alike because of the way they revolutionized the
                  collectibles space. Our pillars are largely based on products
                  that can be tokenized. We look to build a dynamic platform
                  offering all these products and services on an NFT-based
                  platform.
                </p>
                <ol start={1}>
                  <li>
                    We would love to expose more and more people to crypto. This
                    will be achieved by awarding newbies to take up courses on
                    areas they are interested in. All our certifications from
                    the crypto education platform will be NFTs (Non-fungible
                    Tokens).
                  </li>
                  <li>
                    We want to connect Governments across Africa with
                    opportunities within the blockchain space - such as NFTs -
                    to revolutionize artifacts and collectibles in Africa into
                    NFTs thereby generating revenues for the Government and
                    Private sector.
                  </li>
                  <li>
                    We look to award top performers in the crypto space with
                    NFTs in various categories. The idea is to have the
                    community give incentives for those they think are doing a
                    great job in our space.
                  </li>
                  <li>
                    Networking has been a major contributor to the growth we
                    have seen in crypto this far. We would love to enhance
                    networking by opening our platform to those who are looking
                    to connect and learn from each other.
                  </li>
                  <li>
                    We believe all these activities will create opportunity for
                    growth across board. For that reason, we believe great
                    talent will get opportunity to thrive. We will offer
                    opportunity for incubation for the most promising projects
                    and individuals.
                  </li>
                  <li>
                    Lastly, we look to lift the underserved in community by
                    creating a charity platform. We would love to be a channel
                    for those looking to stretch a hand of help. Our channel
                    will, however, be only crypto and NFT based. This we hope,
                    will become the future of charity as the finance space
                    rapidly transforms.
                  </li>
                  <li>
                    Lower costs. Many of the applications mentioned above mean
                    that many time-consuming, labor-intensive processes would be
                    automated. This leads to lower costs for institutions, which
                    in turn could translate into savings for students, who may
                    not need to spend years paying off loans. Schools and
                    universities could also reduce costs related to file storage
                    space and by cutting out middlemen in many activities.
                  </li>
                  <li>
                    Rewards. The computer nodes that constantly verify the
                    integrity of the information stored on a blockchain receive
                    rewards in the form of digital tokens like bitcoin or ether.
                    This is what is called cryptocurrency mining.
                  </li>
                </ol>
              </div>
            </div>

            {/* 13 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "ultimate1",
              })}
              id="ultimate1"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>AFEN & Real Estate</h2>
                <p>
                  We want to revolutionize the Real estate industry by
                  authenticating home ownership and making peer-to-peer property
                  sales possible on the Blockchain.
                </p>
                <p>
                  This reduces overall cost of acquiring property and is also
                  beneficial for bequeathing land after death.
                </p>
              </div>
            </div>

            {/* 13 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "ultimate2",
              })}
              id="ultimate2"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>AFEN & Arts</h2>
                <p>
                  We want to create a mainstream art movement that democratizes
                  the creation, ownership, and discovery of indigenous art.
                  Instead of private institutions determining the value of
                  artwork, a community of millions of consumers will, as they
                  can easily own the token representing the art and use it to
                  establish a digital cultural identity.
                </p>
                <p>
                  With our platforms, we will digitize ownership through NFT's
                  on the Binance Smart Chain. These ERC721 standard tokens will
                  represent unique ownership of an asset with the capability of
                  peer-to-peer transaction. Each NFT will go through a process
                  of being specified and minted on chain where they will be kept
                  as an immutable receipt of ownership.
                </p>
              </div>
            </div>

            {/* 14 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "ultimate3",
              })}
              id="ultimate3"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>AFEN & Education</h2>
                <p>
                  Many industries are now paying close attention to Blockchain
                  technology. Blockchain technology is broadly applicable,
                  highly disruptive and could shape our future as much as AI or
                  the Internet.
                </p>
                <p>
                  We will love to expose more people to crypto and support
                  careers in Blockchain technology. This will be achieved by
                  awarding newbies and startups to take up trainings on areas
                  they are interested in. All our certifications from the crypto
                  education platform will be NFTs.
                </p>
                <p>
                  For this reason, we believe great talent will get opportunity
                  to thrive. We will also offer opportunities for incubation to
                  the most promising blockchain projects and individuals.
                </p>
              </div>
            </div>

            {/* 15 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "token",
              })}
              id="token"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>AFEN Token Utilities</h2>
                {/* <Document
                  file={"http://13.127.118.102:3000/public/token.pdf"}
                  onLoadSuccess={({ numPages }) => setNumPages2(numPages)}
                >
                  {Array.apply(null, Array(numPages2))
                    .map((x, i) => i + 1)
                    .map((page) => (
                      <Page pageNumber={page} />
                    ))}
                </Document> */}
                <img src="assets/images/token-image.png" alt="images" />
                <Table>
                  <thead>
                    <tr>
                      <th>
                        <strong>PARTICULARS</strong>
                      </th>
                      <th>
                        <strong>DESCRIPTION</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Staking</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              Pool of tokens that pay rewards over time based on
                              lockup and interest.
                            </p>
                          </li>
                          <li>
                            <p>
                              Interest will scale based on a “lock-up” period
                              that a user can choose.
                            </p>
                          </li>
                          <li>
                            <p>
                              Instead of using a traditional savings type stake
                              where interest is earned based on the date of
                              deposit, users can stake tokens on a system that
                              works more like a certificate of deposit.
                            </p>
                          </li>
                          <li>
                            <p>
                              If they want to stake 6 months, they earn a
                              percentage of interest, but if they choose to
                              stake for a year, they earn more interest maybe
                              something like a 20% bump from the 6-month stake.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Cash Back on Transactions</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              For transactions using AFEN tokens on our platform
                              and partnering platforms, user can gain a small
                              percentage of tokens back at the end of a tracking
                              period.
                            </p>
                          </li>
                          <li>
                            <p>
                              This will promote the spending of our tokens on
                              different marketplaces.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center vertical-align">
                        <strong>
                          Art Marketplace | Discounted Transaction Fees:
                        </strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              Users can choose to pay transactions fees via AFEN
                              token on our marketplace for NFTs.
                            </p>
                          </li>
                          <li>
                            <p>
                              By doing this they can get a percentage discount
                              on the transaction fee.
                            </p>
                          </li>
                          <li>
                            <p>
                              This promotes spending like the cash back program
                              would.
                            </p>
                          </li>
                          <li>
                            <p>
                              They can also pay in other cryptos for the full
                              fee.
                            </p>
                          </li>
                          <li>
                            <p>
                              This will be specific to marketplaces hosted by
                              AFEN.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center vertical-align">
                        <strong>AFEN Education Payments</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              If we allow educators to upload content to our
                              platform. We will pay them for every course
                              completion that their course holds.
                            </p>
                          </li>
                          <li>
                            <p>
                              This will be a very small fraction of tokens based
                              on the price of our tokens.
                            </p>
                          </li>
                          <li>
                            <p>
                              This will bring higher quality courses to our
                              platform by incentivizing content creators to get
                              viewers.
                            </p>
                          </li>
                          <li>
                            <p>
                              Over time and rise in price of our token we will
                              fractionalize the pay out to scale growth.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center vertical-align">
                        <strong>AFEN Real Estate Payments</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              Users can choose to purchase property which is
                              listed via AFEN token and get a percentage
                              discount on the transaction fee.
                            </p>
                          </li>
                          <li>
                            <p>
                              Money is escrowed upon sale, and tax paid to the
                              government.
                            </p>
                          </li>
                          <li>
                            <p>
                              Ownership will then be transferred to the buyer
                              upon confirmation of all requirements.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Referral Tokens | Transaction Fee Share</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              If a user refers another user to our platform.
                            </p>
                          </li>
                          <li>
                            <p>
                              They then will get a certain allocation of the
                              transactions fees we earn from any user that they
                              onboarded.
                            </p>
                          </li>
                          <li>
                            <p>
                              This will bring users onto our platform to earn
                              AFEN tokens.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            {/* 16 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "service",
              })}
              id="service"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>AFEN Services</h2>
                {/* <Document
                  file={{
                    url: "http://13.127.118.102:3000/public/service.pdf",
                  }}
                  onLoadSuccess={({ numPages }) => setNumPages1(numPages)}
                >
                  {Array.apply(null, Array(numPages1))
                    .map((x, i) => i + 1)
                    .map((page) => (
                      <Page pageNumber={page} />
                    ))}
                </Document> */}

                <Table className="service-table">
                  <thead>
                    <tr id="afen-art">
                      <th colSpan={2}>
                        <strong>AFEN & ART</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1 row */}
                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Service Infrastructure</strong>
                      </td>
                      <td>
                        <p className="text-left">
                          The AFEN Art Marketplace will be the premier hub for
                          minting and trading verified African Art Pieces.
                        </p>
                        <p className="text-left mt-5">
                          Our Art listings will come in three forms:
                        </p>
                        <ol start={1} className="float-left">
                          <li>
                            <p>
                              <span className="underline">
                                Government Partnerships Government backed
                              </span>
                              <span className="non-underline">
                                listings will be artifacts and art that is
                                sponsored by the hosting government, certified
                                as a digital collectible of a sponsored item.
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="underline">
                                Individual Artist Listings
                              </span>
                              <span className="non-underline">
                                Our individual listings will be projects that
                                are curated by any artist willing to list Art
                                pieces via the AFEN platform. Those who mint art
                                on our platform can set the terms of royalties
                                made on the secondary market sales. Our market
                                will be open for global customers to buy and
                                relist art pieces purchased on the AFEN
                                platform.
                              </span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span className="underline">
                                Individual African Artist Listings
                              </span>
                              <span className="non-underline">
                                Our individual African listings will be projects
                                that are curated by any verified African
                                artists. Anyone on the platform can purchase and
                                resell art listings, but only verified artists
                                of Africa can mint pieces for initial sale
                              </span>
                            </p>
                          </li>
                        </ol>
                        <p className="text-left mt-5">
                          We will have an identity verification process for
                          African artists to submit to our team. Once verified
                          they will receive a badge showing their status and
                          will become part of our "African Artists Collective"
                          where users can purchase their minted pieces.
                        </p>
                      </td>
                    </tr>
                    {/* 2 row */}
                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Example</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              An African artist completes KYC/AML and is listed
                              as a verified artist account.
                            </p>
                          </li>
                          <li>
                            <p>
                              They then mint their first NFT on the AFEN
                              marketplace and sell it for 500 AFEN tokens.
                            </p>
                          </li>
                          <li>
                            <p>
                              They pay a 10% transaction fee to the network as
                              well as the gas fee associated with the on-chain
                              transfer.
                            </p>
                          </li>
                          <li>
                            <p>
                              They have the right to set a royalty charge on
                              resale of the item.
                            </p>
                          </li>
                          <li>
                            <p>
                              The buyer of this item then decides to re-list the
                              NFT for sale.
                            </p>
                          </li>
                          <li>
                            <p>
                              They will pay the transaction fee to the network
                              as well as the specified royalty by the seller.
                            </p>
                          </li>
                          <li>
                            <p>
                              This will continue throughout the lifecycle of the
                              NFT.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    {/* 3 row */}
                    <tr id="afen-education">
                      <th colSpan={2}>
                        <strong>AFEN & EDUCATION</strong>
                      </th>
                    </tr>

                    {/* 4 row */}
                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Service Infrastructure</strong>
                      </td>
                      <td>
                        <p className="text-left">
                          AFEN Education platform will be an open-source
                          platform where users can create course content for the
                          education of others.
                        </p>
                        <p className="text-left mt-5">
                          We will begin by focusing on topics dealing with
                          blockchain and will be sold to good education and
                          streaming Platform.
                        </p>
                        <p className="text-left mt-5">
                          However, content creators will have the opportunity to
                          create content in any range of subjects they find to
                          be useful.
                        </p>
                        <p className="text-left mt-5">
                          Some interesting course topics could be personal
                          finance, mathematics, tutorials on programming, and
                          many other subject matters.
                        </p>
                        <p className="text-left mt-5">
                          We will incentivize content creators by paying them a
                          very small fraction of an AFEN token for each course
                          completion. Also if a user completes a course on our
                          platform, they will be awarded with digital
                          certificate and AFEN tokens.
                        </p>
                      </td>
                    </tr>

                    {/* 5 row */}
                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Example</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              A content creator uploads a course to our platform
                              called “Personal Finance: Building Your Net
                              Worth”.
                            </p>
                          </li>
                          <li>
                            <p>
                              Our users have access to this course for free.
                            </p>
                          </li>
                          <li>
                            <p>
                              They will be able to rate the course and will have
                              a minimal amount of buffer adds prior to lessons
                              beginning.
                            </p>
                          </li>
                          <li>
                            <p>
                              Once they pass the course and complete it. We will
                              give the content owner credit for a completion.
                            </p>
                          </li>
                        </ul>
                        <p className="text-left mt-5">
                          If a creator wants to charge for their course because
                          it has premier content. We will partner and allow them
                          to do so.
                        </p>
                        <p className="text-left mt-5">
                          We will have the option of giving our users a
                          certificate of completion NFT that will verify their
                          completion transcript on our education platform.
                        </p>
                      </td>
                    </tr>
                    {/* 6 row */}
                    <tr id="real-estate">
                      <th colSpan={2}>
                        <strong>AFEN & REAL ESTATE</strong>
                      </th>
                    </tr>
                    {/* 7 row */}

                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Service Infrastructure</strong>
                      </td>
                      <td className="parent">
                        <p className="text-left mt-5">
                          AFEN real-estate program will allow for the
                          peer-to-peer sale and transfer of home ownership
                          through smart contracts that automate traditional home
                          sales with a broker.
                        </p>
                        <p className="text-left mt-5">
                          By using our platform users will be able to cut the
                          brokerage fee from a typical 10% down to our 1%
                          facilitation fee. On top of this we will create a
                          system for paying taxes partnered with the government
                          for appropriate compliance with government
                          regulations.
                        </p>
                        <p className="text-left mt-5 mb-10">
                          Our goal is to accomplish a legitimized structure for
                          digital certificates of ownership for real-estate
                          which is recognized by the governing bodies we operate
                          in. This system will bring power to the users and give
                          the ability for eased international investment.
                        </p>
                        <strong className="text-left">
                          Smart contract specifically designed to automate the
                          process of selling a real estate.
                        </strong>
                        <ol type="i" className="float-left">
                          <li>
                            <p>Property is listed on a peer-to-peer network.</p>
                          </li>
                          <li>
                            <p>Property is bought by another user.</p>
                          </li>
                          <li>
                            <p>Money is escrowed upon sale.</p>
                          </li>
                          <li>
                            <p>
                              We set standard for how taxes are then delivered
                              to the government.
                            </p>
                          </li>
                          <li>
                            <p>
                              Through this we work through government
                              partnership where they verify real-estate tokens
                              as a certificate of ownership.
                            </p>
                          </li>
                          <li>
                            <p>
                              Confirmation of sale and pre-disposed arguments
                              being met. The ownership is then transferred to
                              the buyer.
                            </p>
                          </li>
                        </ol>
                      </td>
                    </tr>

                    {/* 8 row */}
                    <tr>
                      <td className="text-center vertical-align">
                        <strong>Example</strong>
                      </td>
                      <td className="parent">
                        <ul>
                          <li>
                            <p>
                              Steve lists her house for 100 BNB or AFEN and Jim
                              has decided to buy it.
                            </p>
                          </li>
                          <li>
                            <p>
                              He will accept the contract and his payment will
                              be sent to an escrow wallet specified by the
                              contract.
                            </p>
                          </li>
                          <li>
                            <p>
                              Our contract will then automate the process of
                              selling the house by Nigerian regulations and
                              documents will be verified.
                            </p>
                          </li>
                          <li>
                            <p>
                              After this process the ownership will transfer to
                              Jim and the BNB or AFEN will be sent to Steve.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            {/* 16 */}
            <div
              className={classNames("tab-pane", {
                active: tab === "references",
              })}
              id="references"
              role="tabpanel"
            >
              <div className="sidebardata_contant">
                <h2>References</h2>
                <a
                  href="https://www.grandviewresearch.com/press-release/global-real-estate-market"
                  target="_blank"
                  rel="noreferrer"
                >
                  GrandViewResearch, “Real Estate Market Size Worth $4,263.7
                  Billion By 2025” from
                  https://www.grandviewresearch.com/press-release/global-real-estate-market
                </a>
                <a
                  href="https://www.grandviewresearch.com/press-release/global-real-estate-market"
                  target="_blank"
                  rel="noreferrer"
                >
                  Statista, “Art market worldwide - statistics & facts” from
                  https://www.statista.com/topics/1119/art-market
                </a>
                <a
                  href="https://www.holoniq.com/2030/10-trillion-global-education-market/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Holon IQ, “$10 Trillion Global Education Market in 2030” from
                  https://www.holoniq.com/2030/10-trillion-global-education-market/
                </a>
                <a
                  href="https://www.marketsandmarkets.com/Market-Reports/blockchain-technology-market-90100890.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Markets and Markets, “Blockchain Market by Component (Platform
                  and Services), Provider (Application, Middleware, and
                  Infrastructure), Type (Private, Public, and Hybrid),
                  Organization Size, Application Area (BFSI, Government, IT &
                  Telecom), and Region - Global Forecast to 2025” from
                  https://www.marketsandmarkets.com/Market-Reports/blockchain-technology-market-90100890.html
                </a>
                <a
                  href="https://www.investopedia.com/news/how-blockchain-technology-changing-real-estate/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Investopedia, “How Blockchain Technology is Changing Real
                  Estate” from
                  https://www.investopedia.com/news/how-blockchain-technology-changing-real-estate/
                </a>
                <a
                  href="https://www.juliusbaer.com/es/insights/digital-disruption/three-ways-blockchain-is-reshaping-the-art-world/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  Julius Baer, “Three ways blockchain is reshaping the art
                  world” from
                  https://www.juliusbaer.com/es/insights/digital-disruption/three-ways-blockchain-is-reshaping-the-art-world/
                </a>
                <a
                  href="https://www.gettingsmart.com/2020/02/how-blockchain-could-impact-education-in-2020-and-beyond/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  Getting Smart, “How Blockchain Could Impact Education in 2020
                  and Beyond” from
                  https://www.gettingsmart.com/2020/02/how-blockchain-could-impact-education-in-2020-and-beyond/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhitePaper };
