<?php

namespace Flamarkt\Backoffice\Content;

use Flarum\Frontend\Document;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class FilterBackofficePayload
{
    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        // If the user is admin, passing Flarum's AdminPayload is fine
        // But if they are not, we are going to hide some values
        if (RequestUtil::getActor($request)->isAdmin()) {
            return;
        }

        if (!isset($document->payload['settings'])) {
            return;
        }

        // Hide all settings values, in particular to hide any secret/password
        $document->payload['settings'] = Arr::only($document->payload['settings'], [
            'extensions_enabled',
        ]);

        if (!isset($document->payload['extensions'])) {
            return;
        }

        $enabledExtensions = json_decode(Arr::get($document->payload['settings'], 'extensions_enabled'), true);

        if (!is_array($enabledExtensions)) {
            $enabledExtensions = [];
        }

        foreach ($document->payload['extensions'] as $key => $attributes) {
            // Hide disabled extensions to non-admins
            if (!in_array($key, $enabledExtensions)) {
                unset($document->payload['extensions'][$key]);
            }
        }
    }
}
