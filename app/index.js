// jQuery and UIkit core
import UIkit from 'uikit/src/js/uikit';
import $ from 'jquery';

// Additional UIkit components (more available then these two)
import Notification from 'uikit/src/js/components/notification'
import Tooltip from 'uikit/src/js/components/tooltip';


// Additional components need to be registered and initialized with UIkit
UIkit.use(Tooltip);
UIkit.use(Notification);

// Some components will hook onto existing markup (e.g. tooltip), others can be called:
UIkit.notification({
    message: 'Look at this message',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});
