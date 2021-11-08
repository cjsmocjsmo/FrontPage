<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/env';
    import { Image } from '@rodneylab/sveltekit-components';

    import placeholder from '$lib/circalthumb/placeholder.png';
  
    import meta from '$lib/circalthumb/circalAvatar.png?w=768&metadata';
    import srcsetJpeg from '$lib/circalthumb/circalAvatar.png?w=1536;1280;768;640&jpeg&srcset';
    import srcsetWebp from '$lib/circalthumb/circalAvatar.png?w=1536;1280;768;640&webp&srcset';
  
    // export let imageData;
  
    onMount(() => {
      if (browser) {
        document.lazyloadInstance.update();
      }
    });
  
    const { width, height, src } = meta;
    const sources = [
      { srcset: srcsetWebp, type: 'image/webp' },
      { srcset: srcsetJpeg, type: 'image/jpeg' },
    ];
  
    const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
    let alt = "fuckit"
  </script>
  
  <Image {alt} {width} {height} {src} {sources} {placeholder} {sizes} style={'border-radius:12px'} />