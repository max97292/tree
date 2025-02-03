import "./App.css";
import { useEffect, useState } from "react";
import { TreeNode } from "./types/treeTypes";
import { TreeItem } from "./components/TreeItem";
import { fetchData } from "./utils/treeUtils";

function App() {
  const [data, setData] = useState<TreeNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <TreeItem key={item.name} node={item} />)
      )}
    </div>
  );
}

export default App;
