<script>
    import '@evidence-dev/tailwind/fonts.css';
    import '../app.css';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
    import { showQueries } from '@evidence-dev/component-utilities/stores';
    export let data;

    onMount(() => {
        showQueries.set(false);
    });

    const NAV = [
        { label: 'Home',        href: '/' },
        { label: 'Deep-Dive',   href: '/deep-dive', match: '/deep-dive' },
        { label: 'Methodology', href: '/methodology' },
        { label: 'Guardrails',  href: '/guardrails' },
    ];
</script>

<svelte:head>
    <link rel="stylesheet" href="{base}/custom.css"/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --nxt-deep: #211030;
            --nxt-purple: #6321a5;
            --nxt-tint: #802CD7;
            --nxt-pink: #ede5f8;
            --nxt-lavender: #b376f6;
            --text-mute: #6B7280;
            --line: #E5E7EB;
            --mono: 'JetBrains Mono', monospace;
            --font: 'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif;
        }
    </style>
</svelte:head>

<!-- Unified header matching main site -->
<header class="unified-header">
    <div class="header-inner">
        <img src="{base}/logo.png" alt="Maryland state crest" width="38" height="42" style="flex-shrink:0; display:block;" />
        <div style="display:flex; flex-direction:column; gap:0;">
            <span style="font-size:15px; font-weight:900; letter-spacing:-0.4px; color:var(--nxt-deep); font-family:Georgia,serif; line-height:1.1;">
                Maryland Budget Intel Tool
            </span>
            <span style="font-family:var(--mono); font-size:9px; color:var(--text-mute); letter-spacing:0.06em; line-height:1.2;">
                Fiscal Analysis Tool
            </span>
        </div>
        <nav style="display:flex; gap:2px; margin-left:24px;">
            {#each NAV as item}
                {@const isDeepDive = item.href === '/deep-dive'}
                {@const active = isDeepDive}
                <a
                    href={isDeepDive ? $page.url.pathname : item.href}
                    style="font-size:13px; font-weight:600; color:{active ? 'var(--nxt-deep)' : 'var(--text-mute)'}; text-decoration:none; padding:7px 14px; border-radius:8px; background:{active ? 'var(--nxt-pink)' : 'transparent'}; border-bottom:2px solid {active ? 'var(--nxt-purple)' : 'transparent'}; transition:all 0.18s; white-space:nowrap;"
                >
                    {item.label}
                </a>
            {/each}
        </nav>
        <div style="margin-left:auto; display:flex; align-items:center; gap:16px;">
        </div>
    </div>
    <!-- Maryland flag stripe -->
    <div style="display:flex; height:4px; width:100%;">
        <div style="flex:1; background:#CE1126;"></div>
        <div style="flex:1; background:#E8A317;"></div>
        <div style="flex:1; background:#000000;"></div>
        <div style="flex:1; background:#ffffff; border-bottom:1px solid var(--line);"></div>
    </div>
</header>

<EvidenceDefaultLayout
    {data}
    title="MBTSA"
    logo="{base}/maryland-logo.png"
    homePageName="Budget Office"
    neverShowQueries={true}
    maxWidth="1200px"
    hideHeader={true}
>
    <slot slot="content" />
    <div slot="footer">
        <footer class="unified-footer">
            <p style="font-family:var(--mono); font-size:9px; color:var(--text-mute); text-transform:uppercase; letter-spacing:0.5px;">
                Maryland Budget Intel Tool
            </p>
            <div style="font-family:var(--mono); font-size:9px; color:var(--text-mute); letter-spacing:0.05em; text-align:right;">
                Created by Aarushi Singh, Nadvi Haque, Priyanshu Gupta, and James Van Doorn
            </div>
        </footer>
    </div>
</EvidenceDefaultLayout>

<style>
    .unified-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--line);
        box-shadow: 0 1px 6px rgba(78,19,75,0.06);
    }
    .header-inner {
        display: flex;
        align-items: center;
        padding: 10px 28px;
        max-width: 1600px;
        margin: 0 auto;
        gap: 14px;
    }
    .unified-footer {
        background: #fff;
        border-top: 1px solid var(--line);
        padding: 20px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
    }

    /* Hide Evidence's own header since we provide our own */
    :global(header.evidence-header),
    :global([class*="EvidenceHeader"]),
    :global(nav.sidebar + header),
    :global(.layout > header:first-child) {
        display: none !important;
    }

    :global(h1), :global(h2), :global(h3), :global(h4) {
        font-family: 'IBM Plex Sans', sans-serif !important;
        color: #231F20 !important;
    }

    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top) {
        background: transparent !important;
        border: 1px solid #E8E0D8 !important;
        border-left: 4px solid #C8122C !important;
        border-radius: 12px !important;
        box-shadow: 0 2px 8px rgba(35, 31, 32, 0.05) !important;
        padding: 14px 16px !important;
        margin-right: 0 !important;
        min-width: 170px !important;
    }

    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n + 1)) {
        border-left-color: #C8122C !important;
    }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n + 2)) {
        border-left-color: #FFC838 !important;
    }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n + 3)) {
        border-left-color: #3B7DD8 !important;
    }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n)) {
        border-left-color: #2EAD6B !important;
    }

    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top > p.text-sm) {
        color: #6B5F57 !important;
        font-size: 0.78rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.02em !important;
        text-transform: uppercase !important;
        margin-bottom: 6px !important;
    }

    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top > div.relative.text-xl) {
        color: #231F20 !important;
        font-size: 1.75rem !important;
        font-weight: 700 !important;
        line-height: 1.15 !important;
    }

    :global(blockquote) {
        border-left: 4px solid #C8122C !important;
        background: #F5F0EB !important;
        padding: 14px 18px !important;
        border-radius: 0 6px 6px 0 !important;
        margin: 16px 0 !important;
    }

    :global(th) {
        border-bottom: 2px solid #C8122C !important;
    }
</style>
