import React from 'react';
import Logo from "../../components/assets/images/headlogo.png"
import card_img from "../../components/assets/images/card_img.png"
import card_img2 from "../../components/assets/images/card_img2.png"
import card_img3 from "../../components/assets/images/card_img3.png"
import card_img4 from "../../components/assets/images/card_img4.png"
import './blog_delete.scss';

export default function BlogDelete() {
    return (
        <div className='delete_blog'>
            <div className="delete_container">
                <div>
                    <div className="logo-holder">
                        <img src={Logo} alt="header logo" />
                    </div>
                    <div className="content_card">
                    <div className="card_delete">
                            <img className='card_image' src={card_img} alt="headimage" srcset="" sizes="(max-width: 600px) 480px, 800px" />
                        </div>
                        <div className="card_delete">
                            <div className="time"> 06 August, 2021 </div>
                            <h5 className="card_title">AFEN TRENDS: 5 Things you should know about the new NFT euphoria.</h5>
                            <p className="message">
                            Est urna id arcu et. Id fringilla quam et in ullamcorper hac eget volutpat quis. Sed sem augue eget morbi accumsan proin. Mauris morbi laoreet tortor a adipiscing. Volutpat diam ut cras amet, eu. Faucibus enim in eu at sem nec morbi. Hac suspendisse sollicitudin enim tristique imperdiet dui quam posuere. Odio in.
                            </p>
                        </div>
                </div>
                <div className="content_card">
                        <div className="card_delete">
                            <div className="time"> 06 August, 2021 </div>
                            <h5 className="card_title">DEVELOPMENT UPDATE #7 : JUNE AND GENERAL UPDATES.</h5>
                            <p className="message">
                            Sit vulputate maecenas neque, nisi, nisl commodo elementum etiam massa. Viverra imperdiet pretium, morbi curabitur ac. Ut dolor ut malesuada in. Aliquam aliquam et accumsan, dui, auctor facilisis nibh. Elementum lectus nisl, eu lectus ac diam in ridiculus netus. Neque, placerat eget ut pharetra. Enim fringilla faucibus.                            </p>
                        </div>
                        <div className="card_delete">
                            <img className='card_image' src={card_img2} alt="headimage" srcset="" sizes="(max-width: 600px) 480px, 800px" />
                        </div>
                </div>
                <div className="content_card">
                    <div className="card_delete">
                            <img className='card_image' src={card_img3} alt="headimage" srcset="" sizes="(max-width: 600px) 480px, 800px" />
                        </div>
                        <div className="card_delete">
                            <div className="time"> 06 August, 2021 </div>
                            <h5 className="card_title">AFEN TRENDS: 5 Things you should know about the new NFT euphoria.</h5>
                            <p className="message">
                            Est urna id arcu et. Id fringilla quam et in ullamcorper hac eget volutpat quis. Sed sem augue eget morbi accumsan proin. Mauris morbi laoreet tortor a adipiscing. Volutpat diam ut cras amet, eu. Faucibus enim in eu at sem nec morbi. Hac suspendisse sollicitudin enim tristique imperdiet dui quam posuere. Odio in.
                            </p>
                        </div>
                </div>
                <div className="content_card">
                        <div className="card_delete">
                            <div className="time"> 06 August, 2021 </div>
                            <h5 className="card_title">AFEN TRENDS: 5 Things you should know about the new NFT euphoria.</h5>
                            <p className="message">
                            Lorem lacus integer fermentum donec. Imperdiet pellentesque tortor commodo vitae. Eget vitae purus est laoreet phasellus. Tristique nullam interdum amet, elementum amet posuere. Nisl viverra elit adipiscing dolor, etiam risus, elementum tortor urna. Amet, massa eleifend velit, volutpat. Nisl mi sem volutpat arcu.                            </p>
                        </div>
                        <div className="card_delete">
                            <img className='card_image' src={card_img4} alt="headimage" srcset="" sizes="(max-width: 600px) 480px, 800px" />
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
