<template>
    <header class="bg-white shadow-md p-5 ">
        <nav class="container-main flex items-center justify-between">
            <ul>
                <li>
                    <router-link to="/" class="text-2xl font-bold text-gray-800">Logo</router-link>
                </li>
            </ul>
            <ul class="flex items-center gap-4">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">Products</router-link>
                </li>
                <li>
                    <router-link to="/about">How it works</router-link>
                </li>
                <li>
                    <router-link to="/about">Blog</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>