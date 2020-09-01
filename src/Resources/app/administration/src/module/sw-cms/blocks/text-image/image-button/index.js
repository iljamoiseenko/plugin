import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-button',
    label: 'iButton',
    category: 'text-image',
    component: 'sw-cms-block-image-button',
    previewComponent: 'sw-cms-preview-image-button',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        imageButton: 'image-button'
    }
});
