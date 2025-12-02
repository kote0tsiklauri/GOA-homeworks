function inviteMoreWomen(L) {
    let men = 0;
    let women = 0;
  
    for (let person of L) {
      if (person === 1) {
        men++;
      } else if (person === -1) {
        women++;
      }
    }
  
    return men > women;
}