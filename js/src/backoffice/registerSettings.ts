import app from './app';

export default function () {
    app.extensionData.for('flamarkt-backoffice')
        .registerPermission({
            icon: 'fas fa-wrench',
            label: app.translator.trans('flamarkt-backoffice.backoffice.permissions.backoffice'),
            permission: 'backoffice', // Intentionally not namespaced
        }, 'moderate');
}
