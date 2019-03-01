Vue.component('navbar-item', {
    template : `
    <li class="pure-menu-item"><a :href="item.href" class="navigation-link pure-menu-link"><i class="fa" :class="item.icon"></i>{{ item.label }}</a></li>
    `,
    props : ['item']
})

Vue.component('navbar', {
    template : `<nav id="menu">
        <div class="pure-menu">
            <a class="navigation-link pure-menu-heading" :href="nav.heading.href">{{ nav.heading.label  }}</a>
            <ul class="pure-menu-list">
                <navbar-item v-for="item in nav.items" :item="item" :key="item.label"/>
            </ul>
        </div>
    </nav>`,
    props : ['nav']
});

