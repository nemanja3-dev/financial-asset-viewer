import { MappedAsset } from "../../types";
import "../FinancialAssets/FinancialAssets.css";
import { useParams } from "react-router-dom";
import "./FinancialAssetItem.css";

const FinancialAssetsItem = (props: { assets: MappedAsset[] | null }) => {
  const data = props.assets;
  const { id } = useParams();

  const asset = data?.find((item) => item.id.toString() === id);

  if (!asset) {
    return <div>Asset not found</div>;
  }

  return (
    <div className="container">
      <h2>Financial Asset Details</h2>
      <div className="card">
        <img src={asset.logoUrl} alt={asset.name} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{asset.name}</h3>
          <p className="card-description">{asset.shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialAssetsItem;
