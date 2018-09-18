// ==UserScript==
// @name         Do not notify
// @namespace    https://github.com/jenerous/confluence_no_notify_watchers
// @version      0.1
// @description  Automaticly uncheck the notify watchers checkbox to avoid spam mails when editing a confluence page
// @author       Jens Hertfelder
// @include      https://confluence*
// @grant        none
// ==/UserScript==

function disableNotification() {
    if(document.location.pathname === "/pages/resumedraft.action" ||
      document.location.pathname === "/pages/editpage.action") {
        document.getElementById('notifyWatchers').checked = false;
        document.getElementById('notifyWatchers').value = false;
    } // else {
    //    console.log("'" + document.location.pathname + "'");
    //    console.log("no edit");
    //}
}

(function() {
    setTimeout(disableNotification, 5000);
})();