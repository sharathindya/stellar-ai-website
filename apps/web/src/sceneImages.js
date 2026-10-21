// Scene background images (public/images/scenes/). Replace a file or path to swap an image.
// Recommended: 2560x1440, WebP (or JPG), under 400 KB. Use null for a plain black scene.
// `shift`/`zoom` (optional) slide and enlarge the image, e.g. to move a subject away from the text.
// `align` = side the text sits on (choose the image's empty, dark side); `position` = CSS object-position.
const sceneImages = {
    hero:       { src: '/images/scenes/hero.webp',       align: 'left',  position: '70% 50%' },
    build:      { src: '/images/scenes/build.webp',      align: 'left',  position: '75% 50%' },
    how:        { src: null,                             align: 'left' },
    industries: { src: '/images/scenes/industries.webp', align: 'left',  position: '60% 60%' },
    roi:        { src: null,                             align: 'left' },
    careers:    { src: '/images/scenes/careers.webp',    align: 'left',  position: '70% 50%', shift: '26% 0', zoom: 1.5 },
    contact:    { src: '/images/scenes/contact.webp',    align: 'right', position: '25% 50%' },
};
export default sceneImages;
