import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

UIkit.notification({
    message: 'Look at this message',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});
