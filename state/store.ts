import create from 'zustand';

type State = {
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  closeMenu?: () => void;
};

const useStore = create<State>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({isMenuOpen: !state.isMenuOpen})),
  closeMenu: () => set(() => ({isMenuOpen: false})),
}));

export default useStore;
