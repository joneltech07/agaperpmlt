<template>
  <section>
    <Banner title="LEADERSHIP" background-image="/images/leadership.jpg" />

    <section class="p-7 md:px-20 md:py-10">
      <LeadersSection title="Pastors" :images="pastors" styleProp="flex" />

      <UTabs
        class="mt-10"
        :items="leadersTab"
        :ui="{
          list: 'w-full md:w-150', // Width of the whole tab container (e.g., w-full, w-auto)
          trigger: 'w-10 md:w-50 text-center' // Width of each tab button (e.g., w-1/2, w-20, min-w-fit)
        }"
      >
        <template #men>
          <LeadersSection
            title=""
            :images="primaryMen.sort((a, b) => a.name.localeCompare(b.name))"
            style-prop="flex"
          />
        </template>
        <template #women>
          <LeadersSection
            title=""
            :images="primaryWomen.sort((a, b) => a.name.localeCompare(b.name))"
            style-prop="flex"
          />
        </template>
        <template #staffs>
          <LeadersSection
            title=""
            :images="staffs.sort((a, b) => a.name.localeCompare(b.name))"
            style-prop="flex"
          />
        </template>
      </UTabs>

      <!-- <LeadersSection title="Staff" :images="staffs" style-prop="flex" /> -->
    </section>
  </section>
</template>

<script setup lang="ts">
const leadersTab = [
  {
    label: 'Men',
    // icon: 'i-lucide-male',
    slot: 'men'
  },
  {
    label: 'Women',
    // icon: 'i-lucide-female',
    slot: 'women'
  },
  {
    label: 'Staffs',
    // icon: 'i-lucide-users',
    slot: 'staffs'
  }
]

const pastors = [
  {
    name: 'Juanito Ricardo Jr.',
    position: 'Senior Pastor',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Rodilene Binay-an Ricardo',
    position: 'Pastor',
    imgSrc: '/images/leaders/rodilene_ricardo.jpg'
  }
]

const primaryMen = [
  {
    name: 'Garry D. Lingad',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/gary_lingad.jpg'
  },
  {
    name: 'John-Mar I.  Diola',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Romnick C. Sacla',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Glen Mar O. Emilio',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/glenmar_emilio.jpg'
  },
  {
    name: 'Angelito James S. Bustos',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/james_bustos.jpeg'
  },
  {
    name: 'Maxson P. Battateng',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Brix T. Gomintong',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/brix_gomintong.png'
  },
  {
    name: 'Warren B. Pablo',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/warren_pablo.jpeg'
  },
  {
    name: 'Lowie W.  Ngayodan',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Jonel S. Uligan',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/jonel_uligan.png'
  }
]

const primaryWomen = [
  {
    name: 'Nova N. Tobyagon',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/nova_tobyagon.jpg'
  },
  {
    name: 'Eli Jane M. Gomintong',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/eli_jane_gomintong.jpg'
  },
  {
    name: 'Krizyl Joy M. Saguibal',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Denia B.Sacla',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/denia_sacla.jpg'
  },
  {
    name: 'Asher Dianne M.Saguibal',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/asher_saguibal.JPG'
  },
  {
    name: 'Frenelyn A. Vicente',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/frenelyn_vicente.jpeg'
  },
  {
    name: 'Evelyn E. Ngayodan',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Imelda A. De Vera',
    position: 'Primary Leader',
    imgSrc: '/images/portrait_placeholder.png'
  },
  {
    name: 'Mae-Ann B. Pingaping',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/mae_ann_pingaping.jpg'
  },
  {
    name: 'Jaysabel M. Calpo',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/jaysabel_calpo.jpeg'
  },
  {
    name: 'Arlene P. Diola',
    position: 'Primary Leader',
    imgSrc: '/images/leaders/arlene_diola.jpg'
  }
]

const staffs = [
  {
    name: 'Mae-Ann B. Pingaping',
    position: 'Church Administrator',
    imgSrc: '/images/leaders/mae_ann_pingaping.jpg'
  },
  {
    name: 'Jaysabel M. Calpo',
    position: 'Church Secretary',
    imgSrc: '/images/leaders/jaysabel_calpo.jpeg'
  },
  {
    name: 'Arlene P. Diola',
    position: 'Graphic Designer, SMM',
    imgSrc: '/images/leaders/arlene_diola.jpg'
  },
  {
    name: 'Jerome P. Cabinta',
    position: 'Graphic Designer, SMM',
    imgSrc: '/images/leaders/jerome_cabinta.JPG'
  },
  {
    name: 'Eli Jane M. Gomintong',
    position: 'SMM, Graphic Designer',
    imgSrc: '/images/leaders/eli_jane_gomintong.jpg'
  },
  {
    name: 'Angelito James S. Bustos',
    position: 'Offensive Security Engineer, Software Architect',
    imgSrc: '/images/leaders/james_bustos.jpeg'
  },
  {
    name: 'Jonel S. Uligan',
    position: 'Full Stack Software Engineer, Software Architect',
    imgSrc: '/images/leaders/jonel_uligan.png'
  },
  {
    name: 'Gary D. Lingad',
    position: 'Bookeper, SMM',
    imgSrc: '/images/leaders/gary_lingad.jpg'
  }
]
</script>
