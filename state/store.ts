import create from 'zustand';

type State = {
  isHovered: boolean;
  isMenuOpen: boolean;
  selectedImageId: string;
  showHoveredCursor: () => void;
  hideHoveredCursor: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  showSelectedId: (id: string) => void;
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
  showSelectedId: (id: string) => set(() => ({selectedImageId: id})),
}));

export default useStore;
