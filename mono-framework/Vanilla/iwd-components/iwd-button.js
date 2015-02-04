var IWDButtonProto = Object.create(HTMLElement.prototype);
IWDButtonProto.createdCallback = function() {
    // Use the lbl attribute as inner html or default to IWD Button
    this.innerHTML = this.getAttribute('lbl') || 'IWD Button';

    this.addEventListener('click', function(e) {
        window.open('http://www.intelliware.ca', '_blank').focus();
    });
};

document.registerElement('iwd-button', {prototype: IWDButtonProto, extends: 'button'});
