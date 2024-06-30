import { create } from 'zustand';

// Định nghĩa kiểu dữ liệu cho store
interface ForgeViewState {
    viewerLoc: { [key: string]: any }; // Định nghĩa kiểu cho viewerLoc với các khóa động
    setViewerLoc: (id: string, doc: any) => void;
}

// Tạo store với Zustand
const useForgeStore = create<ForgeViewState>((set) => ({
    viewerLoc: {}, // Khởi tạo giá trị mặc định
    setViewerLoc: (id, doc) => set((state) => ({
        viewerLoc: {
            ...state.viewerLoc,
            [id]: doc
        }
    }))
}));

export default useForgeStore;
