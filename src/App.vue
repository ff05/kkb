<template>
    <div id="app">
        <div id="nav" class="appBar-root appBar-colorPrimary paper-elevation4">
            <div class="toolbar-root toolbar-regular toolbar-gutters">
                <router-link to="/" class="typography-root typography-h6"
                    >Home</router-link
                >
                <span class="link-separator typography-h6">|</span>
                <router-link to="/add" class="typography-root typography-h6"
                    >Recept toevoegen</router-link
                >
            </div>
        </div>
        <router-view />
    </div>
</template>

<style></style>
