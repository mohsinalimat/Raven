$(document).on('app_ready', function () {

    let main_section = $(document).find('.main-section');

    let chat_element = $(document.createElement('div'));
    chat_element.addClass('raven-chat');

    main_section.append(chat_element);

    frappe.require("raven_chat.bundle.jsx").then(() => {
        frappe.raven_chat = new frappe.ui.RavenChat({
            wrapper: chat_element,
        });
    });

});