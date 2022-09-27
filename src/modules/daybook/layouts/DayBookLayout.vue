<template>
    <Navbar />
    <div class="d-flex">
        <div class="col-4">
            <entry_list></entry_list>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent  } from "vue"

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar_component')),
        entry_list: defineAsyncComponent(() => import('../components/entry_list'))
    }
}
</script>