window.__ModuleLoader__.load({
	id: "dsh-forest",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const react = require("react");

		const LIGHT_ID = "forest-light";
		const DARK_ID = "forest-dark";
		const MODE_KEY = "dsh.forest.mode";
		const FONT_KEY = "dsh.forest.font";
		const LOCALE_NS = "settings.forest";
		const OVERRIDE_SOURCE = "dsh-forest";

		// ---------- 调色板（Typora Forest 主题色，亮/暗两套） ----------
		const A = "--dsw-alias-";
		const LIGHT = {
			"bg-base": "#ffffff", "bg-layer-1": "#ffffff", "bg-layer-2": "#f6f8f6", "bg-layer-3": "#eef2ee",
			"bg-mask-1": "#0000003d", "bg-mask-2": "#0000001f", "bg-mask-3": "#0000007a", "bg-mask-drop": "#ffffffcc", "bg-mask-photo": "#000000e0",
			"bg-module-platform": "#eef4f0", "bg-multi-select": "#e6efe9", "bg-overlay": "#e3ebe6", "bg-skeleton": "#0000000a",
			"border-inverted": "#0000", "border-inverted2": "#0000", "border-l1": "#0d2a1f0a", "border-l2": "#0d2a1f1a",
			"border-l2-darkmode-thin": "#0d2a1f1a", "border-l3": "#0d2a1f26", "border-l4": "#0d2a1f33",
			"brand-primary": "#0b3d2e", "brand-primary-invert": "#ffffff", "brand-primary-new-colorprimary-new-color": "#00997b", "brand-text": "#0b3d2e",
			"button-contrast-fill": "#0b3d2e", "button-elevated-fill": "#ffffff", "button-floating-fill": "#ffffff", "button-floating-hover": "#f1f6f3",
			"button-ghost-active-border": "#3f8f76", "button-ghost-active-fill": "#dcebe3", "button-ghost-active-hover": "#cfe3d8",
			"button-info-fill": "#00769a", "button-info-hover": "#006181", "button-primary-dimmed": "#e3efe9", "button-primary-fill": "#0b3d2e", "button-primary-hover": "#073226",
			"button-tool-bar-fill": "#54555780", "button-tool-bar-fill-invisible": "#1f1f1f5c", "button-tool-bar-hover": "#54555799",
			"interactive-bg-active": "#00997b14", "interactive-bg-hover": "#00997b0d", "interactive-bg-hover-accent": "#00997b1f",
			"interactive-bg-hover-danger": "#ec13130d", "interactive-bg-hover-solid": "#e9f1ec",
			"label-caption": "#93a69b", "label-dimmed": "#c9d6cd", "label-primary": "#18281f", "label-primary-bluish": "#00664f",
			"label-primary-dimmed": "#22392e", "label-primary-foreground": "#ffffff", "label-primary-inverted": "#ffffff",
			"label-secondary": "#3d5347", "label-tertiary": "#5f7669",
			"markdown-citation": "#eef4f0", "markdown-code-block": "#003444", "markdown-code-block-banner": "#063a4a",
			"markdown-code-segment-selected": "#063a4a", "markdown-code-segment-unselected": "#032b38", "markdown-inline-code": "#e9f0eb",
			"markdown-placeholder": "#edf3ee", "markdown-tag": "#e2ede6",
			"scrollbar-bg-l1": "#c3cec7", "scrollbar-bg-l2": "#c3cec7", "scrollbar-hover-l1": "#a3b3a9", "scrollbar-hover-l2": "#a3b3a9",
			"state-business-primary": "#00769a", "state-business-tertiary": "#e0eef3", "state-error-primary": "#d64545", "state-error-secondary": "#ff6b6b",
			"state-success-primary": "#00997b", "state-success-secondary": "#2fae8e", "state-success-tertiary": "#e0f2ea",
			"state-warn-label": "#dd8629", "state-warn-primary": "#f59e0b", "state-warn-secondary": "#f7ad31", "state-warn-tertiary": "#fef5e7",
			"toast-bg": "#16352b", "tooltip-bg": "#1b3d31"
		};
		const DARK = {
			"bg-base": "#141d18", "bg-layer-1": "#18221c", "bg-layer-2": "#1c2720", "bg-layer-3": "#202d25",
			"bg-mask-1": "#00000080", "bg-mask-2": "#0003", "bg-mask-3": "#0000007a", "bg-mask-drop": "#101d17b3", "bg-mask-photo": "#000000e0",
			"bg-module-platform": "#1e2a23", "bg-multi-select": "#223029", "bg-overlay": "#2a3a31", "bg-skeleton": "#ffffff14",
			"border-inverted": "#ffffff0f", "border-inverted2": "#ffffff14", "border-l1": "#ffffff0f", "border-l2": "#ffffff1f",
			"border-l2-darkmode-thin": "#ffffff0f", "border-l3": "#ffffff29", "border-l4": "#ffffff40",
			"brand-primary": "#dcefe6", "brand-primary-invert": "#141d18", "brand-primary-new-colorprimary-new-color": "#3ecf8e", "brand-text": "#dcefe6",
			"button-contrast-fill": "#e9f5ef", "button-elevated-fill": "#1c2a22", "button-floating-fill": "#162019", "button-floating-hover": "#223228",
			"button-ghost-active-border": "#4f7a68", "button-ghost-active-fill": "#24372c", "button-ghost-active-hover": "#2b4134",
			"button-info-fill": "#48b9c8", "button-info-hover": "#5fc8d6", "button-primary-dimmed": "#22362b", "button-primary-fill": "#d7efe5", "button-primary-hover": "#ffffff",
			"button-tool-bar-fill": "#54555780", "button-tool-bar-fill-invisible": "#1f1f1f5c", "button-tool-bar-hover": "#54555799",
			"interactive-bg-active": "#3ecf8e24", "interactive-bg-hover": "#3ecf8e12", "interactive-bg-hover-accent": "#3ecf8e1f",
			"interactive-bg-hover-danger": "#f25a5a26", "interactive-bg-hover-solid": "#26392e",
			"label-caption": "#5d7066", "label-dimmed": "#6d8076", "label-primary": "#ddeae3", "label-primary-bluish": "#7bd6b0",
			"label-primary-dimmed": "#b3c8bc", "label-primary-foreground": "#0d1712", "label-primary-inverted": "#1c2a22",
			"label-secondary": "#a9bdb1", "label-tertiary": "#81958a",
			"markdown-citation": "#1c2a22", "markdown-code-block": "#0b1712", "markdown-code-block-banner": "#12211a",
			"markdown-code-segment-selected": "#1d2c24", "markdown-code-segment-unselected": "#0b1712", "markdown-inline-code": "#1a2b21",
			"markdown-placeholder": "#1c2a22", "markdown-tag": "#20352a",
			"scrollbar-bg-l1": "#35483d", "scrollbar-bg-l2": "#35483d", "scrollbar-hover-l1": "#4a6053", "scrollbar-hover-l2": "#4a6053",
			"state-business-primary": "#48b9c8", "state-business-tertiary": "#17303a", "state-error-primary": "#ff6b6b", "state-error-secondary": "#f25a5a",
			"state-success-primary": "#3ecf8e", "state-success-secondary": "#2fb87a", "state-success-tertiary": "#143527",
			"state-warn-label": "#dd8629", "state-warn-primary": "#f59e0b", "state-warn-secondary": "#f7ad31", "state-warn-tertiary": "#27241f",
			"toast-bg": "#22362b", "tooltip-bg": "#24382d"
		};
		// 代码高亮：Forest 原版深青代码块 + code-mirror 亮色 token
		const SHIKI_L = {
			"shiki-foreground": "#eef5f1", "shiki-background": "#003444", "shiki-token-constant": "#f77669",
			"shiki-token-string": "#c3e88d", "shiki-token-comment": "#aebbc2", "shiki-token-keyword": "#c792ea",
			"shiki-token-parameter": "#ffcb6b", "shiki-token-function": "#53c8b8", "shiki-token-string-expression": "#c3e88d",
			"shiki-token-punctuation": "#9fb3ac", "shiki-token-link": "#53c8b8"
		};
		const SHIKI_D = {
			"shiki-foreground": "#dcefe6", "shiki-background": "#0b1712", "shiki-token-constant": "#f77669",
			"shiki-token-string": "#c3e88d", "shiki-token-comment": "#8fa79a", "shiki-token-keyword": "#c792ea",
			"shiki-token-parameter": "#ffcb6b", "shiki-token-function": "#53c8b8", "shiki-token-string-expression": "#c3e88d",
			"shiki-token-punctuation": "#9fb4a8", "shiki-token-link": "#53c8b8"
		};
		function expand(map) {
			const out = {};
			for (const [k, v] of Object.entries(map)) out[k.startsWith("shiki-") ? "--" + k : A + k] = v;
			return out;
		}
		const LIGHT_TOKENS = expand({ ...LIGHT, ...SHIKI_L });
		const DARK_TOKENS = expand({ ...DARK, ...SHIKI_D });
		const PAIRS = {};
		for (const k of Object.keys(LIGHT_TOKENS)) PAIRS[k] = { light: LIGHT_TOKENS[k], dark: DARK_TOKENS[k] };

		// ---------- 字体 ----------
		const FONT_CSS = [
			'html[data-forest-font="forest"] { --dsw-font-family: "Source Han Sans SC", "思源黑体", "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", "JetBrains Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; --ds-font-family-code: "JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, "SF Mono", Menlo, "Source Han Sans SC", "Microsoft YaHei", monospace; }',
			'html[data-forest-font="serif"] { --dsw-font-family: "Source Han Serif SC", "思源宋体", "Noto Serif CJK SC", "Songti SC", SimSun, Georgia, "Times New Roman", serif; --ds-font-family-code: "JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, "SF Mono", Menlo, monospace; }',
			'html[data-forest-font="mono"] { --dsw-font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, "Source Han Sans SC", "PingFang SC", "Microsoft YaHei", monospace; --ds-font-family-code: "JetBrains Mono", "Fira Code", "Cascadia Code", Consolas, "SF Mono", Menlo, monospace; }'
		].join("\n");

		// 代码块 banner 修复：语言名与复制按钮使用与代码前景一致的浅色
		const SKIN_CSS = [
			'/* Forest: code block banner labels (language + copy) follow the code foreground */',
			'.md-code-block > div:first-child > div > div:first-child,',
			'.md-code-block > div:first-child > div > div:nth-child(2) button,',
			'.md-code-block [class*="infostring"], .md-code-block [class*="copyButton"] { color: #eef5f1 !important; }',
			'body[data-ds-dark-theme] .md-code-block > div:first-child > div > div:first-child,',
			'body[data-ds-dark-theme] .md-code-block > div:first-child > div > div:nth-child(2) button,',
			'body[data-ds-dark-theme] .md-code-block [class*="infostring"], body[data-ds-dark-theme] .md-code-block [class*="copyButton"] { color: #dcefe6 !important; }'
		].join("\n");

		// ---------- 设置行 UI ----------
		const styles = {
			group: { borderBottom: "1px solid var(--dsw-alias-border-l2)", padding: "12px 0", display: "flex", flexDirection: "column", gap: "10px" },
			title: { color: "var(--dsw-alias-label-primary)", fontSize: "14px", lineHeight: "22px" },
			row: { display: "flex", flexWrap: "wrap", gap: "8px" },
			cube: { display: "inline-flex", alignItems: "center", gap: "6px", boxSizing: "border-box", border: "1px solid var(--dsw-alias-border-l2)", color: "var(--dsw-alias-label-primary)", background: "transparent", borderRadius: "12px", padding: "8px 14px", fontSize: "13px", lineHeight: "20px", cursor: "pointer" },
			cubeSelected: { background: "var(--dsw-alias-bg-module-platform)", borderColor: "var(--dsw-static-neutral-bluish-400)" },
			dot: { width: "10px", height: "10px", borderRadius: "50%", display: "inline-block", border: "1px solid var(--dsw-alias-border-l3)" }
		};
		const MODES = [
			{ id: "system", labelKey: "mode.system", dot: "#00997b" },
			{ id: "light", labelKey: "mode.light", dot: "#f6f8f6" },
			{ id: "dark", labelKey: "mode.dark", dot: "#141d18" },
			{ id: "off", labelKey: "mode.off", dot: null }
		];
		const FONTS = [
			{ id: "forest", labelKey: "font.forest" },
			{ id: "default", labelKey: "font.default" },
			{ id: "serif", labelKey: "font.serif" },
			{ id: "mono", labelKey: "font.mono" }
		];

		function ForestRow({ t, snapshot, subscribe, selectMode, selectFont }) {
			const s = react.useSyncExternalStore(subscribe, snapshot);
			return react.createElement("div", { style: styles.group },
				react.createElement("div", { style: styles.title }, t("title")),
				react.createElement("div", { style: styles.row },
					MODES.map((m) => react.createElement("button", {
						key: m.id, type: "button",
						style: s.mode === m.id ? { ...styles.cube, ...styles.cubeSelected } : styles.cube,
						"aria-pressed": s.mode === m.id,
						onClick: () => selectMode(m.id)
					},
						react.createElement("span", { style: { ...styles.dot, background: m.dot ?? "transparent" } }),
						t(m.labelKey)
					))
				),
				react.createElement("div", { style: styles.title }, t("fontTitle")),
				react.createElement("div", { style: styles.row },
					FONTS.map((f) => react.createElement("button", {
						key: f.id, type: "button",
						style: s.font === f.id ? { ...styles.cube, ...styles.cubeSelected } : styles.cube,
						"aria-pressed": s.font === f.id,
						onClick: () => selectFont(f.id)
					}, t(f.labelKey)))
				)
			);
		}

		// ---------- 文案 ----------
		const zh = {
			title: "Forest 主题",
			fontTitle: "字体",
			"mode.system": "跟随系统",
			"mode.light": "明亮",
			"mode.dark": "深色",
			"mode.off": "关闭",
			"font.forest": "思源黑体 + JetBrains Mono",
			"font.default": "默认",
			"font.serif": "衬线",
			"font.mono": "等宽"
		};
		const en = {
			title: "Forest Theme",
			fontTitle: "Font",
			"mode.system": "Follow system",
			"mode.light": "Light",
			"mode.dark": "Dark",
			"mode.off": "Off",
			"font.forest": "Source Han Sans + JetBrains Mono",
			"font.default": "Default",
			"font.serif": "Serif",
			"font.mono": "Monospace"
		};

		// ---------- 持久化（localStorage，catppuccin 同款模式） ----------
		function readMode() {
			try {
				const v = localStorage.getItem(MODE_KEY);
				return v === "light" || v === "dark" || v === "off" ? v : "system";
			} catch { return "system"; }
		}
		function writeMode(v) { try { localStorage.setItem(MODE_KEY, v); } catch {} }
		function readFont() {
			try {
				const v = localStorage.getItem(FONT_KEY);
				return v === "forest" || v === "serif" || v === "mono" || v === "default" ? v : "forest";
			} catch { return "forest"; }
		}
		function writeFont(v) { try { localStorage.setItem(FONT_KEY, v); } catch {} }

		// ---------- 插件主体 ----------
		const inject = ["slots", "locale", "theme"];

		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(LOCALE_NS, { zh, en }), "forest: dictionaries");
			ctx.effect(() => {
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-forest";
				tag.dataset.pluginCss = "dsh-forest/styles.css";
				tag.textContent = FONT_CSS + SKIN_CSS;
				document.head.appendChild(tag);
				return () => { tag.remove(); };
			}, "forest: font css");

			const theme = ctx.get("theme");
			ctx.effect(() => {
				const d1 = theme.register({ id: LIGHT_ID, colorScheme: "light", tokens: LIGHT_TOKENS });
				const d2 = theme.register({ id: DARK_ID, colorScheme: "dark", tokens: DARK_TOKENS });
				return () => { d1(); d2(); };
			}, "forest: themes");

			let layerDispose = null;
			let lastBuiltin = "system";
			const listeners = new Set();
			let snap = { mode: readMode(), font: readFont() };
			const notify = () => {
				snap = { mode: readMode(), font: readFont() };
				for (const l of listeners) l();
			};
			const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l); };
			const isForest = (id) => id === LIGHT_ID || id === DARK_ID;

			const remember = () => {
				const p = theme.getTheme().preference;
				if (p === "light" || p === "dark" || p === "system") lastBuiltin = p;
			};
			const restoreBuiltin = () => {
				if (isForest(theme.getTheme().active.id)) {
					try { theme.setTheme(lastBuiltin); } catch {}
				}
			};
			const clearLayer = () => { if (layerDispose) { layerDispose(); layerDispose = null; } };
			const applyFont = (font) => {
				const el = document.documentElement;
				if (font && font !== "default") el.setAttribute("data-forest-font", font);
				else el.removeAttribute("data-forest-font");
			};

			const reconcile = () => {
				const mode = readMode();
				applyFont(readFont());
				remember();
				if (mode === "light") {
					clearLayer();
					if (theme.getTheme().active.id !== LIGHT_ID) { try { theme.setTheme(LIGHT_ID); } catch {} }
				} else if (mode === "dark") {
					clearLayer();
					if (theme.getTheme().active.id !== DARK_ID) { try { theme.setTheme(DARK_ID); } catch {} }
				} else if (mode === "system") {
					restoreBuiltin();
					if (!layerDispose) layerDispose = theme.overrideTokens(OVERRIDE_SOURCE, PAIRS);
				} else {
					clearLayer();
					restoreBuiltin();
				}
				notify();
			};

			ctx.effect(() => {
				const onTheme = () => {
					const mode = readMode();
					if (mode !== "light" && mode !== "dark") return;
					const t = theme.getTheme();
					const p = t.preference;
					if ((p === "light" || p === "dark") && !isForest(t.active.id)) {
						// 用户在外观设置里显式选择了内置主题 → 让位
						writeMode("off");
						clearLayer();
						notify();
					} else if (p === "light" || p === "dark" || p === "system") {
						lastBuiltin = p;
					}
				};
				const onStorage = (e) => {
					if (e.key !== MODE_KEY && e.key !== FONT_KEY) return;
					reconcile();
				};
				const offTheme = ctx.on("theme/change", onTheme);
				window.addEventListener("storage", onStorage);
				reconcile();
				return () => {
					offTheme();
					window.removeEventListener("storage", onStorage);
					clearLayer();
					restoreBuiltin();
				};
			}, "forest: reconcile");

			const injected = () => ({
				snapshot: () => snap,
				subscribe,
				selectMode: (id) => { writeMode(id); reconcile(); },
				selectFont: (id) => { writeFont(id); reconcile(); }
			});
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "forest",
				order: 30,
				locale: LOCALE_NS,
				inject: injected
			}, ForestRow));
		}

		exports.LIGHT_ID = LIGHT_ID;
		exports.DARK_ID = DARK_ID;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
