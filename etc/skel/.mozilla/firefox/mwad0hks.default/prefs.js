//
user_pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
user_pref("intl.locale.matchOS", true);

// Disable default browser checking.
user_pref("browser.shell.checkDefaultBrowser", false);

// Prevent EULA dialog to popup on first run
user_pref("browser.EULA.override", true);

// identify linuxmint @ yahoo searchplugin
user_pref("browser.search.param.yahoo-fr", "linuxmint");

// Set the UserAgent
user_pref("general.useragent.vendor", "Linux Mint");
user_pref("general.useragent.vendorSub", "1");
user_pref("general.useragent.vendorComment", "Debian");

// Default search engine
user_pref("browser.search.isUS", false);
user_pref("browser.search.order.1", "Google");
user_pref("browser.search.order.2", "Yahoo");
user_pref("browser.search.order.3", "Ixquick");
user_pref("browser.search.order.4", "Startpage");
user_pref("browser.search.order.5", "DuckDuckGo");
user_pref("browser.search.selectedEngine", "Google");
user_pref("browser.search.searchEnginesURL", "http://www.linuxmint.com/searchengines/");
user_pref("keyword.URL", "https://duckduckgo.com/?t=lm&q=");

// Activate the backspace key for browsing back
user_pref("browser.backspace_action", 0);

// Disable ipv6
user_pref("network.dns.disableIPv6", true);

// Ignore Mozilla release notes startup pages
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Homepage
user_pref("browser.startup.homepage", "http://www.ausiasmarch.net");

// Save tabs before exiting
user_pref("browser.showQuitWarning", true);

// Don't interrupt user workflow
user_pref('datareporting.policy.dataSubmissionPolicyBypassNotification', true);
user_pref('browser.slowStartup.notificationDisabled', true);
user_pref('browser.disableResetPrompt', true);
user_pref("browser.rights.3.shown", true);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
