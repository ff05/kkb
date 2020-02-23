<template>
    <main>
        <div class="inner">
            <section v-if="recipes">
                <ul class="flex-container">
                    <li
                        v-for="recipe in recipes"
                        :key="recipe.id"
                        class="recipe"
                    >
                        <recipe-card :recipe="recipe"></recipe-card>
                    </li>
                    <li
                        v-for="recipe in recipes"
                        :key="recipe.id"
                        class="recipe"
                    >
                        <recipe-card :recipe="recipe"></recipe-card>
                    </li>
                    <li
                        v-for="recipe in recipes"
                        :key="recipe.id"
                        class="recipe"
                    >
                        <recipe-card :recipe="recipe"></recipe-card>
                    </li>
                </ul>
            </section>
            <h2 v-else>Loading...</h2>
        </div>
    </main>
</template>

<script>
import gql from 'graphql-tag'
import RecipeCard from '../components/RecipeCard.vue'

const RECIPES_PER_PAGE = 12
const recipes = gql`
    query {
        recipes {
            status
            updatedAt
            createdAt
            id
            title
            image {
                status
                updatedAt
                createdAt
                id
                handle
                fileName
                height
                width
                size
                mimeType
            }
            similarRecipes {
                id
            }
            recipeIngredients {
                id
            }
            instructions
        }
    }
`
export default {
    name: 'HomePage',
    components: { RecipeCard },
    data: () => ({
        loading: 0,
        recipes: null
    }),
    apollo: {
        $loadingKey: 'loading',
        recipes: {
            query: recipes
        }
    },
    methods: {
        loadMoreRecipes() {
            this.$apollo.queries.recipes.fetchMore({
                variables: {
                    skip: this.recipes.length
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return previousResult
                    }
                    return Object.assign({}, previousResult, {
                        recipes: [
                            ...previousResult.recipes,
                            ...fetchMoreResult.recipes
                        ]
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles.scss';
main {
    padding-top: 40px;
}
.recipe {
    @media (min-width: $screen-size-mobile) {
        width: 50%;
    }
    @media (min-width: $screen-size-tablet) {
        width: 33.333333%;
    }
    padding: 10px;
    list-style-type: none;
}
</style>
