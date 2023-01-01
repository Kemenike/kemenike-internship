import React from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';

const NftCard = ({ nftItem }) => {
    return (
        <div
        className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        style={{ display: "block", backgroundSize: "cover" }}
      >
        <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to={`/author/${nftItem.authorId}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            >
              <img className="lazy" src={nftItem.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          {nftItem.expiryDate &&
            <div className="de_countdown">
              <Timer
                endTimeInput={nftItem.expiryDate}
              />
            </div>
          }
          <div className="nft__item_wrap">s
            <Link to={`/item-details/${nftItem.nftId}`}>
              <img src={nftItem.nftImage} className="lazy nft__item_preview" alt="" />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to={`/item-details/${nftItem.nftId}`}>
              <h4>{nftItem.title}</h4>
            </Link>
            <div className="nft__item_price">{nftItem.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{nftItem.likes}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NftCard;
