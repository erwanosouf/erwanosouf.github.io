Vue.component('contact', {
    template : `<address class="contact">
        <span>{{ contact.name }}</span>
        <a class="contact-link" :href="contact.link"><i :class="contact.icon"></i>{{ contact.value }}</a>
    </address>`,
    props : ['contact']
});