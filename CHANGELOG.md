# Best Laid Plains: changelog

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

