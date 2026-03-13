<template>
  <div>
    <div class="w-full h-130 rounded-xl overflow-hidden">
      <iframe
        class="w-full h-full border-0"
        loading="lazy"
        src="https://maps.google.com/maps?q=16.4460894,120.5904533&z=17&output=embed"
      />
    </div>

    <div class="mt-5 flex justify-center">
      <a
        href="https://www.google.com/maps/place/Agape+Reaching+People+Ministry+Inc./@16.4460945,120.5878784,17z/data=!3m1!4b1!4m6!3m5!1s0x3391a3f87ceff613:0xe518f053221fcb34!8m2!3d16.4460894!4d120.5904533!16s%2Fg%2F11sh3fxjpc?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <Button>
          <UIcon name="i-lucide-map" />
          View on Google Maps
        </Button>
      </a>
    </div>
  </div>
</template>
