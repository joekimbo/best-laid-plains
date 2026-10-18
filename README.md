# Best Laid Plains

A NeoForge 1.21.1 modpack (Minecraft 1.21.1, NeoForge 21.1.259, about 370 mods), kept up to date with
[packwiz](https://packwiz.infra.link/). This repository holds the pack definition: the mod list, the configs, KubeJS data and datapacks.
Everything downloads automatically from the mods' own pages (Modrinth, CurseForge, the authors' GitHub releases) or from this
repository's `jars` release.

## Player guide

You need [Prism Launcher](https://prismlauncher.org/) and a Minecraft Java account. Prism installs Java 21 for you.

**First time (once)**
1. Import the zip you received privately (`Best-Laid-Plains-prism-<version>.zip`): in Prism, *Add Instance* → *Import from zip*.
   The zip carries a few files that cannot be published here (some mods and music), plus the updater. The server address comes
   with the zip, not from this page.
2. Start the instance. The first start takes a few minutes: an updater window downloads all mods and configs (about 800 MB).
   Keep the computer online until the game window opens.
3. Join the server from *Multiplayer* with the address you were given. Give the game at least 8 GB of RAM (the instance asks for 8 GB).

**Updates arrive by themselves.** Every time you press *Play*, the updater checks this repository and installs what changed (new or
updated mods, config changes) before the game starts. You don't import anything again unless you are told a new zip is needed
(that happens only when one of the private files changes).

Your own client settings (video, controls, minimap, JEI/EMI layout, shaders) are kept when the pack updates; gameplay and server-side
settings are overwritten on purpose so everybody has the same rules.

**If the updater fails**
- Check your internet connection and press *Play* again; most failures are a network hiccup.
- "Hash invalid" or a 404 right after an announcement: the files are cached for a few minutes on GitHub; wait five minutes and try again.
- Still failing: in the instance folder (*Folder* → *Minecraft Folder*) delete `packwiz.json` and start again; this forces a full check.
- A mod missing or "wrong version" when joining: the updater did not finish. Start the instance again and let the window finish.
- If it keeps failing, send the admin a screenshot of the updater window and the file `logs/latest.log`.

Do not delete the mod jars you got in the private zip (`IC2Classic…`, `cobblemonmechanicalhealingmachine…`, `nomorecraters…`);
the updater doesn't manage them. If they get lost, import the zip into a new instance.

## For maintainers

The pack is generated from the maintainer's instance; don't edit files here by hand. See `NOTICES.md` for third-party credits.
