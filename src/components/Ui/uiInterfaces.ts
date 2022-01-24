export interface ToggleLoadingScreen {
  isShow: boolean;
  type?: 'SaveDraft' | 'SubmitForm' | 'Common'; // Will have more
}

export interface UIState {
  toggleLoadingScreen: ToggleLoadingScreen;
}
