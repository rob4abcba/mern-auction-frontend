const AuctionItem = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">ItemName</div>
        <div className="col-sm-6">ItemStartingBidPrice</div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img className="w-100" src="/imgs/1.jpg" alt="auction item" />
        </div>
        <div className="col-sm-6">ItemDescription</div>
      </div>
    </>
  );
};

export default AuctionItem;
