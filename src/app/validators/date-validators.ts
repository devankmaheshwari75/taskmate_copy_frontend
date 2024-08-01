import { AbstractControl, ValidatorFn } from '@angular/forms';  

export function dateNotInPast(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null => {  
        const selectedDate = new Date(control.value);  
        const today = new Date();  
        
        today.setHours(0, 0, 0, 0); // Set time to midnight to avoid time differences  

        // Check if selected date is less than today  
        return selectedDate && selectedDate < today ? { 'dateInPast': true } : null;  
    };  
}  