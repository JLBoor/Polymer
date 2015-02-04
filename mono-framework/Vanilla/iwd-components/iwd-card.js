var IWDCardProto = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function() {

            var link = document.querySelector('link[rel="import"]');
            var template = link.import.querySelector('template#iwdCardTemplate');
            var clone = document.importNode(template.content, true);
            this.createShadowRoot().appendChild(clone);
        }
    }
});
document.registerElement('iwd-card', {prototype: IWDCardProto});