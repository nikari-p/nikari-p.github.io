<template>
    <div class="rounded-2xl mt-8 border border-gray-100 dark:border-gray-900 dark:bg-white/5 bg-black/5 p-10 overflow-x-auto">
        <div class="overflow-x-auto flex flex-col pb-10">
            <div class="flex items-center">
                <div class="w-24 flex-shrink-0">
                </div>
                <div class="w-20 flex-shrink-0" v-for="(item) in normalHistory" :key="item">
                    <span class="font-medium -ml-2 block">{{item}}</span>
                </div>
            </div>

            <div class="character-row flex items-stretch" v-for="(character, name) in characters" :key="name">
                <div class="character-icon sticky left-0 w-24 z-10 p-1 flex-shrink-0">
                    <div class="rounded-md overflow-hidden w-16 h-7 bg-gradient-to-b from-[#885550] to-[#c9a36a] to-50%">
                        <div
                            class="bg-contain bg-center w-full h-full bg-no-repeat"
                            :style="{
                                backgroundImage: `url('/chara/${name}.png')`,
                                backgroundSize: '100%',

                            }"
                        />
                    </div>
                </div>
                <div
                    class="character-grid-col w-10 relative border-l dark:border-slate-700/40 border-slate-500/30 flex-shrink-0 even:dark:!border-slate-600 even:!border-slate-500"
                    v-for="(item, patch, index) in history"
                    :key="patch"
                    :data-element="character.element"
                    :data-banner="checkCharacter(name, patch)"
                    :data-current="patch === currentPatch"
                >
                    <div
                        v-if="checkCharacter(name, patch)"
                        ref="bars"
                        :start-index="index"
                        class="h-4 absolute left-0 right-0 top-1/2 -translate-y-1/2 z-50"
                    />
                </div>

                <div class="w-10 text-center mt-1">
                    {{getPatchesSince(name)}}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue'

    const currentPatch = ref('2.3.2')

    const history = ref({
        "1.0.1": ["seele"],
        "1.0.2": ["jingyuan"],
        "1.1.1": ["sw"],
        "1.1.2": ["luocha"],
        "1.2.1": ["blade"],
        "1.2.2": ["kafka"],
        "1.3.1": ["danheng"],
        "1.3.2": ["fuxuan"],
        "1.4.1": ["jingliu"],
        "1.4.2": ["topaz", 'seele'],
        "1.5.1": ["huohuo"],
        "1.5.2": ["argenti", 'sw'],
        "1.6.1": ["ruanmei", 'blade'],
        "1.6.2": ["ratio", 'kafka'],
        "2.0.1": ["swan", 'danheng'],
        "2.0.2": ["sparkle", 'jingyuan'],
        "2.1.1": ["acheron", 'luocha'],
        "2.1.2": ["aventurine", 'jingliu'],
        "2.2.1": ["robin", 'topaz'],
        "2.2.2": ["boothill", 'fuxuan'],
        "2.3.1": ["firefly", 'ruanmei'],
        "2.3.2": ["jade", 'argenti'],
        // "2.4.1": ["yunli", 'huohuo'],
        // "2.4.2": ["jiaoqiu", 'sparkle'],
        // "2.5.1": ["feixiao"],
        // "2.5.2": ["lingsha"],

    })

    const characters = ref({
        seele: {
            name: 'Seele',
            element: 'Quantum',
            path: 'Hunt',
        },
        jingyuan: {
            name: 'Jing Yuan',
            element: 'Lightning',
            path: 'Erudition',
        },
        sw: {
            name: 'Silver Wolf',
            element: 'Quantum',
            path: 'Nihility',
        },
        luocha: {
            name: 'Luocha',
            element: 'Imaginary',
            path: 'Abundance',
        },
        blade: {
            name: 'Blade',
            element: 'Wind',
            path: 'Destruction',
        },
        kafka: {
            name: 'Kafka',
            element: 'Lightning',
            path: 'Nihility',
        },
        danheng: {
            name: 'Dan Heng • Imbibitor Lunaen',
            element: 'Imaginary',
            path: 'Destruction',
        },
        fuxuan: {
            name: 'Fu Xuan',
            element: 'Quantum',
            path: 'Preservation',
        },
        jingliu: {
            name: 'Jingliu',
            element: 'Ice',
            path: 'Destruction',
        },
        topaz: {
            name: 'Topaz',
            element: 'Fire',
            path: 'Hunt',
        },
        huohuo: {
            name: 'Huohuo',
            element: 'Wind',
            path: 'Abundance',
        },
        argenti: {
            name: 'Argenti',
            element: 'Physical',
            path: 'Erudition',
        },
        ruanmei: {
            name: 'Ruan Mei',
            element: 'Ice',
            path: 'Harmony',
        },
        ratio: {
            name: 'Dr. Ratio',
            element: 'Imaginary',
            path: 'Hunt',
        },
        swan: {
            name: 'Black Swan',
            element: 'Wind',
            path: 'Nihility',
        },
        sparkle: {
            name: 'Sparkle',
            element: 'Quantum',
            path: 'Harmony',
        },
        acheron: {
            name: 'Acheron',
            element: 'Lightning',
            path: 'Nihility',
        },
        aventurine: {
            name: 'Aventurine',
            element: 'Imaginary',
            path: 'Preservation',
        },
        robin: {
            name: 'Robin',
            element: 'Physical',
            path: 'Harmony',
        },
        boothill: {
            name: 'Boothill',
            element: 'Physical',
            path: 'Hunt',
        },
        firefly: {
            name: 'Firefly',
            element: 'Fire',
            path: 'Destruction',
        },
        jade: {
            name: 'Jade',
            element: 'Quantum',
            path: 'Erudition',
        },
        // yunli: {
        //     name: 'Yunli',
        //     element: 'Physical',
        //     path: 'Destruction',
        // },
        // jiaoqiu: {
        //     name: 'Jiaoqiu',
        //     element: 'Fire',
        //     path: 'Nihility',
        // },
        // feixiao: {
        //     name: 'Feixiao',
        //     element: 'Wind',
        //     path: 'Hunt',
        // },
        // lingsha: {
        //     name: 'Lingsha',
        //     element: 'Fire',
        //     path: 'Abundance',
        // },
    })

    const bars = ref(null)

    const totalColumns = computed(() => {
        return Object.keys(history.value).length + 1
    })

    const checkCharacter = (character, patch) => {
        return history.value[patch].indexOf(character) > -1
    }

    const normalHistory = computed(() => {
        const patches = Object.keys(history.value).map((key) => {
            return patchNormal(key)
        })
        return [...new Set(patches)]
    })

    const patchNormal = (patch) => {
        let name = patch.split('.')
        name.pop()
        return name.join('.')
    }

    const renderBars = () => {
        bars.value.forEach((bar) => {
            const cell = bar.parentNode
            const startIndex = parseInt(bar.getAttribute('start-index'), 10)
            const row = cell.parentNode
            const allBanners = Array.from(row.querySelectorAll('[data-banner="true"]'))

            const nextBanner = allBanners.filter((el) => {
                return parseInt(el.firstChild.getAttribute('start-index')) > startIndex
            })[0]

            let endIndex = totalColumns.value

            if (nextBanner) {
                endIndex = parseInt(nextBanner.firstChild.getAttribute('start-index'), 10)
            }

            const width = (endIndex - startIndex - 1) * 40

            bar.style.width = `${width}px`
        })
    }

    const getPatchesSince = (chara) => {
        let patches = 0
        const patchList = Object.keys(history.value)
        patchList.forEach((patch) => {
            const details = history.value[patch]
            patches++
            if (details.indexOf(chara) > -1) {
                patches = 0
            }
        })
        return patches
    }

    onMounted(() => {
        renderBars()
    })

</script>

<style lang="scss" scoped>
    [data-element="Quantum"] {
        --element-color: 126, 11, 235;
    }
    [data-element="Physical"] {
        --element-color: 151, 151, 151;
    }
    [data-element="Lightning"] {
        --element-color: 198, 90, 222;
    }
    [data-element="Fire"] {
        --element-color: 238, 71, 61;
    }
    [data-element="Ice"] {
        --element-color: 38, 146, 211;
    }
    [data-element="Wind"] {
        --element-color: 97, 207, 147;
    }
    [data-element="Imaginary"] {
        --element-color: 230, 216, 99;
    }

    .character-grid-col {
        &[data-banner="true"] {
            > div {
                background-image: linear-gradient(to right, rgba(var(--element-color), 1) 0% ,  rgba(var(--element-color), 0.1) 80%,  rgba(var(--element-color), 0) 100%);
                @apply rounded-l-full;
            }
        }
        // &[data-current="true"] {
        //     @apply border-dashed border-amber-800 dark:border-amber-200;
        // }
    }

</style>