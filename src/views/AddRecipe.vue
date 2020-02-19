<template>
    <div>
        <h1>Voeg een recept toe</h1>
        <form @submit.prevent="formSubmit">
            <p class="form-section">
                <label for="name">Naam:</label>
                <input name="name" type="text" />
            </p>
            <p class="form-section">
                <label for="instructions">Bereidingswijze:</label>
                <textarea
                    id="story"
                    name="instructions"
                    rows="5"
                    cols="33"
                ></textarea>
            </p>
            <p class="form-section">
                <label for="image">Afbeelding:</label>
                <input name="image" type="file" />
            </p>
            <p class="form-section">
                <button type="submit">
                    Voeg toe
                </button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        formSubmit: () => {
            console.log('ha')
        }
    }
}
</script>

<style></style>
