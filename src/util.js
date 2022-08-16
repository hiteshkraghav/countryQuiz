const reorderElements = (elements) => {
    let orderedElements = Object.entries(elements);
    for (let i = 0; i < orderedElements.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [orderedElements[i], orderedElements[j]] = [
        orderedElements[j],
        orderedElements[i],
      ];
    }
    return Object.fromEntries(orderedElements);
  };

  export const getMapPairs = (elements) => {
    const pairs = Object.entries(elements);
    let pairMap = new Map(pairs);
    pairs.forEach(([key, value]) => pairMap.set(value, key));
    return pairMap;
  };

  export default reorderElements