import chronograph from '../assets/images/chronograph.png';
import quartz from '../assets/images/quartz.png';
import weekender from '../assets/images/weekender.png';

// Returns an image from a title.
export const getImage = (title) => {
    switch(title){
        case "Chronograph":
            return chronograph;
        case "Quartz":
            return quartz;
        case "Weekender":
            return weekender;
        default:
            return;
    }
}