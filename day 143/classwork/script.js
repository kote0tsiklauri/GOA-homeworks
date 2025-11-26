function threeWishes(parcel, wish1, wish2, wish3) {
    const wishes = [wish1, wish2, wish3];
  
    for (let w = 0; w < wishes.length; w++) {
      const wish = wishes[w];
      const parts = wish.split(" ");
      if (parts.length < 4) continue;
  
      const num = +parts[2];
      const item = parts.slice(3).join(" ");
  
      if (item.indexOf("wish") === 0) {
        return [];
      }
  
      const singular = item.endsWith("s") ? item.slice(0, -1) : item;
  
      let realItem = singular;
      for (let i = 0; i < parcel.length; i++) {
        if (parcel[i] === singular || parcel[i] === singular + "s") {
          realItem = parcel[i];
          break;
        }
      }
  
      const newItems = [];
      for (let j = 0; j < num; j++) {
        newItems.push(realItem);
      }
  
      let lastIndex = -1;
      for (let k = 0; k < parcel.length; k++) {
        if (parcel[k] === realItem) {
          lastIndex = k;
        }
      }
  
      const newParcel = [];
      if (lastIndex !== -1) {
        for (let a = 0; a <= lastIndex; a++) {
          newParcel.push(parcel[a]);
        }
        for (let b = 0; b < newItems.length; b++) {
          newParcel.push(newItems[b]);
        }
        for (let c = lastIndex + 1; c < parcel.length; c++) {
          newParcel.push(parcel[c]);
        }
        parcel = newParcel;
      } else {
        for (let d = 0; d < newItems.length; d++) {
          parcel.push(newItems[d]);
        }
      }
    }
  
    return parcel;
}