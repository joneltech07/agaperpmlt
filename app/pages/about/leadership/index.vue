<template>
	<section>
		<Banner title="LEADERSHIP" />

		<section class="p-7 md:px-20 md:py-10">
			<LeadersSection title="Pastors" :images="pastors" styleProp="flex" />

			<UTabs class="mt-10" :items="leadersTab" :ui="{
				list: 'w-full md:w-100', // Width of the whole tab container (e.g., w-full, w-auto)
				trigger: 'min-w-fit' // Width of each tab button (e.g., w-1/2, w-20, min-w-fit)
			}">
				<template #men>
					<LeadersSection title="" :images="primaryMen" />
				</template>
				<template #women>
					<LeadersSection title="" :images="primaryWomen" />
				</template>
			</UTabs>

			<LeadersSection title="Staff" :images="staffs" />
		</section>
	</section>
</template>

<script setup lang="ts">

const leadersTab = [
	{
		label: 'Primary Men',
		icon: 'i-lucide-male',
		slot: 'men'
	},
	{
		label: 'Primary Women',
		icon: 'i-lucide-female',
		slot: 'women'
	}
]

const pastors = [
	{
		name: 'Juanito Ricardo Jr.',
		position: 'Senior Pastor',
		imgSrc: 'https://avatar.iran.liara.run/public/33'
	},
	{
		name: 'Rodilene Binay-an-Ricardo',
		position: 'Senior Pastor',
		imgSrc: 'https://avatar.iran.liara.run/public/74'
	}
]

const primaryMen = [
	{
		name: 'Garry D. Lingad',
		position: 'Primary Leader',
		imgSrc: '/images/gary.png'
	},
	{
		name: 'John-Mar I.  Diola',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/18'
	},
	{
		name: 'Romnick C. Sacla',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/30'
	},
	{
		name: 'Glen Mar O. Emilio',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/31'
	},
	{
		name: 'Angelito James S. Bustos',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/32'
	},
	{
		name: 'Maxson P. Battateng',
		position: 'Primary Leader',
		imgSrc: '/images/maxson.jpg'
	},
	{
		name: 'Brix T. Gomintong',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/33'
	},
	{
		name: 'Warren B. Pablo',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/34'
	},
	{
		name: 'Lowie W.  Ngayodan',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/35'
	},
	{
		name: 'Jonel S. Uligan',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/18'
	}
];

const primaryWomen = [
	{
		name: 'Nova N. Tobyagon',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/62'
	},
	{
		name: 'Eli Jane M. Gomintong',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/75'
	},
	{
		name: 'Krizyl Joy M. Saguibal',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/60'
	},
	{
		name: 'Denia B.Sacla',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/56'
	},
	{
		name: 'Asher Dianne M.Saguibal',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/71'
	},
	{
		name: 'Frenelyn A. Vicente',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/86'
	},
	{
		name: 'Evelyn E. Ngayodan',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/87'
	},
	{
		name: 'Imelda A. De Vera',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/89'
	},
	{
		name: 'Mae-Ann B. Pingaping',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/92'
	},
	{
		name: 'Jaysabel M. Calpo',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/81'
	},
	{
		name: 'Arlene P. Diola',
		position: 'Primary Leader',
		imgSrc: 'https://avatar.iran.liara.run/public/72'
	}
];

const staffs = [
	{
		name: 'Mae-Ann B. Pingaping',
		position: 'Church Administrator',
		imgSrc: 'https://avatar.iran.liara.run/public/92'
	},
	{
		name: 'Jaysabel M. Calpo',
		position: 'Church Secretary',
		imgSrc: 'https://avatar.iran.liara.run/public/81'
	},
	{
		name: 'Arlene P. Diola',
		position: 'Graphic Designer, SMM',
		imgSrc: 'https://avatar.iran.liara.run/public/72'
	},
	{
		name: 'Jerome P. Cabinta',
		position: 'Graphic Designer, SMM',
		imgSrc: 'https://avatar.iran.liara.run/public/47'
	},
	{
		name: 'Eli Jane M. Gomintong',
		position: 'SMM, Graphic Designer',
		imgSrc: 'https://avatar.iran.liara.run/public/75'
	},
	{
		name: 'Angelito James S. Bustos',
		position: 'Offensive Security Engineer, Software Architect',
		imgSrc: 'https://avatar.iran.liara.run/public/32'
	},
	{
		name: 'Jonel S. Uligan',
		position: "Full Stack Software Engineer, Software Architect",
		imgSrc: 'https://avatar.iran.liara.run/public/18'
	}
]

</script>