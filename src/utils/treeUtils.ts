import { TreeNode } from "../types/treeTypes";

export const fetchData = (): Promise<TreeNode[]> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            name: "DiseaseAtlas",
            subitems: [
              {
                name: "components",
                subitems: [
                  { name: "DiseaseAtlasAssociatedPopup.js" },
                  { name: "DiseaseAtlasTreeFolder.js" },
                ],
              },
              {
                name: "store",
                subitems: [
                  { name: "reducer.js" },
                  { name: "saga.js" },
                  { name: "selectors.js" },
                ],
              },
              { name: "DiseaseAtlasPage.js" },
              { name: "DiseaseAtlasPage.css" },
              { name: "Utils.js" },
            ],
          },
          { name: "FindRelated", subitems: [] },
        ]),
      1000
    )
  );
