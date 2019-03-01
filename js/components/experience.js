Vue.component('experience', {
    template : `<div class="experience">
        <span>{{experience.title }}</span>
        <span>{{experience.company.name }}, {{experience.company.location }}</span>
        <p v-if="experience.description">{{experience.description }}</p>
        <ul>
            <li v-for="project in experience.projects">
                <h5>{{ project.label }}</h5>
                <span v-if="project.description">{{project.description}}</span> 
            </li>
        </ul>
        <div>
            <slot></slot>
        </div>
    </div>`,
    props : [ 'experience' ]
});