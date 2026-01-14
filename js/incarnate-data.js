/**
 * Complete Incarnate Powers Data
 * All slots, trees, tiers, and power information
 */

const IncarnateData = {
    alpha: {
        slotName: 'Alpha',
        slotColor: '#60A5FA',
        trees: {
            Agility: {
                name: 'Agility',
                type: 'Endurance/Defense/Recharge',
                description: 'Reduces Endurance cost, increases Defense and Recharge Rate',
                tiers: [
                    { name: 'Agility Boost', desc: 'Minor bonuses to Endurance, Defense, and Recharge' },
                    { core: 'Agility Core Boost', radial: 'Agility Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Agility Total Core Revamp', radial: 'Agility Partial Radial Revamp', core2: 'Agility Partial Core Revamp', radial2: 'Agility Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Agility Core Paragon', radial: 'Agility Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Cardiac: {
                name: 'Cardiac',
                type: 'Endurance/Range/Resistance',
                description: 'Reduces Endurance cost, increases Range and Damage Resistance',
                tiers: [
                    { name: 'Cardiac Boost', desc: 'Minor bonuses to Endurance, Range, and Resistance' },
                    { core: 'Cardiac Core Boost', radial: 'Cardiac Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Cardiac Total Core Revamp', radial: 'Cardiac Partial Radial Revamp', core2: 'Cardiac Partial Core Revamp', radial2: 'Cardiac Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Cardiac Core Paragon', radial: 'Cardiac Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Intuition: {
                name: 'Intuition',
                type: 'ToHit/Range/Recharge',
                description: 'Increases To-Hit, Range, and Recharge Rate',
                tiers: [
                    { name: 'Intuition Boost', desc: 'Minor bonuses to ToHit, Range, and Recharge' },
                    { core: 'Intuition Core Boost', radial: 'Intuition Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Intuition Total Core Revamp', radial: 'Intuition Partial Radial Revamp', core2: 'Intuition Partial Core Revamp', radial2: 'Intuition Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Intuition Core Paragon', radial: 'Intuition Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Musculature: {
                name: 'Musculature',
                type: 'Damage/Endurance',
                description: 'Increases Damage and reduces Endurance cost',
                tiers: [
                    { name: 'Musculature Boost', desc: 'Minor bonuses to Damage and Endurance' },
                    { core: 'Musculature Core Boost', radial: 'Musculature Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Musculature Total Core Revamp', radial: 'Musculature Partial Radial Revamp', core2: 'Musculature Partial Core Revamp', radial2: 'Musculature Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Musculature Core Paragon', radial: 'Musculature Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Nerve: {
                name: 'Nerve',
                type: 'Accuracy/Defense/ToHit',
                description: 'Increases Accuracy, Defense, and To-Hit',
                tiers: [
                    { name: 'Nerve Boost', desc: 'Minor bonuses to Accuracy, Defense, and ToHit' },
                    { core: 'Nerve Core Boost', radial: 'Nerve Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Nerve Total Core Revamp', radial: 'Nerve Partial Radial Revamp', core2: 'Nerve Partial Core Revamp', radial2: 'Nerve Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Nerve Core Paragon', radial: 'Nerve Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Resilient: {
                name: 'Resilient',
                type: 'Defense/Resistance',
                description: 'Increases Defense and Damage Resistance',
                tiers: [
                    { name: 'Resilient Boost', desc: 'Minor bonuses to Defense and Resistance' },
                    { core: 'Resilient Core Boost', radial: 'Resilient Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Resilient Total Core Revamp', radial: 'Resilient Partial Radial Revamp', core2: 'Resilient Partial Core Revamp', radial2: 'Resilient Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Resilient Core Paragon', radial: 'Resilient Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Spiritual: {
                name: 'Spiritual',
                type: 'Healing/Recharge',
                description: 'Increases Healing and Recharge Rate',
                tiers: [
                    { name: 'Spiritual Boost', desc: 'Minor bonuses to Healing and Recharge' },
                    { core: 'Spiritual Core Boost', radial: 'Spiritual Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Spiritual Total Core Revamp', radial: 'Spiritual Partial Radial Revamp', core2: 'Spiritual Partial Core Revamp', radial2: 'Spiritual Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Spiritual Core Paragon', radial: 'Spiritual Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            },
            Vigor: {
                name: 'Vigor',
                type: 'Healing/Endurance/Accuracy',
                description: 'Increases Healing, reduces Endurance cost, and increases Accuracy',
                tiers: [
                    { name: 'Vigor Boost', desc: 'Minor bonuses to Healing, Endurance, and Accuracy' },
                    { core: 'Vigor Core Boost', radial: 'Vigor Radial Boost', desc: 'Improved bonuses' },
                    { core: 'Vigor Total Core Revamp', radial: 'Vigor Partial Radial Revamp', core2: 'Vigor Partial Core Revamp', radial2: 'Vigor Total Radial Revamp', desc: 'Enhanced bonuses with Level Shift' },
                    { core: 'Vigor Core Paragon', radial: 'Vigor Radial Paragon', desc: 'Maximum bonuses with Level Shift' }
                ]
            }
        }
    },
    
    judgement: {
        slotName: 'Judgement',
        slotColor: '#F59E0B',
        trees: {
            Cryonic: {
                name: 'Cryonic',
                type: 'Cold',
                description: 'Ranged Cone, Extreme DMG (Cold), Recharge: Very Long',
                tiers: [
                    { name: 'Cryonic Judgement', desc: 'Ranged Cone, Extreme Cold damage' },
                    { core: 'Cryonic Core Judgement', radial: 'Cryonic Radial Judgement', desc: 'Core: Single-target focus | Radial: Wider cone' },
                    { core: 'Cryonic Total Core Judgement', radial: 'Cryonic Partial Radial Judgement', core2: 'Cryonic Partial Core Judgement', radial2: 'Cryonic Total Radial Judgement', desc: 'Core: High damage | Radial: Slow effect +1 Level Shift' },
                    { core: 'Cryonic Core Final Judgement', radial: 'Cryonic Radial Final Judgement', desc: 'Core: Maximum damage | Radial: Maximum slow' }
                ]
            },
            Ion: {
                name: 'Ion',
                type: 'Energy',
                description: 'Targeted AoE, Extreme DMG (Energy), Recharge: Very Long',
                tiers: [
                    { name: 'Ion Judgement', desc: 'Targeted AoE, Extreme Energy damage with chain effect' },
                    { core: 'Ion Core Judgement', radial: 'Ion Radial Judgement', desc: 'Core: More chains | Radial: Larger radius' },
                    { core: 'Ion Total Core Judgement', radial: 'Ion Partial Radial Judgement', core2: 'Ion Partial Core Judgement', radial2: 'Ion Total Radial Judgement', desc: 'Core: Extended chains | Radial: Wider area +1 Level Shift' },
                    { core: 'Ion Core Final Judgement', radial: 'Ion Radial Final Judgement', desc: 'Core: Maximum chains | Radial: Maximum radius' }
                ]
            },
            Pyronic: {
                name: 'Pyronic',
                type: 'Fire',
                description: 'PBAoE, Extreme DMG (Fire), Recharge: Very Long',
                tiers: [
                    { name: 'Pyronic Judgement', desc: 'PBAoE, Extreme Fire damage with DoT' },
                    { core: 'Pyronic Core Judgement', radial: 'Pyronic Radial Judgement', desc: 'Core: Higher DoT | Radial: Larger radius' },
                    { core: 'Pyronic Total Core Judgement', radial: 'Pyronic Partial Radial Judgement', core2: 'Pyronic Partial Core Judgement', radial2: 'Pyronic Total Radial Judgement', desc: 'Core: Extended DoT | Radial: Wider area +1 Level Shift' },
                    { core: 'Pyronic Core Final Judgement', radial: 'Pyronic Radial Final Judgement', desc: 'Core: Maximum DoT | Radial: Maximum radius' }
                ]
            },
            Void: {
                name: 'Void',
                type: 'Negative',
                description: 'Ranged AoE, Extreme DMG (Negative), Recharge: Very Long',
                tiers: [
                    { name: 'Void Judgement', desc: 'Ranged AoE, Extreme Negative damage with -ToHit' },
                    { core: 'Void Core Judgement', radial: 'Void Radial Judgement', desc: 'Core: Higher -ToHit | Radial: Larger radius' },
                    { core: 'Void Total Core Judgement', radial: 'Void Partial Radial Judgement', core2: 'Void Partial Core Judgement', radial2: 'Void Total Radial Judgement', desc: 'Core: Extended debuff | Radial: Wider area +1 Level Shift' },
                    { core: 'Void Core Final Judgement', radial: 'Void Radial Final Judgement', desc: 'Core: Maximum -ToHit | Radial: Maximum radius' }
                ]
            },
            Vorpal: {
                name: 'Vorpal',
                type: 'Lethal',
                description: 'Ranged Cone, Extreme DMG (Lethal), Recharge: Very Long',
                tiers: [
                    { name: 'Vorpal Judgement', desc: 'Ranged Cone, Extreme Lethal damage with -Defense' },
                    { core: 'Vorpal Core Judgement', radial: 'Vorpal Radial Judgement', desc: 'Core: Higher -Defense | Radial: Wider cone' },
                    { core: 'Vorpal Total Core Judgement', radial: 'Vorpal Partial Radial Judgement', core2: 'Vorpal Partial Core Judgement', radial2: 'Vorpal Total Radial Judgement', desc: 'Core: Extended debuff | Radial: Wider cone +1 Level Shift' },
                    { core: 'Vorpal Core Final Judgement', radial: 'Vorpal Radial Final Judgement', desc: 'Core: Maximum -Defense | Radial: Maximum cone' }
                ]
            },
            Mighty: {
                name: 'Mighty',
                type: 'Smash',
                description: 'PBAoE, Extreme DMG (Smashing), Recharge: Very Long',
                tiers: [
                    { name: 'Mighty Judgement', desc: 'PBAoE, Extreme Smashing damage with knockdown' },
                    { core: 'Mighty Core Judgement', radial: 'Mighty Radial Judgement', desc: 'Core: Higher knockdown | Radial: Larger radius' },
                    { core: 'Mighty Total Core Judgement', radial: 'Mighty Partial Radial Judgement', core2: 'Mighty Partial Core Judgement', radial2: 'Mighty Total Radial Judgement', desc: 'Core: Extended knockdown | Radial: Wider area +1 Level Shift' },
                    { core: 'Mighty Core Final Judgement', radial: 'Mighty Radial Final Judgement', desc: 'Core: Maximum knockdown | Radial: Maximum radius' }
                ]
            }
        }
    },
    
    interface: {
        slotName: 'Interface',
        slotColor: '#10B981',
        trees: {
            Cognitive: {
                name: 'Cognitive',
                type: 'Confuse',
                description: 'Adds chance for Confuse proc',
                tiers: [
                    { name: 'Cognitive Interface', desc: 'Small chance for Confuse on hit' },
                    { core: 'Cognitive Core Interface', radial: 'Cognitive Radial Interface', desc: 'Core: Higher chance | Radial: Longer duration' },
                    { core: 'Cognitive Total Core Conversion', radial: 'Cognitive Partial Radial Conversion', core2: 'Cognitive Partial Core Conversion', radial2: 'Cognitive Total Radial Conversion', desc: 'Core: Very high chance | Radial: Much longer duration' },
                    { core: 'Cognitive Core Flawless Interface', radial: 'Cognitive Radial Flawless Interface', desc: 'Core: Maximum chance | Radial: Maximum duration' }
                ]
            },
            Degenerative: {
                name: 'Degenerative',
                type: '-Regen/-MaxHP',
                description: 'Adds -Regeneration and -Max HP proc',
                tiers: [
                    { name: 'Degenerative Interface', desc: 'Small chance for -Regen/-MaxHP on hit' },
                    { core: 'Degenerative Core Interface', radial: 'Degenerative Radial Interface', desc: 'Core: Higher -Regen | Radial: Higher -MaxHP' },
                    { core: 'Degenerative Total Core Conversion', radial: 'Degenerative Partial Radial Conversion', core2: 'Degenerative Partial Core Conversion', radial2: 'Degenerative Total Radial Conversion', desc: 'Core: Very high -Regen | Radial: Very high -MaxHP' },
                    { core: 'Degenerative Core Flawless Interface', radial: 'Degenerative Radial Flawless Interface', desc: 'Core: Maximum -Regen | Radial: Maximum -MaxHP' }
                ]
            },
            Diamagnetic: {
                name: 'Diamagnetic',
                type: '-ToHit',
                description: 'Adds -ToHit debuff proc',
                tiers: [
                    { name: 'Diamagnetic Interface', desc: 'Small chance for -ToHit on hit' },
                    { core: 'Diamagnetic Core Interface', radial: 'Diamagnetic Radial Interface', desc: 'Core: Higher chance | Radial: Stronger debuff' },
                    { core: 'Diamagnetic Total Core Conversion', radial: 'Diamagnetic Partial Radial Conversion', core2: 'Diamagnetic Partial Core Conversion', radial2: 'Diamagnetic Total Radial Conversion', desc: 'Core: Very high chance | Radial: Much stronger debuff' },
                    { core: 'Diamagnetic Core Flawless Interface', radial: 'Diamagnetic Radial Flawless Interface', desc: 'Core: Maximum chance | Radial: Maximum debuff' }
                ]
            },
            Gravitic: {
                name: 'Gravitic',
                type: '-DMG/-Speed',
                description: 'Adds -Damage and -Speed debuff proc',
                tiers: [
                    { name: 'Gravitic Interface', desc: 'Small chance for -DMG/-Speed on hit' },
                    { core: 'Gravitic Core Interface', radial: 'Gravitic Radial Interface', desc: 'Core: Higher -DMG | Radial: Higher -Speed' },
                    { core: 'Gravitic Total Core Conversion', radial: 'Gravitic Partial Radial Conversion', core2: 'Gravitic Partial Core Conversion', radial2: 'Gravitic Total Radial Conversion', desc: 'Core: Very high -DMG | Radial: Very high -Speed' },
                    { core: 'Gravitic Core Flawless Interface', radial: 'Gravitic Radial Flawless Interface', desc: 'Core: Maximum -DMG | Radial: Maximum -Speed' }
                ]
            },
            Paralytic: {
                name: 'Paralytic',
                type: 'Hold',
                description: 'Adds chance for Hold proc',
                tiers: [
                    { name: 'Paralytic Interface', desc: 'Small chance for Hold on hit' },
                    { core: 'Paralytic Core Interface', radial: 'Paralytic Radial Interface', desc: 'Core: Higher chance | Radial: Longer duration' },
                    { core: 'Paralytic Total Core Conversion', radial: 'Paralytic Partial Radial Conversion', core2: 'Paralytic Partial Core Conversion', radial2: 'Paralytic Total Radial Conversion', desc: 'Core: Very high chance | Radial: Much longer duration' },
                    { core: 'Paralytic Core Flawless Interface', radial: 'Paralytic Radial Flawless Interface', desc: 'Core: Maximum chance | Radial: Maximum duration' }
                ]
            },
            Preemptive: {
                name: 'Preemptive',
                type: 'Placate',
                description: 'Adds chance for Placate proc',
                tiers: [
                    { name: 'Preemptive Interface', desc: 'Small chance for Placate on hit' },
                    { core: 'Preemptive Core Interface', radial: 'Preemptive Radial Interface', desc: 'Core: Higher chance | Radial: Longer duration' },
                    { core: 'Preemptive Total Core Conversion', radial: 'Preemptive Partial Radial Conversion', core2: 'Preemptive Partial Core Conversion', radial2: 'Preemptive Total Radial Conversion', desc: 'Core: Very high chance | Radial: Much longer duration' },
                    { core: 'Preemptive Core Flawless Interface', radial: 'Preemptive Radial Flawless Interface', desc: 'Core: Maximum chance | Radial: Maximum duration' }
                ]
            },
            Reactive: {
                name: 'Reactive',
                type: '-Res/DoT',
                description: 'Adds -Resistance and Fire DoT proc',
                tiers: [
                    { name: 'Reactive Interface', desc: 'Small chance for -Res/Fire DoT on hit' },
                    { core: 'Reactive Core Interface', radial: 'Reactive Radial Interface', desc: 'Core: Higher -Res | Radial: Higher DoT' },
                    { core: 'Reactive Total Core Conversion', radial: 'Reactive Partial Radial Conversion', core2: 'Reactive Partial Core Conversion', radial2: 'Reactive Total Radial Conversion', desc: 'Core: Very high -Res | Radial: Much higher DoT' },
                    { core: 'Reactive Core Flawless Interface', radial: 'Reactive Radial Flawless Interface', desc: 'Core: Maximum -Res | Radial: Maximum DoT' }
                ]
            },
            Spectral: {
                name: 'Spectral',
                type: 'Immob/-Rech',
                description: 'Adds Immobilize and -Recharge proc',
                tiers: [
                    { name: 'Spectral Interface', desc: 'Small chance for Immob/-Recharge on hit' },
                    { core: 'Spectral Core Interface', radial: 'Spectral Radial Interface', desc: 'Core: Higher chance | Radial: Stronger -Recharge' },
                    { core: 'Spectral Total Core Conversion', radial: 'Spectral Partial Radial Conversion', core2: 'Spectral Partial Core Conversion', radial2: 'Spectral Total Radial Conversion', desc: 'Core: Very high chance | Radial: Much stronger -Recharge' },
                    { core: 'Spectral Core Flawless Interface', radial: 'Spectral Radial Flawless Interface', desc: 'Core: Maximum chance | Radial: Maximum -Recharge' }
                ]
            }
        }
    },
    
    lore: {
        slotName: 'Lore',
        slotColor: '#8B5CF6',
        trees: {
            Arachnos: {
                name: 'Arachnos',
                type: 'Pets',
                description: 'Summon Arachnos soldiers to fight for you',
                tiers: [
                    { name: 'Arachnos Ally', desc: 'Summon basic Arachnos pets' },
                    { core: 'Arachnos Core Ally', radial: 'Arachnos Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Arachnos Total Core Improved Ally', radial: 'Arachnos Partial Radial Improved Ally', core2: 'Arachnos Partial Core Improved Ally', radial2: 'Arachnos Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Arachnos Core Superior Ally', radial: 'Arachnos Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Banished: {
                name: 'Banished Pantheon',
                type: 'Pets',
                description: 'Summon Banished Pantheon spirits',
                tiers: [
                    { name: 'Banished Ally', desc: 'Summon basic Banished Pantheon pets' },
                    { core: 'Banished Core Ally', radial: 'Banished Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Banished Total Core Improved Ally', radial: 'Banished Partial Radial Improved Ally', core2: 'Banished Partial Core Improved Ally', radial2: 'Banished Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Banished Core Superior Ally', radial: 'Banished Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Carnival: {
                name: 'Carnival of Shadows',
                type: 'Pets',
                description: 'Summon Carnival masks and mistresses',
                tiers: [
                    { name: 'Carnival Ally', desc: 'Summon basic Carnival pets' },
                    { core: 'Carnival Core Ally', radial: 'Carnival Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Carnival Total Core Improved Ally', radial: 'Carnival Partial Radial Improved Ally', core2: 'Carnival Partial Core Improved Ally', radial2: 'Carnival Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Carnival Core Superior Ally', radial: 'Carnival Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Cimeroran: {
                name: 'Cimeroran',
                type: 'Pets',
                description: 'Summon ancient Cimeroran warriors',
                tiers: [
                    { name: 'Cimeroran Ally', desc: 'Summon basic Cimeroran pets' },
                    { core: 'Cimeroran Core Ally', radial: 'Cimeroran Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Cimeroran Total Core Improved Ally', radial: 'Cimeroran Partial Radial Improved Ally', core2: 'Cimeroran Partial Core Improved Ally', radial2: 'Cimeroran Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Cimeroran Core Superior Ally', radial: 'Cimeroran Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Clockwork: {
                name: 'Clockwork',
                type: 'Pets',
                description: 'Summon Clockwork automatons',
                tiers: [
                    { name: 'Clockwork Ally', desc: 'Summon basic Clockwork pets' },
                    { core: 'Clockwork Core Ally', radial: 'Clockwork Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Clockwork Total Core Improved Ally', radial: 'Clockwork Partial Radial Improved Ally', core2: 'Clockwork Partial Core Improved Ally', radial2: 'Clockwork Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Clockwork Core Superior Ally', radial: 'Clockwork Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Drones: {
                name: 'Robotic Drones',
                type: 'Pets',
                description: 'Summon advanced combat drones',
                tiers: [
                    { name: 'Drones Ally', desc: 'Summon basic Drone pets' },
                    { core: 'Drones Core Ally', radial: 'Drones Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Drones Total Core Improved Ally', radial: 'Drones Partial Radial Improved Ally', core2: 'Drones Partial Core Improved Ally', radial2: 'Drones Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Drones Core Superior Ally', radial: 'Drones Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Elementals: {
                name: 'Elementals',
                type: 'Pets',
                description: 'Summon elemental beings',
                tiers: [
                    { name: 'Elementals Ally', desc: 'Summon basic Elemental pets' },
                    { core: 'Elementals Core Ally', radial: 'Elementals Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Elementals Total Core Improved Ally', radial: 'Elementals Partial Radial Improved Ally', core2: 'Elementals Partial Core Improved Ally', radial2: 'Elementals Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Elementals Core Superior Ally', radial: 'Elementals Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            IDF: {
                name: 'IDF',
                type: 'Pets',
                description: 'Summon Imperial Defense Force soldiers',
                tiers: [
                    { name: 'IDF Ally', desc: 'Summon basic IDF pets' },
                    { core: 'IDF Core Ally', radial: 'IDF Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'IDF Total Core Improved Ally', radial: 'IDF Partial Radial Improved Ally', core2: 'IDF Partial Core Improved Ally', radial2: 'IDF Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'IDF Core Superior Ally', radial: 'IDF Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Knives: {
                name: 'Knives of Artemis',
                type: 'Pets',
                description: 'Summon deadly assassins',
                tiers: [
                    { name: 'Knives Ally', desc: 'Summon basic Knives of Artemis pets' },
                    { core: 'Knives Core Ally', radial: 'Knives Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Knives Total Core Improved Ally', radial: 'Knives Partial Radial Improved Ally', core2: 'Knives Partial Core Improved Ally', radial2: 'Knives Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Knives Core Superior Ally', radial: 'Knives Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Lights: {
                name: 'Polar Lights',
                type: 'Pets',
                description: 'Summon alien Rikti entities',
                tiers: [
                    { name: 'Lights Ally', desc: 'Summon basic Polar Lights pets' },
                    { core: 'Lights Core Ally', radial: 'Lights Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Lights Total Core Improved Ally', radial: 'Lights Partial Radial Improved Ally', core2: 'Lights Partial Core Improved Ally', radial2: 'Lights Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Lights Core Superior Ally', radial: 'Lights Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Longbow: {
                name: 'Longbow',
                type: 'Pets',
                description: 'Summon Longbow operatives',
                tiers: [
                    { name: 'Longbow Ally', desc: 'Summon basic Longbow pets' },
                    { core: 'Longbow Core Ally', radial: 'Longbow Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Longbow Total Core Improved Ally', radial: 'Longbow Partial Radial Improved Ally', core2: 'Longbow Partial Core Improved Ally', radial2: 'Longbow Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Longbow Core Superior Ally', radial: 'Longbow Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Nemesis: {
                name: 'Nemesis',
                type: 'Pets',
                description: 'Summon steam-powered Nemesis soldiers',
                tiers: [
                    { name: 'Nemesis Ally', desc: 'Summon basic Nemesis pets' },
                    { core: 'Nemesis Core Ally', radial: 'Nemesis Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Nemesis Total Core Improved Ally', radial: 'Nemesis Partial Radial Improved Ally', core2: 'Nemesis Partial Core Improved Ally', radial2: 'Nemesis Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Nemesis Core Superior Ally', radial: 'Nemesis Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Phantoms: {
                name: 'Phantoms',
                type: 'Pets',
                description: 'Summon spectral warriors',
                tiers: [
                    { name: 'Phantoms Ally', desc: 'Summon basic Phantom pets' },
                    { core: 'Phantoms Core Ally', radial: 'Phantoms Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Phantoms Total Core Improved Ally', radial: 'Phantoms Partial Radial Improved Ally', core2: 'Phantoms Partial Core Improved Ally', radial2: 'Phantoms Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Phantoms Core Superior Ally', radial: 'Phantoms Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Rikti: {
                name: 'Rikti',
                type: 'Pets',
                description: 'Summon Rikti invaders',
                tiers: [
                    { name: 'Rikti Ally', desc: 'Summon basic Rikti pets' },
                    { core: 'Rikti Core Ally', radial: 'Rikti Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Rikti Total Core Improved Ally', radial: 'Rikti Partial Radial Improved Ally', core2: 'Rikti Partial Core Improved Ally', radial2: 'Rikti Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Rikti Core Superior Ally', radial: 'Rikti Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Rularuu: {
                name: 'Rularuu',
                type: 'Pets',
                description: 'Summon beings from the Shadow Shard',
                tiers: [
                    { name: 'Rularuu Ally', desc: 'Summon basic Rularuu pets' },
                    { core: 'Rularuu Core Ally', radial: 'Rularuu Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Rularuu Total Core Improved Ally', radial: 'Rularuu Partial Radial Improved Ally', core2: 'Rularuu Partial Core Improved Ally', radial2: 'Rularuu Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Rularuu Core Superior Ally', radial: 'Rularuu Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Seers: {
                name: 'Seers',
                type: 'Pets',
                description: 'Summon Praetorian psychics',
                tiers: [
                    { name: 'Seers Ally', desc: 'Summon basic Seer pets' },
                    { core: 'Seers Core Ally', radial: 'Seers Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Seers Total Core Improved Ally', radial: 'Seers Partial Radial Improved Ally', core2: 'Seers Partial Core Improved Ally', radial2: 'Seers Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Seers Core Superior Ally', radial: 'Seers Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Talons: {
                name: 'Talons of Vengeance',
                type: 'Pets',
                description: 'Summon mystical warriors',
                tiers: [
                    { name: 'Talons Ally', desc: 'Summon basic Talons of Vengeance pets' },
                    { core: 'Talons Core Ally', radial: 'Talons Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Talons Total Core Improved Ally', radial: 'Talons Partial Radial Improved Ally', core2: 'Talons Partial Core Improved Ally', radial2: 'Talons Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Talons Core Superior Ally', radial: 'Talons Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Tsoo: {
                name: 'Tsoo',
                type: 'Pets',
                description: 'Summon Tsoo martial artists',
                tiers: [
                    { name: 'Tsoo Ally', desc: 'Summon basic Tsoo pets' },
                    { core: 'Tsoo Core Ally', radial: 'Tsoo Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Tsoo Total Core Improved Ally', radial: 'Tsoo Partial Radial Improved Ally', core2: 'Tsoo Partial Core Improved Ally', radial2: 'Tsoo Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Tsoo Core Superior Ally', radial: 'Tsoo Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            Vanguard: {
                name: 'Vanguard',
                type: 'Pets',
                description: 'Summon Vanguard soldiers',
                tiers: [
                    { name: 'Vanguard Ally', desc: 'Summon basic Vanguard pets' },
                    { core: 'Vanguard Core Ally', radial: 'Vanguard Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'Vanguard Total Core Improved Ally', radial: 'Vanguard Partial Radial Improved Ally', core2: 'Vanguard Partial Core Improved Ally', radial2: 'Vanguard Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'Vanguard Core Superior Ally', radial: 'Vanguard Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            },
            WarWorks: {
                name: 'Praetorian Clockwork',
                type: 'Pets',
                description: 'Summon advanced War Works',
                tiers: [
                    { name: 'WarWorks Ally', desc: 'Summon basic War Works pets' },
                    { core: 'WarWorks Core Ally', radial: 'WarWorks Radial Ally', desc: 'Core: Stronger pets | Radial: More pets' },
                    { core: 'WarWorks Total Core Improved Ally', radial: 'WarWorks Partial Radial Improved Ally', core2: 'WarWorks Partial Core Improved Ally', radial2: 'WarWorks Total Radial Improved Ally', desc: 'Enhanced pet abilities' },
                    { core: 'WarWorks Core Superior Ally', radial: 'WarWorks Radial Superior Ally', desc: 'Maximum pet power' }
                ]
            }
        }
    },
    
    destiny: {
        slotName: 'Destiny',
        slotColor: '#EF4444',
        trees: {
            Ageless: {
                name: 'Ageless',
                type: 'Recharge/Recovery',
                description: 'Self and Team: +Recharge, +Recovery, +Endurance Discount',
                tiers: [
                    { name: 'Ageless Invocation', desc: 'Moderate Recharge and Recovery boost' },
                    { core: 'Ageless Core Invocation', radial: 'Ageless Radial Invocation', desc: 'Core: Higher Recharge | Radial: Higher Recovery' },
                    { core: 'Ageless Total Core Invocation', radial: 'Ageless Partial Radial Invocation', core2: 'Ageless Partial Core Invocation', radial2: 'Ageless Total Radial Invocation', desc: 'Core: Very high Recharge | Radial: Very high Recovery' },
                    { core: 'Ageless Core Epiphany', radial: 'Ageless Radial Epiphany', desc: 'Core: Maximum Recharge | Radial: Maximum Recovery' }
                ]
            },
            Barrier: {
                name: 'Barrier',
                type: 'Defense/Resistance',
                description: 'Self and Team: +Defense, +Resistance',
                tiers: [
                    { name: 'Barrier Invocation', desc: 'Moderate Defense and Resistance boost' },
                    { core: 'Barrier Core Invocation', radial: 'Barrier Radial Invocation', desc: 'Core: Higher Defense | Radial: Higher Resistance' },
                    { core: 'Barrier Total Core Invocation', radial: 'Barrier Partial Radial Invocation', core2: 'Barrier Partial Core Invocation', radial2: 'Barrier Total Radial Invocation', desc: 'Core: Very high Defense | Radial: Very high Resistance' },
                    { core: 'Barrier Core Epiphany', radial: 'Barrier Radial Epiphany', desc: 'Core: Maximum Defense | Radial: Maximum Resistance' }
                ]
            },
            Clarion: {
                name: 'Clarion',
                type: 'Mez Protection',
                description: 'Self and Team: Mez Protection and Resistance',
                tiers: [
                    { name: 'Clarion Invocation', desc: 'Moderate Mez Protection' },
                    { core: 'Clarion Core Invocation', radial: 'Clarion Radial Invocation', desc: 'Core: Higher magnitude | Radial: More types' },
                    { core: 'Clarion Total Core Invocation', radial: 'Clarion Partial Radial Invocation', core2: 'Clarion Partial Core Invocation', radial2: 'Clarion Total Radial Invocation', desc: 'Core: Very high magnitude | Radial: All mez types' },
                    { core: 'Clarion Core Epiphany', radial: 'Clarion Radial Epiphany', desc: 'Core: Maximum magnitude | Radial: Maximum coverage' }
                ]
            },
            Incandescence: {
                name: 'Incandescence',
                type: 'Damage/ToHit',
                description: 'Self and Team: +Damage, +ToHit',
                tiers: [
                    { name: 'Incandescence Invocation', desc: 'Moderate Damage and ToHit boost' },
                    { core: 'Incandescence Core Invocation', radial: 'Incandescence Radial Invocation', desc: 'Core: Higher Damage | Radial: Higher ToHit' },
                    { core: 'Incandescence Total Core Invocation', radial: 'Incandescence Partial Radial Invocation', core2: 'Incandescence Partial Core Invocation', radial2: 'Incandescence Total Radial Invocation', desc: 'Core: Very high Damage | Radial: Very high ToHit' },
                    { core: 'Incandescence Core Epiphany', radial: 'Incandescence Radial Epiphany', desc: 'Core: Maximum Damage | Radial: Maximum ToHit' }
                ]
            },
            Rebirth: {
                name: 'Rebirth',
                type: 'Heal/Regen',
                description: 'Self and Team: Heal, +Regeneration, +Recovery',
                tiers: [
                    { name: 'Rebirth Invocation', desc: 'Moderate Heal and Regeneration' },
                    { core: 'Rebirth Core Invocation', radial: 'Rebirth Radial Invocation', desc: 'Core: Higher Heal | Radial: Higher Regeneration' },
                    { core: 'Rebirth Total Core Invocation', radial: 'Rebirth Partial Radial Invocation', core2: 'Rebirth Partial Core Invocation', radial2: 'Rebirth Total Radial Invocation', desc: 'Core: Very high Heal | Radial: Very high Regeneration' },
                    { core: 'Rebirth Core Epiphany', radial: 'Rebirth Radial Epiphany', desc: 'Core: Maximum Heal | Radial: Maximum Regeneration' }
                ]
            }
        }
    },
    
    hybrid: {
        slotName: 'Hybrid',
        slotColor: '#EC4899',
        trees: {
            Assault: {
                name: 'Assault',
                type: 'Damage/ToHit',
                description: 'Toggle: +Damage, +ToHit while active',
                tiers: [
                    { name: 'Assault Genome', desc: 'Moderate offensive boost' },
                    { core: 'Assault Core Genome', radial: 'Assault Radial Genome', desc: 'Core: Higher Damage | Radial: Chance for critical' },
                    { core: 'Assault Total Core Graft', radial: 'Assault Partial Radial Graft', core2: 'Assault Partial Core Graft', radial2: 'Assault Total Radial Graft', desc: 'Core: Very high Damage | Radial: Higher crit chance' },
                    { core: 'Assault Core Embodiment', radial: 'Assault Radial Embodiment', desc: 'Core: Maximum Damage | Radial: Maximum crit' }
                ]
            },
            Control: {
                name: 'Control',
                type: 'Control Duration/Mag',
                description: 'Toggle: Increases control effects while active',
                tiers: [
                    { name: 'Control Genome', desc: 'Moderate control boost' },
                    { core: 'Control Core Genome', radial: 'Control Radial Genome', desc: 'Core: Higher duration | Radial: Higher magnitude' },
                    { core: 'Control Total Core Graft', radial: 'Control Partial Radial Graft', core2: 'Control Partial Core Graft', radial2: 'Control Total Radial Graft', desc: 'Core: Very high duration | Radial: Very high magnitude' },
                    { core: 'Control Core Embodiment', radial: 'Control Radial Embodiment', desc: 'Core: Maximum duration | Radial: Maximum magnitude' }
                ]
            },
            Melee: {
                name: 'Melee',
                type: 'Melee Damage/Defense',
                description: 'Toggle: +Melee Damage, +Defense while active',
                tiers: [
                    { name: 'Melee Genome', desc: 'Moderate melee boost' },
                    { core: 'Melee Core Genome', radial: 'Melee Radial Genome', desc: 'Core: Higher Damage | Radial: Higher Defense' },
                    { core: 'Melee Total Core Graft', radial: 'Melee Partial Radial Graft', core2: 'Melee Partial Core Graft', radial2: 'Melee Total Radial Graft', desc: 'Core: Very high Damage | Radial: Very high Defense' },
                    { core: 'Melee Core Embodiment', radial: 'Melee Radial Embodiment', desc: 'Core: Maximum Damage | Radial: Maximum Defense' }
                ]
            },
            Support: {
                name: 'Support',
                type: 'Healing/Endurance',
                description: 'Toggle: +Healing, +Endurance while active',
                tiers: [
                    { name: 'Support Genome', desc: 'Moderate support boost' },
                    { core: 'Support Core Genome', radial: 'Support Radial Genome', desc: 'Core: Higher Healing | Radial: Higher Endurance' },
                    { core: 'Support Total Core Graft', radial: 'Support Partial Radial Graft', core2: 'Support Partial Core Graft', radial2: 'Support Total Radial Graft', desc: 'Core: Very high Healing | Radial: Very high Endurance' },
                    { core: 'Support Core Embodiment', radial: 'Support Radial Embodiment', desc: 'Core: Maximum Healing | Radial: Maximum Endurance' }
                ]
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = IncarnateData;
}
