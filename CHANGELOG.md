# Best Laid Plains: changelog

## 0.34.0 (2026-11-21)

- added plainolpatches-2.36.2+1.21.1.jar
- removed plainolpatches-2.36.1+1.21.1.jar

Tickets closed since the last release:
- GEN-312: Server tick-loop crash: NPE in ChunkMap.removeEntity entity-map iterator when a player disconnects (Stickbun 2026-11-21 08:24:46 UTC)
- GEN-313: After a tick-loop crash, Stickbun's crash stop hangs after the per-level saves until the watchdog kills it (11-19, 11-21)

## 0.33.0 (2026-11-21)

- added buggered-0.27.3.jar
- added cobblemon-conveniences-0.33.1.jar
- added dynamicroots-0.58.2.jar
- added plainolpatches-2.36.1+1.21.1.jar
- removed buggered-0.26.0.jar
- removed cobblemon-conveniences-0.33.0.jar
- removed dynamicroots-0.58.0.jar
- removed plainolpatches-2.36.0+1.21.1.jar

Tickets closed since the last release:
- BUG-34: "Surroundings (structure)" should also capture what's in the player's view, a...
- BUG-35: When the crash occurred, I was trying to hold left alt to keep an open toolbe...
- CCV-86: Following Pokemon force synchronous chunk loads on the server thread (FollowAheadTask/PostQuery -> getBlockState), stalls of up to 42 s
- DR-58: BoneMeal.pulse -> Dynamic Trees ageVolume takes up to 44% of server tick, 13.4 s stall (Stickbun 2026-11-21 01:46 UTC)
- DR-59: Giant Dynamic Trees spruce lose a flat slice of trunk at worldgen (setBlock in a far chunk refused), everywhere new terrain generates
- GEN-311: 'data modify ... from entity @s Pos' in a tick function serializes the whole player every tick (Spawn Animations; POP positionOnly misses it)

## 0.32.0 (2026-11-21)

- added Cobblecare-1.1.0.jar
- added cobblemon-conveniences-0.33.0.jar
- added dynamicroots-0.58.0.jar
- added plainolpatches-2.36.0+1.21.1.jar
- added trainers-delight-0.7.0.jar
- removed Cobblecare-1.0.3.jar
- removed cobblemon-conveniences-0.28.0.jar
- removed dynamicroots-0.57.1.jar
- removed emotecraft-for-MC1.21.1-2.4.12-neoforge.jar
- removed plainolpatches-2.34.0+1.21.1.jar
- removed trainers-delight-0.3.2.jar

