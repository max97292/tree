import "../App.css";
import { FaFile, FaFolder, FaFolderOpen } from "react-icons/fa";
import { TreeNode } from "../types/treeTypes";
import { useState } from "react";

export const TreeItem = ({ node }: { node: TreeNode }) => {
  const [expanded, setExpanded] = useState(false);
  const isFolder = node.subitems !== undefined;
  const hasSubfolders = node.subitems?.some((item) => item.subitems) ?? false;
  const isEmptyFolder = isFolder && node.subitems?.length === 0;

  return (
    <div className="item-container">
      <div className="item" onClick={() => isFolder && setExpanded(!expanded)}>
        {isFolder ? (
          expanded ? (
            <FaFolderOpen
              className={
                isEmptyFolder
                  ? "empty-folder"
                  : hasSubfolders
                  ? "expanded"
                  : "subfolders"
              }
            />
          ) : (
            <FaFolder
              className={
                isEmptyFolder
                  ? "empty-folder"
                  : hasSubfolders
                  ? "expanded"
                  : "subfolders"
              }
            />
          )
        ) : (
          <FaFile />
        )}
        <span>{node.name}</span>
      </div>
      {expanded &&
        node.subitems?.map((subitem) => (
          <TreeItem key={subitem.name} node={subitem} />
        ))}
    </div>
  );
};
