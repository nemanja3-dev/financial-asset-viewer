import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import FinancialAssets from "./components/FinancialAssets/FinancialAssets";
import FinancialAssetsItem from "./components/FinancialAssetsItem/FinancialAssetItem";
import axios from "axios";
import { Asset, AssetClass, MappedAsset } from "./types";

const App: React.FC = () => {
  const [assets, setAssets] = useState<MappedAsset[] | null>(null);

  const url =
    "https://gist.githubusercontent.com/jesperborgstrup/a57aff4d66392b6c89473c57ef3eadf4/raw/a95a48ad51d90dbbc88f74155deda9fcda76f992/assets.json";

  useEffect(() => {
    axios
      .get<Asset[]>(url)
      .then((response) => {
        const mappedAssets: MappedAsset[] = response.data.map((asset) => {
          if (asset.assetClass === AssetClass.Stock) {
            const mappedAsset: MappedAsset = {
              ...asset,
              weight: 0,
            };
            return mappedAsset;
          }
          if (asset.assetClass === AssetClass.Etf) {
            const mappedAsset: MappedAsset = {
              ...asset,
              weight: 1,
            };
            return mappedAsset;
          }

          const mappedAsset: MappedAsset = {
            ...asset,
            weight: 2,
          };
          return mappedAsset;
        });
        mappedAssets.sort((a, b) => a.weight - b.weight);
        setAssets(mappedAssets);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<FinancialAssets assets={assets} />} />
      <Route
        path="/financial-asset/:id"
        element={<FinancialAssetsItem assets={assets} />}
      />
    </Routes>
  );
};

export default App;
