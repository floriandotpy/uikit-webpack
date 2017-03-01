// jQuery and UIkit core
import UIkit from 'uikit';
import $ from 'jquery';

console.log(UIkit);

window.UIkit = UIkit;


// Some components will hook onto existing markup (e.g. tooltip), others can be called:
UIkit.notification({
    message: 'Look at this message',
    status: 'primary',
    pos: 'top-right',
    timeout: 5000
});
