Vue.component('skill', {
    template : `<div class="skill" :class="getClass()">
        <span class="skill-name" v-if="skill.name">{{ skill.name }}</span>
        <span class="skill-level" v-if="skill.level"> : {{ skill.level }}</span>
        <div v-if="!isLeaf()" class="subskills">
            <skill v-for="subskill in skill.skills" :level="level + 1" :skill="subskill" :key="subskill.name" />
        </div>
    </div>`,
    props : {
        skill : Object,
        level : {
            type: Number,
            default: 0
        }
    },
    methods : {
        isLeaf : function() {
            return !this.skill.skills || this.skill.skills.length == 0;
        },
        getClass : function() {
            var cl = {};
            cl['skill-level-' + this.level] = true;
            return cl;
        }
    }
});