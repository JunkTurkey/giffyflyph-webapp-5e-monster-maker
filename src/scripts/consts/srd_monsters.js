/**
 * 5e SRD monsters ready to import.
 */
const SRD_MONSTERS = [
	{
		id: 1,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Aboleth",
				size: "large",
				type: "aberration",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 135,
				modifier: null,
				roll: "18d10 + 36"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 21,
				dex: 9,
				con: 15,
				int: 18,
				wis: 15,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "deep speech",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "10",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The aboleth can breathe air and water."
				}, {
					name: "Mucous Cloud",
					detail: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
				}, {
					name: "Probing Telepathy",
					detail: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The aboleth makes three tentacle attacks."
				}, {
					name: "Tentacle",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft. one target. _Hit:_ 15 (3d6 + 5) bludgeoning damage."
				}, {
					name: "Enslave (3/day)",
					detail: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The aboleth makes a Wisdom (Perception) check."
				}, {
					name: "Tail Swipe",
					detail: "The aboleth makes one tail attack."
				}, {
					name: "Psychic Drain (Costs 2 Actions)",
					detail: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.561Z",
		updated: "2019-07-16T23:22:13.561Z"
	},
	{
		id: 2,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Acolyte",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 9,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 10,
				con: 10,
				int: 10,
				wis: 14,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "medicine",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spellcasting",
					detail: "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n• Cantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (3 slots): bless, cure wounds, sanctuary"
				}
			],
			actions: [
				{
					name: "Club",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 2 (1d4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.561Z",
		updated: "2019-07-16T23:22:13.561Z"
	},
	{
		id: 3,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Black Dragon",
				size: "huge",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 195,
				modifier: null,
				roll: "17d12 + 85"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 23,
				dex: 14,
				con: 21,
				int: 14,
				wis: 13,
				cha: 17,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "14",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 10 ft., one target. _Hit:_ 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 5 ft., one target. _Hit:_ 13 (2d6 + 6) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 15 ft., one target. _Hit:_ 15 (2d8 + 6) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Acid Breath (Recharge 5-6)",
					detail: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.561Z",
		updated: "2019-07-16T23:22:13.561Z"
	},
	{
		id: 4,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Blue Dragon",
				size: "huge",
				type: "dragon",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 225,
				modifier: null,
				roll: "18d12 + 108"
			},
			speed: {
				normal: "40 ft.",
				burrow: "30 ft.",
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 25,
				dex: 10,
				con: 23,
				int: 16,
				wis: 15,
				cha: 19,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "16",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 10 ft., one target. _Hit:_ 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 5 ft., one target. _Hit:_ 14 (2d6 + 7) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 15 ft., one target. _Hit:_ 16 (2d8 + 7) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Lightning Breath (Recharge 5-6)",
					detail: "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.561Z",
		updated: "2019-07-16T23:22:13.561Z"
	},
	{
		id: 5,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Brass Dragon",
				size: "huge",
				type: "dragon",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 172,
				modifier: null,
				roll: "15d12 + 75"
			},
			speed: {
				normal: "40 ft.",
				burrow: "40 ft.",
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 10,
				con: 21,
				int: 14,
				wis: 13,
				cha: 17,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "13",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach,.0 ft., one target. _Hit:_ 17 (2d10 + 6) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 5 ft., one target. _Hit:_ 13 (2d6 + 6) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 15 ft., one target. _Hit:_ 15 (2d8 + 6) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Fire Breath.** The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.\n**Sleep Breath.** The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.561Z",
		updated: "2019-07-16T23:22:13.561Z"
	},
	{
		id: 6,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Bronze Dragon",
				size: "huge",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 212,
				modifier: null,
				roll: "17d12 + 102"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 25,
				dex: 10,
				con: 23,
				int: 16,
				wis: 15,
				cha: 19,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "15",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 10 ft., one target. _Hit:_ 18 (2d10 + 7) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 5 ft., one target. _Hit:_ 14 (2d6 + 7) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 15 ft., one target. _Hit:_ 16 (2d8 + 7) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Lightning Breath.** The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\n**Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 7,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Copper Dragon",
				size: "huge",
				type: "dragon",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 184,
				modifier: null,
				roll: "16d12 + 80"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 12,
				con: 21,
				int: 18,
				wis: 15,
				cha: 17,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "14",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 10 ft., one target. _Hit:_ 17 (2d10 + 6) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 5 ft., one target. _Hit:_ 13 (2d6 + 6) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 15 ft., one target. _Hit:_ 15 (2d8 + 6) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Acid Breath.** The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\n**Slowing Breath.** The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 8,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Gold Dragon",
				size: "huge",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 256,
				modifier: null,
				roll: "19d12 + 133"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 27,
				dex: 14,
				con: 25,
				int: 16,
				wis: 15,
				cha: 24,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "17",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 5 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 15 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Fire Breath.** The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\n**Weakening Breath.** The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 9,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Green Dragon",
				size: "huge",
				type: "dragon",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 207,
				modifier: null,
				roll: "18d12 + 90"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 23,
				dex: 12,
				con: 21,
				int: 18,
				wis: 15,
				cha: 17,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "15",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 10 ft., one target. _Hit:_ 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 5 ft., one target. _Hit:_ 13 (2d6 + 6) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 15 ft., one target. _Hit:_ 15 (2d8 + 6) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
				}, {
					name: "Poison Breath (Recharge 5-6)",
					detail: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 10,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Red Dragon",
				size: "huge",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 256,
				modifier: null,
				roll: "19d12 + 133"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 27,
				dex: 10,
				con: 25,
				int: 16,
				wis: 13,
				cha: 21,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "17",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 5 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 15 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Fire Breath (Recharge 5-6)",
					detail: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 11,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult Silver Dragon",
				size: "huge",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 243,
				modifier: null,
				roll: "18d12 + 126"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 27,
				dex: 10,
				con: 25,
				int: 16,
				wis: 13,
				cha: 21,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "16",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 10 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 5 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 15 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Cold Breath.** The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.\n**Paralyzing Breath.** The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 12,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Adult White Dragon",
				size: "huge",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 200,
				modifier: null,
				roll: "16d12 + 96"
			},
			speed: {
				normal: "40 ft.",
				burrow: "30 ft.",
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 22,
				dex: 10,
				con: 22,
				int: 8,
				wis: 12,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "13",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Ice Walk",
					detail: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 10 ft., one target. _Hit:_ 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 5 ft., one target. _Hit:_ 13 (2d6 + 6) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 15 ft., one target. _Hit:_ 15 (2d8 + 6) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Cold Breath (Recharge 5-6)",
					detail: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 13,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Air Elemental",
				size: "large",
				type: "elemental",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: null
			},
			hp: {
				average: 90,
				modifier: null,
				roll: "12d10 + 24"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: "90 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 20,
				con: 14,
				int: 6,
				wis: 10,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "lightning",
					custom: null
				}, {
					type: "thunder",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "unconscious",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "auran",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Air Form",
					detail: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The elemental makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 14 (2d8 + 5) bludgeoning damage."
				}, {
					name: "Whirlwind (Recharge 4-6)",
					detail: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 14,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Black Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 22,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 367,
				modifier: null,
				roll: "21d20 + 147"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 27,
				dex: 14,
				con: 25,
				int: 16,
				wis: 15,
				cha: 19,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "21",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_+ 15 to hit, reach 15 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 10 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 20 ft ., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Acid Breath (Recharge 5-6)",
					detail: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 15,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Blue Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 22,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 481,
				modifier: null,
				roll: "26d20 + 208"
			},
			speed: {
				normal: "40 ft.",
				burrow: "40 ft.",
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 29,
				dex: 10,
				con: 27,
				int: 18,
				wis: 17,
				cha: 21,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "23",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +16 to hit, reach 15 ft., one target. _Hit:_ 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +16 to hit, reach 10 ft., one target. _Hit:_ 16 (2d6 + 9) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +16 to hit, reach 20 ft., one target. _Hit:_ 18 (2d8 + 9) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Lightning Breath (Recharge 5-6)",
					detail: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 16,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Brass Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 20,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 297,
				modifier: null,
				roll: "17d20 + 119"
			},
			speed: {
				normal: "40 ft.",
				burrow: "40 ft.",
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 27,
				dex: 10,
				con: 25,
				int: 16,
				wis: 15,
				cha: 19,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "20",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 15 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 20 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons:\n**Fire Breath.** The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\n**Sleep Breath.** The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
				}, {
					name: "Change Shape",
					detail: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 17,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Bronze Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 22,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 444,
				modifier: null,
				roll: "24d20 + 192"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 29,
				dex: 10,
				con: 27,
				int: 18,
				wis: 17,
				cha: 21,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "22",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +16 to hit, reach 15 ft., one target. _Hit:_ 20 (2d10 + 9) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +16 to hit, reach 10 ft., one target. _Hit:_ 16 (2d6 + 9) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +16 to hit, reach 20 ft., one target. _Hit:_ 18 (2d8 + 9) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Lightning Breath.** The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.\n**Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
				}, {
					name: "Change Shape",
					detail: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 18,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Copper Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 21,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 350,
				modifier: null,
				roll: "20d20 + 140"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 27,
				dex: 12,
				con: 25,
				int: 20,
				wis: 17,
				cha: 19,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "21",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 15 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 10 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 20 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Acid Breath.** The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.\n**Slowing Breath.** The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
				}, {
					name: "Change Shape",
					detail: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 19,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Gold Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 22,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 546,
				modifier: null,
				roll: "28d20 + 252"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 30,
				dex: 14,
				con: 29,
				int: 18,
				wis: 17,
				cha: 28,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "24",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 15 ft., one target. _Hit:_ 21 (2d10 + 10) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 10 ft., one target. _Hit:_ 17 (2d6 + 10) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 20 ft., one target. _Hit:_ 19 (2d8 + 10) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Fire Breath.** The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.\n**Weakening Breath.** The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Change Shape",
					detail: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 20,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Green Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 21,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 385,
				modifier: null,
				roll: "22d20"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 27,
				dex: 12,
				con: 25,
				int: 20,
				wis: 17,
				cha: 19,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "22",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 15 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 10 ft., one target. _Hit:_ 22 (4d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 20 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Poison Breath (Recharge 5-6)",
					detail: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.562Z",
		updated: "2019-07-16T23:22:13.562Z"
	},
	{
		id: 21,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Red Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 22,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 546,
				modifier: null,
				roll: "28d20 + 252"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 30,
				dex: 10,
				con: 29,
				int: 18,
				wis: 15,
				cha: 23,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "24",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 15 ft., one target. _Hit:_ 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 10 ft., one target. _Hit:_ 17 (2d6 + 10) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 20 ft., one target. _Hit:_ 19 (2d8 + 10) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Fire Breath (Recharge 5-6)",
					detail: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 22,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient Silver Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 22,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 487,
				modifier: null,
				roll: "25d20 + 225"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 30,
				dex: 10,
				con: 29,
				int: 18,
				wis: 15,
				cha: 23,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "23",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 15 ft., one target. _Hit:_ 21 (2d10 + 10) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 10 ft., one target. _Hit:_ 17 (2d6 + 10) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +17 to hit, reach 20 ft., one target. _Hit:_ 19 (2d8 + 10) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n\n**Cold Breath.** The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.\n\n **Paralyzing Breath.** The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Change Shape",
					detail: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 23,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ancient White Dragon",
				size: "gargantuan",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 20,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 333,
				modifier: null,
				roll: "18d20 + 144"
			},
			speed: {
				normal: "40 ft.",
				burrow: "40 ft.",
				climb: null,
				fly: "80 ft.",
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 26,
				dex: 10,
				con: 26,
				int: 10,
				wis: 13,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "20",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Ice Walk",
					detail: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the dragon fails a saving throw, it can choose to succeed instead."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 15 ft., one target. _Hit:_ 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 20 ft., one target. _Hit:_ 17 (2d8 + 8) bludgeoning damage."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
				}, {
					name: "Cold Breath (Recharge 5-6)",
					detail: "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Detect",
					detail: "The dragon makes a Wisdom (Perception) check."
				}, {
					name: "Tail Attack",
					detail: "The dragon makes a tail attack."
				}, {
					name: "Wing Attack (Costs 2 Actions)",
					detail: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 24,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Androsphinx",
				size: "large",
				type: "monstrosity",
				alignment: "lawful neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 199,
				modifier: null,
				roll: "19d10 + 95"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 22,
				dex: 10,
				con: 20,
				int: 16,
				wis: 18,
				cha: 23,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "psychic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "custom",
					custom: "Sphinx"
				}
			],
			challenge: {
				rating: "17",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Inscrutable",
					detail: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
				}, {
					name: "Magic Weapons",
					detail: "The sphinx's weapon attacks are magical."
				}, {
					name: "Spellcasting",
					detail: "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:\n\n• Cantrips (at will): sacred flame, spare the dying, thaumaturgy\n• 1st level (4 slots): command, detect evil and good, detect magic\n• 2nd level (3 slots): lesser restoration, zone of truth\n• 3rd level (3 slots): dispel magic, tongues\n• 4th level (3 slots): banishment, freedom of movement\n• 5th level (2 slots): flame strike, greater restoration\n• 6th level (1 slot): heroes' feast"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The sphinx makes two claw attacks."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 5 ft., one target. _Hit:_ 17 (2d10 + 6) slashing damage."
				}, {
					name: "Roar (3/Day)",
					detail: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n**First Roar.** Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n**Second Roar.** Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n**Third Roar.** Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Claw Attack",
					detail: "The sphinx makes one claw attack."
				}, {
					name: "Teleport (Costs 2 Actions)",
					detail: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
				}, {
					name: "Cast a Spell (Costs 3 Actions)",
					detail: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 25,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Animated Armor",
				size: "medium",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 33,
				modifier: null,
				roll: "6d8 + 6"
			},
			speed: {
				normal: "25 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 11,
				con: 13,
				int: 1,
				wis: 3,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}, {
					type: "psychic",
					custom: null
				}
			],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Antimagic Susceptibility",
					detail: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
				}, {
					name: "False Appearance",
					detail: "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The armor makes two melee attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 26,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ankheg",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "14 (natural armor), 11 while prone"
			},
			hp: {
				average: 39,
				modifier: null,
				roll: "6d10 + 6"
			},
			speed: {
				normal: "30 ft.",
				burrow: "10 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 11,
				con: 13,
				int: 1,
				wis: 13,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: "60 ft.",
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
				}, {
					name: "Acid Spray (Recharge 6)",
					detail: "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 27,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ape",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 14,
				con: 14,
				int: 6,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The ape makes two fist attacks."
				}, {
					name: "Fist",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) bludgeoning damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +5 to hit, range 25/50 ft., one target. _Hit:_ 6 (1d6 + 3) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 28,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Archmage",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "15 with _mage armor_"
			},
			hp: {
				average: 99,
				modifier: null,
				roll: "18d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 14,
				con: 12,
				int: 20,
				wis: 15,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "int"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "damage from spells"
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any six languages"
				}
			],
			challenge: {
				rating: "12",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The archmage has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Spellcasting",
					detail: "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:\n\n• Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp\n• 1st level (4 slots): detect magic, identify, mage armor*, magic missile\n• 2nd level (3 slots): detect thoughts, mirror image, misty step\n• 3rd level (3 slots): counterspell,fly, lightning bolt\n• 4th level (3 slots): banishment, fire shield, stoneskin*\n• 5th level (3 slots): cone of cold, scrying, wall of force\n• 6th level (1 slot): globe of invulnerability\n• 7th level (1 slot): teleport\n• 8th level (1 slot): mind blank*\n• 9th level (1 slot): time stop\n* The archmage casts these spells on itself before combat."
				}
			],
			actions: [
				{
					name: "Dagger",
					detail: "_Melee or _Ranged Weapon Attack:__ +6 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 4 (1d4 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 29,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Assassin",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "studded leather"
			},
			hp: {
				average: 78,
				modifier: null,
				roll: "12d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 16,
				con: 14,
				int: 13,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "int"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "acrobatics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "poison",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Thieves' cant plus any two languages"
				}
			],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Assassinate",
					detail: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
				}, {
					name: "Evasion",
					detail: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
				}, {
					name: "Sneak Attack (1/Turn)",
					detail: "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The assassin makes two shortsword attacks."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Light Crossbow",
					detail: "_Ranged Weapon Attack:_ +6 to hit, range 80/320 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 30,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Awakened Shrub",
				size: "small",
				type: "plant",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 9,
				modifier: null,
				type: null
			},
			hp: {
				average: 10,
				modifier: null,
				roll: "3d6"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 8,
				con: 11,
				int: 10,
				wis: 10,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "fire",
					custom: null
				}
			],
			resistances: [
				{
					type: "piercing",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "One language known by its creator"
				}
			],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the shrub remains motionless, it is indistinguishable from a normal shrub."
				}
			],
			actions: [
				{
					name: "Rake",
					detail: "_Melee Weapon Attack:_ +1 to hit, reach 5 ft., one target. _Hit:_ 1 (1d4 — 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 31,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Awakened Tree",
				size: "huge",
				type: "plant",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 59,
				modifier: null,
				roll: "7d12"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 6,
				con: 15,
				int: 10,
				wis: 10,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "fire",
					custom: null
				}
			],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "One language known by its creator"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the tree remains motionless, it is indistinguishable from a normal tree."
				}
			],
			actions: [
				{
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 14 (3d6 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 32,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Axe Beak",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 12,
				con: 12,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 6 (1d8 + 2) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 33,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Azer",
				size: "medium",
				type: "elemental",
				alignment: "lawful neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor, shield"
			},
			hp: {
				average: 39,
				modifier: null,
				roll: "6d8 + 12"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 12,
				con: 15,
				int: 12,
				wis: 13,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "ignan",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Heated Body",
					detail: "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage."
				}, {
					name: "Heated Weapons",
					detail: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
				}, {
					name: "Illumination",
					detail: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
				}
			],
			actions: [
				{
					name: "Warhammer",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 34,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Baboon",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 3,
				modifier: null,
				roll: "1d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 8,
				dex: 14,
				con: 11,
				int: 4,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Pack Tactics",
					detail: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +1 to hit, reach 5 ft., one target. _Hit:_ 1 (1d4 — 1) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 35,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Badger",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 3,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: "5 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 4,
				dex: 11,
				con: 12,
				int: 2,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.563Z",
		updated: "2019-07-16T23:22:13.563Z"
	},
	{
		id: 36,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Balor",
				size: "huge",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 262,
				modifier: null,
				roll: "21d12 + 126"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 26,
				dex: 15,
				con: 22,
				int: 20,
				wis: 16,
				cha: 22,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "19",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Death Throes",
					detail: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
				}, {
					name: "Fire Aura",
					detail: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
				}, {
					name: "Magic Resistance",
					detail: "The balor has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The balor's weapon attacks are magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The balor makes two attacks: one with its longsword and one with its whip."
				}, {
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft., one target. _Hit:_ 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
				}, {
					name: "Whip",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 30 ft., one target. _Hit:_ 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor."
				}, {
					name: "Teleport",
					detail: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
				}, {
					name: "Variant: Summon Demon (1/Day)",
					detail: "The demon chooses what to summon and attempts a magical summoning.\nA balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 37,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bandit",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 12,
				con: 12,
				int: 10,
				wis: 10,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Scimitar",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) slashing damage."
				}, {
					name: "Light Crossbow",
					detail: "_Ranged Weapon Attack:_ +3 to hit, range 80 ft./320 ft., one target. _Hit:_ 5 (1d8 + 1) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 38,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bandit Captain",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "studded leather"
			},
			hp: {
				average: 65,
				modifier: null,
				roll: "10d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 16,
				con: 14,
				int: 14,
				wis: 11,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any two languages"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
				}, {
					name: "Scimitar",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) slashing damage."
				}, {
					name: "Dagger",
					detail: "_Melee or _Ranged Weapon Attack:__ +5 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 5 (1d4 + 3) piercing damage."
				}
			],
			reactions: [
				{
					name: "Parry",
					detail: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 39,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Barbed Devil",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 110,
				modifier: null,
				roll: "13d8 + 52"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 17,
				con: 18,
				int: 12,
				wis: 14,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Barbed Hide",
					detail: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it."
				}, {
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the devil's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The devil has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft ., one target. _Hit:_ 6 (1d6 + 3) piercing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) piercing damage."
				}, {
					name: "Hurl Flame",
					detail: "_Ranged Spell Attack:_ +5 to hit, range 150 ft., one target. _Hit:_ 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 40,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Basilisk",
				size: "medium",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "8d8 + 16"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 8,
				con: 15,
				int: 2,
				wis: 8,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Petrifying Gaze",
					detail: "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\nIf the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 41,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bat",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "5 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 2,
				dex: 15,
				con: 8,
				int: 2,
				wis: 12,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Echolocation",
					detail: "The bat can't use its blindsight while deafened."
				}, {
					name: "Keen Hearing",
					detail: "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +0 to hit, reach 5 ft., one creature. _Hit:_ 1 piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 42,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bearded Devil",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "8d8 + 16"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 15,
				con: 15,
				int: 9,
				wis: 11,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the devil's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The devil has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Steadfast",
					detail: "The devil can't be frightened while it can see an allied creature within 30 feet of it."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The devil makes two attacks: one with its beard and one with its glaive."
				}, {
					name: "Beard",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one creature. _Hit:_ 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Glaive",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 10 ft., one target. _Hit:_ 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.564Z",
		updated: "2019-07-16T23:22:13.564Z"
	},
	{
		id: 43,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Behir",
				size: "huge",
				type: "monstrosity",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 168,
				modifier: null,
				roll: "16d12 + 64"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 16,
				con: 18,
				int: 7,
				wis: 14,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "90 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The behir makes two attacks: one with its bite and one to constrict."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 22 (3d10 + 6) piercing damage."
				}, {
					name: "Constrict",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one Large or smaller creature. _Hit:_ 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends."
				}, {
					name: "Lightning Breath (Recharge 5-6)",
					detail: "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Swallow",
					detail: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 44,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Berserker",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "hide armor"
			},
			hp: {
				average: 67,
				modifier: null,
				roll: "9d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 12,
				con: 17,
				int: 9,
				wis: 11,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Reckless",
					detail: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
				}
			],
			actions: [
				{
					name: "Greataxe",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 9 (1d12 + 3) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 45,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Black Bear",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 10,
				con: 14,
				int: 2,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The bear makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 7 (2d4 + 2) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 46,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Black Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 33,
				modifier: null,
				roll: "6d8 + 6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 15,
				dex: 14,
				con: 13,
				int: 10,
				wis: 11,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage."
				}, {
					name: "Acid Breath (Recharge 5-6)",
					detail: "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 47,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Black Pudding",
				size: "large",
				type: "ooze",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 7,
				modifier: null,
				type: null
			},
			hp: {
				average: 85,
				modifier: null,
				roll: "10d10 + 30"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 5,
				con: 16,
				int: 1,
				wis: 6,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}, {
					type: "cold",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "prone",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amorphous",
					detail: "The pudding can move through a space as narrow as 1 inch wide without squeezing."
				}, {
					name: "Corrosive Form",
					detail: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
				}, {
					name: "Spider Climb",
					detail: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}
			],
			actions: [
				{
					name: "Pseudopod",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
				}
			],
			reactions: [
				{
					name: "Split",
					detail: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 48,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Blink Dog",
				size: "medium",
				type: "fey",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "4d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 17,
				con: 12,
				int: 10,
				wis: 13,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands sylvan but can't speak it"
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Smell",
					detail: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage."
				}, {
					name: "Teleport (Recharge 4-6)",
					detail: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 49,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Blood Hawk",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 7,
				modifier: null,
				roll: "2d6"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 14,
				con: 10,
				int: 3,
				wis: 14,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
				}, {
					name: "Pack Tactics",
					detail: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 50,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Blue Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "8d8 + 16"
			},
			speed: {
				normal: "30 ft.",
				burrow: "15 ft.",
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 10,
				con: 15,
				int: 12,
				wis: 11,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage."
				}, {
					name: "Lightning Breath (Recharge 5-6)",
					detail: "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 51,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Boar",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 11,
				con: 12,
				int: 2,
				wis: 9,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
				}, {
					name: "Relentless (Recharges after a Short or Long Rest)",
					detail: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
				}
			],
			actions: [
				{
					name: "Tusk",
					detail: "Weapon Attack: +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 52,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bone Devil",
				size: "large",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 142,
				modifier: null,
				roll: "15d10 + 60"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 16,
				con: 18,
				int: 13,
				wis: 14,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "12",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the devil's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The devil has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The devil makes three attacks: two with its claws and one with its sting."
				}, {
					name: "Multiattack",
					detail: "The devil makes three attacks: two with its claws and one with its sting."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 8 (1d8 + 4) slashing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 8 (1d8 + 4) slashing damage."
				}, {
					name: "Sting",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success ."
				}, {
					name: "Sting",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success ."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 53,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Brass Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 16,
				modifier: null,
				roll: "3d8 + 3"
			},
			speed: {
				normal: "30 ft.",
				burrow: "15 ft.",
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 10,
				con: 13,
				int: 10,
				wis: 11,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (1d10 + 2) piercing damage."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Fire Breath.** The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.\n**Sleep Breath.** The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.565Z",
		updated: "2019-07-16T23:22:13.565Z"
	},
	{
		id: 54,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bronze Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 32,
				modifier: null,
				roll: "5d8 + 10"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 17,
				dex: 10,
				con: 15,
				int: 12,
				wis: 11,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 8 (1d10 + 3) piercing damage."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Lightning Breath.** The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.\n**Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 55,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Brown Bear",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 34,
				modifier: null,
				roll: "4d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 10,
				con: 16,
				int: 2,
				wis: 13,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The bear makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "Weapon Attack: +5 to hit, reach 5 ft., one target. _Hit:_ 8 (1d8 + 4) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 56,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bugbear",
				size: "medium",
				type: "humanoid",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "goblinoid"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "hide armor, shield"
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "5d8 + 5"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 14,
				con: 13,
				int: 8,
				wis: 11,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "survival",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "goblin",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Brute",
					detail: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
				}, {
					name: "Surprise Attack",
					detail: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
				}
			],
			actions: [
				{
					name: "Morningstar",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 11 (2d8 + 2) piercing damage."
				}, {
					name: "Javelin",
					detail: "_Melee or _Ranged Weapon Attack:__ +4 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 57,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Bulette",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 94,
				modifier: null,
				roll: "9d10 + 45"
			},
			speed: {
				normal: "40 ft.",
				burrow: "40 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 11,
				con: 21,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: "60 ft.",
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Standing Leap",
					detail: "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 30 (4d12 + 4) piercing damage."
				}, {
					name: "Deadly Leap",
					detail: "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 58,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Camel",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 9,
				modifier: null,
				type: null
			},
			hp: {
				average: 15,
				modifier: null,
				roll: "2d10"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 8,
				con: 14,
				int: 2,
				wis: 8,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 2 (1d4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 59,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Cat",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 2,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 15,
				con: 10,
				int: 3,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The cat has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +0 to hit, reach 5 ft., one target. _Hit:_ 1 slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 60,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Centaur",
				size: "large",
				type: "monstrosity",
				alignment: "neutral good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d10 + 12"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 14,
				con: 14,
				int: 9,
				wis: 13,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "survival",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "elvish",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
				}, {
					name: "Pike",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 9 (1d10 + 4) piercing damage."
				}, {
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 150/600 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 61,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Chain Devil",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 85,
				modifier: null,
				roll: "10d8 + 40"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 18,
				int: 11,
				wis: 12,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the devil's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The devil has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The devil makes two attacks with its chains."
				}, {
					name: "Chain",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns."
				}, {
					name: "Animate Chains (Recharges after a Short or Long Rest)",
					detail: "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.\nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
				}
			],
			reactions: [
				{
					name: "Unnerving Mask",
					detail: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 62,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Chimera",
				size: "large",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 114,
				modifier: null,
				roll: "12d10 + 48"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 11,
				con: 19,
				int: 3,
				wis: 14,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands draconic but can't speak"
				}
			],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) piercing damage."
				}, {
					name: "Horns",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 10 (1d12 + 4) bludgeoning damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) slashing damage."
				}, {
					name: "Fire Breath (Recharge 5-6)",
					detail: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 63,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Chuul",
				size: "large",
				type: "aberration",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 93,
				modifier: null,
				roll: "11d10 + 33"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 19,
				dex: 10,
				con: 16,
				int: 5,
				wis: 11,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands deep speech but can't speak"
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The chuul can breathe air and water."
				}, {
					name: "Sense Magic",
					detail: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
				}, {
					name: "Pincer",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled."
				}, {
					name: "Tentacles",
					detail: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 64,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Clay Golem",
				size: "large",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 133,
				modifier: null,
				roll: "14d10 + 56"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 20,
				dex: 9,
				con: 18,
				int: 3,
				wis: 8,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}, {
					type: "poison",
					custom: null
				}, {
					type: "psychic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't adamantine"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands the languages of its creator but can't speak"
				}
			],
			challenge: {
				rating: "9",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Acid Absorption",
					detail: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
				}, {
					name: "Berserk",
					detail: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
				}, {
					name: "Immutable Form",
					detail: "The golem is immune to any spell or effect that would alter its form."
				}, {
					name: "Magic Resistance",
					detail: "The golem has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The golem's weapon attacks are magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The golem makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic."
				}, {
					name: "Haste (Recharge 5-6)",
					detail: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 65,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Cloaker",
				size: "large",
				type: "aberration",
				alignment: "chaotic neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 78,
				modifier: null,
				roll: "12d10 + 12"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 15,
				con: 12,
				int: 13,
				wis: 12,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "deep speech",
					custom: null
				}, {
					name: "undercommon",
					custom: null
				}
			],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Damage Transfer",
					detail: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half."
				}, {
					name: "False Appearance",
					detail: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
				}, {
					name: "Light Sensitivity",
					detail: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The cloaker makes two attacks: one with its bite and one with its tail."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one creature. _Hit:_ 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one creature. _Hit:_ 7 (1d8 + 3) slashing damage."
				}, {
					name: "Moan",
					detail: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
				}, {
					name: "Phantasms (Recharges after a Short or Long Rest)",
					detail: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 66,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Cloud Giant",
				size: "huge",
				type: "giant",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 200,
				modifier: null,
				roll: "16d12 + 96"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 27,
				dex: 10,
				con: 22,
				int: 12,
				wis: 16,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "9",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The giant has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Innate Spellcasting",
					detail: "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, fog cloud, light\n3/day each: feather fall, fly, misty step, telekinesis\n1/day each: control weather, gaseous form"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The giant makes two morningstar attacks."
				}, {
					name: "Morningstar",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 10 ft., one target. _Hit:_ 21 (3d8 + 8) piercing damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +12 to hit, range 60/240 ft., one target. _Hit:_ 30 (4d10 + 8) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 67,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Cockatrice",
				size: "small",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "6d6 + 6"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 12,
				con: 12,
				int: 2,
				wis: 13,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one creature. _Hit:_ 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 68,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Commoner",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 4,
				modifier: null,
				roll: "1d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 10,
				con: 10,
				int: 10,
				wis: 10,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Club",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 2 (1d4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 69,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Constrictor Snake",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "2d10"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 15,
				dex: 14,
				con: 12,
				int: 1,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Constrict",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.566Z",
		updated: "2019-07-16T23:22:13.566Z"
	},
	{
		id: 70,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Copper Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "4d8 + 4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 12,
				con: 13,
				int: 14,
				wis: 11,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (1d10 + 2) piercing damage."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Acid Breath.** The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.\n**Slowing Breath.** The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 71,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Couatl",
				size: "medium",
				type: "celestial",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 97,
				modifier: null,
				roll: "13d8 + 39"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "90 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 20,
				con: 17,
				int: 18,
				wis: 20,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "radiant",
					custom: null
				}
			],
			immunities: [
				{
					type: "psychic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "all",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Innate Spellcasting",
					detail: "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n1/day each: dream, greater restoration, scrying"
				}, {
					name: "Magic Weapons",
					detail: "The couatl's weapon attacks are magical."
				}, {
					name: "Shielded Mind",
					detail: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one creature. _Hit:_ 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
				}, {
					name: "Constrict",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one Medium or smaller creature. _Hit:_ 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
				}, {
					name: "Change Shape",
					detail: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 72,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Crab",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 2,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "20 ft.",
				other: null
			},
			abilities: {
				str: 2,
				dex: 11,
				con: 10,
				int: 1,
				wis: 8,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The crab can breathe air and water."
				}
			],
			actions: [
				{
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +0 to hit, reach 5 ft., one target. _Hit:_ 1 bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 73,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Crocodile",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "20 ft.",
				other: null
			},
			abilities: {
				str: 15,
				dex: 10,
				con: 13,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "The crocodile can hold its breath for 15 minutes."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target"
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 74,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Cult Fanatic",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "6d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 14,
				con: 12,
				int: 10,
				wis: 13,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Dark Devotion",
					detail: "The fanatic has advantage on saving throws against being charmed or frightened."
				}, {
					name: "Spellcasting",
					detail: "The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (4 slots): command, inflict wounds, shield of faith\n• 2nd level (3 slots): hold person, spiritual weapon"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The fanatic makes two melee attacks."
				}, {
					name: "Dagger",
					detail: "_Melee or _Ranged Weapon Attack:__ +4 to hit, reach 5 ft. or range 20/60 ft., one creature. _Hit:_ 4 (1d4 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 75,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Cultist",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 9,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 12,
				con: 10,
				int: 10,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Dark Devotion",
					detail: "The cultist has advantage on saving throws against being charmed or frightened."
				}
			],
			actions: [
				{
					name: "Scimitar",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d6 + 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 76,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Darkmantle",
				size: "small",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d6 + 5"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 12,
				con: 13,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Echolocation",
					detail: "The darkmantle can't use its blindsight while deafened."
				}, {
					name: "False Appearance",
					detail: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
				}
			],
			actions: [
				{
					name: "Crush",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one creature. _Hit:_ 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
				}, {
					name: "Darkness Aura (1/day)",
					detail: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 77,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Death Dog",
				size: "medium",
				type: "monstrosity",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 39,
				modifier: null,
				roll: "6d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 14,
				con: 14,
				int: 3,
				wis: 13,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Two-Headed",
					detail: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dog makes two bite attacks."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 78,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Deep Gnome (Svirfneblin)",
				size: "small",
				type: "humanoid",
				alignment: "neutral good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "gnome"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "chain shirt"
			},
			hp: {
				average: 16,
				modifier: null,
				roll: "3d6"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 14,
				con: 14,
				int: 12,
				wis: 10,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "investigation",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "gnomish",
					custom: null
				}, {
					name: "terran",
					custom: null
				}, {
					name: "undercommon",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Stone Camouflage",
					detail: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
				}, {
					name: "Gnome Cunning",
					detail: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
				}, {
					name: "Innate Spellcasting",
					detail: "The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: nondetection (self only)\n1/day each: blindness/deafness, blur, disguise self"
				}
			],
			actions: [
				{
					name: "War Pick",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage."
				}, {
					name: "Poisoned Dart",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 30/120 ft., one creature. _Hit:_ 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 79,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Deer",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 4,
				modifier: null,
				roll: "1d8"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 16,
				con: 11,
				int: 2,
				wis: 14,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 2 (1d4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 80,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Deva",
				size: "medium",
				type: "celestial",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 136,
				modifier: null,
				roll: "16d8 + 64"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "90 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 18,
				con: 18,
				int: 17,
				wis: 20,
				cha: 20,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "radiant",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "all",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "10",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Angelic Weapons",
					detail: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
				}, {
					name: "Innate Spellcasting",
					detail: "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:\nAt will: detect evil and good\n1/day each: commune, raise dead"
				}, {
					name: "Magic Resistance",
					detail: "The deva has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The deva makes two melee attacks."
				}, {
					name: "Mace",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage."
				}, {
					name: "Healing Touch (3/Day)",
					detail: "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
				}, {
					name: "Change Shape",
					detail: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 81,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Dire Wolf",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 37,
				modifier: null,
				roll: "5d10"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 15,
				con: 15,
				int: 3,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Smell",
					detail: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}, {
					name: "Pack Tactics",
					detail: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 82,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Djinni",
				size: "large",
				type: "elemental",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 161,
				modifier: null,
				roll: "14d10 + 84"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "90 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 21,
				dex: 15,
				con: 22,
				int: 15,
				wis: 16,
				cha: 20,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}, {
					type: "thunder",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "auran",
					custom: null
				}
			],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Elemental Demise",
					detail: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
				}, {
					name: "Innate Spellcasting",
					detail: "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, detect magic, thunderwave 3/day each: create food and water (can create wine instead of water), tongues, wind walk\n1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
				}, {
					name: "Variant: Genie Powers",
					detail: "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.\n\nDisguises.\nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.\nWishes.\nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.\nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The djinni makes three scimitar attacks."
				}, {
					name: "Scimitar",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one target. _Hit:_ 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
				}, {
					name: "Create Whirlwind",
					detail: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 83,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Doppelganger",
				size: "medium",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "shapechanger"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: null
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "8d8 + 16"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 18,
				con: 14,
				int: 11,
				wis: 12,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Shapechanger",
					detail: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
				}, {
					name: "Ambusher",
					detail: "The doppelganger has advantage on attack rolls against any creature it has surprised."
				}, {
					name: "Surprise Attack",
					detail: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The doppelganger makes two melee attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 7 (1d6 + 4) bludgeoning damage."
				}, {
					name: "Read Thoughts",
					detail: "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 84,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Draft Horse",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 10,
				con: 12,
				int: 2,
				wis: 11,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 9 (2d4 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 85,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Dragon Turtle",
				size: "gargantuan",
				type: "dragon",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 20,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 341,
				modifier: null,
				roll: "22d20 + 110"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 25,
				dex: 10,
				con: 20,
				int: 10,
				wis: 12,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "fire",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "aquan",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "17",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon turtle can breathe air and water."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 15 ft., one target. _Hit:_ 26 (3d12 + 7) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 10 ft., one target. _Hit:_ 16 (2d8 + 7) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 15 ft., one target. _Hit:_ 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone."
				}, {
					name: "Steam Breath (Recharge 5-6)",
					detail: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 86,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Dretch",
				size: "small",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 18,
				modifier: null,
				roll: "4d6 + 4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 11,
				con: 12,
				int: 5,
				wis: 8,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 60 ft. (works only with creatures that understand abyssal)"
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The dretch makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 3 (1d6) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 5 (2d4) slashing damage."
				}, {
					name: "Fetid Cloud (1/Day)",
					detail: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 87,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Drider",
				size: "large",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 123,
				modifier: null,
				roll: "13d10 + 52"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 16,
				con: 18,
				int: 13,
				wis: 14,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "elvish",
					custom: null
				}, {
					name: "undercommon",
					custom: null
				}
			],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Fey Ancestry",
					detail: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
				}, {
					name: "Innate Spellcasting",
					detail: "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie fire"
				}, {
					name: "Spider Climb",
					detail: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Sunlight Sensitivity",
					detail: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}, {
					name: "Web Walker",
					detail: "The drider ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one creature. _Hit:_ 2 (1d4) piercing damage plus 9 (2d8) poison damage."
				}, {
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +6 to hit, range 150/600 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 88,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Drow",
				size: "medium",
				type: "humanoid",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "elf"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "chain shirt"
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 14,
				con: 10,
				int: 11,
				wis: 11,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "elvish",
					custom: null
				}, {
					name: "undercommon",
					custom: null
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Fey Ancestry",
					detail: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
				}, {
					name: "Innate Spellcasting",
					detail: "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie fire"
				}, {
					name: "Sunlight Sensitivity",
					detail: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Hand Crossbow",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 30/120 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 89,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Druid",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "16 with _barkskin_"
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 12,
				con: 13,
				int: 12,
				wis: 15,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "medicine",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "nature",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Druidic plus any two languages"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spellcasting",
					detail: "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:\n\n• Cantrips (at will): druidcraft, produce flame, shillelagh\n• 1st level (4 slots): entangle, longstrider, speak with animals, thunderwave\n• 2nd level (3 slots): animal messenger, barkskin"
				}
			],
			actions: [
				{
					name: "Quarterstaff",
					detail: "_Melee Weapon Attack:_ +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. _Hit:_ 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 90,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Dryad",
				size: "medium",
				type: "fey",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "16 with _barkskin_"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 12,
				con: 11,
				int: 14,
				wis: 15,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "elvish",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Innate Spellcasting",
					detail: "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:\n\nAt will: druidcraft\n3/day each: entangle, goodberry\n1/day each: barkskin, pass without trace, shillelagh"
				}, {
					name: "Magic Resistance",
					detail: "The dryad has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Speak with Beasts and Plants",
					detail: "The dryad can communicate with beasts and plants as if they shared a language."
				}, {
					name: "Tree Stride",
					detail: "Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger."
				}
			],
			actions: [
				{
					name: "Club",
					detail: "_Melee Weapon Attack:_ +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. _Hit:_ 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh."
				}, {
					name: "Fey Charm",
					detail: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.567Z",
		updated: "2019-07-16T23:22:13.567Z"
	},
	{
		id: 91,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Duergar",
				size: "medium",
				type: "humanoid",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "dwarf"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "scale mail, shield"
			},
			hp: {
				average: 26,
				modifier: null,
				roll: "4d8 + 8"
			},
			speed: {
				normal: "25 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 11,
				con: 14,
				int: 11,
				wis: 10,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "poison",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "dwarvish",
					custom: null
				}, {
					name: "undercommon",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Duergar Resilience",
					detail: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
				}, {
					name: "Sunlight Sensitivity",
					detail: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Enlarge (Recharges after a Short or Long Rest)",
					detail: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
				}, {
					name: "War Pick",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
				}, {
					name: "Javelin",
					detail: "_Melee or _Ranged Weapon Attack:__ +4 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged."
				}, {
					name: "Invisibility (Recharges after a Short or Long Rest)",
					detail: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 92,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Dust Mephit",
				size: "small",
				type: "elemental",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 17,
				modifier: null,
				roll: "5d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 5,
				dex: 14,
				con: 10,
				int: 9,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [
				{
					type: "fire",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "auran",
					custom: null
				}, {
					name: "terran",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Death Burst",
					detail: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
				}, {
					name: "Innate Spellcasting (1/Day)",
					detail: "The mephit can innately cast _sleep_, requiring no material components. Its innate spellcasting ability is Charisma."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d4 + 2) slashing damage."
				}, {
					name: "Blinding Breath (Recharge 6)",
					detail: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Variant: Summon Mephits (1/Day)",
					detail: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 93,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Eagle",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 3,
				modifier: null,
				roll: "1d6"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 15,
				con: 10,
				int: 2,
				wis: 14,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 94,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Earth Elemental",
				size: "large",
				type: "elemental",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 126,
				modifier: null,
				roll: "12d10 + 60"
			},
			speed: {
				normal: "30 ft.",
				burrow: "30 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 20,
				dex: 8,
				con: 20,
				int: 5,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "thunder",
					custom: null
				}
			],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "unconscious",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: "60 ft.",
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "terran",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Earth Glide",
					detail: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
				}, {
					name: "Siege Monster",
					detail: "The elemental deals double damage to objects and structures."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The elemental makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 14 (2d8 + 5) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 95,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Efreeti",
				size: "large",
				type: "elemental",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 200,
				modifier: null,
				roll: "16d10 + 112"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 22,
				dex: 12,
				con: 24,
				int: 16,
				wis: 15,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "ignan",
					custom: null
				}
			],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Elemental Demise",
					detail: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying."
				}, {
					name: "Innate Spellcasting",
					detail: "The efreeti's innate spell casting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic\n3/day: enlarge/reduce, tongues\n1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire"
				}, {
					name: "Variant: Genie Powers",
					detail: "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.\n\nDisguises.\nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.\nWishes.\nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.\nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
				}, {
					name: "Scimitar",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one target. _Hit:_ 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage."
				}, {
					name: "Hurl Flame",
					detail: "_Ranged Spell Attack:_ +7 to hit, range 120 ft., one target. _Hit:_ 17 (5d6) fire damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 96,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Elephant",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 76,
				modifier: null,
				roll: "8d12"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 22,
				dex: 9,
				con: 17,
				int: 3,
				wis: 11,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Trampling Charge",
					detail: "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 19 (3d8 + 6) piercing damage."
				}, {
					name: "Stomp",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one prone creature. _Hit:_ 22 (3d10 + 6) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 97,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Elk",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "2d10"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 10,
				con: 12,
				int: 2,
				wis: 10,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
				}
			],
			actions: [
				{
					name: "Ram",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) bludgeoning damage."
				}, {
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one prone creature. _Hit:_ 8 (2d4 + 3) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 98,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Erinyes",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "plate"
			},
			hp: {
				average: 153,
				modifier: null,
				roll: "18d8 + 72"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 16,
				con: 18,
				int: 14,
				wis: 14,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "12",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hellish Weapons",
					detail: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
				}, {
					name: "Magic Resistance",
					detail: "The erinyes has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The erinyes makes three attacks"
				}, {
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +7 to hit, range 150/600 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic."
				}, {
					name: "Variant: Rope of Entanglement",
					detail: "Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks."
				}
			],
			reactions: [
				{
					name: "Parry",
					detail: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 99,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ettercap",
				size: "medium",
				type: "monstrosity",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 44,
				modifier: null,
				roll: "8d8 + 8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 15,
				con: 13,
				int: 7,
				wis: 12,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "survival",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spider Climb",
					detail: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Web Sense",
					detail: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
				}, {
					name: "Web Walker",
					detail: "The ettercap ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The ettercap makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (2d4 + 2) slashing damage."
				}, {
					name: "Web (Recharge 5-6)",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 30/60 ft., one Large or smaller creature. _Hit:_ The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage."
				}, {
					name: "Variant: Web Garrote",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. _Hit:_ 4 (1d4 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 100,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ettin",
				size: "large",
				type: "giant",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 85,
				modifier: null,
				roll: "10d10 + 30"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 21,
				dex: 8,
				con: 17,
				int: 6,
				wis: 10,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "giant",
					custom: null
				}, {
					name: "orc",
					custom: null
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Two Heads",
					detail: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
				}, {
					name: "Wakeful",
					detail: "When one of the ettin's heads is asleep, its other head is awake."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
				}, {
					name: "Battleaxe",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 14 (2d8 + 5) slashing damage."
				}, {
					name: "Morningstar",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 14 (2d8 + 5) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 101,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Fire Elemental",
				size: "large",
				type: "elemental",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 102,
				modifier: null,
				roll: "12d10 + 36"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 17,
				con: 16,
				int: 6,
				wis: 10,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "unconscious",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "ignan",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Fire Form",
					detail: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
				}, {
					name: "Illumination",
					detail: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft.."
				}, {
					name: "Water Susceptibility",
					detail: "For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The elemental makes two touch attacks."
				}, {
					name: "Touch",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 102,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Fire Giant",
				size: "huge",
				type: "giant",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "plate"
			},
			hp: {
				average: 162,
				modifier: null,
				roll: "13d12 + 78"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 25,
				dex: 9,
				con: 23,
				int: 10,
				wis: 14,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "9",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The giant makes two greatsword attacks."
				}, {
					name: "Greatsword",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 10 ft., one target. _Hit:_ 28 (6d6 + 7) slashing damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +11 to hit, range 60/240 ft., one target. _Hit:_ 29 (4d10 + 7) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 103,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Flesh Golem",
				size: "medium",
				type: "construct",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 9,
				modifier: null,
				type: null
			},
			hp: {
				average: 93,
				modifier: null,
				roll: "11d8 + 44"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 9,
				con: 18,
				int: 6,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}, {
					type: "poison",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't adamantine"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands the languages of its creator but can't speak"
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Berserk",
					detail: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.\nThe golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
				}, {
					name: "Aversion of Fire",
					detail: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
				}, {
					name: "Immutable Form",
					detail: "The golem is immune to any spell or effect that would alter its form."
				}, {
					name: "Lightning Absorption",
					detail: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
				}, {
					name: "Magic Resistance",
					detail: "The golem has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The golem's weapon attacks are magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The golem makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 104,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Flying Snake",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: null
			},
			hp: {
				average: 5,
				modifier: null,
				roll: "2d4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 4,
				dex: 18,
				con: 11,
				int: 2,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Flyby",
					detail: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage plus 7 (3d4) poison damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 105,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Flying Sword",
				size: "small",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 17,
				modifier: null,
				roll: "5d6"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 15,
				con: 11,
				int: 1,
				wis: 5,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}, {
					type: "psychic",
					custom: null
				}
			],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Antimagic Susceptibility",
					detail: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
				}, {
					name: "False Appearance",
					detail: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
				}
			],
			actions: [
				{
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 5 (1d8 + 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 106,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Frog",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "20 ft.",
				other: null
			},
			abilities: {
				str: 1,
				dex: 13,
				con: 8,
				int: 1,
				wis: 8,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The frog can breathe air and water"
				}, {
					name: "Standing Leap",
					detail: "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
				}
			],
			actions: [],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 107,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Frost Giant",
				size: "huge",
				type: "giant",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "patchwork armor"
			},
			hp: {
				average: 138,
				modifier: null,
				roll: "12d12 + 60"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 9,
				con: 21,
				int: 9,
				wis: 10,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The giant makes two greataxe attacks."
				}, {
					name: "Greataxe",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 25 (3d12 + 6) slashing damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +9 to hit, range 60/240 ft., one target. _Hit:_ 28 (4d10 + 6) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 108,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gargoyle",
				size: "medium",
				type: "elemental",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "7d8 + 21"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 11,
				con: 16,
				int: 6,
				wis: 11,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't adamantine"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "terran",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the gargoyle remains motion less, it is indistinguishable from an inanimate statue."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The gargoyle makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 109,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gelatinous Cube",
				size: "large",
				type: "ooze",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 6,
				modifier: null,
				type: null
			},
			hp: {
				average: 84,
				modifier: null,
				roll: "8d10 + 40"
			},
			speed: {
				normal: "15 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 3,
				con: 20,
				int: 1,
				wis: 6,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "prone",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Ooze Cube",
					detail: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.\nCreatures inside the cube can be seen but have total cover.\nA creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.\nThe cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time."
				}, {
					name: "Transparent",
					detail: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube."
				}
			],
			actions: [
				{
					name: "Pseudopod",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 10 (3d6) acid damage."
				}, {
					name: "Engulf",
					detail: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 110,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ghast",
				size: "medium",
				type: "undead",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 36,
				modifier: null,
				roll: "8d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 17,
				con: 10,
				int: 11,
				wis: 10,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "necrotic",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Stench",
					detail: "Any creature that starts its turn within 5 ft. of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours."
				}, {
					name: "Turn Defiance",
					detail: "The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one creature. _Hit:_ 12 (2d8 + 3) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 111,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ghost",
				size: "medium",
				type: "undead",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "10d8"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 13,
				con: 10,
				int: 10,
				wis: 12,
				cha: 17,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "acid",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "thunder",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "cold",
					custom: null
				}, {
					type: "necrotic",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any languages it knew in life"
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Ethereal Sight",
					detail: "The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa."
				}, {
					name: "Incorporeal Movement",
					detail: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
				}
			],
			actions: [
				{
					name: "Withering Touch",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 17 (4d6 + 3) necrotic damage."
				}, {
					name: "Etherealness",
					detail: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
				}, {
					name: "Horrifying Visage",
					detail: "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
				}, {
					name: "Possession (Recharge 6)",
					detail: "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 112,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ghoul",
				size: "medium",
				type: "undead",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 15,
				con: 10,
				int: 7,
				wis: 10,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one creature. _Hit:_ 9 (2d6 + 2) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 113,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Ape",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 157,
				modifier: null,
				roll: "15d12"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 14,
				con: 18,
				int: 7,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "7",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The ape makes two fist attacks."
				}, {
					name: "Fist",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 22 (3d10 + 6) bludgeoning damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +9 to hit, range 50/100 ft., one target. _Hit:_ 30 (7d6 + 6) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 114,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Badger",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: "10 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 10,
				con: 15,
				int: 2,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The badger has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The badger makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 6 (2d4 + 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 115,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Bat",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "4d10"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 16,
				con: 11,
				int: 2,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Echolocation",
					detail: "The bat can't use its blindsight while deafened."
				}, {
					name: "Keen Hearing",
					detail: "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 116,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Boar",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 42,
				modifier: null,
				roll: "5d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 10,
				con: 16,
				int: 2,
				wis: 7,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
				}, {
					name: "Relentless (Recharges after a Short or Long Rest)",
					detail: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
				}
			],
			actions: [
				{
					name: "Tusk",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.568Z",
		updated: "2019-07-16T23:22:13.568Z"
	},
	{
		id: 117,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Centipede",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 4,
				modifier: null,
				roll: "1d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 5,
				dex: 14,
				con: 12,
				int: 1,
				wis: 7,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "Bite. _Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 118,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Constrictor Snake",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 60,
				modifier: null,
				roll: "8d12"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 19,
				dex: 14,
				con: 12,
				int: 1,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one creature. _Hit:_ 11 (2d6 + 4) piercing damage."
				}, {
					name: "Constrict",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one creature. _Hit:_ 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 119,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Crab",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 13,
				dex: 15,
				con: 11,
				int: 1,
				wis: 9,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The crab can breathe air and water."
				}
			],
			actions: [
				{
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 120,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Crocodile",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 85,
				modifier: null,
				roll: "9d12"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "50 ft.",
				other: null
			},
			abilities: {
				str: 21,
				dex: 9,
				con: 17,
				int: 2,
				wis: 10,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "The crocodile can hold its breath for 30 minutes."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The crocodile makes two attacks: one with its bite and one with its tail."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target not grappled by the crocodile. _Hit:_ 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 121,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Eagle",
				size: "large",
				type: "beast",
				alignment: "neutral good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 26,
				modifier: null,
				roll: "4d10"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 17,
				con: 13,
				int: 8,
				wis: 14,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Giant Eagle"
				}, {
					name: "custom",
					custom: "Understands common and auran but can't speak"
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The eagle makes two attacks: one with its beak and one with its talons."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) piercing damage."
				}, {
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 122,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Elk",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 42,
				modifier: null,
				roll: "5d12"
			},
			speed: {
				normal: "60 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 16,
				con: 14,
				int: 7,
				wis: 14,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Giant Elk"
				}, {
					name: "custom",
					custom: "Understands common, elvish, and sylvan but can't speak"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
				}
			],
			actions: [
				{
					name: "Ram",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}, {
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one prone creature. _Hit:_ 22 (4d8 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 123,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Fire Beetle",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 4,
				modifier: null,
				roll: "1d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 8,
				dex: 10,
				con: 12,
				int: 1,
				wis: 7,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Illumination",
					detail: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +1 to hit, reach 5 ft., one target. _Hit:_ 2 (1d6 — 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 124,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Frog",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 18,
				modifier: null,
				roll: "4d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 12,
				dex: 13,
				con: 11,
				int: 2,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The frog can breathe air and water"
				}, {
					name: "Standing Leap",
					detail: "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target."
				}, {
					name: "Swallow",
					detail: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 125,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Goat",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 11,
				con: 12,
				int: 3,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
				}, {
					name: "Sure-Footed",
					detail: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
				}
			],
			actions: [
				{
					name: "Ram",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 8 (2d4 + 3) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 126,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Hyena",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d10"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 14,
				con: 14,
				int: 2,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Rampage",
					detail: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 127,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Lizard",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 12,
				con: 13,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Variant: Hold Breath",
					detail: "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)"
				}, {
					name: "Variant: Spider Climb",
					detail: "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 128,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Octopus",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "8d10"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "60 ft.",
				other: null
			},
			abilities: {
				str: 17,
				dex: 13,
				con: 13,
				int: 4,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "While out of water, the octopus can hold its breath for 1 hour."
				}, {
					name: "Underwater Camouflage",
					detail: "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
				}, {
					name: "Water Breathing",
					detail: "The octopus can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Tentacles",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 15 ft., one target. _Hit:_ 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target."
				}, {
					name: "Ink Cloud (Recharges after a Short or Long Rest)",
					detail: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 129,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Owl",
				size: "large",
				type: "beast",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "5 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 15,
				con: 12,
				int: 8,
				wis: 13,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Giant Owl"
				}, {
					name: "custom",
					custom: "Understands common, elvish, and sylvan but can't speak"
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Flyby",
					detail: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
				}, {
					name: "Keen Hearing and Sight",
					detail: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
				}
			],
			actions: [
				{
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 8 (2d6 + 1) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 130,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Poisonous Snake",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: null
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 10,
				dex: 18,
				con: 13,
				int: 2,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 131,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Rat",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 7,
				modifier: null,
				roll: "2d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 15,
				con: 11,
				int: 2,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The rat has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Pack Tactics",
					detail: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 132,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Rat (Diseased)",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 7,
				modifier: null,
				roll: "2d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 15,
				con: 11,
				int: 2,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 133,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Scorpion",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "7d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 13,
				con: 15,
				int: 1,
				wis: 9,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target."
				}, {
					name: "Multiattack",
					detail: "The scorpion makes three attacks: two with its claws and one with its sting."
				}, {
					name: "Sting",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 134,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Sea Horse",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 16,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 12,
				dex: 15,
				con: 11,
				int: 2,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
				}, {
					name: "Water Breathing",
					detail: "The sea horse can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Ram",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 135,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Shark",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 126,
				modifier: null,
				roll: "11d12"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "50 ft.",
				other: null
			},
			abilities: {
				str: 23,
				dex: 11,
				con: 21,
				int: 1,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Blood Frenzy",
					detail: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
				}, {
					name: "Water Breathing",
					detail: "The shark can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "Weapon Attack: +9 to hit, reach 5 ft., one target. _Hit:_ 22 (3d10 + 6) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 136,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Spider",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 26,
				modifier: null,
				roll: "4d10"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 16,
				con: 12,
				int: 2,
				wis: 11,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spider Climb",
					detail: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Web Sense",
					detail: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
				}, {
					name: "Web Walker",
					detail: "The spider ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one creature. _Hit:_ 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
				}, {
					name: "Web (Recharge 5-6)",
					detail: "_Ranged Weapon Attack:_ +5 to hit, range 30/60 ft., one creature. _Hit:_ The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 137,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Toad",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 39,
				modifier: null,
				roll: "6d10"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 15,
				dex: 13,
				con: 13,
				int: 2,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The toad can breathe air and water"
				}, {
					name: "Standing Leap",
					detail: "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target."
				}, {
					name: "Swallow",
					detail: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 138,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Vulture",
				size: "large",
				type: "beast",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 10,
				con: 15,
				int: 6,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands common but can't speak"
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight and Smell",
					detail: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
				}, {
					name: "Pack Tactics",
					detail: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The vulture makes two attacks: one with its beak and one with its talons."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (2d4 + 2) piercing damage."
				}, {
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 9 (2d6 + 2) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 139,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Wasp",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: "50 ft.",
				other: null
			},
			abilities: {
				str: 10,
				dex: 14,
				con: 10,
				int: 1,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Sting",
					detail: "Sting. _Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 140,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Weasel",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 9,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 16,
				con: 10,
				int: 4,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Smell",
					detail: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "Weapon Attack: +5 to hit, reach 5 ft., one target. _Hit:_ 5 (1d4 + 3) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 141,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Giant Wolf Spider",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 16,
				con: 13,
				int: 3,
				wis: 12,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spider Climb",
					detail: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Web Sense",
					detail: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
				}, {
					name: "Web Walker",
					detail: "The spider ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "Weapon Attack: +3 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 142,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gibbering Mouther",
				size: "medium",
				type: "aberration",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 9,
				modifier: null,
				type: null
			},
			hp: {
				average: 67,
				modifier: null,
				roll: "9d8 + 27"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "10 ft.",
				other: null
			},
			abilities: {
				str: 10,
				dex: 8,
				con: 16,
				int: 3,
				wis: 10,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "prone",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Aberrant Ground",
					detail: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn."
				}, {
					name: "Gibbering",
					detail: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
				}, {
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one creature. _Hit:_ 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther."
				}, {
					name: "Blinding Spittle (Recharge 5-6)",
					detail: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 143,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Glabrezu",
				size: "large",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 157,
				modifier: null,
				roll: "15d10 + 75"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 20,
				dex: 15,
				con: 21,
				int: 19,
				wis: 17,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "9",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Innate Spellcasting",
					detail: "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:\nAt will: darkness, detect magic, dispel magic\n1/day each: confusion, fly, power word stun"
				}, {
					name: "Magic Resistance",
					detail: "The glabrezu has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
				}, {
					name: "Pincer",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target."
				}, {
					name: "Fist",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one target. _Hit:_ 7 (2d4 + 2) bludgeoning damage."
				}, {
					name: "Variant: Summon Demon (1/Day)",
					detail: "The demon chooses what to summon and attempts a magical summoning.\nA glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 144,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gladiator",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "studded leather, shield"
			},
			hp: {
				average: 112,
				modifier: null,
				roll: "15d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 10,
				wis: 12,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "intimidation",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Brave",
					detail: "The gladiator has advantage on saving throws against being frightened."
				}, {
					name: "Brute",
					detail: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The gladiator makes three melee attacks or two ranged attacks."
				}, {
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +7 to hit, reach 5 ft. and range 20/60 ft., one target. _Hit:_ 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
				}, {
					name: "Shield Bash",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one creature. _Hit:_ 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
				}
			],
			reactions: [
				{
					name: "Parry",
					detail: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 145,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gnoll",
				size: "medium",
				type: "humanoid",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "gnoll"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "hide armor, shield"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 12,
				con: 11,
				int: 6,
				wis: 10,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "gnoll",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Rampage",
					detail: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d4 + 2) piercing damage."
				}, {
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +4 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +3 to hit, range 150/600 ft., one target. _Hit:_ 5 (1d8 + 1) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.569Z",
		updated: "2019-07-16T23:22:13.569Z"
	},
	{
		id: 146,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Goat",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 4,
				modifier: null,
				roll: "1d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 10,
				con: 11,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone."
				}, {
					name: "Sure-Footed",
					detail: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
				}
			],
			actions: [
				{
					name: "Ram",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 3 (1d4 + 1) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 147,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Goblin",
				size: "small",
				type: "humanoid",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "goblinoid"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "leather armor, shield"
			},
			hp: {
				average: 7,
				modifier: null,
				roll: "2d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 8,
				dex: 14,
				con: 10,
				int: 10,
				wis: 8,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "goblin",
					custom: null
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Nimble Escape",
					detail: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
				}
			],
			actions: [
				{
					name: "Scimitar",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) slashing damage."
				}, {
					name: "Shortbow",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 80/320 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 148,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gold Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 60,
				modifier: null,
				roll: "8d8 + 24"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 19,
				dex: 14,
				con: 17,
				int: 14,
				wis: 11,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 9 (1d10 + 4) piercing damage."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Fire Breath.** The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\n**Weakening Breath.** The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 149,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gorgon",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 114,
				modifier: null,
				roll: "12d10 + 48"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 20,
				dex: 11,
				con: 18,
				int: 2,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "petrified",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Trampling Charge",
					detail: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 18 (2d12 + 5) piercing damage."
				}, {
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 5 ft., one target. _Hit:_ 16 (2d10 + 5) bludgeoning damage."
				}, {
					name: "Petrifying Breath (Recharge 5-6)",
					detail: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 150,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gray Ooze",
				size: "medium",
				type: "ooze",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 8,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "3d8 + 9"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: "10 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 6,
				con: 16,
				int: 1,
				wis: 6,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "acid",
					custom: null
				}, {
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "prone",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amorphous",
					detail: "The ooze can move through a space as narrow as 1 inch wide without squeezing."
				}, {
					name: "Corrode Metal",
					detail: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.\nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
				}, {
					name: "False Appearance",
					detail: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
				}
			],
			actions: [
				{
					name: "Pseudopod",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 151,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Green Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 38,
				modifier: null,
				roll: "7d8 + 7"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 15,
				dex: 12,
				con: 13,
				int: 14,
				wis: 11,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The dragon can breathe air and water."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage."
				}, {
					name: "Poison Breath (Recharge 5-6)",
					detail: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 152,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Green Hag",
				size: "medium",
				type: "fey",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 82,
				modifier: null,
				roll: "11d8 + 33"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 12,
				con: 16,
				int: 13,
				wis: 14,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The hag can breathe air and water."
				}, {
					name: "Innate Spellcasting",
					detail: "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:\n\nAt will: dancing lights, minor illusion, vicious mockery"
				}, {
					name: "Mimicry",
					detail: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
				}, {
					name: "Hag Coven",
					detail: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
				}, {
					name: "Shared Spellcasting (Coven Only)",
					detail: "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:\n\n• 1st level (4 slots): identify, ray of sickness\n• 2nd level (3 slots): hold person, locate object\n• 3rd level (3 slots): bestow curse, counterspell, lightning bolt\n• 4th level (3 slots): phantasmal killer, polymorph\n• 5th level (2 slots): contact other plane, scrying\n• 6th level (1 slot): eye bite\n\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
				}, {
					name: "Hag Eye (Coven Only)",
					detail: "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) slashing damage."
				}, {
					name: "Illusory Appearance",
					detail: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised."
				}, {
					name: "Invisible Passage",
					detail: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 153,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Grick",
				size: "medium",
				type: "monstrosity",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "6d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 14,
				con: 11,
				int: 3,
				wis: 14,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Stone Camouflage",
					detail: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
				}, {
					name: "Tentacles",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 9 (2d6 + 2) slashing damage."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 154,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Griffon",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 59,
				modifier: null,
				roll: "7d10 + 21"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "80 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 2,
				wis: 13,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The griffon makes two attacks: one with its beak and one with its claws."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 8 (1d8 + 4) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.570Z",
		updated: "2019-07-16T23:22:13.570Z"
	},
	{
		id: 155,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Grimlock",
				size: "medium",
				type: "humanoid",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "grimlock"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8 + 2"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 12,
				con: 12,
				int: 9,
				wis: 8,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "blinded",
					custom: null
				}
			],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "undercommon",
					custom: null
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Blind Senses",
					detail: "The grimlock can't use its blindsight while deafened and unable to smell."
				}, {
					name: "Keen Hearing and Smell",
					detail: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}, {
					name: "Stone Camouflage",
					detail: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
				}
			],
			actions: [
				{
					name: "Spiked Bone Club",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 156,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Guard",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "chain shirt, shield"
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 12,
				con: 12,
				int: 10,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +3 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 157,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Guardian Naga",
				size: "large",
				type: "monstrosity",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 127,
				modifier: null,
				roll: "15d10 + 45"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 18,
				con: 16,
				int: 16,
				wis: 19,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "celestial",
					custom: null
				}, {
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "10",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Rejuvenation",
					detail: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
				}, {
					name: "Spellcasting",
					detail: "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:\n\n• Cantrips (at will): mending, sacred flame, thaumaturgy\n• 1st level (4 slots): command, cure wounds, shield of faith\n• 2nd level (3 slots): calm emotions, hold person\n• 3rd level (3 slots): bestow curse, clairvoyance\n• 4th level (3 slots): banishment, freedom of movement\n• 5th level (2 slots): flame strike, geas\n• 6th level (1 slot): true seeing"
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one creature. _Hit:_ 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Spit Poison",
					detail: "_Ranged Weapon Attack:_ +8 to hit, range 15/30 ft., one creature. _Hit:_ The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 158,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Gynosphinx",
				size: "large",
				type: "monstrosity",
				alignment: "lawful neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 136,
				modifier: null,
				roll: "16d10 + 48"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 18,
				wis: 18,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "psychic",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "custom",
					custom: "Sphinx"
				}
			],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Inscrutable",
					detail: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
				}, {
					name: "Magic Weapons",
					detail: "The sphinx's weapon attacks are magical."
				}, {
					name: "Spellcasting",
					detail: "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:\n\n• Cantrips (at will): mage hand, minor illusion, prestidigitation\n• 1st level (4 slots): detect magic, identify, shield\n• 2nd level (3 slots): darkness, locate object, suggestion\n• 3rd level (3 slots): dispel magic, remove curse, tongues\n• 4th level (3 slots): banishment, greater invisibility\n• 5th level (1 slot): legend lore"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The sphinx makes two claw attacks."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Claw Attack",
					detail: "The sphinx makes one claw attack."
				}, {
					name: "Teleport (Costs 2 Actions)",
					detail: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
				}, {
					name: "Cast a Spell (Costs 3 Actions)",
					detail: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 159,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Half-Red Dragon Veteran",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "human"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "plate"
			},
			hp: {
				average: 65,
				modifier: null,
				roll: "10d8 + 20"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 13,
				con: 14,
				int: 10,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "fire",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
				}, {
					name: "Longsword",
					detail: "Weapon Attack: +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) piercing damage."
				}, {
					name: "Heavy Crossbow",
					detail: "_Ranged Weapon Attack:_ +3 to hit, range 100/400 ft., one target. _Hit:_ 6 (1d10 + 1) piercing damage."
				}, {
					name: "Fire Breath (Recharge 5-6)",
					detail: "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 160,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Harpy",
				size: "medium",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 38,
				modifier: null,
				roll: "7d8 + 7"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 13,
				con: 12,
				int: 7,
				wis: 10,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The harpy makes two attacks: one with its claws and one with its club."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 6 (2d4 + 1) slashing damage."
				}, {
					name: "Club",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 3 (1d4 + 1) bludgeoning damage."
				}, {
					name: "Luring Song",
					detail: "The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.\nA target that successfully saves is immune to this harpy's song for the next 24 hours."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 161,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hawk",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 5,
				dex: 16,
				con: 8,
				int: 2,
				wis: 14,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 1 slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 162,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hell Hound",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "7d8 + 14"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 12,
				con: 14,
				int: 6,
				wis: 13,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands infernal but can't speak it"
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Smell",
					detail: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}, {
					name: "Pack Tactics",
					detail: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage."
				}, {
					name: "Fire Breath (Recharge 5-6)",
					detail: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 163,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hezrou",
				size: "large",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 136,
				modifier: null,
				roll: "13d10 + 65"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 17,
				con: 20,
				int: 5,
				wis: 12,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The hezrou has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Stench",
					detail: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The hezrou makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 15 (2d10 + 4) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) slashing damage."
				}, {
					name: "Variant: Summon Demon (1/Day)",
					detail: "The demon chooses what to summon and attempts a magical summoning.\nA hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 164,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hill Giant",
				size: "huge",
				type: "giant",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 105,
				modifier: null,
				roll: "10d12 + 40"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 21,
				dex: 8,
				con: 19,
				int: 5,
				wis: 9,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The giant makes two greatclub attacks."
				}, {
					name: "Greatclub",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 18 (3d8 + 5) bludgeoning damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +8 to hit, range 60/240 ft., one target. _Hit:_ 21 (3d10 + 5) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 165,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hippogriff",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10 + 3"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 13,
				con: 13,
				int: 2,
				wis: 12,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The hippogriff makes two attacks: one with its beak and one with its claws."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 8 (1d10 + 3) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 166,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hobgoblin",
				size: "medium",
				type: "humanoid",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "goblinoid"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "chain mail, shield"
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8 + 2"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 12,
				con: 12,
				int: 10,
				wis: 10,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "goblin",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Martial Advantage",
					detail: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +3 to hit, range 150/600 ft., one target. _Hit:_ 5 (1d8 + 1) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 167,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Homunculus",
				size: "tiny",
				type: "construct",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 5,
				modifier: null,
				roll: "2d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 4,
				dex: 15,
				con: 11,
				int: 10,
				wis: 10,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands the languages of its creator but can't speak"
				}
			],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Telepathic Bond",
					detail: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.571Z",
		updated: "2019-07-16T23:22:13.571Z"
	},
	{
		id: 168,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Horned Devil",
				size: "large",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 148,
				modifier: null,
				roll: "17d10 + 55"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 22,
				dex: 17,
				con: 21,
				int: 12,
				wis: 16,
				cha: 17,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the devil's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The devil has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
				}, {
					name: "Fork",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 15 (2d8 + 6) piercing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
				}, {
					name: "Hurl Flame",
					detail: "_Ranged Spell Attack:_ +7 to hit, range 150 ft., one target. _Hit:_ 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 169,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hunter Shark",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d10"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 18,
				dex: 13,
				con: 15,
				int: 1,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Blood Frenzy",
					detail: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
				}, {
					name: "Water Breathing",
					detail: "The shark can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 170,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hydra",
				size: "huge",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 172,
				modifier: null,
				roll: "15d12 + 75"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 20,
				dex: 12,
				con: 20,
				int: 2,
				wis: 10,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "The hydra can hold its breath for 1 hour."
				}, {
					name: "Multiple Heads",
					detail: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.\nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way."
				}, {
					name: "Reactive Heads",
					detail: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
				}, {
					name: "Wakeful",
					detail: "While the hydra sleeps, at least one of its heads is awake."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The hydra makes as many bite attacks as it has heads."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +8 to hit, reach 10 ft., one target. _Hit:_ 10 (1d10 + 5) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 171,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Hyena",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 5,
				modifier: null,
				roll: "1d8"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 13,
				con: 12,
				int: 2,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Pack Tactics",
					detail: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "Weapon Attack: +2 to hit, reach 5 ft., one target. _Hit:_ 3 (1d6) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 172,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ice Devil",
				size: "large",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 180,
				modifier: null,
				roll: "19d10 + 76"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 21,
				dex: 14,
				con: 18,
				int: 18,
				wis: 15,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "14",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the devil's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The devil has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one target. _Hit:_ 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one target. _Hit:_ 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_+10 to hit, reach 10 ft., one target. _Hit:_ 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage."
				}, {
					name: "Wall of Ice",
					detail: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 173,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ice Mephit",
				size: "small",
				type: "elemental",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 21,
				modifier: null,
				roll: "6d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 13,
				con: 10,
				int: 9,
				wis: 11,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "fire",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "aquan",
					custom: null
				}, {
					name: "auran",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Death Burst",
					detail: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "False Appearance",
					detail: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."
				}, {
					name: "Innate Spellcasting (1/Day)",
					detail: "The mephit can innately cast _fog cloud_, requiring no material components. Its innate spellcasting ability is Charisma."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one creature. _Hit:_ 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage."
				}, {
					name: "Frost Breath (Recharge 6)",
					detail: "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Variant: Summon Mephits (1/Day)",
					detail: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 174,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Imp",
				size: "tiny",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 10,
				modifier: null,
				roll: "3d4 + 3"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 17,
				con: 13,
				int: 11,
				wis: 12,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "custom",
					custom: "and slashing from nonmagical/nonsilver weapons"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Shapechanger",
					detail: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
				}, {
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the imp's darkvision."
				}, {
					name: "Magic Resistance",
					detail: "The imp has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Variant: Familiar",
					detail: "The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond."
				}
			],
			actions: [
				{
					name: "Sting (Bite in Beast Form)",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft ., one target. _Hit:_ 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Invisibility",
					detail: "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 175,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Invisible Stalker",
				size: "medium",
				type: "elemental",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: null
			},
			hp: {
				average: 104,
				modifier: null,
				roll: "16d8 + 32"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 19,
				con: 14,
				int: 10,
				wis: 15,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "unconscious",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "auran",
					custom: null
				}, {
					name: "custom",
					custom: " understands common but doesn't speak it"
				}
			],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Invisibility",
					detail: "The stalker is invisible."
				}, {
					name: "Faultless Tracker",
					detail: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The stalker makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 176,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Iron Golem",
				size: "large",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 20,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 210,
				modifier: null,
				roll: "20d10 + 100"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 24,
				dex: 9,
				con: 20,
				int: 3,
				wis: 11,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}, {
					type: "psychic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't adamantine"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands the languages of its creator but can't speak"
				}
			],
			challenge: {
				rating: "16",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Fire Absorption",
					detail: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt."
				}, {
					name: "Immutable Form",
					detail: "The golem is immune to any spell or effect that would alter its form."
				}, {
					name: "Magic Resistance",
					detail: "The golem has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The golem's weapon attacks are magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The golem makes two melee attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 5 ft., one target. _Hit:_ 20 (3d8 + 7) bludgeoning damage."
				}, {
					name: "Sword",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 10 ft., one target. _Hit:_ 23 (3d10 + 7) slashing damage."
				}, {
					name: "Poison Breath (Recharge 5-6)",
					detail: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (l0d8) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 177,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Jackal",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 3,
				modifier: null,
				roll: "1d6"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 8,
				dex: 15,
				con: 11,
				int: 3,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Smell",
					detail: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}, {
					name: "Pack Tactics",
					detail: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +1 to hit, reach 5 ft., one target. _Hit:_ 1 (1d4 — 1) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 178,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Killer Whale",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 90,
				modifier: null,
				roll: "12d12"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "60 ft.",
				other: null
			},
			abilities: {
				str: 19,
				dex: 10,
				con: 13,
				int: 3,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "120 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Echolocation",
					detail: "The whale can't use its blindsight while deafened."
				}, {
					name: "Hold Breath",
					detail: "The whale can hold its breath for 30 minutes"
				}, {
					name: "Keen Hearing",
					detail: "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 21 (5d6 + 4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 179,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Knight",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "plate"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "8d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 11,
				con: 14,
				int: 11,
				wis: 11,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Brave",
					detail: "The knight has advantage on saving throws against being frightened."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The knight makes two melee attacks."
				}, {
					name: "Greatsword",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage."
				}, {
					name: "Heavy Crossbow",
					detail: "_Ranged Weapon Attack:_ +2 to hit, range 100/400 ft., one target. _Hit:_ 5 (1d10) piercing damage."
				}, {
					name: "Leadership (Recharges after a Short or Long Rest)",
					detail: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
				}
			],
			reactions: [
				{
					name: "Parry",
					detail: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 180,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Kobold",
				size: "small",
				type: "humanoid",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "kobold"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 5,
				modifier: null,
				roll: "2d6 − 2"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 15,
				con: 9,
				int: 8,
				wis: 7,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Sunlight Sensitivity",
					detail: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}, {
					name: "Pack Tactics",
					detail: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Dagger",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) piercing damage."
				}, {
					name: "Sling",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 30/120 ft., one target. _Hit:_ 4 (1d4 + 2) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 181,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Kraken",
				size: "gargantuan",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "titan"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 472,
				modifier: null,
				roll: "27d20 + 189"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "60 ft.",
				other: null
			},
			abilities: {
				str: 30,
				dex: 11,
				con: 25,
				int: 22,
				wis: 18,
				cha: 20,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [
				{
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands abyssal"
				}, {
					name: "celestial",
					custom: null
				}, {
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: " and primordial but can't speak"
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "23",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The kraken can breathe air and water."
				}, {
					name: "Freedom of Movement",
					detail: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
				}, {
					name: "Siege Monster",
					detail: "The kraken deals double damage to objects and structures."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
				}, {
					name: "Tentacle",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 30 ft., one target. _Hit:_ 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
				}, {
					name: "Fling",
					detail: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
				}, {
					name: "Lightning Storm",
					detail: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Tentacle Attack or Fling",
					detail: "The kraken makes one tentacle attack or uses its Fling."
				}, {
					name: "Lightning Storm (Costs 2 Actions)",
					detail: "The kraken uses Lightning Storm."
				}, {
					name: "Ink Cloud (Costs 3 Actions)",
					detail: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 182,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Lamia",
				size: "large",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 97,
				modifier: null,
				roll: "13d10 + 26"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 13,
				con: 15,
				int: 14,
				wis: 15,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Innate Spellcasting",
					detail: "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components.\n\nAt will: disguise self (any humanoid form), major image\n3/day each: charm person, mirror image, scrying, suggestion\n1/day: geas"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 14 (2d10 + 3) slashing damage."
				}, {
					name: "Dagger",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 5 (1d4 + 3) piercing damage."
				}, {
					name: "Intoxicating Touch",
					detail: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. _Hit:_ The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 183,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Lemure",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 7,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "15 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 5,
				con: 11,
				int: 1,
				wis: 11,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands infernal but can't speak"
				}
			],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Devil's Sight",
					detail: "Magical darkness doesn't impede the lemure's darkvision."
				}, {
					name: "Hellish Rejuvenation",
					detail: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
				}
			],
			actions: [
				{
					name: "Fist",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 2 (1d4) bludgeoning damage"
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 184,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Lich",
				size: "medium",
				type: "undead",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 135,
				modifier: null,
				roll: "18d8 + 54"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 16,
				con: 16,
				int: 20,
				wis: 14,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "necrotic",
					custom: null
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "common plus up to five other languages"
				}
			],
			challenge: {
				rating: "21",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the lich fails a saving throw, it can choose to succeed instead."
				}, {
					name: "Rejuvenation",
					detail: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
				}, {
					name: "Spellcasting",
					detail: "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\n\n• Cantrips (at will): mage hand, prestidigitation, ray of frost\n• 1st level (4 slots): detect magic, magic missile, shield, thunderwave\n• 2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror image\n• 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball\n• 4th level (3 slots): blight, dimension door\n• 5th level (3 slots): cloudkill, scrying\n• 6th level (1 slot): disintegrate, globe of invulnerability\n• 7th level (1 slot): finger of death, plane shift\n• 8th level (1 slot): dominate monster, power word stun\n• 9th level (1 slot): power word kill"
				}, {
					name: "Turn Resistance",
					detail: "The lich has advantage on saving throws against any effect that turns undead."
				}
			],
			actions: [
				{
					name: "Paralyzing Touch",
					detail: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. _Hit:_ 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Cantrip",
					detail: "The lich casts a cantrip."
				}, {
					name: "Paralyzing Touch (Costs 2 Actions)",
					detail: "The lich uses its Paralyzing Touch."
				}, {
					name: "Frightening Gaze (Costs 2 Actions)",
					detail: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
				}, {
					name: "Disrupt Life (Costs 3 Actions)",
					detail: "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.572Z",
		updated: "2019-07-16T23:22:13.572Z"
	},
	{
		id: 185,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Lion",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 26,
				modifier: null,
				roll: "4d10"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 15,
				con: 13,
				int: 3,
				wis: 12,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The lion has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Pack Tactics",
					detail: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}, {
					name: "Pounce",
					detail: "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
				}, {
					name: "Running Leap",
					detail: "With a 10-foot running start, the lion can long jump up to 25 ft.."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 186,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Lizard",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 2,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 2,
				dex: 11,
				con: 10,
				int: 1,
				wis: 8,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +0 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 187,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Lizardfolk",
				size: "medium",
				type: "humanoid",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "lizardfolk"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor, shield"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "4d8 + 4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 15,
				dex: 10,
				con: 13,
				int: 7,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "survival",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "The lizardfolk can hold its breath for 15 minutes."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The lizardfolk makes two melee attacks, each one with a different weapon."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Heavy Club",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) bludgeoning damage."
				}, {
					name: "Javelin",
					detail: "_Melee or _Ranged Weapon Attack:__ +4 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Spiked Shield",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 188,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mage",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "15 with _mage armor_"
			},
			hp: {
				average: 40,
				modifier: null,
				roll: "9d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 9,
				dex: 14,
				con: 11,
				int: 17,
				wis: 12,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "int"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "any four languages"
				}
			],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spellcasting",
					detail: "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:\n\n• Cantrips (at will): fire bolt, light, mage hand, prestidigitation\n• 1st level (4 slots): detect magic, mage armor, magic missile, shield\n• 2nd level (3 slots): misty step, suggestion\n• 3rd level (3 slots): counterspell, fireball, fly\n• 4th level (3 slots): greater invisibility, ice storm\n• 5th level (1 slot): cone of cold"
				}
			],
			actions: [
				{
					name: "Dagger",
					detail: "_Melee or _Ranged Weapon Attack:__ +5 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 4 (1d4 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 189,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Magma Mephit",
				size: "small",
				type: "elemental",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d6 + 5"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 8,
				dex: 12,
				con: 12,
				int: 7,
				wis: 10,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [
				{
					type: "cold",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "ignan",
					custom: null
				}, {
					name: "terran",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Death Burst",
					detail: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "False Appearance",
					detail: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."
				}, {
					name: "Innate Spellcasting (1/Day)",
					detail: "The mephit can innately cast _heat metal_ (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft ., one creature. _Hit:_ 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage."
				}, {
					name: "Fire Breath (Recharge 6)",
					detail: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Variant: Summon Mephits (1/Day)",
					detail: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 190,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Magmin",
				size: "small",
				type: "elemental",
				alignment: "chaotic neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 9,
				modifier: null,
				roll: "2d6 + 2"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 15,
				con: 12,
				int: 8,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "ignan",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Death Burst",
					detail: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited."
				}, {
					name: "Ignited Illumination",
					detail: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft."
				}
			],
			actions: [
				{
					name: "Touch",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 191,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mammoth",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 126,
				modifier: null,
				roll: "11d12"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 24,
				dex: 9,
				con: 21,
				int: 3,
				wis: 11,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Trampling Charge",
					detail: "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 25 (4d8 + 7) piercing damage."
				}, {
					name: "Stomp",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one prone creature. _Hit:_ 29 (4d10 + 7) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 192,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Manticore",
				size: "large",
				type: "monstrosity",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 68,
				modifier: null,
				roll: "8d10 + 24"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 16,
				con: 17,
				int: 7,
				wis: 12,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Tail Spike Regrowth",
					detail: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) slashing damage."
				}, {
					name: "Tail Spike",
					detail: "_Ranged Weapon Attack:_ +5 to hit, range 100/200 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 193,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Marilith",
				size: "large",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 189,
				modifier: null,
				roll: "18d10 + 90"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 20,
				con: 20,
				int: 18,
				wis: 16,
				cha: 20,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "16",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The marilith has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The marilith's weapon attacks are magical."
				}, {
					name: "Reactive",
					detail: "The marilith can take one reaction on every turn in combat."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The marilith can make seven attacks: six with its longswords and one with its tail."
				}, {
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) slashing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one creature. _Hit:_ 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets."
				}, {
					name: "Teleport",
					detail: "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
				}, {
					name: "Variant: Summon Demon (1/Day)",
					detail: "The demon chooses what to summon and attempts a magical summoning.\nA marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [
				{
					name: "Parry",
					detail: "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 194,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mastiff",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 5,
				modifier: null,
				roll: "1d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 14,
				con: 12,
				int: 3,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Smell",
					detail: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 195,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Medusa",
				size: "medium",
				type: "monstrosity",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 127,
				modifier: null,
				roll: "17d8 + 51"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 15,
				con: 16,
				int: 12,
				wis: 13,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Petrifying Gaze",
					detail: "When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.\nIf the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The medusa makes either three melee attacks —  one with its snake hair and two with its shortsword — or two ranged attacks with its longbow."
				}, {
					name: "Snake Hair",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +5 to hit, range 150/600 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 196,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Merfolk",
				size: "medium",
				type: "humanoid",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "merfolk"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8 + 2"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 10,
				dex: 13,
				con: 12,
				int: 11,
				wis: 11,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "aquan",
					custom: null
				}, {
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The merfolk can breathe air and water."
				}
			],
			actions: [
				{
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +2 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 197,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Merrow",
				size: "large",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d10 + 12"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 18,
				dex: 10,
				con: 15,
				int: 8,
				wis: 10,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "aquan",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The merrow can breathe air and water."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 8 (1d8 + 4) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 9 (2d4 + 4) slashing damage."
				}, {
					name: "Harpoon",
					detail: "_Melee or _Ranged Weapon Attack:__ +6 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 198,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mimic",
				size: "medium",
				type: "monstrosity",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "shapechanger"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 58,
				modifier: null,
				roll: "9d8 + 18"
			},
			speed: {
				normal: "15 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 12,
				con: 15,
				int: 5,
				wis: 13,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "acid",
					custom: null
				}
			],
			conditions: [
				{
					type: "prone",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Shapechanger",
					detail: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies."
				}, {
					name: "Adhesive (Object Form Only)",
					detail: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
				}, {
					name: "False Appearance (Object Form Only)",
					detail: "While the mimic remains motionless, it is indistinguishable from an ordinary object."
				}, {
					name: "Grappler",
					detail: "The mimic has advantage on attack rolls against any creature grappled by it."
				}
			],
			actions: [
				{
					name: "Pseudopod",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 199,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Minotaur",
				size: "large",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 76,
				modifier: null,
				roll: "9d10 + 27"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 11,
				con: 16,
				int: 6,
				wis: 16,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft. away and knocked prone."
				}, {
					name: "Labyrinthine Recall",
					detail: "The minotaur can perfectly recall any path it has traveled."
				}, {
					name: "Reckless",
					detail: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
				}
			],
			actions: [
				{
					name: "Greataxe",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 17 (2d12 + 4) slashing damage."
				}, {
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 200,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Minotaur Skeleton",
				size: "large",
				type: "undead",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 67,
				modifier: null,
				roll: "9d10 + 18"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 11,
				con: 15,
				int: 6,
				wis: 8,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "bludgeoning",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands abyssal but can't speak"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
				}
			],
			actions: [
				{
					name: "Greataxe",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 17 (2d12 + 4) slashing damage."
				}, {
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 201,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mule",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 10,
				con: 13,
				int: 2,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Beast of Burden",
					detail: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
				}, {
					name: "Sure-Footed",
					detail: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
				}
			],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 202,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mummy",
				size: "medium",
				type: "undead",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 58,
				modifier: null,
				roll: "9d8 + 18"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 8,
				con: 15,
				int: 6,
				wis: 10,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "fire",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [
				{
					type: "custom",
					custom: "necrotic"
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "the languages it knew in life"
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
				}, {
					name: "Rotting Fist",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
				}, {
					name: "Dreadful Glare",
					detail: "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 203,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Mummy Lord",
				size: "medium",
				type: "undead",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 97,
				modifier: null,
				roll: "13d8 + 39"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 10,
				con: 17,
				int: 11,
				wis: 18,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [
				{
					type: "bludgeoning",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "necrotic",
					custom: null
				}, {
					type: "poison",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "the languages it knew in life"
				}
			],
			challenge: {
				rating: "15",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The mummy lord has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Rejuvenation",
					detail: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart."
				}, {
					name: "Spellcasting",
					detail: "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:\n\n• Cantrips (at will): sacred flame, thaumaturgy\n• 1st level (4 slots): command, guiding bolt, shield of faith\n• 2nd level (3 slots): hold person, silence, spiritual weapon\n• 3rd level (3 slots): animate dead, dispel magic\n• 4th level (3 slots): divination, guardian of faith\n• 5th level (2 slots): contagion, insect plague\n• 6th level (1 slot): harm"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
				}, {
					name: "Rotting Fist",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one target. _Hit:_ 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
				}, {
					name: "Dreadful Glare",
					detail: "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Attack",
					detail: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare."
				}, {
					name: "Blinding Dust",
					detail: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn."
				}, {
					name: "Blasphemous Word (Costs 2 Actions)",
					detail: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn."
				}, {
					name: "Channel Negative Energy (Costs 2 Actions)",
					detail: "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn."
				}, {
					name: "Whirlwind of Sand (Costs 2 Actions)",
					detail: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 204,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Nalfeshnee",
				size: "large",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 184,
				modifier: null,
				roll: "16d10 + 96"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 21,
				dex: 10,
				con: 22,
				int: 19,
				wis: 12,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "13",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The nalfeshnee has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The nalfeshnee uses Horror Nimbus if it can.  It then makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one target. _Hit:_ 32 (5d10 + 5) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 15 (3d6 + 5) slashing damage."
				}, {
					name: "Horror Nimbus (Recharge 5-6)",
					detail: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
				}, {
					name: "Teleport",
					detail: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
				}, {
					name: "Variant: Summon Demon (1/Day)",
					detail: "The demon chooses what to summon and attempts a magical summoning.\nA nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 205,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Night Hag",
				size: "medium",
				type: "fiend",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 112,
				modifier: null,
				roll: "15d8 + 45"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 16,
				wis: 14,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "common",
					custom: null
				}, {
					name: "infernal",
					custom: null
				}, {
					name: "primordial",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Innate Spellcasting",
					detail: "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, magic missile\n2/day each: plane shift (self only), ray of enfeeblement, sleep"
				}, {
					name: "Magic Resistance",
					detail: "The hag has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Night Hag Items",
					detail: "A night hag carries two very rare magic items that she must craft for herself If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.\nHeartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.\nSoul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
				}, {
					name: "Hag Coven",
					detail: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
				}, {
					name: "Shared Spellcasting (Coven Only)",
					detail: "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:\n\n• 1st level (4 slots): identify, ray of sickness\n• 2nd level (3 slots): hold person, locate object\n• 3rd level (3 slots): bestow curse, counterspell, lightning bolt\n• 4th level (3 slots): phantasmal killer, polymorph\n• 5th level (2 slots): contact other plane, scrying\n• 6th level (1 slot): eye bite\n\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
				}, {
					name: "Hag Eye (Coven Only)",
					detail: "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
				}
			],
			actions: [
				{
					name: "Claws (Hag Form Only)",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) slashing damage."
				}, {
					name: "Change Shape",
					detail: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
				}, {
					name: "Etherealness",
					detail: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
				}, {
					name: "Nightmare Haunting (1/Day)",
					detail: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 206,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Nightmare",
				size: "large",
				type: "fiend",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 68,
				modifier: null,
				roll: "8d10 + 24"
			},
			speed: {
				normal: "60 ft.",
				burrow: null,
				climb: null,
				fly: "90 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 10,
				wis: 13,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands abyssal"
				}, {
					name: "common",
					custom: null
				}, {
					name: "custom",
					custom: " and infernal but can't speak"
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Confer Fire Resistance",
					detail: "The nightmare can grant resistance to fire damage to anyone riding it."
				}, {
					name: "Illumination",
					detail: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
				}
			],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage."
				}, {
					name: "Ethereal Stride",
					detail: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 207,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Noble",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "breastplate"
			},
			hp: {
				average: 9,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 12,
				con: 11,
				int: 12,
				wis: 14,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any two languages"
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Rapier",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 5 (1d8 + 1) piercing damage."
				}
			],
			reactions: [
				{
					name: "Parry",
					detail: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.573Z",
		updated: "2019-07-16T23:22:13.573Z"
	},
	{
		id: 208,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ochre Jelly",
				size: "large",
				type: "ooze",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 8,
				modifier: null,
				type: null
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d10 + 12"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: "10 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 6,
				con: 14,
				int: 2,
				wis: 6,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "acid",
					custom: null
				}
			],
			immunities: [
				{
					type: "lightning",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "prone",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amorphous",
					detail: "The jelly can move through a space as narrow as 1 inch wide without squeezing."
				}, {
					name: "Spider Climb",
					detail: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}
			],
			actions: [
				{
					name: "Pseudopod",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage."
				}
			],
			reactions: [
				{
					name: "Split",
					detail: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 209,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Octopus",
				size: "small",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 3,
				modifier: null,
				roll: "1d6"
			},
			speed: {
				normal: "5 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 4,
				dex: 15,
				con: 11,
				int: 3,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "While out of water, the octopus can hold its breath for 30 minutes."
				}, {
					name: "Underwater Camouflage",
					detail: "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
				}, {
					name: "Water Breathing",
					detail: "The octopus can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Tentacles",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target."
				}, {
					name: "Ink Cloud (Recharges after a Short or Long Rest)",
					detail: "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 210,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ogre",
				size: "large",
				type: "giant",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "hide armor"
			},
			hp: {
				average: 59,
				modifier: null,
				roll: "7d10 + 21"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 8,
				con: 16,
				int: 5,
				wis: 7,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Greatclub",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) bludgeoning damage."
				}, {
					name: "Javelin",
					detail: "_Melee or _Ranged Weapon Attack:__ +6 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 11 (2d6 + 4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 211,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Ogre Zombie",
				size: "large",
				type: "undead",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 8,
				modifier: null,
				type: null
			},
			hp: {
				average: 85,
				modifier: null,
				roll: "9d10 + 36"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 6,
				con: 18,
				int: 3,
				wis: 6,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands common and giant but can't speak"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Undead Fortitude",
					detail: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
				}
			],
			actions: [
				{
					name: "Morningstar",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 212,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Oni",
				size: "large",
				type: "giant",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "chain mail"
			},
			hp: {
				average: 110,
				modifier: null,
				roll: "13d10 + 39"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 11,
				con: 16,
				int: 14,
				wis: 12,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "7",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Innate Spellcasting",
					detail: "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:\n\nAt will: darkness, invisibility\n1/day each: charm person, cone of cold, gaseous form, sleep"
				}, {
					name: "Magic Weapons",
					detail: "The oni's weapon attacks are magical."
				}, {
					name: "Regeneration",
					detail: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The oni makes two attacks, either with its claws or its glaive."
				}, {
					name: "Claw (Oni Form Only)",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 8 (1d8 + 4) slashing damage."
				}, {
					name: "Glaive",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 10 ft., one target. _Hit:_ 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
				}, {
					name: "Change Shape",
					detail: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 213,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Orc",
				size: "medium",
				type: "humanoid",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "orc"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "hide armor"
			},
			hp: {
				average: 15,
				modifier: null,
				roll: "2d8 + 6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 12,
				con: 16,
				int: 7,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "intimidation",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "orc",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Aggressive",
					detail: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
				}
			],
			actions: [
				{
					name: "Greataxe",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 9 (1d12 + 3) slashing damage."
				}, {
					name: "Javelin",
					detail: "_Melee or _Ranged Weapon Attack:__ +5 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 6 (1d6 + 3) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 214,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Otyugh",
				size: "large",
				type: "aberration",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 114,
				modifier: null,
				roll: "12d10 + 48"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 11,
				con: 19,
				int: 6,
				wis: 13,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "otyugh"
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Limited Telepathy",
					detail: "The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The otyugh makes three attacks: one with its bite and two with its tentacles."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured."
				}, {
					name: "Tentacle",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target."
				}, {
					name: "Tentacle Slam",
					detail: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 215,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Owl",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "5 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 13,
				con: 8,
				int: 2,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Flyby",
					detail: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
				}, {
					name: "Keen Hearing and Sight",
					detail: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
				}
			],
			actions: [
				{
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 1 slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 216,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Owlbear",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 59,
				modifier: null,
				roll: "7d10 + 21"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 20,
				dex: 12,
				con: 17,
				int: 3,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight and Smell",
					detail: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The owlbear makes two attacks: one with its beak and one with its claws."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one creature. _Hit:_ 10 (1d10 + 5) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 14 (2d8 + 5) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 217,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Panther",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: "40 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 15,
				con: 10,
				int: 3,
				wis: 14,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The panther has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Pounce",
					detail: "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 218,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Pegasus",
				size: "large",
				type: "celestial",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 59,
				modifier: null,
				roll: "7d10 + 21"
			},
			speed: {
				normal: "60 ft.",
				burrow: null,
				climb: null,
				fly: "90 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 10,
				wis: 15,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands celestial"
				}, {
					name: "common",
					custom: null
				}, {
					name: "elvish",
					custom: null
				}, {
					name: "custom",
					custom: " and sylvan but can't speak"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 219,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Phase Spider",
				size: "large",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 32,
				modifier: null,
				roll: "5d10"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 15,
				con: 12,
				int: 6,
				wis: 10,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Ethereal Jaunt",
					detail: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
				}, {
					name: "Spider Climb",
					detail: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Web Walker",
					detail: "The spider ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 220,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Pit Fiend",
				size: "large",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "devil"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 300,
				modifier: null,
				roll: "24d10 + 168"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 26,
				dex: 14,
				con: 24,
				int: 22,
				wis: 18,
				cha: 24,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't silvered"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "20",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Fear Aura",
					detail: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
				}, {
					name: "Magic Resistance",
					detail: "The pit fiend has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The pit fiend's weapon attacks are magical."
				}, {
					name: "Innate Spellcasting",
					detail: "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components:\nAt will: detect magic, fireball\n3/day each: hold monster, wall of fire"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 5 ft., one target. _Hit:_ 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft. , one target. _Hit:_ 17 (2d8 + 8) slashing damage."
				}, {
					name: "Mace",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10ft., one target. _Hit:_ 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10ft., one target. _Hit:_ 24 (3d1O + 8) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 221,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Planetar",
				size: "large",
				type: "celestial",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 19,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 200,
				modifier: null,
				roll: "16d10 + 112"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "120 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 24,
				dex: 20,
				con: 24,
				int: 19,
				wis: 22,
				cha: 25,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "radiant",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "all",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "16",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Angelic Weapons",
					detail: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)."
				}, {
					name: "Divine Awareness",
					detail: "The planetar knows if it hears a lie."
				}, {
					name: "Innate Spellcasting",
					detail: "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n1/day each: commune, control weather, insect plague"
				}, {
					name: "Magic Resistance",
					detail: "The planetar has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The planetar makes two melee attacks."
				}, {
					name: "Greatsword",
					detail: "_Melee Weapon Attack:_ +12 to hit, reach 5 ft., one target. _Hit:_ 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
				}, {
					name: "Healing Touch (4/Day)",
					detail: "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 222,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Plesiosaurus",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 68,
				modifier: null,
				roll: "8d10 + 24"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 18,
				dex: 15,
				con: 16,
				int: 2,
				wis: 12,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Hold Breath",
					detail: "The plesiosaurus can hold its breath for 1 hour."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 10 ft., one target. _Hit:_ 14 (3d6 + 4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 223,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Poisonous Snake",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 2,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 2,
				dex: 16,
				con: 11,
				int: 1,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 224,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Polar Bear",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 42,
				modifier: null,
				roll: "5d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 20,
				dex: 10,
				con: 16,
				int: 2,
				wis: 13,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The bear makes two attacks: one with its bite and one with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 9 (1d8 + 5) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 12 (2d6 + 5) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 225,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Pony",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 10,
				con: 13,
				int: 2,
				wis: 11,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 7 (2d4 + 2) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 226,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Priest",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "chain shirt"
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "25 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 10,
				con: 12,
				int: 13,
				wis: 16,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "medicine",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "religion",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any two languages"
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Divine Eminence",
					detail: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
				}, {
					name: "Spellcasting",
					detail: "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:\n\n• Cantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (4 slots): cure wounds, guiding bolt, sanctuary\n• 2nd level (3 slots): lesser restoration, spiritual weapon\n• 3rd level (2 slots): dispel magic, spirit guardians"
				}
			],
			actions: [
				{
					name: "Mace",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 3 (1d6) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 227,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Pseudodragon",
				size: "tiny",
				type: "dragon",
				alignment: "neutral good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 7,
				modifier: null,
				roll: "2d4 + 2"
			},
			speed: {
				normal: "15 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 15,
				con: 13,
				int: 10,
				wis: 12,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands common and draconic but can't speak"
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Senses",
					detail: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
				}, {
					name: "Magic Resistance",
					detail: "The pseudodragon has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Limited Telepathy",
					detail: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language."
				}, {
					name: "Variant: Familiar",
					detail: "The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 4 (1d4 + 2) piercing damage."
				}, {
					name: "Sting",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 228,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Purple Worm",
				size: "gargantuan",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 18,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 247,
				modifier: null,
				roll: "15d20 + 90"
			},
			speed: {
				normal: "50 ft.",
				burrow: "30 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 28,
				dex: 7,
				con: 22,
				int: 1,
				wis: 8,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: "60 ft.",
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "15",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Tunneler",
					detail: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The worm makes two attacks: one with its bite and one with its stinger."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one target. _Hit:_ 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
				}, {
					name: "Tail Stinger",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 10 ft., one creature. _Hit:_ 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 229,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Quasit",
				size: "tiny",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 7,
				modifier: null,
				roll: "3d4"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 5,
				dex: 17,
				con: 10,
				int: 7,
				wis: 10,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Shapechanger",
					detail: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies."
				}, {
					name: "Magic Resistance",
					detail: "The quasit has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Variant: Familiar",
					detail: "The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond."
				}
			],
			actions: [
				{
					name: "Claw (Bite in Beast Form)",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft ., one target. _Hit:_ 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}, {
					name: "Scare (1/day)",
					detail: "One creature of the quasit's choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."
				}, {
					name: "Invisibility",
					detail: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 230,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Quipper",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 2,
				dex: 16,
				con: 9,
				int: 1,
				wis: 7,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Blood Frenzy",
					detail: "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
				}, {
					name: "Water Breathing",
					detail: "The quipper can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 231,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Rakshasa",
				size: "medium",
				type: "fiend",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 110,
				modifier: null,
				roll: "13d8 + 52"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 14,
				dex: 17,
				con: 18,
				int: 13,
				wis: 16,
				cha: 20,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [
				{
					type: "custom",
					custom: "piercing from magic weapons wielded by good creatures"
				}
			],
			resistances: [],
			immunities: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "infernal",
					custom: null
				}
			],
			challenge: {
				rating: "13",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Limited Magic Immunity",
					detail: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
				}, {
					name: "Innate Spellcasting",
					detail: "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:\n\nAt will: detect thoughts, disguise self, mage hand, minor illusion\n3/day each: charm person, detect magic, invisibility, major image, suggestion\n1/day each: dominate person, fly, plane shift, true seeing"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The rakshasa makes two claw attacks"
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 232,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Rat",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 2,
				dex: 11,
				con: 9,
				int: 2,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The rat has advantage on Wisdom (Perception) checks that rely on smell."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +0 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 233,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Raven",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 2,
				dex: 14,
				con: 8,
				int: 2,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Mimicry",
					detail: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
				}
			],
			actions: [
				{
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 1 piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 234,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Red Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 75,
				modifier: null,
				roll: "10d8 + 30"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: "30 ft.",
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 10,
				con: 17,
				int: 12,
				wis: 11,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
				}, {
					name: "Fire Breath (Recharge 5-6)",
					detail: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC l3 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.574Z",
		updated: "2019-07-16T23:22:13.574Z"
	},
	{
		id: 235,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Reef Shark",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "4d8"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 14,
				dex: 13,
				con: 13,
				int: 1,
				wis: 10,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Pack Tactics",
					detail: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}, {
					name: "Water Breathing",
					detail: "The shark can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 236,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Remorhaz",
				size: "huge",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 195,
				modifier: null,
				roll: "17d12 + 85"
			},
			speed: {
				normal: "30 ft.",
				burrow: "20 ft.",
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 24,
				dex: 13,
				con: 21,
				int: 4,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: "60 ft.",
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Heated Body",
					detail: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +11 to hit, reach 10 ft., one target. _Hit:_ 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target."
				}, {
					name: "Swallow",
					detail: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 237,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Rhinoceros",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 21,
				dex: 8,
				con: 15,
				int: 2,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
				}
			],
			actions: [
				{
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 14 (2d8 + 5) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 238,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Riding Horse",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "2d10"
			},
			speed: {
				normal: "60 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 10,
				con: 12,
				int: 2,
				wis: 11,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 8 (2d4 + 3) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 239,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Roc",
				size: "gargantuan",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 248,
				modifier: null,
				roll: "16d20 + 80"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: "120 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 28,
				dex: 10,
				con: 20,
				int: 3,
				wis: 10,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "11",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight",
					detail: "The roc has advantage on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The roc makes two attacks: one with its beak and one with its talons."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 10 ft., one target. _Hit:_ 27 (4d8 + 9) piercing damage."
				}, {
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +13 to hit, reach 5 ft., one target. _Hit:_ 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 240,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Roper",
				size: "large",
				type: "monstrosity",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 20,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 93,
				modifier: null,
				roll: "11d10 + 33"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: "10 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 8,
				con: 17,
				int: 7,
				wis: 16,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
				}, {
					name: "Grasping Tendrils",
					detail: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
				}, {
					name: "Spider Climb",
					detail: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 22 (4d8 + 4) piercing damage."
				}, {
					name: "Tendril",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 50 ft., one creature. _Hit:_ The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target."
				}, {
					name: "Reel",
					detail: "The roper pulls each creature grappled by it up to 25 ft. straight toward it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 241,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Rug of Smothering",
				size: "large",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 33,
				modifier: null,
				roll: "6d10"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 14,
				con: 10,
				int: 1,
				wis: 3,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}, {
					type: "psychic",
					custom: null
				}
			],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "charmed",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Antimagic Susceptibility",
					detail: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
				}, {
					name: "Damage Transfer",
					detail: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
				}, {
					name: "False Appearance",
					detail: "While the rug remains motionless, it is indistinguishable from a normal rug."
				}
			],
			actions: [
				{
					name: "Smother",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one Medium or smaller creature. _Hit:_ The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 242,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Rust Monster",
				size: "medium",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "5d8 + 5"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 12,
				con: 13,
				int: 2,
				wis: 13,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Iron Scent",
					detail: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it."
				}, {
					name: "Rust Metal",
					detail: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 5 (1d8 + 1) piercing damage."
				}, {
					name: "Antennae",
					detail: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.\nIf the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 243,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Saber-Toothed Tiger",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "7d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 14,
				con: 15,
				int: 3,
				wis: 12,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Pounce",
					detail: "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (1d10 + 5) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 12 (2d6 + 5) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 244,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Sahuagin",
				size: "medium",
				type: "humanoid",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "sahuagin"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "4d8 + 4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 13,
				dex: 11,
				con: 12,
				int: 12,
				wis: 13,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "sahuagin"
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Blood Frenzy",
					detail: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
				}, {
					name: "Limited Amphibiousness",
					detail: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
				}, {
					name: "Shark Telepathy",
					detail: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 3 (1d4 + 1) piercing damage."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 3 (1d4 + 1) slashing damage."
				}, {
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +3 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 245,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Salamander",
				size: "large",
				type: "elemental",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 90,
				modifier: null,
				roll: "12d10 + 24"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 14,
				con: 15,
				int: 11,
				wis: 10,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "cold",
					custom: null
				}
			],
			resistances: [
				{
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "fire",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "ignan",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Heated Body",
					detail: "A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes 7 (2d6) fire damage."
				}, {
					name: "Heated Weapons",
					detail: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The salamander makes two attacks: one with its spear and one with its tail."
				}, {
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. _Hit:_ 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 10 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 246,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Satyr",
				size: "medium",
				type: "fey",
				alignment: "chaotic neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 31,
				modifier: null,
				roll: "7d8"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 12,
				dex: 16,
				con: 11,
				int: 12,
				wis: 10,
				cha: 14,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "performance",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "elvish",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The satyr has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Ram",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 5 ft., one target. _Hit:_ 6 (2d4 + 1) bludgeoning damage."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1 d6 + 3) piercing damage."
				}, {
					name: "Shortbow",
					detail: "_Ranged Weapon Attack:_ +5 to hit, range 80/320 ft., one target. _Hit:_ 6 (1d6 + 3) piercing damage."
				}, {
					name: "Variant: Panpipes",
					detail: "Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 247,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Scorpion",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 2,
				dex: 11,
				con: 8,
				int: 1,
				wis: 8,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Sting",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one creature. _Hit:_ 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 248,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Scout",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 16,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 11,
				dex: 14,
				con: 12,
				int: 11,
				wis: 13,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "nature",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "survival",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Hearing and Sight",
					detail: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The scout makes two melee attacks or two ranged attacks."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Longbow",
					detail: "_Ranged Weapon Attack:_ +4 to hit, ranged 150/600 ft., one target. _Hit:_ 6 (1d8 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 249,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Sea Hag",
				size: "medium",
				type: "fey",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 52,
				modifier: null,
				roll: "7d8 + 21"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 16,
				dex: 13,
				con: 16,
				int: 12,
				wis: 12,
				cha: 13,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "aquan",
					custom: null
				}, {
					name: "common",
					custom: null
				}, {
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The hag can breathe air and water."
				}, {
					name: "Horrific Appearance",
					detail: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.\nUnless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag."
				}, {
					name: "Hag Coven",
					detail: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
				}, {
					name: "Shared Spellcasting (Coven Only)",
					detail: "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:\n\n• 1st level (4 slots): identify, ray of sickness\n• 2nd level (3 slots): hold person, locate object\n• 3rd level (3 slots): bestow curse, counterspell, lightning bolt\n• 4th level (3 slots): phantasmal killer, polymorph\n• 5th level (2 slots): contact other plane, scrying\n• 6th level (1 slot): eye bite\n\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
				}, {
					name: "Hag Eye (Coven Only)",
					detail: "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage."
				}, {
					name: "Death Glare",
					detail: "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
				}, {
					name: "Illusory Appearance",
					detail: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 250,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Sea Horse",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "20 ft.",
				other: null
			},
			abilities: {
				str: 1,
				dex: 12,
				con: 8,
				int: 1,
				wis: 10,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Water Breathing",
					detail: "The sea horse can breathe only underwater."
				}
			],
			actions: [],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 251,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Shadow",
				size: "medium",
				type: "undead",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 16,
				modifier: null,
				roll: "3d8 + 3"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 14,
				con: 13,
				int: 6,
				wis: 10,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [
				{
					type: "radiant",
					custom: null
				}
			],
			resistances: [
				{
					type: "acid",
					custom: null
				}, {
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "thunder",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "necrotic",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amorphous",
					detail: "The shadow can move through a space as narrow as 1 inch wide without squeezing."
				}, {
					name: "Shadow Stealth",
					detail: "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6."
				}, {
					name: "Sunlight Weakness",
					detail: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws."
				}
			],
			actions: [
				{
					name: "Strength Drain",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 252,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Shambling Mound",
				size: "large",
				type: "plant",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 136,
				modifier: null,
				roll: "16d10 + 48"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "20 ft.",
				other: null
			},
			abilities: {
				str: 18,
				dex: 8,
				con: 16,
				int: 5,
				wis: 10,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}
			],
			immunities: [
				{
					type: "lightning",
					custom: null
				}
			],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Lightning Absorption",
					detail: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) bludgeoning damage."
				}, {
					name: "Engulf",
					detail: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 253,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Shield Guardian",
				size: "large",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 142,
				modifier: null,
				roll: "15d10 + 60"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 8,
				con: 18,
				int: 7,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands commands given in any language but can't speak"
				}
			],
			challenge: {
				rating: "7",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Bound",
					detail: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian."
				}, {
					name: "Regeneration",
					detail: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit. point."
				}, {
					name: "Spell Storing",
					detail: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The guardian makes two fist attacks."
				}, {
					name: "Fist",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}
			],
			reactions: [
				{
					name: "Shield",
					detail: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 254,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Shrieker",
				size: "medium",
				type: "plant",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 5,
				modifier: null,
				type: null
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "3d8"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 1,
				dex: 1,
				con: 10,
				int: 1,
				wis: 3,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}
			],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
				}
			],
			actions: [
				{
					name: "Shriek",
					detail: "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward"
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 255,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Silver Dragon Wyrmling",
				size: "medium",
				type: "dragon",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 45,
				modifier: null,
				roll: "6d8 + 18"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 19,
				dex: 10,
				con: 17,
				int: 12,
				wis: 11,
				cha: 15,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "cold",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: "10 ft.",
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "draconic",
					custom: null
				}
			],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 9 (1d10 + 4) piercing damage."
				}, {
					name: "Breath Weapons (Recharge 5-6)",
					detail: "The dragon uses one of the following breath weapons.\n**Cold Breath.** The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.\n**Paralyzing Breath.** The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 256,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Skeleton",
				size: "medium",
				type: "undead",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "armor scraps"
			},
			hp: {
				average: 13,
				modifier: null,
				roll: "2d8 + 4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 14,
				con: 15,
				int: 6,
				wis: 8,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "bludgeoning",
					custom: null
				}
			],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands all languages it spoke in life but can't speak"
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Shortbow",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 80/320 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 257,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Solar",
				size: "large",
				type: "celestial",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 21,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 243,
				modifier: null,
				roll: "18d10 + 144"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: "150 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 26,
				dex: 22,
				con: 26,
				int: 25,
				wis: 25,
				cha: 30,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "radiant",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "necrotic",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: "120 ft.",
				other: null
			},
			languages: [
				{
					name: "all",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "21",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Angelic Weapons",
					detail: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
				}, {
					name: "Divine Awareness",
					detail: "The solar knows if it hears a lie."
				}, {
					name: "Innate Spellcasting",
					detail: "The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, resurrection\n1/day each: commune, control weather"
				}, {
					name: "Magic Resistance",
					detail: "The solar has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The solar makes two greatsword attacks."
				}, {
					name: "Greatsword",
					detail: "_Melee Weapon Attack:_ +15 to hit, reach 5 ft., one target. _Hit:_ 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
				}, {
					name: "Slaying Longbow",
					detail: "_Ranged Weapon Attack:_ +13 to hit, range 150/600 ft., one target. _Hit:_ 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
				}, {
					name: "Flying Sword",
					detail: "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
				}, {
					name: "Healing Touch (4/Day)",
					detail: "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Teleport",
					detail: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see."
				}, {
					name: "Searing Burst (Costs 2 Actions)",
					detail: "The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Blinding Gaze (Costs 3 Actions)",
					detail: "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 258,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Specter",
				size: "medium",
				type: "undead",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 1,
				dex: 14,
				con: 11,
				int: 10,
				wis: 10,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "acid",
					custom: null
				}, {
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "thunder",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "necrotic",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "unconscious",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands all languages it knew in life but can't speak"
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Incorporeal Movement",
					detail: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
				}, {
					name: "Sunlight Sensitivity",
					detail: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}
			],
			actions: [
				{
					name: "Life Drain",
					detail: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. _Hit:_ 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 259,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Spider",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 2,
				dex: 14,
				con: 8,
				int: 1,
				wis: 10,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Spider Climb",
					detail: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Web Sense",
					detail: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
				}, {
					name: "Web Walker",
					detail: "The spider ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 260,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Spirit Naga",
				size: "large",
				type: "monstrosity",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 75,
				modifier: null,
				roll: "10d10 + 20"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 17,
				con: 14,
				int: 16,
				wis: 15,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "common",
					custom: null
				}
			],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Rejuvenation",
					detail: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
				}, {
					name: "Spellcasting",
					detail: "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:\n\n• Cantrips (at will): mage hand, minor illusion, ray of frost\n• 1st level (4 slots): charm person, detect magic, sleep\n• 2nd level (3 slots): detect thoughts, hold person\n• 3rd level (3 slots): lightning bolt, water breathing\n• 4th level (3 slots): blight, dimension door\n• 5th level (2 slots): dominate person"
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 10 ft., one creature. _Hit:_ 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.575Z",
		updated: "2019-07-16T23:22:13.575Z"
	},
	{
		id: 261,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Sprite",
				size: "tiny",
				type: "fey",
				alignment: "neutral good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 2,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 18,
				con: 10,
				int: 14,
				wis: 13,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "elvish",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 1 slashing damage."
				}, {
					name: "Shortbow",
					detail: "_Ranged Weapon Attack:_ +6 to hit, range 40/160 ft., one target. _Hit:_ 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
				}, {
					name: "Heart Sight",
					detail: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
				}, {
					name: "Invisibility",
					detail: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 262,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Spy",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 27,
				modifier: null,
				roll: "6d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 10,
				dex: 15,
				con: 10,
				int: 12,
				wis: 14,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "investigation",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any two languages"
				}
			],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Cunning Action",
					detail: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
				}, {
					name: "Sneak Attack (1/Turn)",
					detail: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The spy makes two melee attacks."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}, {
					name: "Hand Crossbow",
					detail: "_Ranged Weapon Attack:_ +4 to hit, range 30/120 ft., one target. _Hit:_ 5 (1d6 + 2) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 263,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Steam Mephit",
				size: "small",
				type: "elemental",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 21,
				modifier: null,
				roll: "6d6"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 5,
				dex: 11,
				con: 10,
				int: 11,
				wis: 10,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "aquan",
					custom: null
				}, {
					name: "ignan",
					custom: null
				}
			],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Death Burst",
					detail: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage."
				}, {
					name: "Innate Spellcasting (1/Day)",
					detail: "The mephit can innately cast _blur_, requiring no material components. Its innate spellcasting ability is Charisma."
				}
			],
			actions: [
				{
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one creature. _Hit:_ 2 (1d4) slashing damage plus 2 (1d4) fire damage."
				}, {
					name: "Steam Breath (Recharge 6)",
					detail: "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."
				}, {
					name: "Variant: Summon Mephits (1/Day)",
					detail: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 264,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Stirge",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 2,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "40 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 4,
				dex: 16,
				con: 11,
				int: 2,
				wis: 8,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Blood Drain",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one creature. _Hit:_ 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 265,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Stone Giant",
				size: "huge",
				type: "giant",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 126,
				modifier: null,
				roll: "11d12 + 55"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 15,
				con: 20,
				int: 10,
				wis: 12,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "7",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Stone Camouflage",
					detail: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The giant makes two greatclub attacks."
				}, {
					name: "Greatclub",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 15 ft., one target. _Hit:_ 19 (3d8 + 6) bludgeoning damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +9 to hit, range 60/240 ft., one target. _Hit:_ 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone."
				}
			],
			reactions: [
				{
					name: "Rock Catching",
					detail: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it."
				}
			],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 266,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Stone Golem",
				size: "large",
				type: "construct",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 178,
				modifier: null,
				roll: "17d10 + 85"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 22,
				dex: 9,
				con: 20,
				int: 3,
				wis: 11,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}, {
					type: "psychic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons that aren't adamantine"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "exhaustion",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Understands the languages of its creator but can't speak"
				}
			],
			challenge: {
				rating: "10",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Immutable Form",
					detail: "The golem is immune to any spell or effect that would alter its form."
				}, {
					name: "Magic Resistance",
					detail: "The golem has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The golem's weapon attacks are magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The golem makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one target. _Hit:_ 19 (3d8 + 6) bludgeoning damage."
				}, {
					name: "Slow (Recharge 5-6)",
					detail: "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 267,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Storm Giant",
				size: "huge",
				type: "giant",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "scale mail"
			},
			hp: {
				average: 230,
				modifier: null,
				roll: "20d12 + 100"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "50 ft.",
				other: null
			},
			abilities: {
				str: 29,
				dex: 14,
				con: 20,
				int: 16,
				wis: 18,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "str"
					}, {
						ability: "con"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "arcana",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "history",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}
			],
			immunities: [
				{
					type: "lightning",
					custom: null
				}, {
					type: "thunder",
					custom: null
				}
			],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "13",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Amphibious",
					detail: "The giant can breathe air and water."
				}, {
					name: "Innate Spellcasting",
					detail: "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, feather fall, levitate, light\n3/day each: control weather, water breathing"
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The giant makes two greatsword attacks."
				}, {
					name: "Greatsword",
					detail: "_Melee Weapon Attack:_ +14 to hit, reach 10 ft., one target. _Hit:_ 30 (6d6 + 9) slashing damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +14 to hit, range 60/240 ft., one target. _Hit:_ 35 (4d12 + 9) bludgeoning damage."
				}, {
					name: "Lightning Strike (Recharge 5-6)",
					detail: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 268,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Succubus/Incubus",
				size: "medium",
				type: "fiend",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "shapechanger"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 66,
				modifier: null,
				roll: "12d8 + 12"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 8,
				dex: 17,
				con: 13,
				int: 15,
				wis: 12,
				cha: 20,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "deception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "insight",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "poison",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "common",
					custom: null
				}, {
					name: "infernal",
					custom: null
				}, {
					name: "custom",
					custom: " telepathy 60 ft."
				}
			],
			challenge: {
				rating: "4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Telepathic Bond",
					detail: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
				}, {
					name: "Shapechanger",
					detail: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
				}
			],
			actions: [
				{
					name: "Claw (Fiend Form Only)",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) slashing damage."
				}, {
					name: "Charm",
					detail: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
				}, {
					name: "Draining Kiss",
					detail: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}, {
					name: "Etherealness",
					detail: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.579Z",
		updated: "2019-07-16T23:22:13.579Z"
	},
	{
		id: 269,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Bats",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 5,
				dex: 15,
				con: 10,
				int: 2,
				wis: 12,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "60 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Echolocation",
					detail: "The swarm can't use its blindsight while deafened."
				}, {
					name: "Keen Hearing",
					detail: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing."
				}, {
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 0 ft., one creature in the swarm's space. _Hit:_ 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 270,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Beetles",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "20 ft.",
				burrow: "5 ft.",
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 13,
				con: 10,
				int: 1,
				wis: 7,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 0 ft., one target in the swarm's space. _Hit:_ 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 271,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Centipedes",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 13,
				con: 10,
				int: 1,
				wis: 7,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 0 ft., one target in the swarm's space. _Hit:_ 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.\nA creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 272,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Insects",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 13,
				con: 10,
				int: 1,
				wis: 7,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 0 ft., one target in the swarm's space. _Hit:_ 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 273,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Poisonous Snakes",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: null
			},
			hp: {
				average: 36,
				modifier: null,
				roll: "8d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "30 ft.",
				other: null
			},
			abilities: {
				str: 8,
				dex: 18,
				con: 11,
				int: 1,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 0 ft., one creature in the swarm's space. _Hit:_ 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 274,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Quippers",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 28,
				modifier: null,
				roll: "8d8"
			},
			speed: {
				normal: null,
				burrow: null,
				climb: null,
				fly: null,
				swim: "40 ft.",
				other: null
			},
			abilities: {
				str: 13,
				dex: 16,
				con: 9,
				int: 1,
				wis: 7,
				cha: 2,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Blood Frenzy",
					detail: "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points."
				}, {
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points."
				}, {
					name: "Water Breathing",
					detail: "The swarm can breathe only underwater."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 0 ft., one creature in the swarm's space. _Hit:_ 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 275,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Rats",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 24,
				modifier: null,
				roll: "7d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 9,
				dex: 11,
				con: 9,
				int: 2,
				wis: 10,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "30 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 0 ft., one target in the swarm's space. _Hit:_ 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 276,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Ravens",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 24,
				modifier: null,
				roll: "7d8"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 6,
				dex: 14,
				con: 8,
				int: 3,
				wis: 12,
				cha: 6,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Beaks",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one target in the swarm's space. _Hit:_ 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 277,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Spiders",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "20 ft.",
				burrow: null,
				climb: "20 ft.",
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 13,
				con: 10,
				int: 1,
				wis: 7,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
				}, {
					name: "Spider Climb",
					detail: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Web Sense",
					detail: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web."
				}, {
					name: "Web Walker",
					detail: "The swarm ignores movement restrictions caused by webbing."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 0 ft., one target in the swarm's space. _Hit:_ 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 278,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Swarm of Wasps",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "5 ft.",
				burrow: null,
				climb: null,
				fly: "30 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 13,
				con: 10,
				int: 1,
				wis: 7,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}, {
					type: "slashing",
					custom: null
				}
			],
			immunities: [],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "stunned",
					custom: null
				}
			],
			senses: {
				blindsight: "10 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Swarm",
					detail: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
				}
			],
			actions: [
				{
					name: "Bites",
					detail: "_Melee Weapon Attack:_ +3 to hit, reach 0 ft., one target in the swarm's space. _Hit:_ 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 279,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Tarrasque",
				size: "gargantuan",
				type: "monstrosity",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "titan"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 25,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 676,
				modifier: null,
				roll: "33d20 + 330"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 30,
				dex: 11,
				con: 30,
				int: 3,
				wis: 11,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "fire",
					custom: null
				}, {
					type: "poison",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: "120 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "30",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Legendary Resistance (3/Day)",
					detail: "If the tarrasque fails a saving throw, it can choose to succeed instead."
				}, {
					name: "Magic Resistance",
					detail: "The tarrasque has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Reflective Carapace",
					detail: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
				}, {
					name: "Siege Monster",
					detail: "The tarrasque deals double damage to objects and structures."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +19 to hit, reach 10 ft., one target. _Hit:_ 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +19 to hit, reach 15 ft., one target. _Hit:_ 28 (4d8 + 10) slashing damage."
				}, {
					name: "Horns",
					detail: "_Melee Weapon Attack:_ +19 to hit, reach 10 ft., one target. _Hit:_ 32 (4d10 + 10) piercing damage."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +19 to hit, reach 20 ft., one target. _Hit:_ 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone."
				}, {
					name: "Frightful Presence",
					detail: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
				}, {
					name: "Swallow",
					detail: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Attack",
					detail: "The tarrasque makes one claw attack or tail attack."
				}, {
					name: "Move",
					detail: "The tarrasque moves up to half its speed."
				}, {
					name: "Chomp (Costs 2 Actions)",
					detail: "The tarrasque makes one bite attack or uses its Swallow."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 280,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Thug",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: "leather armor"
			},
			hp: {
				average: 32,
				modifier: null,
				roll: "5d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 15,
				dex: 11,
				con: 14,
				int: 10,
				wis: 10,
				cha: 11,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "intimidation",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Pack Tactics",
					detail: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The thug makes two melee attacks."
				}, {
					name: "Mace",
					detail: "_Melee Weapon Attack:_ +4 to hit, reach 5 ft., one creature. _Hit:_ 5 (1d6 + 2) bludgeoning damage."
				}, {
					name: "Heavy Crossbow",
					detail: "_Ranged Weapon Attack:_ +2 to hit, range 100/400 ft., one target. _Hit:_ 5 (1d10) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 281,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Tiger",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 37,
				modifier: null,
				roll: "5d10"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 15,
				con: 14,
				int: 3,
				wis: 12,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "expertise"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Pounce",
					detail: "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 8 (1d10 + 3) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 282,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Treant",
				size: "huge",
				type: "plant",
				alignment: "chaotic good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 138,
				modifier: null,
				roll: "12d12 + 60"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 23,
				dex: 8,
				con: 21,
				int: 12,
				wis: 16,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "fire",
					custom: null
				}
			],
			resistances: [
				{
					type: "bludgeoning",
					custom: null
				}, {
					type: "piercing",
					custom: null
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "common",
					custom: null
				}, {
					name: "custom",
					custom: " druidic"
				}, {
					name: "elvish",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}
			],
			challenge: {
				rating: "9",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the treant remains motionless, it is indistinguishable from a normal tree."
				}, {
					name: "Siege Monster",
					detail: "The treant deals double damage to objects and structures."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The treant makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 5 ft., one target. _Hit:_ 16 (3d6 + 6) bludgeoning damage."
				}, {
					name: "Rock",
					detail: "_Ranged Weapon Attack:_ +10 to hit, range 60/180 ft., one target. _Hit:_ 28 (4d10 + 6) bludgeoning damage."
				}, {
					name: "Animate Trees (1/Day)",
					detail: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 283,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Tribal Warrior",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: "hide armor"
			},
			hp: {
				average: 11,
				modifier: null,
				roll: "2d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 13,
				dex: 11,
				con: 12,
				int: 8,
				wis: 11,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "any one language"
				}
			],
			challenge: {
				rating: "1/8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Pack Tactics",
					detail: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Spear",
					detail: "_Melee or _Ranged Weapon Attack:__ +3 to hit, reach 5 ft. or range 20/60 ft., one target. _Hit:_ 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 284,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Triceratops",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 95,
				modifier: null,
				roll: "10d12 + 30"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 22,
				dex: 9,
				con: 17,
				int: 2,
				wis: 11,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Trampling Charge",
					detail: "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Gore",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one target. _Hit:_ 24 (4d8 + 6) piercing damage."
				}, {
					name: "Stomp",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one prone creature. _Hit:_ 22 (3d10 + 6) bludgeoning damage"
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 285,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Troll",
				size: "large",
				type: "giant",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 84,
				modifier: null,
				roll: "8d10 + 40"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 13,
				con: 20,
				int: 7,
				wis: 9,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "giant",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Smell",
					detail: "The troll has advantage on Wisdom (Perception) checks that rely on smell."
				}, {
					name: "Regeneration",
					detail: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
				}, {
					name: "Variant: Loathsome Limbs",
					detail: "Whenever the troll takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it:\n1-10: Nothing else happens.\n11-14: One leg is severed from the troll if it has any legs left.\n15- 18: One arm is severed from the troll if it has any arms left.\n19-20: The troll is decapitated, but the troll dies only if it can't regenerate. If it dies, so does the severed head.\nIf the troll finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on the troll's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and the troll's Regeneration trait.\nA severed leg is unable to attack and has a speed of 5 feet.\nA severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless the troll can see the arm and its target. Each time the troll loses an arm, it loses a claw attack.\nIf its head is severed, the troll loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet and the troll's Keen Smell trait. It can make a bite attack but only against a target in its space.\nThe troll's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The troll makes three attacks: one with its bite and two with its claws."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 7 (1d6 + 4) piercing damage."
				}, {
					name: "Claw",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) slashing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 286,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Tyrannosaurus Rex",
				size: "huge",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 136,
				modifier: null,
				roll: "13d12 + 52"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 25,
				dex: 10,
				con: 19,
				int: 2,
				wis: 12,
				cha: 9,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "8",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target."
				}, {
					name: "Tail",
					detail: "_Melee Weapon Attack:_ +10 to hit, reach 10 ft., one target. _Hit:_ 20 (3d8 + 7) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 287,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Unicorn",
				size: "large",
				type: "celestial",
				alignment: "lawful good",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 12,
				modifier: null,
				type: null
			},
			hp: {
				average: 67,
				modifier: null,
				roll: "9d10 + 18"
			},
			speed: {
				normal: "50 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 14,
				con: 15,
				int: 11,
				wis: 17,
				cha: 16,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "charmed",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "celestial",
					custom: null
				}, {
					name: "elvish",
					custom: null
				}, {
					name: "sylvan",
					custom: null
				}, {
					name: "custom",
					custom: " telepathy 60 ft."
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Charge",
					detail: "If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
				}, {
					name: "Innate Spellcasting",
					detail: "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:\n\nAt will: detect evil and good, druidcraft, pass without trace\n1/day each: calm emotions, dispel evil and good, entangle"
				}, {
					name: "Magic Resistance",
					detail: "The unicorn has advantage on saving throws against spells and other magical effects."
				}, {
					name: "Magic Weapons",
					detail: "The unicorn's weapon attacks are magical."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The unicorn makes two attacks: one with its hooves and one with its horn."
				}, {
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft ., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}, {
					name: "Horn",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft ., one target. _Hit:_ 8 (1d8 + 4) piercing damage."
				}, {
					name: "Healing Touch (3/Day)",
					detail: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
				}, {
					name: "Teleport (1/Day)",
					detail: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Hooves",
					detail: "The unicorn makes one attack with its hooves."
				}, {
					name: "Shimmering Shield (Costs 2 Actions)",
					detail: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
				}, {
					name: "Heal Self (Costs 3 Actions)",
					detail: "The unicorn magically regains 11 (2d8 + 2) hit points."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 288,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Vampire",
				size: "medium",
				type: "undead",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "shapechanger"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 16,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 144,
				modifier: null,
				roll: "17d8 + 68"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 18,
				con: 18,
				int: 17,
				wis: 15,
				cha: 18,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "necrotic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "the languages it knew in life"
				}
			],
			challenge: {
				rating: "13",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Shapechanger",
					detail: "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.\nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
				}, {
					name: "Legendary Resistance (3/Day)",
					detail: "If the vampire fails a saving throw, it can choose to succeed instead."
				}, {
					name: "Misty Escape",
					detail: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
				}, {
					name: "Regeneration",
					detail: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
				}, {
					name: "Spider Climb",
					detail: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Vampire Weaknesses",
					detail: "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.\nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
				}
			],
			actions: [
				{
					name: "Multiattack (Vampire Form Only)",
					detail: "The vampire makes two attacks, only one of which can be a bite attack."
				}, {
					name: "Unarmed Strike (Vampire Form Only)",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one creature. _Hit:_ 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)."
				}, {
					name: "Bite (Bat or Vampire Form Only)",
					detail: "_Melee Weapon Attack:_ +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. _Hit:_ 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
				}, {
					name: "Charm",
					detail: "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
				}, {
					name: "Children of the Night (1/Day)",
					detail: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 3,
			legendaryActions: [
				{
					name: "Move",
					detail: "The vampire moves up to its speed without provoking opportunity attacks."
				}, {
					name: "Unarmed Strike",
					detail: "The vampire makes one unarmed strike."
				}, {
					name: "Bite (Costs 2 Actions)",
					detail: "The vampire makes one bite attack."
				}
			],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.581Z",
		updated: "2019-07-16T23:22:13.581Z"
	},
	{
		id: 289,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Vampire Spawn",
				size: "medium",
				type: "undead",
				alignment: "neutral evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 82,
				modifier: null,
				roll: "11d8 + 33"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 16,
				con: 16,
				int: 11,
				wis: 10,
				cha: 12,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "wis"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "stealth",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [
				{
					type: "necrotic",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "the languages it knew in life"
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Regeneration",
					detail: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
				}, {
					name: "Spider Climb",
					detail: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
				}, {
					name: "Vampire Weaknesses",
					detail: "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.\nStake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.\nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The vampire makes two attacks, only one of which can be a bite attack."
				}, {
					name: "Bite",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. _Hit:_ 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}, {
					name: "Claws",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one creature. _Hit:_ 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 290,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Veteran",
				size: "medium",
				type: "humanoid",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "any race"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 17,
				modifier: null,
				type: "splint"
			},
			hp: {
				average: 58,
				modifier: null,
				roll: "9d8"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 16,
				dex: 13,
				con: 14,
				int: 10,
				wis: 11,
				cha: 10,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "athletics",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}, {
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "custom",
					custom: "Any one language (usually common)"
				}
			],
			challenge: {
				rating: "3",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Multiattack",
					detail: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
				}, {
					name: "Longsword",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
				}, {
					name: "Shortsword",
					detail: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) piercing damage."
				}, {
					name: "Heavy Crossbow",
					detail: "_Ranged Weapon Attack:_ +3 to hit, range 100/400 ft., one target. _Hit:_ 6 (1d10 + 1) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 291,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Violet Fungus",
				size: "medium",
				type: "plant",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 5,
				modifier: null,
				type: null
			},
			hp: {
				average: 18,
				modifier: null,
				roll: "4d8"
			},
			speed: {
				normal: "5 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 1,
				con: 10,
				int: 1,
				wis: 3,
				cha: 1,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [
				{
					type: "blinded",
					custom: null
				}, {
					type: "deafened",
					custom: null
				}, {
					type: "frightened",
					custom: null
				}
			],
			senses: {
				blindsight: "30 ft.",
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/4",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "False Appearance",
					detail: "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The fungus makes 1d4 Rotting Touch attacks."
				}, {
					name: "Rotting Touch",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 10 ft., one creature. _Hit:_ 4 (1d8) necrotic damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 292,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Vrock",
				size: "large",
				type: "fiend",
				alignment: "chaotic evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [
				{
					name: "demon"
				}
			],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 15,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 104,
				modifier: null,
				roll: "11d10 + 44"
			},
			speed: {
				normal: "40 ft.",
				burrow: null,
				climb: null,
				fly: "60 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 17,
				dex: 15,
				con: 18,
				int: 8,
				wis: 13,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [
					{
						ability: "dex"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "cold",
					custom: null
				}, {
					type: "fire",
					custom: null
				}, {
					type: "lightning",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "120 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "abyssal",
					custom: null
				}, {
					name: "custom",
					custom: "telepathy 120 ft."
				}
			],
			challenge: {
				rating: "6",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Magic Resistance",
					detail: "The vrock has advantage on saving throws against spells and other magical effects."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The vrock makes two attacks: one with its beak and one with its talons."
				}, {
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) piercing damage."
				}, {
					name: "Talons",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 14 (2d10 + 3) slashing damage."
				}, {
					name: "Spores (Recharge 6)",
					detail: "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
				}, {
					name: "Stunning Screech (1/Day)",
					detail: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn ."
				}, {
					name: "Variant: Summon Demon (1/Day)",
					detail: "The demon chooses what to summon and attempts a magical summoning.\nA vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 293,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Vulture",
				size: "medium",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 10,
				modifier: null,
				type: null
			},
			hp: {
				average: 5,
				modifier: null,
				roll: "1d8"
			},
			speed: {
				normal: "10 ft.",
				burrow: null,
				climb: null,
				fly: "50 ft.",
				swim: null,
				other: null
			},
			abilities: {
				str: 7,
				dex: 10,
				con: 13,
				int: 2,
				wis: 12,
				cha: 4,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [
				{
					name: "perception",
					custom: {
						name: null,
						ability: null
					},
					proficiency: "proficient"
				}
			],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "0",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Keen Sight and Smell",
					detail: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
				}, {
					name: "Pack Tactics",
					detail: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
				}
			],
			actions: [
				{
					name: "Beak",
					detail: "_Melee Weapon Attack:_ +2 to hit, reach 5 ft., one target. _Hit:_ 2 (1d4) piercing damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 294,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Warhorse",
				size: "large",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 11,
				modifier: null,
				type: null
			},
			hp: {
				average: 19,
				modifier: null,
				roll: "3d10"
			},
			speed: {
				normal: "60 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 12,
				con: 13,
				int: 2,
				wis: 12,
				cha: 7,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [],
			immunities: [],
			conditions: [],
			senses: {
				blindsight: null,
				darkvision: null,
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Trampling Charge",
					detail: "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
				}
			],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 295,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Warhorse Skeleton",
				size: "large",
				type: "undead",
				alignment: "lawful evil",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: "barding scraps"
			},
			hp: {
				average: 22,
				modifier: null,
				roll: "3d10 + 6"
			},
			speed: {
				normal: "60 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 18,
				dex: 12,
				con: 15,
				int: 2,
				wis: 8,
				cha: 5,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [
				{
					type: "bludgeoning",
					custom: null
				}
			],
			resistances: [],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [],
			challenge: {
				rating: "1/2",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [],
			actions: [
				{
					name: "Hooves",
					detail: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 11 (2d6 + 4) bludgeoning damage."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 296,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Water Elemental",
				size: "large",
				type: "elemental",
				alignment: "neutral",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 14,
				modifier: null,
				type: "natural armor"
			},
			hp: {
				average: 114,
				modifier: null,
				roll: "12d10 + 48"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: "90 ft.",
				other: null
			},
			abilities: {
				str: 18,
				dex: 14,
				con: 18,
				int: 5,
				wis: 10,
				cha: 8,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			skills: [],
			vulnerabilities: [],
			resistances: [
				{
					type: "acid",
					custom: null
				}, {
					type: "custom",
					custom: "bludgeoning/piercing/slashing from nonmagical weapons"
				}
			],
			immunities: [
				{
					type: "poison",
					custom: null
				}
			],
			conditions: [
				{
					type: "exhaustion",
					custom: null
				}, {
					type: "grappled",
					custom: null
				}, {
					type: "paralyzed",
					custom: null
				}, {
					type: "petrified",
					custom: null
				}, {
					type: "poisoned",
					custom: null
				}, {
					type: "prone",
					custom: null
				}, {
					type: "restrained",
					custom: null
				}, {
					type: "unconscious",
					custom: null
				}
			],
			senses: {
				blindsight: null,
				darkvision: "60 ft.",
				tremorsense: null,
				truesight: null,
				other: null
			},
			languages: [
				{
					name: "aquan",
					custom: null
				}
			],
			challenge: {
				rating: "5",
				custom: {
					rating: null,
					proficiency: null,
					xp: null
				}
			},
			traits: [
				{
					name: "Water Form",
					detail: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
				}, {
					name: "Freeze",
					detail: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn."
				}
			],
			actions: [
				{
					name: "Multiattack",
					detail: "The elemental makes two slam attacks."
				}, {
					name: "Slam",
					detail: "_Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 13 (2d8 + 4) bludgeoning damage."
				}, {
					name: "Whelm (Recharge 4-6)",
					detail: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
				}
			],
			reactions: [],
			paragonActions: {
				type: "default",
				amount: null
			},
			legendaryActionsPerRound: 0,
			legendaryActions: [],
			lairActionsInitiative: 0,
			lairActions: [],
			notes: []
		},
		created: "2019-07-16T23:22:13.582Z",
		updated: "2019-07-16T23:22:13.582Z"
	},
	{
		id: 297,
		blueprint: {
			vid: 1,
			method: "manual",
			description: {
				name: "Weasel",
				size: "tiny",
				type: "beast",
				alignment: "unaligned",
				level: 1,
				role: "striker",
				rank: "standard",
				players: 4,
				phase: 1,
				phases: 1
			},
			tags: [],
			display: {
				theme: "default",
				columns: 1,
				image: {
					url: null,
					position: "inline"
				}
			},
			ac: {
				base: 13,
				modifier: null,
				type: null
			},
			hp: {
				average: 1,
				modifier: null,
				roll: "1d4"
			},
			speed: {
				normal: "30 ft.",
				burrow: null,
				climb: null,
				fly: null,
				swim: null,
				other: null
			},
			abilities: {
				str: 3,
				dex: 16,
				con: 8,
				int: 2,
				wis: 12,
				cha: 3,
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
						ability: "wis"
					}, {
						ability: "cha"
					}
				]
			},
			savingThrows: {
				manual: [

				],
				quickstart: [
					{
						ability: "str"
					}, {
						ability: "dex"
					}, {
						ability: "con"
					}, {
						ability: "int"
					}, {
					}, {
				]