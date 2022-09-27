<template>
    <div class="entry-container mb-3 pointer p-2"
     @click="$router.push({name:'entry', params:{id: 10 }})"
    >
        <!-- Título -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description">
            Elit id pariatur labore. Aliquip esse laborum incididunt ad esse duis Lorem pariatur Lorem deserunt velit culpa sint. Nulla sint esse incididunt nulla velit velit nulla officia excepteur. Quis ullamco sit consectetur consequat exercitation elit ad elit sit dolor quis dolor elit labore anim.
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid;
    transition: 0.2s all ease-in;
    &:hover {
        background-color: lighten($color: grey, $amount:45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>