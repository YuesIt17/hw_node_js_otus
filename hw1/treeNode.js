const {dataMock} = require('./dataMock');
const {getLastRootChildIndex} = require('../share/utils');

const getTreeNodes = (data, hasParent, tabLevel, treeNodes) => {
  const nodeName = data?.name;
  const nodeItems = data?.items;

  if(nodeName) {
    if(hasParent) {
      tabLevel+=1;
    }

    treeNodes.push({nodeName, tabLevel})

    const hasChildren = nodeItems?.length > 0;
    if(hasChildren) {
      nodeItems.forEach(item => {
        getTreeNodes(item, true, tabLevel, treeNodes);
      });
    }
  }
  
  return treeNodes;
}



const drawTreeNodes = (treeNodes = []) => {
  if(treeNodes?.length === 0) return;

  const verticalLastIndex = getLastRootChildIndex(treeNodes, 'tabLevel');
  
  treeNodes.forEach((item, index) => {
    const {tabLevel, nodeName} = item;
    if(tabLevel > 0) {
      const lastVerticalLine = index ===  verticalLastIndex  ? '╵' : ' '
      const verticalLine = index <  verticalLastIndex  ? '│' : lastVerticalLine;

      const horizontalLine = tabLevel > 1 ? `${' '.repeat(tabLevel)}└──` : '──';

      console.log(`${verticalLine}${horizontalLine}${nodeName}`);
    } else {
      console.log(nodeName);
    }
  })
}

const runDrawTreeNode = () => {
  const treeNodes = getTreeNodes(dataMock, false, 0, []);
  drawTreeNodes(treeNodes);  
}

module.exports = {runDrawTreeNode};