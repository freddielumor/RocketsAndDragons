// Rockets Selcectors
export const rocketsDataStageSelector = (state: any) => state.rocketsData.stage
export const rocketsDataSelector = (state: any) => state.rocketsData.rockets

// Rocket Item Selcectors
export const rocketItemStageSelector = (state: any) =>
  state.rocketItemData.stage
export const rocketItemSelector = (state: any) => state.rocketItemData.rocket

// Dragons Selcectors
export const dragonsDataStageSelector = (state: any) => state.dragonsData.stage
export const dragonsDataSelector = (state: any) => state.dragonsData.dragons

// Dragon Item Selcectors
export const dragonsItemStageSelector = (state: any) =>
  state.dragonItemData.stage
export const dragonItemSelector = (state: any) => state.dragonItemData.dragon
