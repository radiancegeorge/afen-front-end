import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const PoweredBySection = (props: any) => {
  const redirect = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <section className="powerd_by_afen">
      <div className="container-fluid">
        <div className="powerd_heading">
          <h3>AFEN is powered by the $AFEN token.</h3>
          <h4>Purchase $AFEN token from any of these outlets</h4>
        </div>
        <div className="powerd_tags">
          <ul>
            <li>
              <Link
                to="#"
                onClick={() => {
                  redirect(
                    "https://www.coingecko.com/en/coins/afen-blockchain"
                  );
                }}>
                CoinGecko
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  redirect(
                    "https://www.bitmart.com/trade/en?symbol=AFEN_USDT&layout=basic"
                  );
                }}>
                Bitmart
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  redirect(
                    "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd0840d5f67206f865aee7cce075bd4484cd3cc81"
                  );
                }}>
                PancakeSwap
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  redirect(
                    "https://coinmarketcap.com/currencies/afen-blockchain/"
                  );
                }}>
                CoinMarketCap
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  redirect("https://www.mexc.com/exchange/AFEN_USDT");
                }}>
                Mexc
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={() => {
                  redirect("https://afenmarketplace.com/staking");
                }}>
                Stake
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { PoweredBySection };
