/* =========================================================
   PROJECT TROPICS — SITE CONFIG
   Edit the links below. Every Discord button, connect button
   and application button on the site reads from this file.
   ========================================================= */
window.PT_CONFIG = {
  // Your permanent Discord invite link
  discordInvite: "https://discord.com/invite/ySwWpH8FgH",

  // FiveM connect info (shown on the home page + resources)
  serverName: "Project Tropics Roleplay",
  connectCommand: "connect cfx.re/join/vg47ee",
  fivemJoinUrl: "https://cfx.re/join/vg47ee",

  // Just the code from your cfx.re/join link (e.g. "abc123").
  // When set, the home page shows live server status and player count.
  cfxCode: "vg47ee",

  // Server status page (Status button in the top menu bar)
  statusPage: "https://projecttropicsrp.fivestatus.com/",

  // Application form links (Google Forms, Discord threads, etc.)
  applications: {
    lapd: "https://guildbase.gg/apply/project-tropics-roleplay/los-santos-police-department",
    lasd: "https://guildbase.gg/apply/project-tropics-roleplay/blaine-county-sheriffs-office",
    chp: "https://guildbase.gg/apply/project-tropics-roleplay/san-andreas-state-troopers",
    comms: "https://guildbase.gg/apply/project-tropics-roleplay/san-andreas-communications",
    civ: "https://guildbase.gg/apply/project-tropics-roleplay/civilian-operations",
    dot: "#",
    staff: "#"
  },

  // Set to false to show an application as CLOSED
  applicationsOpen: {
    lapd: true,
    lasd: true,
    chp: true,
    comms: true,
    civ: true,
    dot: false,
    staff: false
  }
};
