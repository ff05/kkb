<template>
    <div class="paper-root card-root paper-elevation1 paper-rounded">
        <router-link
            :to="`/recipe/${currentRecipe.id}`"
            class="button-base-root cardActionArea-root"
        >
            <div
                class="cardMedia-root"
                :style="{
                    'background-image':
                        'url(https://media.graphcms.com/resize=w:300,h:300,fit:crop,align:center/' +
                        currentRecipe.image.handle +
                        ')'
                }"
            ></div>
            <div class="cardContent-root">
                <h2
                    class="typography-root typography-h5 typography-gutterBottom"
                >
                    {{ currentRecipe.title }}
                </h2>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        recipe: Object
    },
    data: function() {
        return {
            currentRecipe: this.recipe
        }
    },
    name: 'RecipeCard'
}
</script>

<style scoped>
.card-root {
    overflow: hidden;
}

.cardContent-root {
    padding: 16px;
}

.cardActionArea-root {
    width: 100%;
    display: block;
    text-align: inherit;
}

.cardMedia-root {
    display: block;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
