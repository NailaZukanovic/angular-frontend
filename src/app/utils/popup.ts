import { MatSnackBarConfig } from "@angular/material/snack-bar";

export const SNACKBAR_CLOSE_BUTTON = 'Close';
export const SNACKBAR_SUCCESS_TEXT = 'Success! Operation finished.';
export const SNACKBAR_ERROR_TEXT = 'An error occured! Try again.';

export const SNACKBAR_SUCCESS_CONFIG: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: 'snackbar-success',
    duration: 2000
};

export const SNACKBAR_ERROR_CONFIG: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: 'snackbar-error',
    duration: 2000
};