Tickets closed since the last release:
- CC-63: Friendship XP bonus reaches +100% at 255, not 252
- CC-64: Water and Psychic favourites count hydration: larger of food or drink value, the other as saturation
- CCV-80: Lodge test onlyLodgeHuntersAreSlowedOffRoad timed out once (600 ticks)
- CCV-81: A follower that has arrived at a requeried post stands while the owner walks into it (sharp-turn test flake)
- CCV-82: A post chosen after a sharp turn can lie inside the personal space of the owner's new way (CCV-81 residual)
- GEN-231: Some Farmer's Delight recipes need ported to Cobblemon like how we (I believe...
- GEN-285: GameTests with Cobblemon on the classpath: mock players fail Cobblemon's script_registry_sync
- GEN-287: Boot crash: AIOOBE in EntityRenderers.register (parallel client setup race, seen with Mowzie's Mobs)
- GEN-295: Allow rubber trees to grow larger than 3-5 blocks of harvestable wood. Boneme...
- GEN-306: Effortless Building replace modes duplicate stacking blocks (mint litter +3 per spot per click)

## 0.31.0 (2026-11-20)

- added cobblemon-comes-alive-3.3.1.jar
- added mca-karma-4.2.2.jar
- removed cobblemon-comes-alive-3.2.0.jar
- removed mca-karma-4.2.0.jar

Tickets closed since the last release:
- CC-62: Cobblemon are refusing to eat because they're full but their fullnes meter is...

## 0.30.0 (2026-11-19)

- added cobblemon-conveniences-0.28.0.jar
- removed cobblemon-conveniences-0.27.2.jar

Tickets closed since the last release:
- CCV-75: Allow female Gogoat, Mareep, Wooloo, etc. to be milked as Miltank can, but le...

## 0.29.0 (2026-11-19)

- added cobblemon-conveniences-0.27.2.jar
- removed cobblemon-conveniences-0.26.0.jar

Tickets closed since the last release:
- CCV-76: I shouldn't be able to mark a Pokémon through a wall.

## 0.28.0 (2026-11-19)

- music_disc_maker-3.1.0+neoforge-1.21.1.jar -> music_disc_maker-3.1.0+neoforge-1.21.1.jar
- added mca-karma-4.2.0.jar
- added plainolpatches-2.34.0+1.21.1.jar
- removed mca-karma-4.0.0.jar
- removed plainolpatches-2.33.0+1.21.1.jar

Tickets closed since the last release:
- GEN-269: Allow the randomizer tool to place blocks into copycats.
- KAR-34: Villagers should request jewelry from Iron's Gems n' Jewelry, because current...
- KAR-35: Villagers drop their inventory on death although drops are off (INV-011)

## 0.27.0 (2026-11-19)

- added create_tracks_ponders-0.1.0-mc1.21.1-neoforge.jar
- added dynamicroots-0.57.1.jar
- added plainolpatches-2.33.0+1.21.1.jar
- added trainers-delight-0.3.2.jar
- removed dynamicroots-0.55.1.jar
- removed plainolpatches-2.32.8+1.21.1.jar
- removed trainers-delight-0.2.0.jar

Tickets closed since the last release:
- DR-52: This mega spruce is too tall and bulky for how few leaves it has.
- DR-54: I'm stuck on this bush!
- DR-56: Mushroom groves like this should decay on their own in the winter and summer....
- GEN-276: This Farmer's Delight recipe can't be made in the Farmer's Delight pot.
- GEN-277: How come this Farmer's Delight recipe can only be made in the Create mixer? I...
- GEN-278: Need to fix the new player experience re:settings. There's too many conflicts...
- GEN-281: Turning syrup back into sugar is a sugar dupe. It should only provide 1 sugar.
- GEN-282: Pressing "b" in this search menu while querying closes the backpack.
- GEN-283: Allow measuring tape to be put on the Traveler's Tool Belt.
- TD-02: I get "this can't be cooked" action bar text if I try to add an egg to a fryp...
- TD-03: This Farmer's Delight recipe can't be made in the Cobblemon campfire pot.
- TD-04: Make honey interchangeable with syrup for food recipes (but not XP / IV candi...

## 0.26.0 (2026-11-19)

- added Cobblecare-1.0.3.jar
- added cobblemon-ride-or-die-0.6.0.jar
- added cobblemonraidrevolution-neoforge-0.13.4.jar
- added materially-mended-0.5.4.jar
- removed Cobblecare-1.0.2.jar
- removed cobblemon-ride-or-die-0.5.0.jar
- removed cobblemonraidrevolution-neoforge-0.13.3.jar
- removed materially-mended-0.5.2.jar
- default key bindings changed for new installs (existing players keep their own)
- The private zip has an update (IndustrialCraft 2 Classic). Your current zip still works.

Tickets closed since the last release:
- CC-56: The hunger meter is cut off for Pokémon whose cards are shifted to the left i...
- CC-57: Fullness arc shouldn't be rendered here in the party summary; we can use the...
- CC-58: Remove "X of 16 segments" from tooltip, it's noise.
- CC-60: Poison Pokémon shouldn't want to eat soap.
- CC-61: Should be 100% at 252.
- GEN-266: Standing in an inch of water underground kills me
- IC2-12: IC2 adds a durability tooltip line to every damageable item
- IC2-13: Remove the Recycler tab from EMI, it's just clutter since it applies to every...
- MM-08: Overrepair seems not to apply when using one tool to repair another.
- ROD-01: Poké Chow (Dog Food) gives its benefits to Pokémon

## 0.25.0 (2026-11-19)

- added plainolpatches-2.32.8+1.21.1.jar
- removed plainolpatches-2.32.7+1.21.1.jar

Tickets closed since the last release:
- CC-59: Dog Food should apply the benefits given to Pokémon. Not sure where this shou...
- CCV-62: Can't mark a Pokémon if I have an item in my offhand.
- GEN-267: Living Wind + Cobblemon compat mod where the wind speed applies smooth kineti...
- GEN-274: Myths and Legends key items crash the survival server (NoSuchMethodError getBuckets)
- GEN-280: Crashed while opening a chest?
- KQ-11: Villagers should request jewelry from Iron's Gems n' Jewelry, because current...

## 0.24.0 (2026-11-19)

- added cobblemon-conveniences-0.26.0.jar
- added plainolpatches-2.32.7+1.21.1.jar
- removed cobblemon-conveniences-0.25.0.jar
- removed plainolpatches-2.29.4+1.21.1.jar

Tickets closed since the last release:
- GEN-217: I can't compare the canteens because in EMI their total capacity isn't listed...
- GEN-262: Rainbow is highly pixelated.
- GEN-264: My AE2 settings keep geting overwritten. I think it happens when I recharge m...
- GEN-268: The Rain Stick item has no durability rating.
- GEN-270: Make the "not interested" mod work with red merchants from supplementaries
- GEN-273: Zoroark Illusion leaks: Jade EV yield (Cobblemon Integrations) and Cobblenav search use the real species
- PH-09: UI layout recorder: element bounding boxes, layers and overlap report

## 0.23.0 (2026-11-18)

- added buggered-0.26.0.jar
- added Cobblecare-1.0.2.jar
- added cobblemon-conveniences-0.25.0.jar
- added cobblemon-ride-or-die-0.5.0.jar
- added cobblemonraidrevolution-neoforge-0.13.3.jar
- added create_renewables-2.5.3.jar
- added dynamicroots-0.55.1.jar
- added materially-mended-0.5.2.jar
- added paxromana-0.4.2.jar
- added plainolpatches-2.29.4+1.21.1.jar
- removed buggered-0.25.0.jar
- removed Cobblecare-0.63.0.jar
- removed cobblemon-conveniences-0.23.0.jar
- removed cobblemon-ride-or-die-0.4.2.jar
- removed cobblemonraidrevolution-neoforge-0.13.1.jar
- removed create_renewables-2.5.0.jar
- removed dynamicroots-0.55.0.jar
- removed materially-mended-0.5.1.jar
- removed paxromana-0.4.0.jar
- removed plainolpatches-2.29.1+1.21.1.jar
- 1 config, script or data files changed
- The private zip has an update (IndustrialCraft 2 Classic). Your current zip still works.

Tickets closed since the last release:
- BUG-20: Buggered cannot screencap EMI menu.
- BUG-21: Buggered captures Journeymap even with the UI disabled.
- BUG-25: I don't see the recent features that were supposed to be added to Buggered.
- BUG-31: Saved draft's screenshot replaced by a later capture
- BUG-33: Optional hardware-specs attachment in reports
- CC-49: Remove "none of your Pokémon eat this" from the action bar.
- CC-50: Hunger/Starvation friendship decay is insanely fast
- CC-53: Ghost types can forage foods that Ghosts can't normally eat.
- CC-54: Friendship loss due to low hunger should be reduced by 30%
- CCV-64: Pichu attributed to wrong owner. Jade says it belongs to "ptted" but it actua...
- CCV-65: I can attack others' Pokémon, even when friendly fire is off.
- CCV-66: Radius patrol: Lodge territory nodes, implicit networks (0.24.0)
- CCV-68: Owned Pokemon move faster on roads (20% off-road penalty, road-weighted pathing)
- CCV-69: Allow Pokémon eggs to be fried on a frying pan.
- CCV-71: Zoroark should be disguised in the wild.
- CICY-05: Remove the "healing" / "healing stopped" action bar text from healing machine...
- CR-02: Wind-driven rotation speed from Living Wind (instead of a static 8 RPM)
- CR-03: This ponder is inaccurate when Living Wind is installed
- CR-06: Windmills with Living Wind should interpolate between speeds so that the spee...
- CRR-02: Re-home the per-player raid features onto the shared battle
- CRR-10: Spiritomb is 36% of the star 3 bosses
- CRR-18: Raid boss special cases: Shedinja, switch/skip abilities, weather forms, type changers
- CRR-19: Transformed Ditto: duplicate transform line and gender symbol in its tile
- DR-16: Mangrove roots have a color tint that the other rooty blocks should share, no?
- DR-55: Apricorn trees are too stringy and sprawling. They should be more compact, re...
- ENG-04: per-job working copies of a server on Venus (more than one job per server folder)
- ENG-08: crash diagnostics: find out why JVMs crash on Venus, instead of only testing
- ENG-09: scripted client smoke/stress tests (ticket kind `client_scenario`)
- ENG-41: Venus client runs: --client-mod-jar
- ENG-42: UI gallery: animated fixtures to frame PNGs, GIF and strip
- ENG-44: Close tickets on promote (Fixes: trailer) and a weekly sweep of shipped-but-open tickets
- GEN-185: Spiders are invisible until they're about 4 blocks away.
- GEN-212: "Filling" mode applies to the "raised edge" option in the build menu, but it'...
- GEN-218: Picking a white mint yielded cyan mint seeds.
- GEN-219: Smoldering leaves aren't decaying.
- GEN-220: Turn off knockback from smoke inhalation damage, there's no warning before it...
- GEN-226: Client crash: Hoarfrost snow hush iterates the sound map while RSLS changes it
- GEN-237: Log spam in the user's play session
- GEN-246: Hearty Grains seems to be either absent or particularly uncommon in-world.
- GEN-263: This recipe for mechanical belts appears twice.
- GEN-266: Standing in an inch of water underground kills me
- IC2-10: Unshaped copper cable recipe overrides brass recipe when copper ingots are pu...
- IC2-11: Opening the IC2 guide book item causes the game to freeze, the ui to become m...
- MM-06: This tooltip, "broken: unusable until repaired" shouldn't show up on non-ench...
- MM-07: Change this tooltip so that Overrepair is shown as Durability, with the numer...
- PAX-01: The border isn't continuous.
- PAX-02: Drawing the border is heavy on performance. I go from 50FPS to 30FPS when the...
- PH-08: Read-only state endpoints and probe registry for scenario assertions

## 0.22.0 (2026-11-17)

- added Cobblecare-0.63.0.jar
- added cobblemon-conveniences-0.23.0.jar
- added create_i_choose_you-0.2.1.jar
- added paxromana-0.4.0.jar
- added plainolpatches-2.29.1+1.21.1.jar
- added trainers-delight-0.2.0.jar
- removed Cobblecare-0.61.0.jar
- removed cobblemon-conveniences-0.22.0.jar
- removed create_i_choose_you-0.2.0.jar
- removed paxromana-0.3.4.jar
- removed plainolpatches-2.27.0+1.21.1.jar
- 1 config, script or data files changed
- The private zip has an update (IndustrialCraft 2 Classic; No More Craters 1.21.1). Your current zip still works.

Tickets closed since the last release:
- CC-46: Rock types should be able to eat raw ore blocks, but as these are difficult t...
- CICY-01: You can send out Pokémon while they're in the healing machine. There don't se...
- CICY-03: The healing machine is missing a tooltip for the Create goggles displaying ho...
- CICY-04: There's no warning when the healing machine is inactive and not healing.
- GEN-241: Pokemon are refusing to eat items in their diets.
- GEN-244: Getting mid-20s FPS here for no apparent reason.
- GEN-245: Friendship loss due to low fullness should be reduced by 30%
- GEN-248: When my defense harshly falls twice in this battle, I should see -4 pips on t...
- TD-01: Crafted Pokemon foods: bouquet, trail mix, egg carton, eggnog; sugar-cube teas

## 0.21.0 (2026-11-16)

- added Cobblecare-0.61.0.jar
- added create_i_choose_you-0.2.0.jar
- added plainolpatches-2.27.0+1.21.1.jar
- removed Cobblecare-0.58.3.jar
- removed create_i_choose_you-0.1.3.jar
- removed plainolpatches-2.24.0+1.21.1.jar

Tickets closed since the last release:
- CC-47: Water types forage from water
- CCV-61: Campfire cooking, and other forms of cooking, doesn't work for Pokémon eggs e...
- GEN-194: You get "bleeding out, may need your help" messages for yourself.
- GEN-197: Cobblemon Trials Edition leaves trial-spawner block-entity data on plain spawner blocks
- GEN-201: Thirst: bigger containers by tier, fatigue instead of damage

## 0.20.0 (2026-11-15)

- rustling_leaves-neoforge-1.21.1-2.8.0.jar -> rustling_leaves-neoforge-1.21.1-2.8.0.jar
- added create_i_choose_you-0.1.3.jar
- removed create_i_choose_you-0.1.2.jar

Tickets closed since the last release:
- GEN-243: Client crash: Hoarfrost reads its client config on a client tick before the config is loaded

## 0.19.1 (2026-11-14)

- 2 config, script or data files changed

## 0.19.0 (2026-11-14)

- added cobblemon-conveniences-0.22.0.jar
- removed cobblemon-conveniences-0.21.1.jar

Tickets closed since the last release:
- GEN-221: Redstone Wire's recipes aren't craftable. Is the mod even usable?

## 0.18.0 (2026-11-14)

- added redstonequill-1.0.2.jar

## 0.17.0 (2026-11-14)

- added materially-mended-0.5.1.jar
- removed materially-mended-0.5.0.jar
- removed redstone_wire-1.0.8.jar

Tickets closed since the last release:
- CCA-14: I can't interact with this villager by right-clicking.
- MM-05: Overrepair should add a yellow tint over the green bar, not add a second bar.

## 0.16.0 (2026-11-14)

- added plainolpatches-2.24.0+1.21.1.jar
- removed plainolpatches-2.23.1+1.21.1.jar

Tickets closed since the last release:
- GEN-227: Hoarfrost SnowClient.onPlaySound uses a ThreadLocalRandom from the RSLS sound thread (C2ME check throws, event bus catches)
- GEN-236: HUGE seconds-long lagspike here.

## 0.15.0 (2026-11-14)

- added materially-mended-0.5.0.jar
- added plainolpatches-2.23.1+1.21.1.jar
- removed materially-mended-0.4.5.jar
- removed plainolpatches-2.22.4+1.21.1.jar

Tickets closed since the last release:
- GEN-229: Single-player: second world crashes (C2ME CheckedThreadLocalRandom in Cobblemon spawn)

## 0.14.0 (2026-11-14)

- added Cobblecare-0.58.3.jar
- added create_renewables-2.5.0.jar
- removed Cobblecare-0.57.2.jar
- removed create_renewables-2.4.2.jar

## 0.13.0 (2026-11-13)

- added cobblemon-ride-or-die-0.4.2.jar
- added create_renewables-2.4.2.jar
- added dynamicroots-0.55.0.jar
- added materially-mended-0.4.5.jar
- added mca-banker-2.0.1.jar
- added plainolpatches-2.22.4+1.21.1.jar
- removed cobblemon-ride-or-die-0.4.0.jar
- removed create_renewables-2.2.0.jar
- removed dynamicroots-0.52.0.jar
- removed materially-mended-0.4.4.jar
- removed mca-banker-2.0.0.jar
- removed plainolpatches-2.22.2+1.21.1.jar
- The private zip has an update (IndustrialCraft 2 Classic). Your current zip still works.

Tickets closed since the last release:
- CC-42: Feeding a Pokémon via the shift-right-click feed menu resets their animation,...
- DR-21: Floating leaves at this chunk border, like the tree got half-deleted.
- DR-24: Another clearing where tree generation just *ends*, seemingly at chunk borders.
- ENG-38: Venus Alpha client renders 3-10 fps in a fresh flat world (harness check 26)
- MM-04: Broken cursed armor can't be removed
- PH-10: Selftest check 37 fails on Alpha: Petrichor cinematic and subtitle layers vary between frames
- PNP-122: Forests should thin more evenly between biomes.
- PNP-93: This river gets cut off by what appears to be the shore of a lake.
- PNP-96: Seagrass makes water step up here.
- PNP-98: Blocks of air underwater near this tower.

## 0.12.0 (2026-11-13)

- added plainolpatches-2.22.2+1.21.1.jar
- removed plainolpatches-2.22.1+1.21.1.jar
- Snowy areas render faster: snow cover rebuilds are spread out (Hoarfrost).

## 0.11.0 (2026-11-13)

- added Cobblecare-0.57.2.jar
- added cobblemon-comes-alive-3.2.0.jar
- added cobblemon-conveniences-0.21.1.jar
- added cobblemonraidrevolution-neoforge-0.13.1.jar
- added create_i_choose_you-0.1.2.jar
- added create_renewables-2.2.0.jar
- added dynamicroots-0.52.0.jar
- added plainolpatches-2.22.1+1.21.1.jar
- removed Cobblecare-0.57.0.jar
- removed cobblemon-comes-alive-3.1.1.jar
- removed cobblemon-conveniences-0.21.0.jar
- removed cobblemonraidrevolution-neoforge-0.11.0.jar
- removed create_aero_radar-0.1.1-1.21.1.jar
- removed cbc_equally_opposite-0.1.3.jar
- removed cbc_going_ballistic-0.3.1.jar
- removed cbcscope-2.2.1.jar
- removed createbigcannons-5.11.7+mc.1.21.1.jar
- removed create_radar-0.4.9.4-1.21.1.jar
- removed create_renewables-2.0.2.jar
- removed dynamicroots-0.51.0.jar
- removed plainolpatches-2.21.0+1.21.1.jar
- removed ritchiesprojectilelib-2.1.2+mc.1.21.1-neoforge.jar
- Big Cannons and its add-ons, Create Radar and Create Aero Radar are removed (placed cannon blocks vanish).
- The Mechanical Healing Machine is replaced by the machine from Create: I Choose You! (placed machines convert automatically, it runs at any speed, Pokémon in it are locked while healing).
- Raid Revolution 0.13.1: special bosses.
- Windmill bearings show their speed, capacity and wind in Jade.
- Fixed a client crash from snowfall sound muffling (Hoarfrost with Remove Sound Lag Stutter).
- 2 config, script or data files changed
- The private zip has an update (Mechanical Healing Machine no longer needed). Your current zip still works.

Tickets closed since the last release:
- CC-41: Scavenging shouldn't send text to the action bar. Also, the SFX should be sou...
- CC-43: Healing out of battle should also grant friendship, if it doesn't already. Do...
- CCA-13: I gave a villager a Pikachu but it didn't get added to their team!
- CCV-59: Lodge recipe: healing machine via I Choose You tag
- CR-04: Windmills stress capacity AND their RPM need to scale with wind speed with Li...
- CR-07: This tooltip should be organized similar to the Steam boiler (height / free a...
- CRR-13 legwork: progression materials by stage, and a draft per-star loot table
- CRR-14: Boss movesets: sequential drafting with coverage and synergy
- CRR-15: The raid boss re-picks a weather move whose weather is already up
- DR-48: You take fall damage when descending trees even if you're going slowly.
- GEN-203: Wack ass absol exp
- GEN-210: I'm still getting cast moulds from the woodcutter. Please audit all Create Bi...
- KQ-10: Boot crash: ClientScreens writes McaQuests config before load
- MM-03: Mending tooltip is inaccurate.

## 0.10.0 (2026-11-11)

- added buggered-0.25.0.jar
- added Cobblecare-0.57.0.jar
- added cobblemon-comes-alive-3.1.1.jar
- added cobblemonraidrevolution-neoforge-0.11.0.jar
- added materially-mended-0.4.4.jar
- added mca-karmic-quests-0.6.2.jar
- added packtactics-0.16.0.jar
- added paxromana-0.3.4.jar
- added plainolpatches-2.21.0+1.21.1.jar
- removed buggered-0.23.0.jar
- removed Cobblecare-0.56.1.jar
- removed cobblemon-comes-alive-3.0.0.jar
- removed cobblemonraidrevolution-neoforge-0.9.0.jar
- removed materially-mended-0.4.2.jar
- removed mca-karmic-quests-0.6.1.jar
- removed packtactics-0.15.0.jar
- removed plainolpatches-2.19.2+1.21.1.jar
- 7 config, script or data files changed

Tickets closed since the last release:
- BUG-29: Closing cooking pot
- BUG-30: Reports record Effortless Building's build mode
- GEN-202: Cobblemon experience tracker TO THE MOON!

## 0.9.0 (2026-11-11)

- added packtactics-0.15.0.jar
- added plainolpatches-2.19.2+1.21.1.jar
- removed packtactics-0.14.4.jar
- removed plainolpatches-2.18.1+1.21.1.jar
- server updated IC2Classic 2.2.2-neo.1 -> 2.3.0-neo.1 (export-only: not in the pack index; replace the IC2Classic jar from the private zip with the 2.3.0-neo.1 one)

Tickets closed since the last release:
- GEN-180: We need to use the config to lower the rate at which ground erodes in Roads M...
- GEN-191: I was in a cave and a large number of mobs spawned all at once, 8+ or so, aft...
- GEN-198: Stickbun Central difficulty Hard to Normal
- GEN-206: Crash: Petrichor reads 'lit' on Cobblemon's campfire pot
- GEN-213: Cobblemon I captured suddenly leveled up to 55

## 0.8.0 (2026-11-10)

- gaboulibs-neoforge-1.9.jar -> gaboulibs-neoforge-1.9.jar
- added packtactics-0.14.4.jar
- added plainolpatches-2.18.1+1.21.1.jar
- removed packtactics-0.11.4.jar
- removed plainolpatches-2.15.8+1.21.1.jar
- 5 config, script or data files changed

Tickets closed since the last release:
- GEN-150: Limit this structure to 1 per 1000 chunks; seriously, they're freaking everyw...
- GEN-153: Getting a number of "failed to save chunk" errors.
- GEN-189: Disconnect screen shows a raw HTML error page with no Back button or ESC
- GEN-193: A creeper blew me up, and I went into the death countdown despite still appea...
- PT-15: Pillagers don't slow down when rearming their crossbow.
- PT-16: Pack Tactics owns illager patrols
- PT-17: Muffle ambient sound when a pack spawns

## 0.7.0 (2026-11-10)

- added buggered-0.23.0.jar
- added cobblemon-conveniences-0.21.0.jar
- added dynamicroots-0.51.0.jar
- added packtactics-0.11.4.jar
- added plainolpatches-2.15.8+1.21.1.jar
- removed buggered-0.22.0.jar
- removed cobblemon-conveniences-0.20.2.jar
- removed dynamicroots-0.50.0.jar
- removed packtactics-0.11.1.jar
- removed plainolpatches-2.15.7+1.21.1.jar
- 2 config, script or data files changed

Tickets closed since the last release:
- BUG-12: A while back, I launched the game and Buggered said there'd been a crash. The...
- BUG-13: Discarding a Buggered draft should close and clear the menu. Right now, it st...
- BUG-14: If you open Buggered while the world is generating, it doesn't save and close...
- BUG-15: I can't take screenshots while zoomed-in using Distant Horizons. I need this...
- BUG-16: Some reports don't record the player's position
- BUG-17: The report form doesn't re-lay itself out when the window is resized
- BUG-18: Buggered fine print should only be 2 lines at most. Slightly shrink the text...
- BUG-19: Filing a Buggered report during world creation unexpectedly closes the report...
- BUG-24: Every Buggered report records the world seed
- BUG-26: Treat a mod-loading failure on the previous launch as a load failure, not a crash
- CCV-58: Beedrill uses beehives; bee lines don't share hives
- CRR-01: Soft-locked shared raid battle: all raider slots dead, no request
- DR-07: Distant Horizon LODs don't include trees anymore. There should be SOME trees,...
- DR-10: Mangrove roots growing up into the air in erratic patterns. Roots don't attac...
- DR-11: Mangrove roots growing in the air around their actual wood blocks. We don't n...
- DR-12: Tapering for jungle trees is incorrect.
- DR-13: Odd gaps in the ground around mangroves. I understand that they can spawn mud...
- DR-14: More roots breaking with no player action.
- DR-15: Mangrove jungles are unplayably dense. This should be partly fixed by making...
- DR-17: A mangrove tree failed to spawn here, leaving behind orphaned entities, float...
- DR-19: Spanish moss texture isn't transparent.
- DR-20: Cypress knee blocks aren't connected to the cypress tree. Knee blocks should...
- DR-22: More floating leaves.
- DR-23: What the heck happened to this tree?
- DR-25: Mangrove roots are still spawning in the air; wasn't this supposed to be fixed?
- DR-26: More spontaneously broken roots, ALSO something that was supposed to be fixed...
- DR-27: Spruce generated without leaves + floating snow.
- DR-28: Square clearings. Clearings are OK, but they need an irregular shape.
- DR-30: Apricorn and Saccharine trees get crowded out in dense forests (sometimes a single leaf block)
- DR-31: Leaves growing out of mangrove roots
- DR-32: These mega spruce trees seem to lose their top leaves.
- DR-46: collapsesFollowTheSoftCap depends on the order and load of the run
- DR-47: Root records stay behind when a tree is removed without Dynamic Roots
- ENG-16: End a server job that crashed and hangs at exit
- ENG-18: Live view of Venus client runs on the phone (LAN), ENG-17 extension
- ENG-33: Pack CI/CD: gated, batched release of the pack and the Venus survival server
- GEN-102: Villager trapped on large Dynamic Tree.
- GEN-125: A couple seconds after selecting an FTF preset, the game freezes for a solid...
- GEN-134: Where does this frostmaw thing come from? In any case, the UI for its health...
- GEN-135: Cactus in the snow? Come on, now.
- GEN-136: Village path cuts off here. The village in general is messed up because struc...
- GEN-137: An incredibly, impossibly deep mineshaft starting from y=300 to y=-10.
- GEN-138: Lagspike as I was returning to the surface from a very deep mineshaft.
- GEN-145: Freeze after selecting a FTF preset for ~10 seconds.
- GEN-149: Where does this stalagmite-like generation come from? It's ugly.
- GEN-155: Frames got very stuttery here.
- GEN-156: Loot chest starts as double chest but then splits into 2 single chests when r...
- GEN-157: Remove the action bar text added by the RPG balloon mod which procs when a ba...
- GEN-158: We should prefer to clear leaves that aren't in the player's line of sight.
- GEN-159: rctapi + Run and Bun AI: ConcurrentModificationException in JTO.registerParser at mod load
- GEN-160: Client crash: Ecliptic Seasons DH refresh NPE (clientWorld null)
- GEN-181: Game froze for 4s.
- GEN-186: "ptted hit the ground too hard while trying to escape ptted" --> doesn't make...
- GEN-187: Skeletons are able to shoot arrows before they finish their spawn animation.
- GEN-188: "Large cast mould" needs a different recipe, since it conflicts with the stri...
- ORCH-01: "Best Laid Plains Alpha" instance (bleeding edge for the user's playtests)
- ORCH-02: `tools/new_ticket.py`: create a ticket with the next free number for a prefix
- ORCH-03: Move closed tickets' attachments to trash automatically
- PACK-02: 2-week survival test: Alpha to main, Winternode, packwiz for friends
- PNP-102: Tree layout differs between identical runs (decoration determinism)
- PNP-103: Rock/boulder features generate across planned river channels
- PNP-109: Tree origin in a planned channel (next patch; links PNP-102, PNP-103)
- PNP-113: Banks are one block too deep in many places. On flat beds like this, banks sh...
- PNP-114: Weird, out-of-place pillars near rivers. They don't look terrible but I think...
- PNP-41: Different view of the blank clearing from earlier.
- PNP-55: First spawn point differs between runs of the same seed
- PNP-70: Continent shapes: a mask-only study
- PNP-71: Replace FTF (future, post-MVP)
- PNP-72: Enclosed basins: connectivity decides sea, water balance decides lakes
- PNP-73: Staged world preview (one seed, five stages, offline)
- PNP-83: I waited 90 seconds and spawned on an iceberg! D:
- PNP-84: Seams on the ocean floor. Likely line up with chunk boundaries. Seas should b...
- PNP-86: I can't find land anywhere!
- PNP-91: Banks on this river could use some smoothing; many of the walls are 2-3 high...
- VENUS-05: client parity check, Mercury vs Venus (VENUS-04 done-when)
- VENUS-06: sync whole branch servers to Venus, so host auto can use it

## 0.6.0 (2026-11-09)

- added Cobblecare-0.56.1.jar
- added dynamicroots-0.50.0.jar
- added plainolpatches-2.15.7+1.21.1.jar
- removed Cobblecare-0.55.0.jar
- removed dynamicroots-0.49.5.jar
- removed plainolpatches-2.15.4+1.21.1.jar
- 1 config, script or data files changed

Tickets closed since the last release:
- CC-40: Bugs scaring off creepers isn't reliable. If they get out of range of the eff...
- DR-42: Planted DR trees: bee nests (capped), vines, podzol and other postGrow features
- DR-45: Floating Apricorn.
- ENG-15: server boot checks on Venus, and measured peak memory for every job
- ENG-31: Announced server restarts: 10/5/1-minute warnings before downtime
- GEN-176: Out of battle catch rate not showing
- GEN-179: Big lag spike happening now.
- GEN-183: Lagspike here.
- PNP-120: Plate-world solve starves the survival server: own bounded pool, solve ahead of players
- PNP-24: "Preparing the world" text on FTF creation screen isn't necessary. Should be...
- PNP-25: Why is the riverbed pockmarked? Ideally it'd be flat. Maybe the carving leave...
- PNP-28: Oddly-shaped ridge along the riverbanks. In general, banks carry stone what f...
- PNP-34: This river is pinched. Why?
- PNP-35: Another ridge between the river and the rest of the land. Riverbanks are too...
- PNP-36: This huge river gets squeezed into a tiny, shallower segment for some reason.
- PNP-37: Very obvious artificial ridge along this riverbank.
- PNP-40: Clear seam under the water here where the two banks meet that could be better...
- PNP-42: Rivers should vary in width slightly as they meander, but not to this extent....
- PNP-44: Stone wall along this river for no apparent reason.
- PNP-45: Another site where a huge river is unrealistically squashed into a much narro...
- PNP-46: The ridge here cuts off this sandbar. Are stony materials getting painted ove...
- PNP-49: Extremely odd square-with-rounded-corners cutout along chunk borders near the...
- PNP-52: The coastal smoothing pass we added probably isn't necessary anymore now that...
- VENUS-04: client testing on Venus (runner phase 4)

## 0.5.0 (2026-11-09)

- added plainolpatches-2.15.4+1.21.1.jar
- added plainsandpeaks-1.23.6.jar
- removed plainolpatches-2.15.2+1.21.1.jar
- removed plainsandpeaks-1.23.5.jar
- 1 config, script or data files changed

Tickets closed since the last release:
- DR-40: Apricorn trees planted by hand take a very long time to produce fruit. Intended?
- DR-43: Planted Apricorn trees do not produce fruit
- GEN-175: PlayerRevive downed screen: text overlaps (and clashes with other HUD mods)
- GEN-177: Cobblemon catch rate display is not working. In this situation, the catch rat...

