import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'image-button',
    label: 'image-button-pre',
    component: 'sw-cms-el-image-button',
    configComponent: 'sw-cms-el-config-image-button',
    previewComponent: 'sw-cms-el-preview-image-button',
    defaultConfig: {
        media: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media'
            }
        },
        url: {
            source: 'static',
            value: 'http'
        },
        newTab: {
            source: 'static',
            value: false
        },
        buttonText: {
            source: 'static',
            value: 'text button'
        }
    }
});
