import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn =
    trigger('fadeIn', [
        // state('*', style({
        //     opacity: 1
        // })),
        transition(':enter', [
            style({
                opacity: 0,
                // transform: 'rotate(150deg)'
            }),
            animate('1s linear',
            style({
                opacity: 1,
                // transform: 'rotate(0deg)'
            }))
        ])
        // transition(':leave', [
        //     animate('1s linear', style({
        //         opacity: 0
        //     }))
        // ])
    ]);