<?php

namespace Flamarkt\Backoffice;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    // It's important for the provider to run before we call the Frontend extender with our new frontend
    (new Extend\ServiceProvider())
        ->register(Provider\BackofficeServiceProvider::class)
        ->register(Provider\DatabaseServiceProvider::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->content(Content\FilterAdminPayload::class),

    (new Extend\Frontend('backoffice'))
        ->content(Content\FilterBackofficePayload::class)
        //->js(__DIR__ . '/js/dist/backoffice.js')
        ->css(__DIR__ . '/resources/less/backoffice.less')
        ->route('/dashboard', 'dashboard', Content\Dashboard::class)
        ->route('/users', 'users.index')
        ->route('/users/{id:[0-9]+|new}', 'users.show')
        ->route('/extension/{id:[a-zA-Z0-9_-]+}', 'extension'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Middleware('forum'))
        ->insertBefore('flarum.forum.route_resolver', Middleware\SubForumRouter::class),

    (new Extend\View())
        ->namespace('backoffice', __DIR__ . '/views'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumAttributes::class),

    (new Extend\Policy())
        ->globalPolicy(GlobalPolicy::class),
];
