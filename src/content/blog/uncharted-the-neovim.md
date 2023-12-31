---
title: "Uncharted The NeoVim"
description: "NeoVim feeling dull? Sprinkle in Lua for a vibrant upgrade! Customize effortlessly and bring new life to your NeoVim journey"
publishDate: 2022-12-12
tags: ["NeoVim", "lua", "linux"]
image: {
	src: 'https://ik.imagekit.io/rayshold/my-blog/posts/configure-neovim/img/neovim-banner.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673684014332',
	alt: 'NeoVim Screenshot'
}
---

I presume every Linux user aware of NeoVim, basically a fork of Vim with lua integration to make it more customizable. Well you can customize NeoVim without lua but then there would be no point of using NeoVim.

So, the question is why not use distros like NvChad, Lunarvim, Spacevim, AstroNvim etc, why wasting time configuring it yourself? In my case I installed Linux to learn and NeoVim is part of it. One of the two reason of writing this blog is I couldn't find the perfect guide to learn from maybe soul reason was unfamiliarity with Lua and documentations are tend to be convoluted, at least not for beginners like me. Well I hope that wraps up summery part, I'm not quite experienced at writing blogs.

Before following this or any guide first take a look at [lua-guide](https://neovim.io/doc/user/lua-guide.html#lua-guide). I'm sure it will make things easier for you.

**Table of Content**

- 📦 [Install Packer](#install-packer)
- 🧩 [Intall Plugins](#install-plugins)
- 💤 [Lazy Loading](#lazy-loading)
- 🔧 [Configure LSP](#configure-lsp)
- ⚙️ [Options/Settings](#optionssettings)
- ⌨️ [Keybindings](#keybindings)
- 🌟 [Must Try Plugins](#must-try-plugins)

**Here, have a look at my `~/.config/nvim` tree**

```sh
├── init.lua
├── lua
│   ├── core
│   │   ├── bootstrap.lua
│   │   ├── keybindings.lua
│   │   ├── kittymargin.lua
│   │   ├── lazyload.lua
│   │   └── settings.lua
│   └── plugins
│       ├── configs
│       │   ├── alpha.lua
│       │   ├── bufferline.lua
│       │   ├── lspzero.lua
│       │   ├── neo-tree.lua
│       │   ├── notify.lua
│       │   ├── others.lua
│       │   ├── statusline.lua
│       │   └── treesitter.lua
│       └── init.lua
└── README.md
```

My `~/.config/nvim` tree is similar to NvChad's as it's clean and easy to organize

## Install Packer

Installing packer not hard at all, hard part is bootstrapping it, no one wants to go through github and copy paste that [installation code](https://github.com/wbthomason/packer.nvim#quickstart) every time they install packer on a new machine, Linux is all about automation and time is precious.

Understanding bootstrapping not that hard, what it does is install packer automatically after you clone your dotfiles to a new machine and launch NeoVim, simple right?

```lua
local status_ok, packer = pcall(require,'packer')
if status_ok then
    return
end
vim.defer_fn(function()
    pcall(require, "impatient")
end, 0)
-- setup packer + plugins
local fn = vim.fn
local install_path = fn.stdpath "data" .. "/site/pack/packer/start/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
    vim.api.nvim_set_hl(0, "NormalFloat", { bg = "#2d2e3b" })
    print ("Cloning Packer", "-->",install_path)
    fn.system { "git", "clone", "--depth", "1", "https://github.com/wbthomason/packer.nvim", install_path }
    -- install plugins + compile their configs
    vim.cmd "packadd packer.nvim"
    require "plugins"
    vim.cmd "PackerSync"
end
```

In order to make bootstrap script working add following line to `~/.config/nvim/init.lua`

```sh
require(core.bootstrap)
```

## Install Plugins

Installing plugins via packer.nvim is a simple process that involves adding the plugin's name and repository information to the user's configuration file, and then running a command within NeoVim to install the plugin. The packer.nvim plugin manager will handle the installation and updates of the plugins.

```lua
local status_ok, packer = pcall(require, "packer")
if not status_ok then
	return
end
return require("packer").startup({
	function(use)
		-- your plugins goes here
		use("wbthomason/packer.nvim")
	end,
	-- Packer Configuration
	config = {
		auto_clean = true,
		compile_on_sync = true,
		git = { clone_timeout = 6000 },
		display = {
			open_fn = function()
				return require("packer.util").float({ border = "rounded" })
			end,
		},
	},
})

```

Following snippet not that hard as it looks, the `config = {}` part is user preference, code before that important. I'm using `pcall` to make sure of no error, rest written in README.md.

**Basic Structure Of Plugins**

```lua
use({
	"plugin link",
	branch = "", -- optional
	config = function()
		require("plugin_name").setup({
		-- plugin's configuration
		})
	end,
})
```

**To Keep Config File Simple**

```lua
config = function()
	require("plugin_name").setup("plugins.configs.onedark")
```

`plugins.configs` : Plugin directory which is `~/.config/lua/plugins/configs`
`onedark` : pointing to `onedark.lua`

NEVER EVER FORGET TO INCLUDE

```lua
status_ok, any_name = pcall(require, 'plugin_name')
if not status_ok then
	return
end
-- Plugin Configurations
```

Note: Make sure to run `PackerSync` every time you add or delete a plugin, quick way to do it without launching NeoVim is `nvim +PackerSync`

## Configure LSP

LSP (Language Server Protocol) is a plugin for the NeoVim text editor that allows it to communicate with a language server, which can provide advanced language-specific features such as code completion, diagnostics, and go-to-definition. LSP is an open protocol that is supported by a wide range of programming languages and development tools. By using an LSP plugin, NeoVim users can take advantage of these features without needing to switch to a different editor or use a separate plugin for each language they work with.

Configuring LSP was the toughest part for me, spent a week trying to figure out how LSP works and make it work with custom script and language support but at the end I found out about [lsp-zero.nvim](https://github.com/VonHeikemen/lsp-zero.nvim) which allows you to use LSP without any hassle. Just ctrl + v following snippet.

```lua
use({
	"VonHeikemen/lsp-zero.nvim",
	config = function()
		require("plugins.configs.lspzero")
	end,
	requires = {
		-- LSP Support
		{ "neovim/nvim-lspconfig" },
		{ "williamboman/mason.nvim" },
		{ "williamboman/mason-lspconfig.nvim" }
		-- Autocompletion
		{ "hrsh7th/nvim-cmp" },
		{ "hrsh7th/cmp-buffer" },
		{ "hrsh7th/cmp-path" },
		{ "saadparwaiz1/cmp_luasnip" },
		{ "hrsh7th/cmp-nvim-lsp" },
		{ "hrsh7th/cmp-nvim-lua" }
		-- Snippets [optional]
		{ "L3MON4D3/LuaSnip" },
		{ "rafamadriz/friendly-snippets" },
	},
})
```

It's dead simple isn't it? as you can follow I'm using [mason.nvim](https://github.com/williamboman/mason.nvim) which is modern and well maintained by same developer of [nvim-lsp-installer](https://github.com/williamboman/nvim-lsp-installer). With mason.nvim you can manage LSP, DAP (Debug Adapter Protocol), linter and formatted which is pretty cool and very useful.

## Lazy Loading

Neovim lazy loading is a feature that allows users to improve the start-up time of the editor, as well as reduce memory usage. The feature allows users to load plugins only when they are needed, rather than all at once when the editor starts up. This can be particularly useful for users who have a large number of plugins installed, as it can help to prevent the editor from becoming slow or unresponsive. Additionally, it can help to reduce the overall memory usage, and prevent background processes running, which can lead to improved battery life for laptops. However, this approach may not be recommended for users who frequently use all their plugins, as it could add some delay when accessing the functionality of a plugin.

And that's all about lazy loading and how it works, but you may ask is there any point or benefit of using it?

Straight forward answer,**nope**, not worth the time and lemme explain why. With 30 - 50 plugins installed startup time would be around 200 ms even on a 10 year old laptop, after lazy loading you might be able to bring it down to 50 but you literally can't tell the difference between 0.2 sec and 0.05 sec unless you're a chad. From a learning perspective it's kinda worth it, otherwise not believe me.

I used lazy loading, you can say kanged from NvChad but with the latest commits I'll remove it as I don't keep copied codes for long.

**Conclusion:** Don't waste your time on lazy loading plugins, honestly a headache and not worth it.

## Options/Settings

Vim options are less complicated way to customize NeoVim with inbuilt options which aren't enabled by default. There are three parameters available which you will be using to enable various options, `vim.opt`, `vim.g` & `vim.api`.

**Basic Method**

```lua
vim.opt.number = true          -- set numbered lines
vim.opt.wrap = true            -- display lines as one long line
vim.opt.cursorline = true      -- highlight the current line
```

**Pro Method**

```lua
local o = vim.opt
o.number = true
o.wrap = true
o.cursorline = true
```

**Legendary Method**

```lua
local options = {
	number = true,
	wrap = true,
	cursorline = true,
}

for x,y in pairs(options) do
	vim.opt[x] = y
end
```

**Similarly you can write functions for vim.g and vim.api**

```lua
for x,y in pairs(vim_g_options) do
	vim.g[x] = y
end
```

To learn about more inbuilt options checkout `:h options` or [NeoVim docs](https://neovim.io/doc/user/options.html)

## Keybindings

Settings keybindings not hard either

```lua
local function map(m,k,v)
	vim.api.nvim_set_keymap(m,k,v, {silent = true})
end
-- OR
local function map(m,k,v)
	vim.keymap.set(m,k,v, {silent = true})
end
```

m = mode [ n = normal mode, i = insert mode]
k = key
v = value

Some examples

```lua
map('n', '<C-n>', ':Neotree toggle reveal_force_cwd<CR>')
map ('n', '<C-m>', 'MarkdownPreview<CR>')
```

To know what `<CR>` is checkout `h: key-notation`

**Basic way to do it without using functions**

```lua
vim.api.nvim_set_keymap('n', '<C-n>', ':Neotree toggle reveal_force_cwd<CR>')
vim.api.nvim_set_keymap('n', '<C-m>', 'MarkdownPreview<CR>')
```

## Must Try Plugins

The listed plugins below come highly recommended; Also you can review my [list of plugins](https://github.com/ImRayy/dotfiles/blob/master/.config/nvim/lua/plugins/init.lua) I use.

- **[nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons)**
- **[vim-smoothie](https://github.com/psliwka/vim.smoothie)**
- **[lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)**
- **[neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim)**
- **[Comment.nvim](https://github.com/numToStr/Comment.nvim)**
- **[nvim-autopairs](https://github.com/windwp/nvim-autopairs)**
- **[telescope.nvim](https://github.com/nvim-telescope/telescope.nvim")**
