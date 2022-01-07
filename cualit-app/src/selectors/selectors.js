import { createSelector } from 'reselect';

const tutorialsState = state => state.tutorials;
const toastState = state => state.toast;

export const tutorialsLoading = createSelector(
    tutorialsState,
    tutorials => tutorials?.loading || false
)

export const getTutorials = createSelector(
    tutorialsState,
    tutorials => tutorials?.tutorials || []
)

export const getShowToast = createSelector(
    toastState,
    toast => toast || null
)