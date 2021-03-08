<template>
  <v-breadcrumbs :items="items">
    <v-breadcrumbs-item
        slot="item"
        slot-scope="{ item }"
        exact
        v-if="item.to"
        :to="item.to">
        {{ item.text }}
    </v-breadcrumbs-item>
    <v-breadcrumbs-item
        style="color:#9C9C9C"
        v-else>
        {{ item.text }}
    </v-breadcrumbs-item>
</v-breadcrumbs>
</template>
<script>
export default {
    data() {
        return {
            items: [],
        }
    },
    watch: { '$route' () { this.updateList() } },
    created() {
        this.updateList()
    },
    methods : {
        updateList () { 
            this.items = this.$route.meta.breadcrumbs 
            for (let i = 0; i < this.items.length; i++) {
                let link = this.items[i].to
                if (link !== undefined) {
                    if (link.includes(':id')) {
                        this.items[i].to = link.replace(":id", this.$route.params.id)
                    }
                } 
            }
        }
    }
}
</script>