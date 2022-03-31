<?php

namespace Flamarkt\Backoffice\Content;

use Flarum\Frontend\Document;
use Illuminate\Support\Arr;

class FilterAdminPayload
{
    public function __invoke(Document $document)
    {
        if (!isset($document->payload['extensions'])) {
            return;
        }

        foreach ($document->payload['extensions'] as $key => $attributes) {
            if (Arr::get($attributes, 'extra.flamarkt-backoffice.hideFromAdmin')) {
                unset($document->payload['extensions'][$key]);
            }
        }
    }
}
