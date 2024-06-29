import { create } from 'zustand'
export type IViewerLoc={
     [key: string]: any
   
}
type IForgeStore={
    viewerLoc:IViewerLoc,
    setViewerLoc:(value:IViewerLoc)=>void
}                                                                                              
const useForgeStore = create<IForgeStore>()((set,get) => ({
    viewerLoc: {},
  setViewerLoc:(value:IViewerLoc)=>{
    set((state:IForgeStore)=>({
        ...state,
        viewerLoc:value
    }))
  }

}))
export default useForgeStore