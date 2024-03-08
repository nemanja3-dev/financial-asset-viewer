import { Link } from "react-router-dom";
import { AssetClass, MappedAsset } from "../../types";
import "./FinancialAssets.css";
import { useState } from "react";

const FinancialAssets = (props: { assets: MappedAsset[] | null }) => {
  const [search, setSearch] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div className="container">
      <div className="filer-container">
        <input
          className="search-input"
          placeholder="Search asset by name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter">
          <label htmlFor="filter">Filter by:</label>
          <select
            id="filter"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="">All</option>
            <option value={AssetClass.Adr}>Adr</option>
            <option value={AssetClass.Etf}>Etf</option>
            <option value={AssetClass.Stock}>Stock</option>
          </select>
        </div>
      </div>

      <div className="heading">
        <p>#</p>
        <p>Name</p>
        <p>Asset Class</p>
        <p>Currency</p>
        <p className="mobile-hide">Closed Price</p>
      </div>

      {props?.assets
        ?.filter((item) => {
          const nameMatch =
            search === "" ||
            item.name.toLowerCase().includes(search.toLowerCase());
          const filterMatch =
            filterValue === "" || item.assetClass === filterValue;

          return nameMatch && filterMatch;
        })
        .map((asset) => {
          return (
            <Link to={`/financial-asset/${asset.id}`} key={asset.id}>
              <div className="heading">
                <div className="img-symbol">
                  <img src={asset.logoUrl} alt="" />
                </div>
                <p>{asset.name}</p>
                <p className="mobile-hide">{asset.assetClass}</p>
                <p>{asset.currency}</p>
                <p>{asset.lastClosePrice}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default FinancialAssets;
