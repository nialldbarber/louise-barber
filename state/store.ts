import create from 'zustand';

type State = {
  isHovered: boolean;
  isMenuOpen: boolean;
  selectedImageId: string;
  showAllImages: boolean;
  showHoveredCursor: () => void;
  hideHoveredCursor: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  setSelectedId: (id: string) => void;
  setShowAllImages: (cond: boolean) => void;
};

const useStore = create<State>((set) => ({
  // Hovered cursor
  isHovered: false,
  showHoveredCursor: () => set(() => ({isHovered: true})),
  hideHoveredCursor: () => set(() => ({isHovered: false})),
  // Hamburger menu
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({isMenuOpen: !state.isMenuOpen})),
  closeMenu: () => set(() => ({isMenuOpen: false})),
  // Selected image
  selectedImageId: '',
  showAllImages: true,
  setSelectedId: (id) => set(() => ({selectedImageId: id})),
  setShowAllImages: (cond) => set(() => ({showAllImages: cond})),
}));

export default useStore;
