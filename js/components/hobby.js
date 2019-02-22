Vue.component('hobby', {
    template : `<div class="hobby">
        <span>{{ hobby.name }}</span>
        <div>
            <slot></slot>
        </div>
    </div>`,
    props : [ 'hobby' ]
});