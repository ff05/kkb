<template>
    <div>
        <h1 :class="{ [$style.red]: isRed }">Voeg een recept toe</h1>
        <form @submit.prevent="formSubmit">
            <p class="form-section">
                <label for="name">Naam:</label>
                <input name="name" type="text" required />
            </p>
            <p class="form-section">
                <label for="instructions">Bereidingswijze:</label>
                <textarea
                    id="story"
                    name="instructions"
                    rows="5"
                    cols="33"
                    required
                ></textarea>
            </p>
            <p class="form-section">
                <label for="image">Afbeelding:</label>
                <input name="image" type="file" required />
            </p>
            <p class="form-section">
                <button
                    class="button-base-root button-root button-contained button-containedPrimary"
                    type="submit"
                >
                    Voeg toe
                </button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        isRed: true
    }),
    methods: {
        formSubmit: () => {
            console.log('ha')
        }
    }
}
</script>

<style module>
.red {
    color: red;
}
</style>
