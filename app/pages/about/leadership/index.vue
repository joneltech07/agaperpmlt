<script setup lang="ts">
import Banner from '~/components/Banner.vue';
</script>

<template>
    <div>
        <Banner title="LEADERSHIP" />

        <div class="p-7 mt-10">
            <h2 class="text-2xl font-bold mb-4 text-center">Pastors</h2>
            <div class="flex flex-wrap gap-8 justify-center">
                <Image src="/images/james.jpg" alt="Pastor James" name="James" position="Senior Pastor" />
                <Image src="/images/jerome.jpg" alt="Pastor Jerome" name="Jerome" position="Bishop" />
                <Image src="/images/maxson.jpg" alt="Maxson" name="Maxson" position="Prophet" />
                <Image src="/images/gary.png" alt="Gary" name="Gary" position="Agape Limitless Pastor" />
                <Image src="/images/jonel.jpg" alt="Jonel" name="Jonel" position="Assistant" />
            </div>
        </div>
    </div>
</template>