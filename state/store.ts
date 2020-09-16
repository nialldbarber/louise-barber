import create from 'zustand';

type State = {
  isHovered: boolean;
  isMenuOpen: boolean;
  selectedImageId: null;
  showHoveredCursor: () => void;
  hideHoveredCursor: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  showSelectedId: () => void;
};

const useStore = create((set, get) => ({
  // Hovered cursor
  isHovered: false,
  showHoveredCursor: () => set(() => ({isHovered: true})),
  hideHoveredCursor: () => set(() => ({isHovered: false})),
  // Hamburger menu
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({isMenuOpen: !state.isMenuOpen})),
  closeMenu: () => set(() => ({isMenuOpen: false})),
  // Selected image
  selectedImageId: null,
  showSelectedId: (id: string) => set(() => ({selectedImageId: id})),
}));

export default useStore;
