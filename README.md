NFTVERSE provides a gamified way to create and own NFTs. The users compete and/or collaborate in a decentralized and permissionless manner to create pixelated art where each pixel represents a fractional nft of the overall artwork.  
Users bid on the pixels to gain ownership, allowing them to color that pixel. The bid amount goes to the last owner of that pixel. Thus in this way, each participant earns a profit from the sale and/or gets to own the fractional nft, which is a benefit of our Play-to-Earn (P2E) model.  
Usually, the NFTs obtained from the P2E games start losing their value once the game ends. To overcome this issue, We came up with a novel approach of having a dynamic state in our NFTs which opens up the possibility of a secondary market.  

We have developed this application using ink! smart contract, polkadot.js library and React.

## Description

NFTVERSE provides an innovative way for users to collaboratively create digital artwork and own pieces of it as NFTs. The artwork is created on a 32x32 grid (aka canvas) and the whole process is divided into three stages:

### Creation phase

A user can create a new canvas by paying a small fee which goes to the developers. The creator needs to specify the following parameters:

* _Title:_ It is the heading of the canvas

* _Description:_ A brief information about this canvas

* _Base Price:_ It is the minimum price of each pixel the first bidder needs to pay to gain its ownership.

* _Premium Percentage:_ It is the percentage surplus of the last bid price of a given pixel, which a user needs to pay to capture it from its current owner.

* _Start Time:_ The start time of the bidding phase

* _End Time:_ The end time of the bidding phase

* _Is Dynamic:_ If enabled, the pixel owners can change the pixel colors even after the bidding phase. 

> All the information can be updated prior to the start of the bidding phase

### Bidding phase

During this period, Users bid on the pixels to gain ownership, allowing them to color that pixel. If a pixel doesn’t have any current owner, a user can pay the base price (or more) to become the first owner of that pixel otherwise they must bid at least the sum of the current pixel price plus the premium percentage amount to become the new owner of that pixel. A commission fee is deducted from the bid amount and the rest is transferred to the previous owner (or to the creator in case it was the first bid of that pixel). In this way, Every time a bid is placed successfully, the previous owner/creator of that pixel earns a profit.

This method of bidding on the pixels (NFT) helps with the price discovery of the artwork.

### Post phase

The individual pixels collectively form an NFT artwork and therefore pixel owners have fractional ownership of the art. If the canvas creator had enabled dynamic NFT, then owners can still change the color of the pixels they own even after the bidding phase. Having such a feature enables the NFTs to appreciate/retain their value in the secondary market since the NFTs can be purchased to modify the artwork and it evolves over time.

## Economic Model

* Canvas creators pays creation fees which prevents spam and also incentivises developers for the work.

* When a cell is purchased for the first time, the bid amount goes to the creator.

* When a user captures a cell which is owned by another user, The bid value (contains atleast a pre-specified percentage premium over last cell price) goes to the last owner. In this way, last owner profits from the premium.

* Each successful capture cell is charged a commission fee which goes to the developers.

Summary:

* Developers earn when users interact with the dapp in the form of canvas creation fees and capture cell commission charges.

* Canvas creator earns when users buys their canvas pixels.

* Intermediate owner earns profit from the premium.

* Last owner gets ownership of the NFT

This kind of auction helps with the price discovery of the NFTs.

## Novelty/Originality
  
* introduces the idea of collaborative art - Users can create digital artwork together in a decentralised and permissionless manner.

* uses the novel idea of fractionalizing the digital asset (artwork) into multiple NFTs.

* integrates the idea of Dynamic NFT, where the state of digital assets represented by the NFT can be changed even after minting.





## Tech Stack

* Ink! smart contract
* PolkadotJS library
* React
* MUI (Material UI)


