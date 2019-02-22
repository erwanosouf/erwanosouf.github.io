Vue.component('skill', {
    template : `<div :class="{ skill : true, root: root }">
        <span class="skill-name" v-if="skill.name">{{ skill.name }}</span>
        <span class="skill-level" v-if="skill.level"> : {{ skill.level }}</span>
        <div v-if="!isLeaf()" class="subskills">
            <skill v-for="subskill in skill.skills" :root="false" :skill="subskill" :key="subskill.name">
        </div>
    </div>`,
    props : {
        skill : Array,
        root : {
            type: Boolean,
            default: true
        }
    },
    methods : {
        isLeaf : function() {
            return !this.skill.skills || this.skill.skills.length == 0;
        }
    }
});