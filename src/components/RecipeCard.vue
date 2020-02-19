<template>
    <router-link :to="`/recipe/${currentRecipe.id}`" class="link">
        <div class="placeholder">
            <img
                :alt="currentRecipe.title"
                :src="
                    `https://media.graphcms.com/resize=w:100,h:100,fit:crop/${currentRecipe.image.handle}`
                "
            />
        </div>
        <h3>{{ currentRecipe.title }}</h3>
    </router-link>
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

<style></style>
