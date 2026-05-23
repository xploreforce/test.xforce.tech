<script setup>
import HeroSection from "@components/HeroSection.vue";
import FeatureGridSection from "@components/FeatureGridSection.vue";
import StepsSection from "@components/StepsSection.vue";
import AccordionSection from "@components/AccordionSection.vue";

const emit = defineEmits(["download"]);
</script>

<template>
	<HeroSection @download="emit('download')" />
	<FeatureGridSection @download="emit('download')" />
	<StepsSection />
	<AccordionSection />
</template>
