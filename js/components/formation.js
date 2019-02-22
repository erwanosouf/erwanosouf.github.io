Vue.component('formation', {
    template : `<div class="formation">
        <span>{{formation.name }}</span>
        <div>
            <slot></slot>
        </div>
    </div>`,
    props : [ 'formation' ]
});